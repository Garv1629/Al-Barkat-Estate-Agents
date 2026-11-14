import React, { useEffect, useState } from "react";
import { Building2 } from "lucide-react";
import { buildImageSrcSet, optimizeImageUrl } from "../utils/propertyLogic";

interface ResilientImageProps {
  src: string;
  alt: string;
  width?: number;
  quality?: number;
  sizes?: string;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  width = 1200,
  quality = 80,
  sizes = "(max-width: 768px) 100vw, 1200px",
  className = "w-full h-full object-cover",
  loading = "eager",
  fetchPriority,
}) => {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setFailed(false);
    setLoaded(false);
  }, [src]);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full bg-gradient-to-br from-[#2B2622] via-[#1B1917] to-[#111111] flex flex-col items-center justify-center p-6 text-center text-[#F2EED8]/70"
      >
        <Building2 className="w-8 h-8 text-[#E09290] mb-2" />
        <span className="text-xs font-mono uppercase tracking-widest">
          {alt}
        </span>
      </div>
    );
  }

  const optimizedSrc = optimizeImageUrl(src, width, quality);
  const srcSet = buildImageSrcSet(src);

  return (
    <img
      src={optimizedSrc}
      srcSet={srcSet || undefined}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      referrerPolicy="no-referrer"
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
      className={`${className} transition-opacity duration-500 ease-out ${
        loaded ? "opacity-100" : "opacity-90"
      }`}
    />
  );
};
