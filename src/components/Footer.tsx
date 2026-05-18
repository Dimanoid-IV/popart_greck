"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import { SITE_NAME } from "@/lib/seo/site-config";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                A
              </span>
              <span className="text-lg font-semibold">{SITE_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t.footer.desc}
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              {t.footer.contact}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:info@artcanvas.gr"
                  className="transition-colors hover:text-primary"
                >
                  info@artcanvas.gr
                </a>
              </li>
              <li>{t.footer.location}</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href={`/${language}/blog`}
                  className="transition-colors hover:text-primary"
                >
                  {t.footer.blog}
                </Link>
              </li>
              <li>
                <Link
                  href="#order-now"
                  className="transition-colors hover:text-primary"
                >
                  {t.nav.orderNow}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t.footer.terms}</li>
              <li>{t.footer.privacy}</li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_NAME}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
