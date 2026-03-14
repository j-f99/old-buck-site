"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const amazonFourPack = "https://www.amazon.com/Old-Buck-Bamboo-Premium-Cigarette-Style/dp/B0G4PZF9B5";

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "The Lineup", href: "#lineup", id: "lineup" },
    { name: "Why Old Buck?", href: "#why-old-buck", id: "why-old-buck" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 200;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(link.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999]">
      {/* Top Bar */}
      <a
        href="https://instagram.com/oldbuckgolf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gold text-midnight py-3 px-4 block text-center relative z-[1001] shadow-sm transition-all duration-300 cursor-pointer group hover:bg-[#EBC77F]"
      >
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-4 font-sans relative z-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] whitespace-nowrap">
            Join the Club. Follow @OldBuckGolf
          </span>
          <Instagram size={20} className="group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
      </a>

      {/* Main Nav Bar */}
      <nav className={`w-full transition-all duration-300 relative z-[1000] ${isScrolled || isOpen ? "bg-midnight shadow-xl" : "bg-midnight/80 backdrop-blur-sm"}`}>
        <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 flex items-center h-16 md:h-20">
          <div className="flex-1">
            <a href="#hero" className="flex items-center space-x-2 w-fit">
              <div className="relative h-8 w-8 md:h-10 md:w-10">
                <Image src="/images/Old Buck Favicon.svg" alt="Logo" fill className="object-contain" />
              </div>
              <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-cream uppercase">OLD BUCK</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`group relative text-[14px] font-bold uppercase tracking-[0.15em] transition-colors py-2 ${activeSection === link.id ? "text-gold" : "text-cream hover:text-gold"
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-gold transition-all duration-300 ${activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
              </a>
            ))}
          </div>

          <div className="flex-1 flex justify-end items-center">
            {/* Pop-out CTA Button */}
            <a
              href={amazonFourPack}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block bg-gold px-8 py-3 text-[12px] font-black text-midnight uppercase tracking-[0.2em] rounded-sm 
                         transition-all duration-300 ease-out
                         hover:bg-[#EBC77F] hover:scale-105 hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)] 
                         active:scale-95"
            >
              Shop Amazon
            </a>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-cream hover:text-gold transition-colors relative z-[1002]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Vertical Drop Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 w-full h-screen bg-midnight z-[999] flex flex-col justify-center px-8"
            >
              <div className="flex flex-col space-y-10 items-center">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-serif uppercase tracking-[0.2em] active:text-gold ${activeSection === link.id ? "text-gold" : "text-cream"}`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}