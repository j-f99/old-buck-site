"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const amazonFourPack = "https://www.amazon.com/Old-Buck-Bamboo-Premium-Cigarette-Style/dp/B0G4PZF9B5";

  const topInset = "top-[116px] lg:top-[144px]";
  const bottomInset = "bottom-2 lg:bottom-4";

  return (
    <section id="hero" className="relative group h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-midnight">
        <Image
          src="/images/Hero Shot.jpg"
          alt="Old Buck Golf Tees"
          fill
          priority
          className="object-cover object-center group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
        />

        {/* Corner Frames - Ultra-Tight Alignment */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-90">
          {/* TOP LEFT */}
          <div className={`absolute ${topInset} left-2 lg:left-4 w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40`}>
            <Image src="/images/Old Buck Antlers and Tees Icon.svg" alt="" fill className="object-contain" />
          </div>

          {/* TOP RIGHT */}
          <div className={`absolute ${topInset} right-2 lg:right-4 w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rotate-90`}>
            <Image src="/images/Old Buck Antlers and Tees Icon.svg" alt="" fill className="object-contain" />
          </div>

          {/* BOTTOM RIGHT */}
          <div className={`absolute ${bottomInset} right-2 lg:right-4 w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rotate-180`}>
            <Image src="/images/Old Buck Antlers and Tees Icon.svg" alt="" fill className="object-contain" />
          </div>

          {/* BOTTOM LEFT */}
          <div className={`absolute ${bottomInset} left-2 lg:left-4 w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 -rotate-90`}>
            <Image src="/images/Old Buck Antlers and Tees Icon.svg" alt="" fill className="object-contain" />
          </div>
        </div>

        {/* OVERLAYS */}
        {/* 1. The Global Mask (Multiplied for color depth) */}
        <div className="absolute inset-0 bg-midnight/30 mix-blend-multiply group-hover:opacity-10 transition-opacity duration-[1500ms] z-10 pointer-events-none" />

        {/* 2. THE SECRET SAUCE: Radial "Focus" Glow. 
               This puts a subtle dark circle behind the text to make the cream/gold pop without washing out the rest of the trees. */}
        <div
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-[1500ms]"
          style={{
            background: 'radial-gradient(circle at center, rgba(4, 30, 66, 0.45) 0%, rgba(4, 30, 66, 0) 70%)'
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 text-center px-6 sm:px-12 lg:px-8 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Added a subtle text-shadow here for extra legibility */}
          <h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide text-balance leading-tight"
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
          >
            For the Pack A Day Golfer.<br />
            <span className="italic text-gold/90">Smoke &apos;Em To The Green.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href={amazonFourPack}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 font-sans font-bold text-midnight bg-gold border border-gold hover:text-gold transition-colors duration-300 overflow-hidden rounded-sm"
          >
            <span className="relative z-10 tracking-[0.2em] uppercase text-xs md:text-sm">Shop the Lineup on Amazon</span>
            <div className="absolute inset-0 h-full w-full bg-midnight transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}