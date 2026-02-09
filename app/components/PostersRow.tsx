"use client";
import Image from "next/image";


import { useEffect, useRef, useState } from "react";

const posterImages = [
  "/poster_images/poster1.webp",
  "/poster_images/poster2.webp",
  "/poster_images/poster3.webp",
  "/poster_images/poster4.webp",
  "/poster_images/poster5.webp",
];

export function PostersRow() {
  // For mobile slider
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % posterImages.length);
    }, 2000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="w-full">
      {/* Mobile: show one image at a time, auto slider */}
      <div className="block sm:hidden w-full flex justify-center items-center py-6">
        <div className="rounded-xl shadow-md overflow-hidden bg-white" style={{ width: 220, height: 295 }}>
          <Image
            src={posterImages[current]}
            alt={`Poster ${current + 1}`}
            width={220}
            height={295}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      {/* Desktop: show all images in a row */}
      <div className="hidden sm:flex flex-row flex-wrap justify-center gap-4 py-6 w-full">
        {posterImages.map((src, idx) => (
          <div
            key={src}
            className="rounded-xl shadow-md overflow-hidden bg-white"
            style={{ width: 220, height: 295 }}
          >
            <Image
              src={src}
              alt={`Poster ${idx + 1}`}
              width={220}
              height={295}
              className="object-cover w-full h-full"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
