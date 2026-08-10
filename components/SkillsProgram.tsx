import React from 'react';

export default function SkillsProgram() {
  return (
    <section className="w-full bg-zinc-950 py-24 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl text-white font-bold tracking-wider uppercase drop-shadow-md" style={{ fontFamily: "var(--font-milker)" }}>
              Skills Acquisition Program
            </h2>
            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-medium">
              <p>
                Our Northern Falcons Skills Acquisition Program is the perfect starting point for young players beginning their football journey or looking to develop their skills, game understanding, and confidence — all in a fun and supportive environment.
              </p>
              <p>
                This entry-level football program is ideal for kids eager to learn the fundamentals of the game, improve their technique, and enjoy the excitement of team play. It also serves as a pathway into our Miniroos and Junior competition teams, helping players transition smoothly into more structured football.
              </p>
              <p className="text-white text-xl font-bold uppercase tracking-wide mt-4">
                Join us and kickstart your child's football future with the Northern Falcons!
              </p>
            </div>
            <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-lg rounded-full hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10" style={{ fontFamily: "var(--font-milker)" }}>
              Register Interest
            </button>
          </div>

          {/* Right Content - Schedule Cards */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="bg-black/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl relative">
              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>

              <div className="mb-10 text-center">
                <h3 className="text-white text-2xl font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-milker)" }}>
                  2026 Term 2 Dates
                </h3>
                <p className="text-zinc-400 text-xl font-medium bg-white/10 inline-block px-6 py-2 rounded-full border border-white/5">
                  May 2nd - June 20th
                </p>
              </div>

              <div className="space-y-6">
                {/* Falcons Nest */}
                <div className="group bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                  <div>
                    <h4 className="text-white text-2xl font-bold uppercase tracking-wide mb-1" style={{ fontFamily: "var(--font-milker)" }}>
                      Falcons Nest
                    </h4>
                    <span className="text-zinc-400 font-medium">Ages 4-7</span>
                  </div>
                  <div className="bg-black/50 px-6 py-3 rounded-xl border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white text-xl font-bold tracking-wider" style={{ fontFamily: "var(--font-milker)" }}>
                      8:30am - 9:30am
                    </span>
                  </div>
                </div>

                {/* Flying Falcons */}
                <div className="group bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                  <div>
                    <h4 className="text-white text-2xl font-bold uppercase tracking-wide mb-1" style={{ fontFamily: "var(--font-milker)" }}>
                      Flying Falcons
                    </h4>
                    <span className="text-zinc-400 font-medium">Ages 8-14</span>
                  </div>
                  <div className="bg-black/50 px-6 py-3 rounded-xl border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white text-xl font-bold tracking-wider" style={{ fontFamily: "var(--font-milker)" }}>
                      9:30am - 10:45am
                    </span>
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
