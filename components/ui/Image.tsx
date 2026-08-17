import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

type AspectRatio = "video" | "square" | "portrait" | "wide";

const aspectClasses: Record<AspectRatio, string> = {
  video: "aspect-video", // 16:9 — article/tool cards
  square: "aspect-square", // avatars, icons
  portrait: "aspect-[3/4]", // editorial imagery
  wide: "aspect-[21/9]", // hero banners
};

export interface ImageProps extends Omit<NextImageProps, "alt"> {
  /** Required — PNJunction never ships a decorative image without alt text. */
  alt: string;
  aspect?: AspectRatio;
  /** Enables the subtle zoom-on-hover used inside interactive Cards. */
  zoomOnHover?: boolean;
  rounded?: "none" | "sm" | "md" | "lg";
  containerClassName?: string;
}

const roundedClasses: Record<NonNullable<ImageProps["rounded"]>, string> = {
  none: "rounded-none",
  sm: "rounded-card",
  md: "rounded-card-md",
  lg: "rounded-card-lg",
};

/**
 * Standardized image treatment: fixed aspect ratio (no layout shift),
 * object-cover fill, optional rounded corners matching the card
 * geometry scale, and an optional restrained hover zoom. The actual
 * image source is swapped freely later without touching consumers.
 */
export function Image({
  alt,
  aspect = "video",
  zoomOnHover = false,
  rounded = "md",
  className,
  containerClassName,
  fill = true,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  ...props
}: ImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-surface-sunken",
        aspectClasses[aspect],
        roundedClasses[rounded],
        containerClassName
      )}
    >
      <NextImage
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={cn(
          "object-cover",
          zoomOnHover &&
            "transition-transform duration-slower ease-premium group-hover:scale-[1.04]",
          className
        )}
        {...props}
      />
    </div>
  );
}
