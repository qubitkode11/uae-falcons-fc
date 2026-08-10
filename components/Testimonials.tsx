"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I love playing for Northern Falcons Football Club. The club has a great atmosphere and the coaches are always pushing us to improve. I have made some great friends here too!",
      author: "Coach Mark",
      role: "Masters Team Coach"
    },
    {
      quote: "Northern Falcons Football Club has been an amazing experience for my son. The coaches are knowledgeable and supportive, and the club has a great sense of community.",
      author: "Tom",
      role: "Parent of a Junior Player"
    },
    {
      quote: "I have been playing for Northern Falcons Football Club for 3 years now and have seen a huge improvement in my game. The coaching staff is top-notch and always pushes me to be my best.",
      author: "Jessica",
      role: "AAA Team Player"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden border-t border-white/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/falcon/testimonials_bg.jpg" 
          alt="Northern Falcons Community" 
          fill 
          className="object-cover object-center"
        />
        {/* Dark overlay to ensure text remains highly readable */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-wider uppercase drop-shadow-md" style={{ fontFamily: "var(--font-milker)" }}>
            What Our Community Says
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mt-6 opacity-50 rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white/5 backdrop-blur-md border border-white/20 p-8 md:p-16 rounded-3xl shadow-2xl min-h-[350px] flex items-center justify-center">
          
          {/* Quote Icon */}
          <svg className="absolute top-8 left-8 md:top-12 md:left-12 w-16 h-16 md:w-24 md:h-24 text-white/5 pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
          </svg>

          {/* Testimonial Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-in" key={currentIndex}>
            <p className="text-white text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 md:mb-10 italic drop-shadow-sm">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex flex-col items-center justify-center">
              <span className="text-white font-bold tracking-widest uppercase text-base md:text-lg mb-1" style={{ fontFamily: "var(--font-milker)" }}>
                {testimonials[currentIndex].author}
              </span>
              <span className="text-zinc-400 text-sm md:text-base font-medium">
                {testimonials[currentIndex].role}
              </span>
            </div>
          </div>

          {/* Controls - Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-white hover:text-black transition-colors border border-white/20"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-white hover:text-black transition-colors border border-white/20"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Controls - Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
