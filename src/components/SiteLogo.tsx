import Image from "next/image";
import Link from "next/link";
import { SITE_LOGO, SITE_NAME } from "@/lib/seo/site-config";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  href?: string | null;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export default function SiteLogo({
  href = "/",
  className,
  imageClassName,
  priority = false,
}: SiteLogoProps) {
  const logo = (
    <Image
      src={SITE_LOGO}
      alt={SITE_NAME}
      width={256}
      height={256}
      priority={priority}
      className={cn("h-10 w-auto object-contain sm:h-11", imageClassName)}
    />
  );

  if (href == null) {
    return <span className={cn("inline-flex shrink-0", className)}>{logo}</span>;
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex shrink-0 transition-opacity hover:opacity-85",
        className
      )}
    >
      {logo}
    </Link>
  );
}
