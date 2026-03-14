import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Lineup from "@/components/sections/Lineup";
import Story from "@/components/sections/Story";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold selection:text-midnight flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Lineup />
        <Story />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
