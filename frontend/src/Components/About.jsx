import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.png";

const AboutUs = () => {
  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.25 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.25 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section id="about" className="w-full bg-gradient-to-b from-[#f8faff] via-white to-[#f8faff] py-14 sm:py-20 lg:py-24">
      <div className="w-full max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 xl:gap-16 2xl:gap-24 items-center">
        
        {/* Left: Content */}
        <motion.div {...slideInLeft} className="text-center lg:text-left order-first">
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-5 py-2 md:py-2.5 rounded-full mb-8 sm:mb-10">
            About Us
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.9rem] 2xl:text-[3.2rem] font-bold leading-[1.1] tracking-tight text-slate-900 mb-6 sm:mb-8">
            Architecting a World <br /> Where <br />
            <span className="text-indigo-600 italic font-serif pr-2">Innovation Has No Limits</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-xl font-medium leading-relaxed text-slate-900 mb-10 sm:mb-12 max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0">
            Dismantling the walls between vision and capital. We provide the engine for human progress, fueling the minds that define our future with speed and security.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div {...slideInRight} className="flex justify-center lg:justify-end px-2 sm:px-0">
          <div className="relative w-full max-w-[17rem] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 lg:-inset-12 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl opacity-40 shadow-2xl"></div>
            <div className="relative p-2 sm:p-3 bg-white/40 backdrop-blur-md rounded-[2.8rem] sm:rounded-[3.8rem] border border-white/60 shadow-2xl overflow-hidden aspect-[4/3]">
              <img src={aboutImg} alt="About Us" className="rounded-[2.5rem] sm:rounded-[3.5rem] w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
