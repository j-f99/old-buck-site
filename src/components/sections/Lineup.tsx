"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Lineup() {
  return (
    <section id="lineup" className="py-24 bg-cream/30 text-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mosaic Gallery */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 aspect-square md:aspect-[16/9] lg:aspect-[21/9] h-auto">

            {/* Large Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="md:col-span-7 relative overflow-hidden rounded-sm group min-h-[300px]"
            >
              <Image
                src="/images/Course Top.jpg"
                alt="Old Buck on the course"
                fill
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-midnight/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </motion.div>

            {/* Right Column (Two Stacked Images) */}
            <div className="md:col-span-5 flex flex-col gap-4 h-full min-h-[400px]">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-1 relative overflow-hidden rounded-sm group"
              >
                <Image
                  src="/images/Single Top.jpg"
                  alt="Single pack close-up"
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-midnight/10 group-hover:bg-transparent transition-colors duration-700"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex-1 relative overflow-hidden rounded-sm group"
              >
                <Image
                  src="/images/Shirt Top.jpg"
                  alt="Old Buck lifestyle"
                  fill
                  className="object-cover object-[center_65%] transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-midnight/10 group-hover:bg-transparent transition-colors duration-700"></div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-midnight tracking-wide mb-6"
          >
            The Lineup
          </motion.h2>
          <div className="h-[1px] w-16 bg-gold mx-auto"></div>
        </div>

        {/* Purchase Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group flex flex-col"
            >
              {/* Image Swap Container */}
              <div className="relative aspect-[4/5] w-full bg-white mb-8 overflow-hidden rounded-sm">
                <AnimatePresence initial={false}>
                  <motion.div
                    className="absolute inset-0 z-0 p-8 flex items-center justify-center bg-cream/5"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "contain" }}
                      className="p-12 drop-shadow-sm"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  >
                    <Image
                      src={product.lifestyle}
                      alt={`${product.name} lifestyle`}
                      fill
                      style={{ objectPosition: product.lifestylePosition || 'center' }}
                      className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-midnight/10"></div>
                  </motion.div>
                </AnimatePresence>

                {product.popular && (
                  <div className="absolute top-4 right-4 z-20 bg-gold text-midnight text-[9px] font-bold uppercase tracking-[0.2em] py-1 px-3">
                    Most Popular
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow text-center items-center px-2">
                <h3 className="font-serif text-xl sm:text-2xl text-midnight mb-2 tracking-wide uppercase leading-tight min-h-[3.5rem] flex items-center justify-center">
                  {/* Replace hyphens with Non-Breaking Hyphens to prevent "4-Pack" warping */}
                  {product.name.replace(/-/g, '\u2011')}
                </h3>
                <p className="font-sans text-[10px] sm:text-xs text-midnight/50 mb-6 uppercase tracking-[0.1em]">
                  {product.desc}
                </p>

                <p className="font-sans font-bold text-lg text-midnight mb-8">
                  {product.price}
                </p>

                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center justify-center w-full max-w-[200px] px-6 py-3 font-sans font-bold text-midnight bg-gold border border-gold hover:bg-transparent hover:text-gold transition-all duration-300 overflow-hidden rounded-sm"
                >
                  <span className="relative z-10 tracking-[0.15em] uppercase text-[10px]">Buy Now</span>
                  <div className="absolute inset-0 h-full w-full bg-midnight transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}