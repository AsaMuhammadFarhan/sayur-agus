import { ResponsiveValue, Skeleton, SkeletonProps } from "@chakra-ui/react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ImageWithSkeleton({
  src,
  alt,
  height,
  width,
  objectFit,
  quality,
  priority,
  ...rest
}: Omit<SkeletonProps, "position" | "h" | "w" | "height" | "width" | "isLoaded" | "objectFit"> & {
  src: string;
  alt: string;
  objectFit?: "fill" | "none" | "contain" | "cover" | "scale-down";
  height: ResponsiveValue<string | number>;
  width: ResponsiveValue<string | number>;
  quality?: number;
  priority?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const sizes = Math.max(
    ref.current?.clientHeight ?? 0,
    ref.current?.clientWidth ?? 0,
  );

  return (
    <Skeleton
      overflow={rest.overflow ?? "hidden"}
      flexShrink={rest.flexShrink ?? 0}
      isLoaded={isLoaded}
      position="relative"
      h={height}
      ref={ref}
      w={width}
      {...rest}
    >
      <Image
        onLoadingComplete={() => setIsLoaded(true)}
        sizes={sizes.toString()}
        style={{ objectFit }}
        priority={priority}
        quality={quality}
        alt={alt}
        src={src}
        fill
      />
    </Skeleton>
  )
};