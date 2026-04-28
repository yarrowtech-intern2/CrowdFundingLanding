import React from "react";
import { motion } from "framer-motion";
import fundraiserImg from "../assets/Fundraiser.webp";
import { ArrowUpRight } from "lucide-react";

const FundraiserSection = () => {
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
    <section id="fundraisers" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden bg-white">
      <div className="w-full max-w-7xl 2xl:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        
        {/* Left: Image */}
        <motion.div 
          {...slideInLeft} 
          className="flex justify-center lg:justify-start px-2 sm:px-0 transform-gpu"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="relative w-full max-w-[17rem] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg 2xl:max-w-lg">
            <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 lg:-inset-12 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl opacity-40 shadow-2xl" />
            <div className="relative aspect-[4/3] w-full">
              <img src={fundraiserImg} alt="Fundraising Platform" className="rounded-[2.8rem] sm:rounded-[3.8rem] w-full h-full object-cover cursor-pointer shadow-2xl" />
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div {...slideInRight} className="text-center lg:text-left order-first lg:order-last mb-8 sm:mb-10 transform-gpu" style={{ willChange: "transform, opacity" }}>
            <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-5 py-2 rounded-full mb-6">
              Fundraisers
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-5xl font-black leading-[1.1] tracking-tight text-slate-900 mb-6">
              Ignite Your Growth. <br />
              <span className="text-indigo-600 italic font-serif pr-2">Secure Elite Capital</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-lg lg:text-lg 2xl:text-lg font-medium leading-relaxed text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Present your vision to a network of strategic investors and secure the capital needed to transform your startup into a market-defining legacy.
            </p>
        </motion.div>

      </div>
    </section>
  );
};

export default FundraiserSection;
