"use client";

import { Truck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

export default function DeliveryInfo() {
  const { t } = useLanguage();

  return (
    <section id="delivery" className="border-y border-border/60 bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 flex justify-center">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Truck className="size-6" aria-hidden />
            </span>
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            {t.delivery.sectionTitle}
          </h2>
          <p className="text-muted-foreground">{t.delivery.sectionDesc}</p>
        </div>

        <Card className="mx-auto max-w-3xl border-border/80 shadow-sm">
          <CardContent className="space-y-5 p-6 md:p-8">
            {t.delivery.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
