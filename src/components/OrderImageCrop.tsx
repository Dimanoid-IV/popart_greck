"use client";

import { useCallback, useState } from "react";
import Cropper, { type Area } from "react-easy-crop";
import { ArrowRight, ZoomIn } from "lucide-react";
import type { ArtStyle } from "@/lib/generation-styles";
import { CROP_ASPECT, getCroppedImage } from "@/lib/crop-image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CropLabels = {
  title: string;
  desc: string;
  zoom: string;
  styleTitle: string;
  classicTitle: string;
  classicDesc: string;
  dreamTitle: string;
  dreamDesc: string;
  back: string;
  continue: string;
};

type OrderImageCropProps = {
  imageSrc: string;
  artStyle: ArtStyle;
  onArtStyleChange: (style: ArtStyle) => void;
  labels: CropLabels;
  onBack: () => void;
  onConfirm: (croppedImage: string) => void;
};

export default function OrderImageCrop({
  imageSrc,
  artStyle,
  onArtStyleChange,
  labels,
  onBack,
  onConfirm,
}: OrderImageCropProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const onCropComplete = useCallback((_: Area, pixels: Area) => {
    setCroppedAreaPixels(pixels);
  }, []);

  const handleContinue = async () => {
    if (!croppedAreaPixels) return;
    setIsSaving(true);
    try {
      const cropped = await getCroppedImage(imageSrc, croppedAreaPixels);
      onConfirm(cropped);
    } catch (e) {
      console.error(e);
      alert("Could not crop image. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="py-2">
      <h3 className="mb-2 text-center text-2xl font-semibold">{labels.title}</h3>
      <p className="mb-4 text-center text-sm text-muted-foreground">
        {labels.desc}
      </p>

      <div className="relative mx-auto mb-4 h-[min(70vw,420px)] w-full max-w-sm overflow-hidden rounded-xl bg-muted">
        <Cropper
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          aspect={CROP_ASPECT}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </div>

      <div className="mx-auto mb-6 max-w-sm">
        <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
          <ZoomIn className="size-4 shrink-0" />
          <span>{labels.zoom}</span>
        </div>
        <input
          type="range"
          min={1}
          max={3}
          step={0.05}
          value={zoom}
          onChange={(e) => setZoom(Number(e.target.value))}
          className="w-full accent-primary"
          aria-label={labels.zoom}
        />
      </div>

      <p className="mb-3 text-center text-sm font-semibold">{labels.styleTitle}</p>
      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {(
          [
            {
              id: "classic" as const,
              title: labels.classicTitle,
              desc: labels.classicDesc,
              swatch: "from-rose-100 via-amber-50 to-sky-100",
            },
            {
              id: "dream-art" as const,
              title: labels.dreamTitle,
              desc: labels.dreamDesc,
              swatch:
                "from-fuchsia-500 via-cyan-400 to-amber-400",
            },
          ] as const
        ).map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onArtStyleChange(option.id)}
            className={cn(
              "rounded-xl border-2 p-4 text-left transition-all",
              artStyle === option.id
                ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                : "border-border hover:border-primary/40"
            )}
          >
            <div
              className={cn(
                "mb-3 h-10 rounded-lg bg-gradient-to-r",
                option.swatch
              )}
            />
            <p className="font-semibold">{option.title}</p>
            <p className="mt-1 text-xs text-muted-foreground">{option.desc}</p>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <Button type="button" variant="ghost" onClick={onBack}>
          {labels.back}
        </Button>
        <Button
          type="button"
          className="gap-2"
          disabled={!croppedAreaPixels || isSaving}
          onClick={handleContinue}
        >
          {labels.continue}
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
