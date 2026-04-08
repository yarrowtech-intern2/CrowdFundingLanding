import React from "react";
import fundraiserImg from "../assets/Fundraiser.png";
import { motion } from "framer-motion";

const FundraiserSection = () => {
  return (
    <section id="fundraise" className="w-full bg-white py-12 md:py-16 lg:py-16 xl:py-16 2xl:py-20">
      <div className="w-full max-w-[85rem] 2xl:max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 xl:gap-16 2xl:gap-20 items-center">
        
        {/* Left: Image */}
        <motion.div initial={{ opacity: 0, scale: 0.95, x: -50 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }} className="flex justify-center">
          <div className="relative w-full max-w-[300px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-xl 2xl:max-w-2xl">
            <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl opacity-40 shadow-2xl"></div>
            <div className="relative p-2 sm:p-3 bg-white/40 backdrop-blur-md rounded-[2.8rem] sm:rounded-[3.8rem] border border-white/60 shadow-2xl overflow-hidden aspect-[4/3]">
              <img src={fundraiserImg} alt="Fundraising Platform" className="rounded-[2.5rem] sm:rounded-[3.5rem] w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }}>
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-5 py-2 md:py-2.5 rounded-full mb-8 sm:mb-10">
            Fundraising Platform
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] xl:text-[2.75rem] 2xl:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-slate-900 mb-8 sm:mb-10">
            Ignite Your Ambition. <br />
            <span className="text-indigo-600 italic font-serif pr-2">Architect the Future</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-lg font-medium leading-relaxed text-slate-900 mb-10 sm:mb-12 max-w-lg lg:max-w-xl 2xl:max-w-2xl">
            Launch your vision with 0% platform fees, global reach, and a direct line to elite capital. We provide the tools and exposure you need to transition from an idea to a global market leader.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default FundraiserSection;
