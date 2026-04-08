import React from "react";
import aboutImg from "../assets/about.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="w-full bg-gradient-to-b from-[#f8faff] via-white to-[#f8faff] py-12 md:py-20 lg:py-24 2xl:py-20">
      <div className="w-full max-w-[85rem] 2xl:max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 2xl:gap-20 items-center">
        
        {/* Left: Content */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }}>
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-5 py-2 md:py-2.5 rounded-full mb-8 sm:mb-10">
            About Us
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-slate-900 mb-8 sm:mb-10">
            Architecting a World <br /> Where <br />
            <span className="text-indigo-600 italic font-serif pr-2">Innovation Has No Limits</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-lg font-medium leading-relaxed text-slate-900 mb-10 sm:mb-12 max-w-lg lg:max-w-xl 2xl:max-w-2xl">
            Dismantling the walls between vision and capital. We provide the engine for human progress, fueling the minds that define our future with speed and security.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div initial={{ opacity: 0, scale: 0.95, x: 50 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }} className="flex justify-center">
          <div className="relative w-full max-w-[300px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-xl 2xl:max-w-2xl">
            <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl opacity-40 shadow-2xl"></div>
            <div className="relative p-2 sm:p-3 bg-white/40 backdrop-blur-md rounded-[2.8rem] sm:rounded-[3.8rem] border border-white/60 shadow-2xl overflow-hidden aspect-[4/3]">
              <img src={aboutImg} alt="About Us" className="rounded-[2.5rem] sm:rounded-[3.5rem] w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
