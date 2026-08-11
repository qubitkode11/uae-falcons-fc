"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function FloatingJoin() {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToJoin = () => {
    // Scroll to the How to Join section
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col items-end group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pop-up Banner */}
      <div 
        className={`absolute bottom-full right-0 mb-4 transition-all duration-500 origin-bottom-right ${
          isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl text-center w-64 md:w-72 relative overflow-hidden group-hover:animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-black/50 mix-blend-overlay pointer-events-none"></div>
          
          <h4 className="text-white text-3xl font-bold uppercase tracking-widest mb-3 drop-shadow-md relative z-10" style={{ fontFamily: "var(--font-milker)" }}>
            Ready to Play?
          </h4>
          
          <p className="text-zinc-200 text-sm md:text-base mb-6 font-medium relative z-10 leading-relaxed">
            Join the Falcons family today and start your football journey!
          </p>
          
          <button 
            onClick={scrollToJoin}
            className="relative z-10 inline-block bg-white text-black font-bold px-6 py-3 rounded-xl uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.4)] w-full"
            style={{ fontFamily: "var(--font-milker)" }}
          >
            Register Now
          </button>
        </div>
      </div>

      {/* Floating Button Illustration */}
      <button 
        onClick={scrollToJoin}
        className="relative w-24 h-24 md:w-32 md:h-32 animate-float hover:animate-none transition-transform hover:scale-110 drop-shadow-[0_10px_25px_rgba(255,255,255,0.15)]"
      >
        <Image 
          src="/floating_botton.png" 
          alt="Join Us" 
          fill
          className="object-contain"
        />
      </button>
    </div>
  );
}
