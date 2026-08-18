import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-3xl md:text-4xl text-white font-bold tracking-widest uppercase mb-4 drop-shadow-md" style={{ fontFamily: "var(--font-milker)" }}>
              USA Falcons FC
            </h2>
            <p className="text-zinc-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Fostering a lifelong love for the game in a safe, supportive, and inclusive environment. Football for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 text-center">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Quick Links</h3>
            <ul className="space-y-3 text-zinc-400 font-medium">
              <li><Link href="/" className="hover:text-white transition-colors inline-block hover:-translate-y-0.5 transform duration-300">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors inline-block hover:-translate-y-0.5 transform duration-300">Our Programs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors inline-block hover:-translate-y-0.5 transform duration-300">Registration</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors inline-block hover:-translate-y-0.5 transform duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Partners / Affiliations */}
          <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Our Partners</h3>
            <div className="flex items-center justify-center md:justify-end gap-4 flex-wrap">
              <a 
                href="#" 
                className="group relative hover:scale-105 transition-transform bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 shadow-lg"
              >
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
                <Image src="/United_Arab_Emirates.webp" alt="United Arab Emirates" width={100} height={100} className="object-contain w-auto h-14 relative z-10" />
              </a>
              <a 
                href="#" 
                className="group relative hover:scale-105 transition-transform bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 shadow-lg"
              >
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
                <Image src="/USA-Falcon-Logo.png" alt="USA Falcons FC Logo" width={100} height={100} className="object-contain w-auto h-12 relative z-10" style={{ width: "auto" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} USA Falcons FC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
