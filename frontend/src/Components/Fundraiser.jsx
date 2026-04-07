import React from "react";
import fundraiserImg from "../assets/Fundraiser.png";
import { motion } from "framer-motion";

const FundraiserSection = () => {
  return (
    <section id="fundraise" className="w-full bg-white py-[var(--fluid-py)] overflow-hidden">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-18 2xl:gap-32 items-center">
        
        {/* Left: Image */}
        <motion.div initial={{ opacity: 0, scale: 0.95, x: -50 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }} className="flex justify-center">
          <div className="relative w-full max-w-[280px] sm:max-w-[420px] lg:max-w-xl 2xl:max-w-2xl">
            <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative p-2 sm:p-3 bg-white/40 backdrop-blur-md rounded-[2.2rem] sm:rounded-[3rem] border border-white/60 shadow-2xl overflow-hidden aspect-[4/3]">
              <img src={fundraiserImg} alt="Fundraising Platform" className="rounded-[2.1rem] sm:rounded-[2.8rem] w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }}>
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-4 py-1.5 md:py-2 rounded-full mb-6 sm:mb-8">
            Fundraising Platform
          </span>

          <h2 className="heading-section text-slate-900 mb-6 sm:mb-8 tracking-tight">
            Ignite Your Ambition. <br />
            <span className="text-indigo-600 italic font-serif pr-2">Architect the Future</span>
          </h2>

          <p className="text-body text-slate-900 mb-8 sm:mb-10 max-w-lg lg:max-w-2xl 2xl:max-w-4xl font-medium leading-relaxed">
            Launch your vision with 0% platform fees, global reach, and a direct line to elite capital. We provide the tools and exposure you need to transition from an idea to a global market leader with unshakeable speed.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default FundraiserSection;
