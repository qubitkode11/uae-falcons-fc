"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import InfoCards from "./InfoCards";

const FRAME_COUNT = 240;

const currentFrame = (index: number) =>
  `/hero_frames/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export default function ScrollHero({ children }: { children?: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          // Trigger initial render when all (or most) are loaded
          drawFrame(1);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);

    // Initial draw if first frame loads early
    if (loadedImages[0]) {
      loadedImages[0].onload = () => {
        setIsReady(true);
        drawFrame(1);
      };
    }
  }, []);

  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const img = images[frameIndex - 1];
    if (img && img.complete) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Draw image covering the canvas (object-fit: cover equivalent)
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || images.length === 0) return;
      const container = containerRef.current;
      const { top, height } = container.getBoundingClientRect();
      
      const maxScroll = height - window.innerHeight;
      const scrollPosition = -top;

      let scrollFraction = scrollPosition / maxScroll;
      if (scrollFraction < 0) scrollFraction = 0;
      if (scrollFraction > 1) scrollFraction = 1;

      setProgress(scrollFraction); // Update state

      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(scrollFraction * FRAME_COUNT)
      );

      requestAnimationFrame(() => drawFrame(frameIndex + 1));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[600vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Prioritized LCP Image for instant load */}
        <Image 
          src="/hero_frames/ezgif-frame-001.jpg" 
          alt="Hero Background" 
          fill 
          priority
          className={`object-cover transition-opacity duration-500 ${isReady ? 'opacity-0' : 'opacity-100'}`} 
        />
        <canvas ref={canvasRef} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`} />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        
        {/* Children (Content) */}
        <div className="absolute inset-0 z-10 flex flex-col pointer-events-auto">
          <InfoCards progress={progress} />
          {children}
        </div>
      </div>
    </div>
  );
}
