import type { Metadata } from "next";
import {
  LOCALE_ALTERNATES,
  SITE_LOGO,
  SITE_NAME,
  SITE_ORIGIN,
} from "./site-config";

const ogImage = "/og-image.jpg";

/**
 * Root layout metadata: canonical, OG, Twitter, hreflang hints via blog hubs.
 * Homepage remains single URL; localized blog indexes serve as language alternates.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: `${SITE_NAME} - Custom Digital Painting Portraits`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Turn your photos into stunning digital art portraits. Unique backgrounds, high-quality canvas prints, and fast delivery across Greece.",
  keywords: [
    "artcanvas",
    "digital painting",
    "custom portrait",
    "canvas print",
    "gift idea",
    "photo to art",
    "Greece",
    "Athens",
  ],
  applicationName: SITE_NAME,
  icons: {
    icon: SITE_LOGO,
    apple: SITE_LOGO,
  },
  alternates: {
    canonical: SITE_ORIGIN,
    languages: {
      "x-default": LOCALE_ALTERNATES.el,
      el: LOCALE_ALTERNATES.el,
      en: LOCALE_ALTERNATES.en,
    },
  },
  openGraph: {
    title: `${SITE_NAME} - Your Photos, Pure Art`,
    description:
      "Create stunning digital painting portraits from your photos in seconds.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Custom Digital Painting Portraits`,
    description: "Turn your photos into stunning digital art portraits.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
