import React from 'react';
import Image from 'next/image';

const sponsors = [
  { src: "/sponsers/WattsWebsite_ProjectImages_BarryPlant2-1.png", link: "https://www.barryplant.com.au/offices/northcote-preston/", alt: "Barry Plant" },
  { src: "/sponsers/arceri.png", link: "https://www.instagram.com/arceri_excavations/", alt: "Arceri Excavations" },
  { src: "/sponsers/dt38.png", link: "https://dt38.org/", alt: "DT38" },
  { src: "/sponsers/fred liuzzi.png", link: "https://thefredliuzzifoundation.org.au/", alt: "Fred Liuzzi Foundation" },
  { src: "/sponsers/memebers.png", link: "https://www.thememberslounge.com.au/", alt: "The Members Lounge" },
  { src: "/sponsers/MIE.png", link: "https://www.instagram.com/madeinevents/", alt: "Made In Events" },
  { src: "/sponsers/olymipic.png", link: "https://olympichotel.com.au/", alt: "Olympic Hotel" },
  { src: "/sponsers/perfection_panels.png", link: "https://perfectionpanels.com.au/", alt: "Perfection Panels" },
  { src: "/sponsers/rccparkville.png", link: "https://www.reggiocalabriaclub.com.au/", alt: "Reggio Calabria Club" },
];

export default function Sponsors() {
  return (
    <section className="w-full bg-zinc-950 py-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-6">
        <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-sm" style={{ fontFamily: "var(--font-milker)" }}>
          Our Proud Sponsors
        </h3>
      </div>
      
      {/* Marquee container - overflow-hidden fully removes any scrollbar */}
      <div className="relative flex overflow-hidden group w-full">
        {/* Gradient fades on left and right for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        
        {/* The scrolling track */}
        <div className="animate-marquee flex items-center w-max hover:[animation-play-state:paused] py-4">
          {[...sponsors, ...sponsors, ...sponsors].map((sponsor, idx) => (
            <a 
              key={idx} 
              href={sponsor.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-shrink-0 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 transform hover:scale-110 mx-8 md:mx-12 flex items-center justify-center w-32 md:w-44 h-16 md:h-20 relative"
            >
              <Image 
                src={sponsor.src} 
                alt={sponsor.alt} 
                fill
                sizes="(max-width: 768px) 150px, 200px"
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
