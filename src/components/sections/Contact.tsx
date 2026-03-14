"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, Instagram } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/rucker.engravings@gmail.com", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok && result.success === "true") {
        setStatus("success");
        form.reset();
      } else {
        console.error("FormSubmit Error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-cream text-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4">
            Contact
          </h2>
          <div className="h-[1px] w-16 bg-gold mx-auto mb-6"></div>
          <p className="font-sans text-lg text-midnight/80 max-w-4xl mx-auto">
            Interested in Old Buck Golf products for your pro shop, sporting goods store,
            or retail shop? Send us an inquiry below with details and we will get back to you shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-12 shadow-sm border border-midnight/5 rounded-sm"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-12 px-4"
              >
                <div className="relative h-24 w-24 mx-auto mb-8">
                  {/* Mail Icon Animation */}
                  <motion.div
                    initial={{ y: 0, opacity: 1 }}
                    animate={{
                      y: [0, -20, -100],
                      opacity: [1, 1, 0],
                      scale: [1, 1.1, 0.8],
                      rotate: [0, -5, 15]
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                      times: [0, 0.4, 1]
                    }}
                    className="absolute inset-0 flex items-center justify-center text-gold"
                  >
                    <Mail size={64} strokeWidth={1} />
                  </motion.div>

                  {/* Success Mark Reveal */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 12 }}
                    className="absolute inset-0 flex items-center justify-center text-green-600"
                  >
                    <div className="bg-green-50 rounded-full p-4 border border-green-100 shadow-sm">
                      <Check size={40} />
                    </div>
                  </motion.div>
                </div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="font-serif text-3xl text-midnight mb-4"
                >
                  Message Dispatched
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="font-sans text-midnight/70 max-w-md mx-auto"
                >
                  Our team has received your inquiry. A response will be drafted and sent to your inbox shortly.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-10 px-10 py-3 border border-midnight/10 text-midnight/50 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300 rounded-sm text-xs uppercase tracking-[0.2em] font-bold"
                  >
                    Send Another Dispatch
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-midnight/70">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-transparent border-b border-midnight/20 px-0 py-2 focus:outline-none focus:border-gold focus:ring-0 transition-colors duration-300"
                      placeholder="John Doe"
                      disabled={status === "submitting"}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-midnight/70">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-transparent border-b border-midnight/20 px-0 py-2 focus:outline-none focus:border-gold focus:ring-0 transition-colors duration-300"
                      placeholder="john@example.com"
                      disabled={status === "submitting"}
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-midnight/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-midnight/20 px-0 py-2 focus:outline-none focus:border-gold focus:ring-0 transition-colors duration-300 resize-none"
                    placeholder="How can we help?"
                    disabled={status === "submitting"}
                  ></textarea>
                </div>

                {status === "error" && (
                  <div className="text-red-600 text-sm text-center pt-2">
                    Oops! There was a problem submitting your form. Please try again.
                  </div>
                )}

                <div className="pt-6 text-center">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group relative inline-flex items-center justify-center px-12 py-3 font-sans font-bold text-midnight bg-gold border border-gold hover:bg-transparent hover:text-gold transition-all duration-300 overflow-hidden rounded-sm w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 tracking-widest uppercase text-sm">
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </span>
                    <div className="absolute inset-0 h-full w-full bg-midnight transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Social Link Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col items-center space-y-4">
            <p className="font-serif text-xl text-midnight italic">Join the Club</p>
            <a
              href="https://instagram.com/oldbuckgolf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 text-midnight hover:text-gold transition-colors duration-300"
            >
              <div className="bg-midnight group-hover:bg-gold p-3 rounded-full text-cream transition-colors duration-300">
                <Instagram size={24} />
              </div>
              <span className="font-sans font-bold uppercase tracking-[0.2em] text-sm">@oldbuckgolf</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
