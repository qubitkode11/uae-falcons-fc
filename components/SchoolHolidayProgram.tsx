import React from 'react';

export default function SchoolHolidayProgram() {
  return (
    <section className="w-full bg-black py-24 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          {/* Right Content (Text) */}
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl text-white font-bold tracking-wider uppercase drop-shadow-md" style={{ fontFamily: "var(--font-milker)" }}>
              School Holiday Program 2026
            </h2>
            <div className="space-y-4 text-lg text-zinc-300 leading-relaxed font-medium">
              <p>
                Looking for an engaging and active school holiday option for your child?
              </p>
              <p>
                The Northern Falcons FC School Holiday Program returns this July, offering fun-filled days of football, games, and social activities in a safe and supportive environment.
              </p>
              
              <div className="pt-4 pb-2">
                <p className="text-white font-bold uppercase tracking-wide mb-4">
                  Designed for boys and girls aged 5–14, this program includes a mix of:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Football skills and training sessions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>FIFA gaming and indoor/outdoor activities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Team games and board games</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    <span>So much more!</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-lg rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/10" style={{ fontFamily: "var(--font-milker)" }}>
              Register Here Now
            </button>
          </div>

          {/* Left Content (Cards) */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {/* Central connecting line for visual interest */}
              <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-white/10 z-0 rotate-45 pointer-events-none"></div>
              
              {/* Dates Card */}
              <div className="bg-zinc-900/80 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-xl hover:-translate-y-1 transition-transform relative z-10">
                <h3 className="text-white text-3xl font-bold uppercase tracking-widest mb-6" style={{ fontFamily: "var(--font-milker)" }}>Dates</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-zinc-400 font-bold uppercase tracking-wide mb-1 text-sm">Week 1</h4>
                    <p className="text-white text-xl font-medium">June 29th - July 1st</p>
                  </div>
                  <div className="w-12 h-[1px] bg-white/20"></div>
                  <div>
                    <h4 className="text-zinc-400 font-bold uppercase tracking-wide mb-1 text-sm">Week 2</h4>
                    <p className="text-white text-xl font-medium">July 6th - 8th</p>
                  </div>
                </div>
              </div>

              {/* Times Card */}
              <div className="bg-zinc-900/80 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-xl hover:-translate-y-1 transition-transform relative z-10 sm:mt-12">
                <h3 className="text-white text-3xl font-bold uppercase tracking-widest mb-2 leading-tight" style={{ fontFamily: "var(--font-milker)" }}>School Holiday</h3>
                <p className="text-zinc-400 uppercase tracking-widest text-sm mb-6 font-bold">Football Program</p>
                
                <div className="space-y-6">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <h4 className="text-white font-bold uppercase tracking-wide mb-1" style={{ fontFamily: "var(--font-milker)" }}>Full Day</h4>
                    <p className="text-zinc-300 text-lg">9:00am - 2:30pm</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <h4 className="text-white font-bold uppercase tracking-wide mb-1" style={{ fontFamily: "var(--font-milker)" }}>Half Day</h4>
                    <p className="text-zinc-300 text-lg">9:00am - 11:00am</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
