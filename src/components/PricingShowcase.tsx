"use client";

import Image from "next/image";

const CANVAS_SIZES = [
  { size: "45x30", price: "45", scale: 0.5 },
  { size: "60x40", price: "55", scale: 0.667 },
  { size: "80x54", price: "68", scale: 0.889 },
  { size: "90x60", price: "75", scale: 1 },
] as const;

/** Shared baseline height; each canvas scales proportionally (45→90 cm). */
const BASE_HEIGHT = "clamp(5.625rem, 17.25vw, 15rem)";

export default function PricingShowcase() {
  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border shadow-xl">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src="/divan.png"
          alt="Living room setup"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1024px"
        />

        <div className="absolute inset-x-0 bottom-[7%] top-[10%] flex items-end justify-center gap-[1.5%] px-[2%] sm:gap-2 md:gap-8 md:px-6">
          {CANVAS_SIZES.map((p, i) => (
            <div
              key={p.size}
              className="group flex min-w-0 flex-col items-center transition-transform hover:-translate-y-1"
            >
              <div
                className="relative aspect-[2/3] overflow-hidden rounded-sm border-2 border-white shadow-lg sm:border-4"
                style={{
                  height: `calc(${p.scale} * ${BASE_HEIGHT})`,
                }}
              >
                <Image
                  src={`/pic${i + 1}${i + 1}.JPG`}
                  alt={`Canvas ${p.size} cm`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 20vw, 140px"
                />
              </div>
              <div className="mt-1 shrink-0 rounded-md border border-border/50 bg-card/95 px-1.5 py-0.5 shadow-md backdrop-blur-sm sm:mt-2 sm:rounded-lg sm:px-2 sm:py-1">
                <p className="whitespace-nowrap text-[9px] font-medium leading-tight text-foreground sm:text-xs">
                  {p.size} cm
                </p>
                <p className="whitespace-nowrap text-[9px] font-bold leading-tight text-primary sm:text-xs">
                  €{p.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
