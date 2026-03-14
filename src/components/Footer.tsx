"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };



  return (
    <footer className="bg-midnight py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src="/images/favicon.svg"
                  alt="Old Buck Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-3xl font-bold tracking-wider text-cream">
                OLD BUCK
              </span>
            </div>
            <div className="space-y-2 text-center md:text-left">
              <p className="text-sm text-cream/70">Buck Up and Swing!</p>
              <div className="h-[1px] w-12 bg-gold/50 mx-auto md:mx-0"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="font-sans text-[11px] tracking-[0.3em] font-bold uppercase text-gold">
              Quick Links
            </h3>
            <ul className="space-y-4 text-center md:text-left">
              <li>
                <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="text-cream/50 hover:text-gold transition-colors duration-300 text-xs uppercase tracking-widest">
                  Home
                </a>
              </li>
              <li>
                <a href="#lineup" onClick={(e) => scrollToSection(e, "lineup")} className="text-cream/50 hover:text-gold transition-colors duration-300 text-xs uppercase tracking-widest">
                  The Lineup
                </a>
              </li>
              <li>
                <a href="#why-old-buck" onClick={(e) => scrollToSection(e, "why-old-buck")} className="text-cream/50 hover:text-gold transition-colors duration-300 text-xs uppercase tracking-widest">
                  Why Old Buck?
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-cream/50 hover:text-gold transition-colors duration-300 text-xs uppercase tracking-widest">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Social */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="font-sans text-[11px] tracking-[0.3em] font-bold uppercase text-gold">
              Legal
            </h3>
            <div className="text-xs text-cream/50 space-y-3 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Rucker Bays LLC.</p>
              <p className="tracking-widest">All rights reserved.</p>
            </div>
            {/* Find us on Amazon Button */}
            <a
              href="https://www.amazon.com/Old-Buck-Bamboo-Premium-Cigarette-Style/dp/B0G4PZF9B5/ref=sr_1_1?crid=34QLM406EZYSH&dib=eyJ2IjoiMSJ9.5E1AhVujVVgay_Sz_2QWaun-J2jA6swM5wVsHBKmRnknNDGRU32V2qyOpW73B5r39Ggjj_7aglkHoggSPK8802SyIoiR-s45stfQWEaHagVF4m4QPQguUSxFyCvVa9HeUURjIZt-BLirfFGD8Iu1VfV8lH12EBNmDeLxVDZtc8mjnV1mKnCGt5GWles8TPQhMwYMikjUy7ziAwL936ZLplPozjwFKzI1zTWqIFvkQ_s.2Sw11fEO0YOz3dJT-4NaA3MrE9svN7xJI87MBa4Sumg&dib_tag=se&keywords=old%2Bbuck&qid=1773418886&sprefix=old%2Bbuck%2Caps%2C177&sr=8-1&th=1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3 border border-gold/50 text-gold hover:bg-gold hover:text-midnight transition duration-500 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase inline-block"
            >
              Shop on Amazon
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
