import React, { useState, useEffect } from "react";
import fundraiserImg from "../assets/Fundraiser.png";
import { motion } from "framer-motion";

const FundraiserSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="fundraise"
      className="relative w-full bg-gradient-to-b from-[#f8f9ff] via-[#f3f5ff] to-[#eef2ff] flex items-center overflow-hidden py-12 sm:py-16 md:py-24 lg:py-32"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 sm:w-96 sm:h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 sm:w-96 sm:h-96 bg-indigo-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
        {/* LEFT IMAGE - Reordered on mobile */}
        <motion.div
          className="relative w-full flex justify-center lg:justify-start order-2 lg:order-1 px-2 sm:px-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg group">
            {/* Gradient Blur Background */}
            <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-r from-[#2e66ff] to-[#4f8cff] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] blur-2xl sm:blur-3xl opacity-10 group-hover:opacity-20 transition-all duration-500" />

            {/* Image Container */}
            <div className="relative p-1 sm:p-1.5 md:p-2 bg-white/40 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border border-white/60 shadow-xl sm:shadow-2xl group transition-all duration-700 hover:scale-[1.02] active:scale-[0.98]">
              <img
                src={fundraiserImg}
                alt="Fundraiser Platform - Launch Your Vision"
                className="rounded-xl sm:rounded-2xl md:rounded-[2rem] w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center justify-center lg:justify-start mb-4 sm:mb-6 md:mb-8">
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#2e66ff] bg-[#eef2ff] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full">
              Fundraising Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#1e2b4f] leading-tight sm:leading-[1.15] md:leading-[1.1] mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
            Ignite Your Ambition.{" "}
            <span className="text-[#2e66ff] italic font-serif block sm:inline-block">
              Architect the Future
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-lg lg:max-w-2xl font-medium px-2 sm:px-0 mx-auto lg:mx-0">
            Launch your vision with{" "}
            <strong className="text-[#2e66ff] font-bold">0% platform fees</strong>, global
            reach, and a direct line to elite capital. We provide the tools and
            exposure you need to transition from an idea to a global market
            leader with unshakeable speed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-2 sm:px-0 justify-center lg:justify-start">
            <motion.button
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-[#2e66ff] text-white font-bold rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 active:scale-95 hover:bg-[#1d4bcc] text-sm sm:text-base whitespace-nowrap"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              Start Fundraising
            </motion.button>

            <motion.button
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-white text-[#2e66ff] font-bold rounded-xl sm:rounded-2xl border-2 border-[#e0e7ff] hover:border-[#d0d8ff] hover:bg-[#eef2ff]/50 transition-all duration-300 shadow-sm text-sm sm:text-base whitespace-nowrap"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              Explore Projects
            </motion.button>
          </div>

          {/* Stats or Features */}
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[#2e66ff]/10">
            <div className="text-center lg:text-left">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2e66ff]">
                0%
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-1 font-medium">
                Platform Fees
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2e66ff]">
                50K+
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-1 font-medium">
                Investors
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2e66ff]">
                Global
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-1 font-medium">
                Reach
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2e66ff]/20 to-transparent" />
    </section>
  );
};

export default FundraiserSection;