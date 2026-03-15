"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      const isTouchCategory = window.matchMedia("(pointer: coarse)").matches;
      const hasTouchPoints = navigator.maxTouchPoints > 0;
      setIsMobile(isTouchCategory || hasTouchPoints);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    const handleGlobalUp = () => {
      setIsPressed(false);
      setIsOver(false);
    };
    window.addEventListener("pointerup", handleGlobalUp, { passive: true });
    window.addEventListener("pointercancel", handleGlobalUp, { passive: true });
    return () => {
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("pointerup", handleGlobalUp);
      window.removeEventListener("pointercancel", handleGlobalUp);
    };
  }, []);

  const amazonFourPack = "https://www.amazon.com/Old-Buck-Bamboo-Premium-Cigarette-Style/dp/B0G4PZF9B5";
  const topInset = "top-[116px] lg:top-[144px]";
  const bottomInset = "bottom-2 lg:bottom-4";

  return (
    <section id="hero" className="relative group h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-midnight">
        <motion.div
          className="absolute inset-0 protect-image"
          animate={isMobile ? { scale: (isPressed && isOver) ? 1.08 : 1 } : {}}
          onPointerDown={() => isMobile && (setIsPressed(true), setIsOver(true))}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/images/Hero Shot.jpg"
            alt="Old Buck Golf Tees"
            fill
            priority
            /* object-top shifts the photo "up" to show more of the golfers */
            className="object-cover object-top lg:group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
          />
        </motion.div>

        {/* Corner Frames */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-90">
          <div className={`absolute ${topInset} left-2 lg:left-4 w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40`}>
            <Image src="/images/Old Buck Antlers and Tees Icon.svg" alt="" fill className="object-contain" />
          </div>
          <div className={`absolute ${topInset} right-2 lg:right-4 w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rotate-90`}>
            <Image src="/images/Old Buck Antlers and Tees Icon.svg" alt="" fill className="object-contain" />
          </div>
          <div className={`absolute ${bottomInset} right-2 lg:right-4 w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rotate-180`}>
            <Image src="/images/Old Buck Antlers and Tees Icon.svg" alt="" fill className="object-contain" />
          </div>
          <div className={`absolute ${bottomInset} left-2 lg:left-4 w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 -rotate-90`}>
            <Image src="/images/Old Buck Antlers and Tees Icon.svg" alt="" fill className="object-contain" />
          </div>
        </div>

        {/* Overlays */}
        <motion.div
          animate={isMobile ? { opacity: (isPressed && isOver) ? 0.3 : 1 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-midnight/30 mix-blend-multiply pointer-events-none z-10"
        />
      </div>

      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-cream tracking-wide leading-tight" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
            For the Pack A Day Golfer.<br />
            <span className="italic text-gold/90">Smoke &apos;Em To The Green.</span>
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mt-8">
          <motion.a
            whileTap={{ scale: 0.96 }}
            href={amazonFourPack}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center justify-center 
                      px-6 sm:px-16 py-5 
                      font-sans font-bold text-midnight bg-gold border border-gold 
                      overflow-hidden rounded-sm 
                      whitespace-nowrap z-30" // <--- whitespace-nowrap prevents the text wrap
          >
            <span className="relative z-10 tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[10px] sm:text-sm md:text-base">
              Shop the Lineup on Amazon
            </span>
            <div className="absolute inset-0 h-full w-full bg-midnight transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}