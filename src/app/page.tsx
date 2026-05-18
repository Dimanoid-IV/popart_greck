"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrderFlow from "@/components/OrderFlow";
import DeliveryInfo from "@/components/DeliveryInfo";
import PricingShowcase from "@/components/PricingShowcase";
import Image from "next/image";
import { Zap, Palette, Heart } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Zap className="size-7 text-amber-600" />,
      title: t.features.feature1.title,
      desc: t.features.feature1.desc,
    },
    {
      icon: <Palette className="size-7 text-primary" />,
      title: t.features.feature2.title,
      desc: t.features.feature2.desc,
    },
    {
      icon: <Heart className="size-7 text-rose-600" />,
      title: t.features.feature3.title,
      desc: t.features.feature3.desc,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-grow">
        <section
          id="gallery"
          className="relative overflow-hidden bg-gradient-to-b from-muted/80 via-background to-background py-24 md:py-32"
        >
          <div className="absolute inset-0 z-0 flex items-center overflow-hidden opacity-40 transition-opacity duration-700 hover:opacity-70">
            <div className="animate-marquee flex gap-6 py-10 md:gap-8">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex gap-6 md:gap-8">
                  {["/pic1.jpg", "/pic2.jpg", "/pic3.jpg", "/pic4.jpg"].map(
                    (src, i) => (
                      <div
                        key={`${groupIndex}-${i}`}
                        className="relative h-[380px] w-[260px] flex-shrink-0 rotate-1 overflow-hidden rounded-2xl border border-border/50 shadow-xl md:h-[420px] md:w-[280px]"
                      >
                        <Image
                          src={src}
                          alt={`Art example ${i + 1}`}
                          fill
                          sizes="280px"
                          className="object-cover"
                          priority={groupIndex === 0 && i === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="animate-blob absolute -left-20 top-1/4 size-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="animation-delay-2000 animate-blob absolute -right-20 top-1/3 size-72 rounded-full bg-amber-200/40 blur-3xl" />
            <div className="animation-delay-4000 animate-blob absolute -bottom-20 left-1/3 size-72 rounded-full bg-rose-200/30 blur-3xl" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pointer-events-auto mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-6 px-3 py-1">
                ArtCanvas.gr · Greece
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.08]">
                {t.hero.title1}{" "}
                <span className="text-primary">{t.hero.title2}</span>
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {t.hero.description}
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 rounded-full px-8 text-base"
                  render={<Link href="#order-now" />}
                >
                  {t.hero.ctaPrimary}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-border bg-background/80 px-8 text-base backdrop-blur-sm"
                  render={<Link href="#how-it-works" />}
                >
                  {t.hero.ctaSecondary}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
                {t.features.sectionTitle}
              </h2>
              <p className="text-muted-foreground">{t.features.sectionDesc}</p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:gap-8">
              {features.map((item, i) => (
                <Card
                  key={i}
                  className="border-border/80 bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  <CardContent className="flex flex-col items-center pt-8 text-center">
                    <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-muted">
                      {item.icon}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-muted/40 py-20 md:py-28">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
              {t.nav.pricing}
            </h2>

            <PricingShowcase />
          </div>
        </section>

        <DeliveryInfo />

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
                {t.order.sectionTitle}
              </h2>
              <p className="text-muted-foreground">{t.order.sectionDesc}</p>
            </div>
            <OrderFlow />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
