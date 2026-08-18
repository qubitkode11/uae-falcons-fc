"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "#about" },
  { title: "Our Programs", href: "#programs" },
  { title: "News & Updates", href: "#news" },
  { title: "Gallery", href: "#gallery" },
  { title: "Accommodation", href: "#accommodation" },
  { title: "Elite Player Lifestyle", href: "#lifestyle" },
  { title: "Coaches & Staff", href: "#coaches" },
];

const menuVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: 20,
    transition: {
      delay: i * 0.05,
      type: "tween",
      ease: "easeInOut"
    }
  })
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Link href="/" className="fixed top-6 left-6 md:top-10 md:left-10 z-50">
        <Image src="/USA-Falcon-Logo.png" alt="USA Falcons FC Logo" width={80} height={80} className="w-12 md:w-16 hover:scale-105 transition-transform drop-shadow-xl" style={{ height: "auto" }} priority />
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-50 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Toggle Navigation"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl flex justify-center overflow-y-auto"
          >
            <nav className="flex flex-col items-center justify-start w-full max-w-4xl pt-32 pb-32 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.title}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="w-full flex justify-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-6 md:py-8 border-b border-white/10 last:border-b-0 text-4xl md:text-5xl text-white uppercase tracking-widest hover:text-zinc-400 hover:bg-white/5 hover:scale-105 transition-all duration-300 drop-shadow-xl block rounded-xl"
                    style={{ fontFamily: 'var(--font-milker)' }}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
