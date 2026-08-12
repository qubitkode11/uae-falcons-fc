import React from "react";
import Image from "next/image";

function getOpacity(progress: number, startIn: number, endIn: number, startOut: number, endOut: number) {
  if (progress <= startIn || progress >= endOut) return 0;
  if (progress > startIn && progress < endIn) return (progress - startIn) / (endIn - startIn);
  if (progress >= endIn && progress <= startOut) return 1;
  if (progress > startOut && progress < endOut) return 1 - (progress - startOut) / (endOut - startOut);
  return 0;
}

export default function InfoCards({ progress = 0 }: { progress?: number }) {
  // Title: 0.0 to 0.10
  const titleOpacity = getOpacity(progress, -1, 0, 0.04, 0.10);
  const titleVisible = titleOpacity > 0;

  // About Us Section: 0.11 to 0.26
  const aboutOpacity = getOpacity(progress, 0.11, 0.13, 0.24, 0.26);
  const aboutVisible = aboutOpacity > 0;

  // Join the Team Section: 0.28 to 0.44
  const joinOpacity = getOpacity(progress, 0.28, 0.30, 0.42, 0.44);
  const joinVisible = joinOpacity > 0;

  // Partnership Section: 0.46 to 0.62
  const partnershipOpacity = getOpacity(progress, 0.46, 0.48, 0.60, 0.62);
  const partnershipVisible = partnershipOpacity > 0;

  // Accommodation Section: 0.64 to 0.80
  const accommodationOpacity = getOpacity(progress, 0.64, 0.66, 0.78, 0.80);
  const accommodationVisible = accommodationOpacity > 0;

  // Coaches Section: 0.82 to 1.00
  const coachesOpacity = getOpacity(progress, 0.82, 0.84, 1.0, 1.1); // never fades out at the end
  const coachesVisible = coachesOpacity > 0;

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      
      {/* Title */}
      <div 
        className="absolute top-24 md:top-32 left-0 w-full flex justify-center z-20"
        style={{ opacity: titleOpacity, visibility: titleVisible ? 'visible' : 'hidden', transform: `translateY(${progress * 100}px)` }}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-white text-5xl md:text-8xl lg:text-9xl font-bold tracking-widest text-center uppercase drop-shadow-2xl px-4" style={{ fontFamily: "var(--font-milker)" }}>
            UAE Falcons FC
          </h1>
          <p className="text-white text-lg md:text-2xl font-bold tracking-widest text-center uppercase drop-shadow-lg mt-2 md:mt-4" style={{ fontFamily: "var(--font-milker)" }}>
            Football For Everyone
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-10 pointer-events-auto"
        style={{ opacity: aboutOpacity, visibility: aboutVisible ? 'visible' : 'hidden' }}
      >
        <div className="w-full max-w-6xl bg-black/60 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-10 shadow-2xl text-white mt-16 md:mt-0 max-h-[85vh] overflow-y-auto flex flex-col md:flex-row gap-8 text-left [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
           
           {/* Text Content */}
           <div className="flex-1 space-y-4 text-sm md:text-base text-zinc-200">
             <h2 className="text-3xl md:text-5xl uppercase mb-2 text-center md:text-left drop-shadow-md text-zinc-100" style={{ fontFamily: "var(--font-milker)" }}>
               Our Football Philosophy & Development Pathway
             </h2>
             
             <p>
               At <strong className="text-white">UAE Falcons Sport AC</strong>, we are bringing football back to its true meaning—where talent, passion, discipline, character, and hard work matter more than financial status. We strongly believe that no athlete should be denied an opportunity because of financial difficulties. Football is a sport for everyone, and every talented player deserves a fair chance to develop, compete, and succeed. Our mission is to create genuine opportunities for passionate footballers by building an environment focused on player growth, professional development, competitive exposure, and long-term progression.
             </p>
             <p>
               Our philosophy is built around <strong className="text-white">talent, commitment, discipline, hard work, character, and continuous development</strong>. Above all, we believe in creating clear pathways that allow players to reach their maximum potential both on and off the pitch. While we do not offer salaries or accommodation for our First Squad players, we provide valuable support that can contribute significantly to an athlete’s career, including professional guidance, structured player development, match exposure, career support, performance improvement, and opportunities to be scouted and recognized. Our goal is to help ambitious players maximize their potential and progress toward higher levels of competitive football.
             </p>
             <p>
               As part of our commitment to <strong className="text-white">Equal Opportunity Football</strong>, UAE Falcons Sport AC has established a dedicated development pathway for financially challenged athletes who are determined, committed, and willing to work hard. Selected players receive full training support, professional development opportunities, match experience, mentorship, and guidance, along with opportunities for promotion and greater exposure. Talented and deserving players may earn direct promotion to the First Squad based on their performance, commitment, and development.
             </p>
             <p>
               Our club structure is organized into different competitive and developmental levels to ensure that players have a clear route for progression. The senior structure includes the <strong className="text-white">First Squad, Squad A, Squad A(S), and Squad B</strong>, with each squad serving a specific competitive or developmental purpose. The <strong className="text-white">First Squad</strong> represents our highest competitive level, and selected First Squad players do not pay training or match fees. <strong className="text-white">Squad A</strong> serves as the primary support and development pathway for players who are preparing to transition into the First Squad. Promotion is based on performance level, development progress, tactical readiness, technical ability, commitment, and professionalism. <strong className="text-white">Squad B</strong> provides an additional development environment that helps prepare players for progression toward higher competitive levels within the club.
             </p>
             <p>
               Our <strong className="text-white">Academy & Youth Development</strong> program is currently under selection and formation. Through partnerships with multiple academies, we conduct trials to identify and develop talented young footballers. Selected youth players will enter into a player agreement, purchase the official club kit, and pay a registration fee only. Placement and applicable fees are determined according to factors such as playing position, age category, technical level, development requirements, and additional evaluation criteria.
             </p>
             <p>
               Our overall <strong className="text-white">Player Development Pathway</strong> is designed to provide ambitious footballers with a clear route for growth and progression: <strong className="text-yellow-400">Academy Squads → Squad B → Squad A → First Squad</strong>. At UAE Falcons Sport AC, every player has the opportunity to grow, improve, and earn their place through dedication, commitment, professionalism, and performance. We are committed to creating a football environment where opportunity is based on potential and effort, helping players take meaningful steps toward a stronger and more successful future in the game.
             </p>
           </div>

           {/* Certificate Image */}
           <div className="flex-1 flex flex-col items-center justify-start gap-4">
              <div className="sticky top-0 w-full max-w-sm">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                  <Image 
                    src="/uae%20falcons/about%20us/whatsapp-image-2026-05-15-at-23-04-05-high.webp" 
                    alt="UAE Falcons Certificate" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain bg-white/5 backdrop-blur-sm"
                  />
                </div>
                <p className="text-center mt-4 text-zinc-400 text-sm font-medium uppercase tracking-widest">Official Certificate</p>
              </div>
           </div>

        </div>
      </div>

      {/* Join the Team Section */}
      <div 
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-24 pointer-events-auto gap-4 md:gap-0"
        style={{ opacity: joinOpacity, visibility: joinVisible ? 'visible' : 'hidden' }}
      >
        <div className="w-full md:w-[45%] max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-10 shadow-2xl text-white mt-16 md:mt-0">
           <h2 className="text-2xl md:text-4xl uppercase mb-2 md:mb-4 drop-shadow-md text-zinc-100 break-words" style={{ fontFamily: "var(--font-milker)" }}>Join The Team</h2>
           <p className="text-sm md:text-base text-zinc-200 mb-4 md:mb-6 leading-relaxed">
             Ready to take your football journey to the next level? UAE Falcons International Football Club welcomes ambitious players who are passionate, committed, and ready to work hard. Join our football family, develop your skills, gain valuable experience, and earn your opportunity to progress through our pathway.
           </p>
           <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-black text-sm md:text-base font-bold uppercase rounded-full hover:scale-105 transition-transform w-full md:w-auto" style={{ fontFamily: 'var(--font-milker)' }}>Apply Now</button>
        </div>
        <div className="w-full md:w-[45%] max-w-md h-[250px] md:h-[500px] relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex-shrink-0">
          <Image src="/uae%20falcons/whatsapp-image-2026-05-15-at-18-12-47-high.webp" alt="Join UAE Falcons" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>

      {/* Partnership Section */}
      <div 
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-24 pointer-events-auto gap-4 md:gap-0"
        style={{ opacity: partnershipOpacity, visibility: partnershipVisible ? 'visible' : 'hidden' }}
      >
        <div className="w-full md:w-[45%] max-w-md h-[250px] md:h-[500px] relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl mt-16 md:mt-0 flex-shrink-0">
          <Image src="/uae%20falcons/red-white-yellow-modern-simple-football-match-poster-a3-portrait-high-j1shfq.webp" alt="Partnership with Al Hamdan FC" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="w-full md:w-[45%] max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-10 shadow-2xl text-white">
           <h2 className="text-2xl md:text-4xl uppercase mb-2 md:mb-4 drop-shadow-md text-zinc-100 leading-tight break-words" style={{ fontFamily: "var(--font-milker)" }}>Partnership with Al Hamdan FC</h2>
           <p className="text-sm md:text-base text-zinc-200 mb-4 md:mb-6 leading-relaxed">
             UAE Falcons International Football Club is proud to announce a strategic partnership with Al Hamdan FC, creating new opportunities for player development, talent identification, friendly matches, coaching collaboration, and community football initiatives. Together, both clubs are working to strengthen football development and build a brighter future for players and the wider football community.
           </p>
           <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-black text-sm md:text-base font-bold uppercase rounded-full hover:scale-105 transition-transform w-full md:w-auto" style={{ fontFamily: 'var(--font-milker)' }}>Apply Now</button>
        </div>
      </div>

      {/* Accommodation Section */}
      <div 
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-24 pointer-events-auto gap-4 md:gap-0"
        style={{ opacity: accommodationOpacity, visibility: accommodationVisible ? 'visible' : 'hidden' }}
      >
        <div className="w-full md:w-[45%] max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-10 shadow-2xl text-white mt-16 md:mt-0">
           <h2 className="text-2xl md:text-4xl uppercase mb-2 md:mb-4 drop-shadow-md text-zinc-100 break-words" style={{ fontFamily: "var(--font-milker)" }}>Accommodation</h2>
           <p className="text-sm md:text-base text-zinc-200 mb-4 md:mb-6 leading-relaxed">
             We understand that a comfortable environment matters to a player’s development. Our accommodation support is designed to provide players with a safe and suitable place to stay, helping them focus on training, performance, and their football journey.
           </p>
           <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-black text-sm md:text-base font-bold uppercase rounded-full hover:scale-105 transition-transform w-full md:w-auto" style={{ fontFamily: 'var(--font-milker)' }}>Apply Now</button>
        </div>
        <div className="w-full md:w-[45%] max-w-md h-[250px] md:h-[500px] relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex-shrink-0">
          <Image src="/uae%20falcons/whatsapp-image-2026-05-15-at-19-37-47-2-high-hnrkdf.webp" alt="Accommodation Support" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>

      {/* Our Coaches Section */}
      <div 
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-24 pointer-events-auto gap-4 md:gap-0"
        style={{ opacity: coachesOpacity, visibility: coachesVisible ? 'visible' : 'hidden' }}
      >
        <div className="w-full md:w-[45%] max-w-md h-[250px] md:h-[500px] relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl mt-16 md:mt-0 flex-shrink-0">
          <Image src="/uae%20falcons/a7400215-high-jusc6r.webp" alt="Our Coaches" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="w-full md:w-[45%] max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-10 shadow-2xl text-white">
           <h2 className="text-2xl md:text-4xl uppercase mb-2 md:mb-4 drop-shadow-md text-zinc-100 break-words" style={{ fontFamily: "var(--font-milker)" }}>Our Coaches</h2>
           <p className="text-sm md:text-base text-zinc-200 mb-4 md:mb-6 leading-relaxed">
             Behind every developing player is a dedicated coaching team. Our experienced coaches and support staff focus on technical excellence, tactical intelligence, physical development, and character, creating a professional and positive environment where players can grow both on and off the pitch.
           </p>
           <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-black text-sm md:text-base font-bold uppercase rounded-full hover:scale-105 transition-transform w-full md:w-auto" style={{ fontFamily: 'var(--font-milker)' }}>Coach With Us</button>
        </div>
      </div>

    </div>
  );
}
