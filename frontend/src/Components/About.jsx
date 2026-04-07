import React from "react";
import aboutImg from "../assets/about.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="w-full bg-gradient-to-b from-[#f8faff] via-white to-[#f8faff] py-[var(--fluid-py)] overflow-hidden">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-18 2xl:gap-32 items-center">
        
        {/* Left: Content */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-4 py-1.5 md:py-2 rounded-full mb-6 sm:mb-8">
            About Us
          </span>

          <h2 className="heading-section text-slate-900 mb-6 sm:mb-8 tracking-tight">
            Architecting a World <br /> Where <br />
            <span className="text-indigo-600 italic font-serif pr-2">Innovation Has No Limits</span>
          </h2>

          <p className="text-body text-slate-900 mb-8 sm:mb-10 max-w-lg lg:max-w-2xl 2xl:max-w-4xl font-medium leading-relaxed">
            Dismantling the walls between vision and capital. We provide the engine for human progress, fueling the minds that define our future.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div initial={{ opacity: 0, scale: 0.95, x: 50 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex justify-center">
          <div className="relative w-full max-w-[280px] sm:max-w-[420px] lg:max-w-full">
            <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-30 shadow-2xl"></div>
            <div className="relative p-2 sm:p-3 bg-white/40 backdrop-blur-md rounded-[2.5rem] sm:rounded-[3rem] border border-white/60 shadow-2xl overflow-hidden aspect-[4/3]">
              <img src={aboutImg} alt="About Us" className="rounded-[2.2rem] sm:rounded-[2.8rem] w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
