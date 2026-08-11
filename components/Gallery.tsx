"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";

const images = [
  "11040735-football-3797067_1920.jpg",
  "11040735-football-3828278_1920.jpg",
  "11040735-football-6660810_1920.jpg",
  "18240181.jpg",
  "carol_austin1-football-2340841_1920.jpg",
  "coach1.jpg",
  "coach2.jpg",
  "coach3.jpg",
  "dimitrisvetsikas1969-little-boys-5777155_1920.jpg",
  "fDSC_0414-scaled.jpg",
  "pexels-avillalonv-34741670.jpg",
  "pexels-franco-monsalvo-252430633-32266274.jpg",
  "pexels-laura-rincon-318039951-15789898.jpg",
  "pexels-laura-rincon-318039951-16538896.jpg",
  "pexels-laura-rincon-318039951-28260833.jpg",
  "testimonials_bg.jpg",
];

export default function Gallery() {
  const rotation = useMotionValue(0);
  const springRotation = useSpring(rotation, { stiffness: 80, damping: 20 });
  const [radius, setRadius] = useState(750);
  const [cardWidth, setCardWidth] = useState(220);
  const [cardHeight, setCardHeight] = useState(320);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);
  const currentRotation = useRef(0);
  const dragDistance = useRef(0);

  const imageCount = images.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(380);
        setCardWidth(110);
        setCardHeight(160);
      } else if (window.innerWidth < 1024) {
        setRadius(550);
        setCardWidth(160);
        setCardHeight(240);
      } else {
        setRadius(750);
        setCardWidth(220);
        setCardHeight(320);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track the active card based on rotation
  useMotionValueEvent(rotation, "change", (latestRotation) => {
    let index = Math.round((-latestRotation / 360) * imageCount) % imageCount;
    if (index < 0) index += imageCount;
    setActiveIndex(index);
  });

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    currentRotation.current = rotation.get();
    dragDistance.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - startX.current;
    dragDistance.current = Math.abs(delta);
    rotation.set(currentRotation.current + delta * 0.4);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerEnter = () => {
    isHovered.current = true;
  };

  const handlePointerLeave = () => {
    isHovered.current = false;
    isDragging.current = false;
  };

  // Auto-rotate when not dragging
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      if (!isDragging.current && !isHovered.current && !selectedImage) {
        const delta = time - lastTime;
        rotation.set(rotation.get() - delta * 0.02);
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [rotation, selectedImage]);

  return (
    <section className="relative w-full h-[650px] min-h-[550px] flex flex-col items-center justify-center overflow-hidden bg-black py-10">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 pointer-events-none"
      >
        <source src="/football_edit.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-80" />

      <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-10 drop-shadow-2xl tracking-tighter uppercase text-center pointer-events-none">
        Gallery
      </h2>

      {/* 3D Scene Container */}
      <div 
        className="relative z-10 flex items-center justify-center w-full touch-none my-auto cursor-grab active:cursor-grabbing"
        style={{ 
          height: cardHeight,
          transform: "perspective(1500px) rotateX(-10deg)",
          transformStyle: "preserve-3d" 
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerCancel={handlePointerLeave}
      >
        {/* Stationary Active Frame */}
        <div
          className="absolute border-4 border-white/60 rounded-3xl pointer-events-none shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
          style={{
            width: cardWidth + 24,
            height: cardHeight + 24,
            transform: `translateZ(20px)`,
          }}
        />

        <motion.div
          className="relative flex items-center justify-center"
          style={{
            rotateY: springRotation,
            z: -radius, // Pushes the center back so the front card stays exactly in place on the screen
            transformStyle: "preserve-3d",
            width: cardWidth,
            height: cardHeight,
          }}
        >
          {images.map((img, index) => {
            const angle = (index / imageCount) * 360;
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`absolute overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  isActive 
                    ? "border-white bg-black/80 opacity-100 shadow-[0_0_40px_rgba(255,255,255,0.5)] cursor-pointer" 
                    : "border-white/20 bg-black/40 opacity-40 cursor-grab"
                }`}
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "visible",
                }}
                onPointerUp={(e) => {
                  if (isActive && dragDistance.current < 5) {
                    setSelectedImage(img);
                  }
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/falcon/${img}`}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  style={{ opacity: isActive ? 1 : 0.7 }}
                  draggable={false}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
      
      <p className="relative z-10 text-white/50 mt-10 text-xs md:text-sm tracking-widest uppercase animate-pulse pointer-events-none">
        &larr; Swipe to explore &rarr;
      </p>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 cursor-default"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
            <button 
              className="absolute top-[-40px] right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={`/falcon/${selectedImage}`} 
              alt="Full size gallery view" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.1)]"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </section>
  );
}
