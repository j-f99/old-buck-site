"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const products = [
  {
    id: "single",
    name: "The Single - 18 Premium Tees",
    desc: "18 Classic Sticks.",
    image: "/images/Old Buck Amazon-Single.png",
    lifestyle: "/images/Lifestyle Single.jpg",
    lifestylePosition: "object-center",
    price: "$7.99",
    href: "https://www.amazon.com/Old-Buck-Bamboo-Premium-Cigarette-Style/dp/B0G4PYYK6Q",
  },
  {
    id: "4-pack",
    name: "'The Seriously Addicted' 4-Pack",
    desc: "Bundle of 4 to feed your addiciton.",
    image: "/images/Old Buck Amazon-4 Pack.png",
    lifestyle: "/images/Lifestyle 4P.jpg",
    lifestylePosition: "object-center",
    price: "$19.99",
    href: "https://www.amazon.com/Old-Buck-Bamboo-Premium-Cigarette-Style/dp/B0G4PZF9B5",
    popular: true,
  },
  {
    id: "10-pack",
    name: "'The I've Got A Problem' 10-Pack",
    desc: "A carton to get you through the season.",
    image: "/images/Old Buck Amazon-10 Pack.png",
    lifestyle: "/images/Lifestyle 10P.jpg",
    lifestylePosition: "15% center",
    price: "$34.99",
    href: "https://www.amazon.com/Old-Buck-Bamboo-Premium-Cigarette-Style/dp/B0G4PZ32NV",
  },
];

