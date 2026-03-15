"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import Image from "next/image";

const carouselImages = [
  { src: "/images/Box Carousel.jpg", alt: "Old Buck premium packaging box" },
  { src: "/images/Closeup Carousel.jpg", alt: "Close-up of bamboo tees" },
  { src: "/images/Tee Carousel.jpg", alt: "Premium bamboo tees" },
  { src: "/images/Pocket Carousel.jpg", alt: "Box fits perfectly in pocket" },
  { src: "/images/Single Closed Carousel.jpg", alt: "Single box closed" },
];

export default function Story() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef, { amount: 0.5 });

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    if (!isHovered && isInView) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [nextSlide, isHovered, isInView]);

  // Helper to get image at offset for previews
  const getImageAt = (offset: number) => {
    const index = (currentIndex + offset + carouselImages.length) % carouselImages.length;
    return carouselImages[index];
  };

  return (
    <section id="why-old-buck" className="py-24 bg-midnight text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h2 className="font-serif text-gold text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight mb-2">
                Why Old Buck?
              </h2>
              <div className="h-[2px] w-20 bg-gold mt-4 mb-8"></div>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-cream/90 font-sans leading-relaxed max-w-lg">
              <p>
                Golf is already an addicting game, what if we told you it could be even more?
              </p>
              <p>
                Whether it's a Father's Day present, a standout groomsman gift, or just something
                to show off to your weekend foursome, Old Buck combines durable bamboo tees
                with premium vintage packaging that amplifies the experience on the course. Add
                a pack to your bag, and it won't be long before you can't Buck the habit!
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="pt-4"
            >
              <div className="inline-flex items-center space-x-3 text-gold">
                <span className="h-[1px] w-12 bg-gold"></span>
                <span className="font-serif italic text-xl">Smoke 'Em To The Green.</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Carousel Content */}
          <div
            ref={carouselRef}
            className="relative group w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] flex items-center justify-center">
              {/* Previous Glimpse */}
              <div className="absolute left-[-20%] w-[30%] h-[70%] z-0 opacity-20 scale-90 blur-[1px] hidden md:block">
                <Image
                  src={getImageAt(-1).src}
                  alt="Previous preview"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>

              {/* Main Image Container */}
              <div className="relative w-full h-full z-10">
                {/* Decorative gold outline pops out */}
                <div className="absolute inset-0 border border-gold/30 translate-x-4 translate-y-4 rounded-sm"></div>

                <div className="relative h-full w-full overflow-hidden rounded-sm bg-midnight/50 shadow-2xl">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={carouselImages[currentIndex].src}
                        alt={carouselImages[currentIndex].alt}
                        fill
                        className="object-cover object-center"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Next Glimpse */}
              <div className="absolute right-[-20%] w-[30%] h-[70%] z-0 opacity-20 scale-90 blur-[1px] hidden md:block">
                <Image
                  src={getImageAt(1).src}
                  alt="Next preview"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>

              {/* Minimalist Controls */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center space-x-8 z-20">
                <button
                  onClick={prevSlide}
                  className="p-2 text-gold transition-colors duration-300 hover:text-cream focus:outline-none"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} strokeWidth={1.5} />
                </button>
                <div className="flex space-x-2">
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-1 transition-all duration-300 ${i === currentIndex ? "w-6 bg-gold" : "w-2 bg-gold/30"}`}
                      aria-label={`Go to slide ${i + 1}`}
                    ></button>
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="p-2 text-gold transition-colors duration-300 hover:text-cream focus:outline-none"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
