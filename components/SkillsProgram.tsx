import React from 'react';

export default function SkillsProgram() {
  return (
    <section className="w-full bg-zinc-950 py-24 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-8">
            <h2 className="text-4xl md:text-5xl text-white font-bold tracking-wider uppercase drop-shadow-md leading-tight break-words" style={{ fontFamily: "var(--font-milker)" }}>
              Elite Football Development Program
            </h2>
            <div className="space-y-6 text-base md:text-lg text-zinc-300 leading-relaxed font-medium">
              <p>
                At UAE Falcons AC, we are dedicated to developing talented football players through professional coaching, elite training programs, and a supportive environment. Our mission is to help young athletes reach their full potential both on and off the pitch.
              </p>
              <p>
                We strive to create future champions by combining professional football development with character building, discipline, and excellence.
              </p>
            </div>
            <div>
              <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-lg rounded-full hover:bg-zinc-200 hover:scale-105 transition-all shadow-lg shadow-white/10" style={{ fontFamily: "var(--font-milker)" }}>
                Join The Program
              </button>
            </div>
          </div>

          {/* Right Content - Focus Areas Grid */}
          <div className="w-full lg:w-7/12">
            <div className="bg-black/50 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm shadow-2xl relative h-full flex flex-col justify-center">
              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>

              <div className="mb-8 text-center lg:text-left">
                <h3 className="text-white text-2xl font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-milker)" }}>
                  Our Programs Focus On
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Item 1 */}
                <div className="group bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 p-5 rounded-2xl flex flex-col justify-center">
                  <h4 className="text-white text-lg font-bold uppercase tracking-wide mb-2" style={{ fontFamily: "var(--font-milker)" }}>
                    Elite Football Training
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    High-level technical, tactical, physical, and mental development.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="group bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 p-5 rounded-2xl flex flex-col justify-center">
                  <h4 className="text-white text-lg font-bold uppercase tracking-wide mb-2" style={{ fontFamily: "var(--font-milker)" }}>
                    Player Pathway
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Structured progression designed to prepare players for academy, semi-professional, and professional opportunities.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="group bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 p-5 rounded-2xl flex flex-col justify-center">
                  <h4 className="text-white text-lg font-bold uppercase tracking-wide mb-2" style={{ fontFamily: "var(--font-milker)" }}>
                    International Exposure
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Opportunities to participate in tournaments, trials, and training experiences with partner clubs.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="group bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 p-5 rounded-2xl flex flex-col justify-center">
                  <h4 className="text-white text-lg font-bold uppercase tracking-wide mb-2" style={{ fontFamily: "var(--font-milker)" }}>
                    Education & Lifestyle
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Guidance in balancing football, education, nutrition, and personal development.
                  </p>
                </div>

                {/* Item 5 */}
                <div className="group bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 p-5 rounded-2xl flex flex-col justify-center">
                  <h4 className="text-white text-lg font-bold uppercase tracking-wide mb-2" style={{ fontFamily: "var(--font-milker)" }}>
                    Accommodation
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Safe and comfortable living arrangements for international and out-of-area players.
                  </p>
                </div>

                {/* Item 6 */}
                <div className="group bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 p-5 rounded-2xl flex flex-col justify-center">
                  <h4 className="text-white text-lg font-bold uppercase tracking-wide mb-2" style={{ fontFamily: "var(--font-milker)" }}>
                    Performance & Fitness
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Strength, conditioning, injury prevention, and sports science support.
                  </p>
                </div>

              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