export default function Lineup() {
  const [isMobile, setIsMobile] = useState(false);
  const [toggledProducts, setToggledProducts] = useState<Record<string, boolean>>({});
  const [hoveredProducts, setHoveredProducts] = useState<Record<string, boolean>>({});
  const [pressedMosaic, setPressedMosaic] = useState<Record<string, boolean>>({});
  const [overMosaic, setOverMosaic] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const checkTouch = () => {
      const isTouchCategory = window.matchMedia("(pointer: coarse)").matches;
      const hasTouchPoints = navigator.maxTouchPoints > 0;
      setIsMobile(isTouchCategory || hasTouchPoints);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    const handleGlobalUp = () => {
      setPressedMosaic({});
      setOverMosaic({});
    };

    window.addEventListener("pointerup", handleGlobalUp);
    window.addEventListener("pointercancel", handleGlobalUp);

    return () => {
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("pointerup", handleGlobalUp);
      window.removeEventListener("pointercancel", handleGlobalUp);
    };
  }, []);

  const toggleProduct = (id: string) => {
    if (!isMobile) return;
    setToggledProducts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleMosaicDown = (id: string, isDown: boolean) => {
    if (!isMobile) return;
    setPressedMosaic(prev => ({ ...prev, [id]: isDown }));
  };

  const handleMosaicOver = (id: string, isOver: boolean) => {
    if (!isMobile) return;
    setOverMosaic(prev => ({ ...prev, [id]: isOver }));
  };

  return (
    <section id="lineup" className="py-24 bg-cream/30 text-midnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mosaic Gallery */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 aspect-square md:aspect-[16/9] lg:aspect-[21/9] h-auto">

            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:col-span-7 relative overflow-hidden rounded-sm group min-h-[300px] protect-image"
            >
              <motion.div
                className="absolute inset-0"
                animate={isMobile ? { scale: (pressedMosaic['mosaic1'] && overMosaic['mosaic1']) ? 1.1 : 1 } : {}}
                whileHover={!isMobile ? { scale: 1.1 } : {}}
                onPointerDown={() => {
                  handleMosaicDown('mosaic1', true);
                  handleMosaicOver('mosaic1', true);
                }}
                onPointerUp={() => {
                  handleMosaicDown('mosaic1', false);
                  handleMosaicOver('mosaic1', false);
                }}
                onPointerCancel={() => {
                  handleMosaicDown('mosaic1', false);
                  handleMosaicOver('mosaic1', false);
                }}
                onPointerMove={(e) => {
                  if (!isMobile || !pressedMosaic['mosaic1']) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const isInside = (
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom
                  );
                  if (overMosaic['mosaic1'] !== isInside) handleMosaicOver('mosaic1', isInside);
                }}
                transition={{ duration: 2.0, ease: "easeOut" }}
              >
                <Image src="/images/Course Top.jpg" alt="Golf" fill className="object-cover" priority />
              </motion.div>
              <motion.div
                animate={isMobile ? { opacity: (pressedMosaic['mosaic1'] && overMosaic['mosaic1']) ? 0 : 1 } : {}}
                transition={{ duration: 0.7 }}
                className={`absolute inset-0 bg-midnight/10 pointer-events-none transition-all duration-700 ${!isMobile ? 'lg:group-hover:bg-transparent' : ''}`}
              />
            </motion.div>

            {/* Right Column */}
            <div className="md:col-span-5 flex flex-col gap-4 h-full min-h-[400px]">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex-1 relative overflow-hidden rounded-sm group"
              >
                <motion.div
                  className="absolute inset-0"
                  animate={isMobile ? { scale: (pressedMosaic['mosaic2'] && overMosaic['mosaic2']) ? 1.1 : 1 } : {}}
                  whileHover={!isMobile ? { scale: 1.1 } : {}}
                  onPointerDown={() => {
                    handleMosaicDown('mosaic2', true);
                    handleMosaicOver('mosaic2', true);
                  }}
                  onPointerUp={() => {
                    handleMosaicDown('mosaic2', false);
                    handleMosaicOver('mosaic2', false);
                  }}
                  onPointerCancel={() => {
                    handleMosaicDown('mosaic2', false);
                    handleMosaicOver('mosaic2', false);
                  }}
                  onPointerMove={(e) => {
                    if (!isMobile || !pressedMosaic['mosaic2']) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const isInside = (
                      e.clientX >= rect.left &&
                      e.clientX <= rect.right &&
                      e.clientY >= rect.top &&
                      e.clientY <= rect.bottom
                    );
                    if (overMosaic['mosaic2'] !== isInside) handleMosaicOver('mosaic2', isInside);
                  }}
                  transition={{ duration: 2.0, ease: "easeOut" }}
                >
                  <Image src="/images/Single Top.jpg" alt="Pack" fill className="object-cover" />
                </motion.div>
                <motion.div
                  animate={isMobile ? { opacity: (pressedMosaic['mosaic2'] && overMosaic['mosaic2']) ? 0 : 1 } : {}}
                  transition={{ duration: 0.7 }}
                  className={`absolute inset-0 bg-midnight/10 pointer-events-none transition-all duration-700 ${!isMobile ? 'lg:group-hover:bg-transparent' : ''}`}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex-1 relative overflow-hidden rounded-sm group"
              >
                <motion.div
                  className="absolute inset-0"
                  animate={isMobile ? { scale: (pressedMosaic['mosaic3'] && overMosaic['mosaic3']) ? 1.1 : 1 } : {}}
                  whileHover={!isMobile ? { scale: 1.1 } : {}}
                  onPointerDown={() => {
                    handleMosaicDown('mosaic3', true);
                    handleMosaicOver('mosaic3', true);
                  }}
                  onPointerUp={() => {
                    handleMosaicDown('mosaic3', false);
                    handleMosaicOver('mosaic3', false);
                  }}
                  onPointerCancel={() => {
                    handleMosaicDown('mosaic3', false);
                    handleMosaicOver('mosaic3', false);
                  }}
                  onPointerMove={(e) => {
                    if (!isMobile || !pressedMosaic['mosaic3']) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const isInside = (
                      e.clientX >= rect.left &&
                      e.clientX <= rect.right &&
                      e.clientY >= rect.top &&
                      e.clientY <= rect.bottom
                    );
                    if (overMosaic['mosaic3'] !== isInside) handleMosaicOver('mosaic3', isInside);
                  }}
                  transition={{ duration: 2.0, ease: "easeOut" }}
                >
                  <Image src="/images/Shirt Top.jpg" alt="Shirt" fill className="object-cover object-[center_68%]" />
                </motion.div>
                <motion.div
                  animate={isMobile ? { opacity: (pressedMosaic['mosaic3'] && overMosaic['mosaic3']) ? 0 : 1 } : {}}
                  transition={{ duration: 0.7 }}
                  className={`absolute inset-0 bg-midnight/10 pointer-events-none transition-all duration-700 ${!isMobile ? 'lg:group-hover:bg-transparent' : ''}`}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Purchase Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col cursor-pointer"
              onClick={() => toggleProduct(product.id)}
              onMouseEnter={() => !isMobile && setHoveredProducts(prev => ({ ...prev, [product.id]: true }))}
              onMouseLeave={() => !isMobile && setHoveredProducts(prev => ({ ...prev, [product.id]: false }))}
            >
              <div className="relative aspect-[4/5] w-full bg-white mb-8 overflow-hidden rounded-sm">

                {/* Product Image */}
                <div className={`absolute inset-0 z-0 p-8 flex items-center justify-center transition-opacity duration-500 protect-image
                  ${toggledProducts[product.id] ? 'opacity-0' : 'opacity-100'} lg:group-hover:opacity-0`}>
                  <Image src={product.image} alt={product.name} fill style={{ objectFit: "contain" }} className="p-12 drop-shadow-sm" />
                </div>

                {/* Lifestyle Image */}
                <div className={`absolute inset-0 z-10 transition-all duration-700 protect-image
                  ${toggledProducts[product.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-110'} 
                  lg:group-hover:opacity-100 lg:group-hover:scale-100`}>
                  <Image src={product.lifestyle} alt={product.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-midnight/10" />
                </div>

                {product.popular && (
                  <div className="absolute top-4 right-4 z-20 bg-gold text-midnight text-[9px] font-bold uppercase py-1 px-3">Most Popular</div>
                )}

                {/* Mobile Interaction Hint */}
                {isMobile && !toggledProducts[product.id] && (
                  <div className="absolute bottom-6 left-0 z-20 pointer-events-none">
                    <div className="bg-gold text-midnight text-[11px] sm:text-xs font-black uppercase tracking-[0.15em] py-2.5 px-6 shadow-2xl flex items-center gap-2 rounded-r-md border-y border-r border-midnight/20">
                      <span className="drop-shadow-md">Tap To See More</span>
                      <ChevronRight size={14} strokeWidth={4} />
                    </div>
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="text-center px-2">
                <h3 className="font-serif text-xl sm:text-2xl text-midnight mb-2 uppercase">{product.name}</h3>
                <p className="font-sans text-[10px] text-midnight/50 mb-6 uppercase tracking-widest">{product.desc}</p>
                <p className="font-sans font-bold text-lg text-midnight mb-8">{product.price}</p>

                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href={product.href}
                  target="_blank"
                  className={`relative inline-flex items-center justify-center w-full max-w-[200px] px-6 py-3 font-bold border transition-all overflow-hidden rounded-sm
                    ${(isMobile ? toggledProducts[product.id] : hoveredProducts[product.id])
                      ? 'bg-midnight border-midnight text-gold'
                      : 'bg-gold border-gold text-midnight lg:hover:bg-transparent lg:hover:text-gold'}`}
                >
                  <span className="relative z-10 tracking-widest uppercase text-[10px]">Buy Now</span>
                  <div className={`absolute inset-0 h-full w-full bg-midnight transition-transform duration-300
                    ${(isMobile ? toggledProducts[product.id] : hoveredProducts[product.id])
                      ? 'translate-y-0'
                      : 'translate-y-full lg:group-hover:translate-y-0'}`} />
                </motion.a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}