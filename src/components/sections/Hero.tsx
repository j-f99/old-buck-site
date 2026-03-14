"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const amazonFourPack = "https://www.amazon.com/Old-Buck-Bamboo-Premium-Cigarette-Style/dp/B0G4PZF9B5";

  // ULTRA-TIGHT PRECISION SPACING:
  // Mobile: Header (~108px) + Tight Gap (8px) = 116px
  // Desktop: Header (~128px) + Tight Gap (16px) = 144px
  const topInset = "top-[116px] lg:top-[144px]";
  const sideMargin = "left-2 lg:left-4 right-2 lg:right-4";
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

        {/* Overlays */}
        <div className="absolute inset-0 bg-midnight/30 mix-blend-multiply group-hover:opacity-10 transition-opacity duration-[1500ms] z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/10 to-transparent group-hover:opacity-70 transition-opacity duration-[1500ms] z-10 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 text-center px-6 sm:px-12 lg:px-8 max-w-5xl mx-auto flex flex-col items-center">
        {/* Text Protector Gradient - Softens the background specifically behind the text */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(4,30,66,0.6)_0%,transparent_70%)] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide drop-shadow-2xl text-balance leading-tight">
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