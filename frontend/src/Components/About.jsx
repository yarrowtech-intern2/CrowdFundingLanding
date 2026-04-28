import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.webp";

const AboutUs = () => {
  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.1 },
    transition: { type: "spring", stiffness: 30, damping: 24 },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.1 },
    transition: { type: "spring", stiffness: 30, damping: 24 },
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden bg-slate-50">
      <div className="w-full max-w-7xl 2xl:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        
        {/* Left: Content (Top on Mobile) */}
        <div className="text-center lg:text-left">
          <motion.div 
            {...slideInLeft} 
            className="mb-8 sm:mb-10 transform-gpu"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-5 py-2 rounded-full mb-6">
              Our Legacy
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-5xl font-black leading-[1.1] tracking-tight text-slate-900 mb-6">
              Where Innovation <br />
              <span className="text-indigo-600 italic font-serif pr-2">Meets Precision</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-lg lg:text-lg 2xl:text-lg font-medium leading-relaxed text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We are the premier bridge between groundbreaking visionaries and strategic capital. Our platform is engineered to foster growth, security, and market leadership.
            </p>
          </motion.div>
        </div>

        {/* Right: Image (Bottom on Mobile) */}
        <motion.div 
          {...slideInRight} 
          className="flex justify-center lg:justify-end px-2 sm:px-0 transform-gpu"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="relative w-full max-w-[17rem] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg 2xl:max-w-lg">
            <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 lg:-inset-12 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl opacity-40 shadow-2xl" />
            <div className="relative aspect-[4/3] w-full">
              <img src={aboutImg} alt="About Us" className="rounded-[2.8rem] sm:rounded-[3.8rem] w-full h-full object-cover cursor-pointer shadow-2xl" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
