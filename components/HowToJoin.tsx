import React from 'react';

const steps = [
  {
    number: "01",
    title: "Find Your Program",
    description: "Kids, Girls & Women, Over 45s, or All Abilities — pick the team that fits you best.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Register Online",
    description: "Fill out our quick and easy online registration form to secure your spot for the upcoming season.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Come Along",
    description: "Turn up to your first session and meet the team. New players and families are always welcome — no experience necessary.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function HowToJoin() {
  return (
    <section id="join" className="w-full bg-black py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold tracking-wider uppercase drop-shadow-lg" style={{ fontFamily: "var(--font-milker)" }}>
            How To Join The Falcons
          </h2>
          <p className="mt-6 text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Ready to hit the pitch? Joining our family is as easy as 1, 2, 3. Follow these steps and you'll be playing in no time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm shadow-xl"
            >
              {/* Large faded number in background */}
              <div className="absolute top-6 right-8 text-7xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300 pointer-events-none" style={{ fontFamily: "var(--font-milker)" }}>
                {step.number}
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                {step.icon}
              </div>
              
              <h3 className="text-2xl md:text-3xl text-white font-bold mb-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-milker)" }}>
                {step.title}
              </h3>
              
              <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="relative overflow-hidden group bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]" style={{ fontFamily: "var(--font-milker)" }}>
            <span className="relative z-10">Join Us Now</span>
            <div className="absolute inset-0 bg-black/10 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out z-0"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
