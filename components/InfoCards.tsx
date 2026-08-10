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

  // About Us Section: 0.11 to 0.23
  const aboutOpacity = getOpacity(progress, 0.11, 0.13, 0.22, 0.24);
  const aboutVisible = aboutOpacity > 0;

  // Girls Section: 0.25 to 0.38
  const girlsOpacity = getOpacity(progress, 0.25, 0.27, 0.36, 0.38);
  const girlsVisible = girlsOpacity > 0;

  // Boys Section: 0.39 to 0.52
  const boysOpacity = getOpacity(progress, 0.39, 0.41, 0.50, 0.52);
  const boysVisible = boysOpacity > 0;

  // Masters Section: 0.53 to 0.66
  const mastersOpacity = getOpacity(progress, 0.53, 0.55, 0.64, 0.66);
  const mastersVisible = mastersOpacity > 0;

  // AAA Section: 0.67 to 0.80
  const aaaOpacity = getOpacity(progress, 0.67, 0.69, 0.78, 0.80);
  const aaaVisible = aaaOpacity > 0;

  // Coaches Section: 0.81 to 1.00
  const coachesOpacity = getOpacity(progress, 0.81, 0.83, 1.0, 1.1); // never fades out at the end
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
            Northern Falcons FC
          </h1>
          <p className="text-white text-lg md:text-2xl font-bold tracking-widest text-center uppercase drop-shadow-lg mt-2 md:mt-4" style={{ fontFamily: "var(--font-milker)" }}>
            Football For Everyone
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-24 pointer-events-auto"
        style={{ opacity: aboutOpacity, visibility: aboutVisible ? 'visible' : 'hidden' }}
      >
        <div className="w-full max-w-4xl bg-black/40 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-14 shadow-2xl text-center text-white mt-16 md:mt-0 max-h-[85vh] overflow-y-auto">
           <h2 className="text-3xl md:text-6xl uppercase mb-4 md:mb-8 drop-shadow-md text-zinc-100" style={{ fontFamily: "var(--font-milker)" }}>About Us</h2>
           <p className="text-sm md:text-xl text-zinc-200 leading-relaxed mb-4 md:mb-6 font-medium">
             Founded in 1986, Northern Falcons Football Club has become a proud and growing part of the local football community. With a strong focus on inclusivity and development, we now coach and support over 250 junior players, along with senior men’s and women’s teams, All Abilities (AAA) teams, and a Masters team.
           </p>
           <p className="text-sm md:text-xl text-zinc-200 leading-relaxed font-medium">
             Our mission is to provide a safe, supportive, and inclusive environment where players of all ages and abilities can develop their skills, build confidence, and foster a lifelong love for the game. Join the Falcons and be part of a club that values passion, teamwork, and community.
           </p>
        </div>
      </div>

      {/* Girls Section */}
      <div 
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-24 pointer-events-auto gap-4 md:gap-0"
        style={{ opacity: girlsOpacity, visibility: girlsVisible ? 'visible' : 'hidden' }}
      >
        <div className="w-full md:w-[45%] max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-10 shadow-2xl text-white mt-16 md:mt-0">
           <h2 className="text-3xl md:text-5xl uppercase mb-2 md:mb-4 drop-shadow-md" style={{ fontFamily: "var(--font-milker)" }}>Girls & Women</h2>
           <p className="text-sm md:text-lg text-zinc-200 mb-2 md:mb-4 font-bold text-white uppercase tracking-wider">Join one of our 2026 teams</p>
           <p className="text-sm md:text-base text-zinc-200 mb-4 md:mb-6">At Northern Falcons FC, we welcome girls and women to be part of our vibrant football community. This is for girls and women as well! Whether you are ready to compete in structured leagues or prefer a focus on learning and skill development, we offer flexible programs to suit every level. From competitive junior teams to skills-based training programs, our goal is to support every player's growth, confidence, and love for the game. Get started today and become part of the Falcons family!</p>
           <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-black text-sm md:text-base font-bold uppercase rounded-full hover:scale-105 transition-transform w-full md:w-auto" style={{ fontFamily: 'var(--font-milker)' }}>Join The Team</button>
        </div>
        <div className="w-full md:w-[45%] max-w-md h-[200px] md:h-[500px] relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex-shrink-0">
          <Image src="/falcon/pexels-laura-rincon-318039951-15789898.jpg" alt="Girls Football Academy at Northern Falcons (Desktop)" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover hidden md:block" />
          <Image src="/falcon/pexels-laura-rincon-318039951-28260833.jpg" alt="Girls Football Academy at Northern Falcons (Mobile)" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top block md:hidden" />
        </div>
      </div>

      {/* Boys Section */}
      <div 
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-24 pointer-events-auto gap-4 md:gap-0"
        style={{ opacity: boysOpacity, visibility: boysVisible ? 'visible' : 'hidden' }}
      >
        <div className="w-full md:w-[45%] max-w-md h-[200px] md:h-[500px] relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl mt-16 md:mt-0 flex-shrink-0">
          <Image src="/falcon/dimitrisvetsikas1969-little-boys-5777155_1920.jpg" alt="Boys Football Program at Northern Falcons" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="w-full md:w-[45%] max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-10 shadow-2xl text-white">
           <h2 className="text-3xl md:text-5xl uppercase mb-2 md:mb-4 drop-shadow-md" style={{ fontFamily: "var(--font-milker)" }}>Boys Program</h2>
           <p className="text-sm md:text-lg text-zinc-200 mb-2 md:mb-4 font-bold text-white uppercase tracking-wider">Join one of our 2026 teams</p>
           <p className="text-sm md:text-base text-zinc-200 mb-4 md:mb-6">At Northern Falcons FC, we welcome boys aged 5 to 17 to be part of our vibrant football community. Whether your child is ready to compete in structured leagues or prefers a focus on learning and skill development, we offer flexible programs to suit every level. From competitive junior teams to skills-based training programs, our goal is to support every player's growth, confidence, and love for the game. Get started today and become part of the Falcons family!</p>
           <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-black text-sm md:text-base font-bold uppercase rounded-full hover:scale-105 transition-transform w-full md:w-auto" style={{ fontFamily: 'var(--font-milker)' }}>Join The Team</button>
        </div>
      </div>

      {/* Masters Section */}
      <div 
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-24 pointer-events-auto gap-4 md:gap-0"
        style={{ opacity: mastersOpacity, visibility: mastersVisible ? 'visible' : 'hidden' }}
      >
        <div className="w-full md:w-[45%] max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-10 shadow-2xl text-white mt-16 md:mt-0">
           <h2 className="text-3xl md:text-5xl uppercase mb-2 md:mb-4 drop-shadow-md" style={{ fontFamily: "var(--font-milker)" }}>Masters Program</h2>
           <p className="text-sm md:text-base text-zinc-200 mb-4 md:mb-6">An opportunity for men and women over 45 to continue or return to football. Stay active, build connections, and share your passion for the game in a supportive and friendly environment.</p>
           <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-black text-sm md:text-base font-bold uppercase rounded-full hover:scale-105 transition-transform w-full md:w-auto" style={{ fontFamily: 'var(--font-milker)' }}>Join The Team</button>
        </div>
        <div className="w-full md:w-[45%] max-w-md h-[200px] md:h-[500px] relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex-shrink-0">
          <Image src="/falcon/18240181.jpg" alt="Masters Football Program at Northern Falcons" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
        </div>
      </div>

      {/* AAA Section */}
      <div 
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-24 pointer-events-auto gap-4 md:gap-0"
        style={{ opacity: aaaOpacity, visibility: aaaVisible ? 'visible' : 'hidden' }}
      >
        <div className="w-full md:w-[45%] max-w-md h-[200px] md:h-[500px] relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl mt-16 md:mt-0 flex-shrink-0">
          <Image src="/falcon/fDSC_0414-scaled.jpg" alt="All Abilities Program at Northern Falcons" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="w-full md:w-[45%] max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-10 shadow-2xl text-white">
           <h2 className="text-3xl md:text-5xl uppercase mb-2 md:mb-4 drop-shadow-md" style={{ fontFamily: "var(--font-milker)" }}>All Abilities (AAA)</h2>
           <p className="text-sm md:text-base text-zinc-200 mb-4 md:mb-6">Every child deserves a team. Our All Abilities (AAA) program welcomes children of different abilities to enjoy football and be part of the Falcons family.</p>
           <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-black text-sm md:text-base font-bold uppercase rounded-full hover:scale-105 transition-transform w-full md:w-auto" style={{ fontFamily: 'var(--font-milker)' }}>Join The Team</button>
        </div>
      </div>

      {/* Coaches Section */}
      <div 
        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-24 pointer-events-auto gap-4 md:gap-0"
        style={{ opacity: coachesOpacity, visibility: coachesVisible ? 'visible' : 'hidden' }}
      >
        <div className="w-full md:w-[45%] max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-10 shadow-2xl text-white mt-16 md:mt-0">
           <h2 className="text-3xl md:text-5xl uppercase mb-2 md:mb-4 drop-shadow-md" style={{ fontFamily: "var(--font-milker)" }}>Expert Coaches</h2>
           <p className="text-sm md:text-lg text-zinc-200 mb-4 md:mb-6">Join our expert coaching staff at Northern Falcons FC. Help us foster a lifelong love for the game in a safe, supportive, and inclusive environment. Become a mentor for our community today.</p>
           <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-black text-sm md:text-base font-bold uppercase rounded-full hover:scale-105 transition-transform w-full md:w-auto" style={{ fontFamily: 'var(--font-milker)' }}>Coach With Us</button>
        </div>
        <div className="w-full md:w-[50%] max-w-lg flex gap-2 md:gap-4 h-[150px] md:h-[350px] flex-shrink-0">
          <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl transform md:translate-y-8">
            <Image src="/falcon/coach1.jpg" alt="Northern Falcons Coach 1" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
          </div>
          <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-10 transform scale-110 md:scale-100">
            <Image src="/falcon/coach2.jpg" alt="Northern Falcons Coach 2" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
          </div>
          <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl transform md:-translate-y-8">
            <Image src="/falcon/coach3.jpg" alt="Northern Falcons Coach 3" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
          </div>
        </div>
      </div>

    </div>
  );
}
