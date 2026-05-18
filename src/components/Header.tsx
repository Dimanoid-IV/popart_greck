"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { LANGUAGE_LABELS, Language } from "@/lib/translations";
import { SITE_NAME } from "@/lib/seo/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinkClass =
  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            A
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#how-it-works" className={navLinkClass}>
            {t.nav.howItWorks}
          </Link>
          <Link href="#pricing" className={navLinkClass}>
            {t.nav.pricing}
          </Link>
          <Link href="#gallery" className={navLinkClass}>
            {t.nav.gallery}
          </Link>
          <Link href={`/${language}/blog`} className={navLinkClass}>
            {t.nav.blog}
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            role="group"
            aria-label="Language"
            className="flex rounded-lg border border-border bg-muted/50 p-0.5"
          >
            {(["el", "en"] as Language[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs font-semibold transition-all",
                  language === lang
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {LANGUAGE_LABELS[lang]}
              </button>
            ))}
          </div>

          <Button
            size="sm"
            className="hidden sm:inline-flex"
            render={<Link href="#order-now" />}
          >
            {t.nav.orderNow}
          </Button>
        </div>
      </div>
    </header>
  );
}
