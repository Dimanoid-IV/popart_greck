"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Upload, Check, Loader2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const SIZES = [
  { label: "45x30 cm", price: 45 },
  { label: "60x40 cm", price: 55 },
  { label: "80x54 cm", price: 68 },
  { label: "90x60 cm", price: 75 },
];

type Step = "upload" | "size" | "processing" | "selection" | "checkout";

const STEP_ORDER: Step[] = [
  "upload",
  "size",
  "processing",
  "selection",
  "checkout",
];

function stepProgress(step: Step): number {
  const i = STEP_ORDER.indexOf(step);
  return ((i + 1) / STEP_ORDER.length) * 100;
}

export default function OrderFlow() {
  const { t } = useLanguage();
  const [step, setStep] = useState<Step>("upload");

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);
  const [aiResults, setAiResults] = useState<string[]>([]);
  const [selectedResult, setSelectedResult] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const stepLabels = [
    t.order.steps.upload,
    t.order.steps.size,
    t.order.steps.process,
    t.order.steps.select,
    t.order.steps.pay,
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setStep("size");
      };
      reader.readAsDataURL(file);
    }
  };

  const startProcessing = async () => {
    if (!selectedImage) return;

    setStep("processing");
    setIsProcessing(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: selectedImage }),
      });

      const data = await response.json();

      if (data.taskIds) {
        const results = await Promise.all(
          data.taskIds.map((id: string) => pollTask(id))
        );
        setAiResults(results);
        setStep("selection");
      } else {
        throw new Error(data.error || "Failed to start generation");
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error(error);
      alert("Error: " + message);
      setStep("size");
    } finally {
      setIsProcessing(false);
    }
  };

  const pollTask = async (taskId: string): Promise<string> => {
    const startTime = Date.now();
    const maxWaitTime = 300000;

    while (Date.now() - startTime < maxWaitTime) {
      try {
        const response = await fetch(`/api/generate/status?taskId=${taskId}`);
        const data = await response.json();

        if (data.code && data.code !== 200) {
          throw new Error(data.msg || `API Error ${data.code}`);
        }

        const successFlag =
          data.successFlag !== undefined
            ? data.successFlag
            : data.data?.successFlag;
        const resultResponse = data.response || data.data?.response;

        if (successFlag === 1) {
          if (!resultResponse?.resultImageUrl) {
            throw new Error("Result image URL missing in API response");
          }
          return resultResponse.resultImageUrl;
        } else if (successFlag === 2 || successFlag === 3) {
          throw new Error(
            data.errorMessage || data.data?.errorMessage || "Generation failed"
          );
        }
      } catch (e) {
        console.error(`Poll error for ${taskId}:`, e);
      }

      await new Promise((r) => setTimeout(r, 5000));
    }
    throw new Error("Timeout waiting for results (5 minutes exceeded)");
  };

  const [email, setEmail] = useState("");
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    postalCode: "",
    phone: "",
  });

  const handleCheckout = async () => {
    if (
      !email ||
      !shippingInfo.fullName ||
      !shippingInfo.address ||
      !shippingInfo.postalCode ||
      !shippingInfo.phone ||
      selectedResult === null
    ) {
      alert("Please fill in all contact and shipping information.");
      return;
    }

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          size: selectedSize.label,
          price: selectedSize.price,
          email,
          imageUrl: aiResults[selectedResult],
          shippingInfo,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Failed to create checkout session");
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error(error);
      alert("Checkout failed: " + message);
    }
  };

  const currentStepIndex = STEP_ORDER.indexOf(step);

  return (
    <Card
      id="order-now"
      className="mx-auto w-full max-w-4xl border-border/80 shadow-lg"
    >
      <CardContent className="p-6 md:p-8">
        <div className="mb-8 space-y-4">
          <Progress value={stepProgress(step)} className="h-2" />
          <div className="flex justify-between gap-1">
            {stepLabels.map((label, i) => {
              const isActive = i <= currentStepIndex;
              const isComplete = i < currentStepIndex;
              return (
                <div
                  key={label}
                  className="flex min-w-0 flex-1 flex-col items-center"
                >
                  <div
                    className={cn(
                      "mb-2 flex size-8 items-center justify-center rounded-full text-xs font-semibold transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {isComplete ? (
                      <Check className="size-4" />
                    ) : (
                      i + 1
                    )}
                  </div>
                  <span
                    className={cn(
                      "hidden text-center text-[10px] font-medium uppercase tracking-wide sm:block",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {step === "upload" && (
          <div className="py-6 text-center">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="group w-full rounded-xl border-2 border-dashed border-border bg-muted/30 p-10 transition-colors hover:border-primary/50 hover:bg-muted/50"
            >
              <Upload className="mx-auto mb-4 size-12 text-muted-foreground transition-colors group-hover:text-primary" />
              <h3 className="mb-2 text-xl font-semibold">
                {t.order.upload.title}
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                {t.order.upload.desc}
              </p>
              <Button type="button" className="rounded-full px-8">
                {t.order.upload.button}
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                {t.order.upload.footer}
              </p>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        )}

        {step === "size" && (
          <div className="py-4">
            <h3 className="mb-6 text-center text-2xl font-semibold">
              {t.order.size.title}
            </h3>
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SIZES.map((size) => (
                <button
                  key={size.label}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "flex items-center justify-between rounded-xl border-2 p-5 text-left transition-all",
                    selectedSize.label === size.label
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/40"
                  )}
                >
                <div>
                  <div className="font-semibold">{size.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {t.order.size.premium}
                  </div>
                </div>
                <span className="text-2xl font-bold text-primary">
                  €{size.price}
                </span>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setStep("upload")}
              >
                {t.order.size.back}
              </Button>
              <Button type="button" onClick={startProcessing} className="gap-2">
                {t.order.size.button}
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        )}

        {step === "processing" && (
          <div className="py-16 text-center">
            <Loader2 className="mx-auto mb-6 size-16 animate-spin text-primary" />
            <h3 className="mb-2 text-2xl font-semibold">
              {t.order.processing.title}
            </h3>
            <p className="text-muted-foreground">{t.order.processing.desc}</p>
          </div>
        )}

        {step === "selection" && (
          <div className="py-4">
            <h3 className="mb-2 text-center text-2xl font-semibold">
              {t.order.selection.title}
            </h3>
            <p className="mb-8 text-center text-muted-foreground">
              {t.order.selection.desc}
            </p>
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {aiResults.map((url, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedResult(i)}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border-4 text-left transition-all",
                    selectedResult === i
                      ? "border-primary ring-4 ring-primary/20"
                      : "border-transparent hover:border-primary/30"
                  )}
                >
                  <img
                    src={url}
                    alt={`Result ${i + 1}`}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-card/90 p-2 shadow-md backdrop-blur-sm">
                    {selectedResult === i ? (
                      <Check className="size-5 text-primary" />
                    ) : (
                      <div className="size-5" />
                    )}
                  </div>
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                type="button"
                size="lg"
                disabled={selectedResult === null}
                onClick={() => setStep("checkout")}
                className="rounded-full px-10"
              >
                {t.order.selection.button}
              </Button>
            </div>
          </div>
        )}

        {step === "checkout" && (
          <div className="py-4">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <CardTitle className="mb-4 text-2xl">
                  {t.order.checkout.title}
                </CardTitle>
                <Card className="bg-muted/40">
                  <CardContent className="space-y-3 pt-6">
                    <div className="flex justify-between border-b border-border pb-3 text-sm">
                      <span className="text-muted-foreground">
                        {t.order.checkout.product}
                      </span>
                      <span className="font-medium">
                        {t.order.checkout.productName}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-3 text-sm">
                      <span className="text-muted-foreground">
                        {t.order.checkout.size}
                      </span>
                      <span className="font-medium">{selectedSize.label}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold">
                      <span>{t.order.checkout.total}</span>
                      <span className="text-primary">
                        €{selectedSize.price}
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {t.order.checkout.notification}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t.order.checkout.deliveryNote}{" "}
                  <Link
                    href="#delivery"
                    className="font-medium text-primary hover:underline"
                  >
                    {t.order.checkout.deliveryLink}
                  </Link>
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">
                  {t.order.checkout.shippingTitle}
                </h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2 sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">{t.order.checkout.fullName}</Label>
                      <Input
                        id="fullName"
                        value={shippingInfo.fullName}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            fullName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.order.checkout.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">{t.order.checkout.address}</Label>
                  <Input
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">
                      {t.order.checkout.postalCode}
                    </Label>
                    <Input
                      id="postalCode"
                      value={shippingInfo.postalCode}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          postalCode: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.order.checkout.phone}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={shippingInfo.phone}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <Button
                  type="button"
                  size="lg"
                  className="w-full"
                  onClick={handleCheckout}
                >
                  {t.order.checkout.payButton}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  {t.order.checkout.secure}
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              className="mt-6"
              onClick={() => setStep("selection")}
            >
              {t.order.checkout.back}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
