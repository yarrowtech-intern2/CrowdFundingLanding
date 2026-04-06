import React, { useState, useEffect } from "react";
import investorImg from "../assets/Investor.png";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, ArrowRightLeft } from "lucide-react";

const BrowseInvestors = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section
      id="investors"
      className="relative w-full bg-gradient-to-b from-[#f8f9ff] via-[#f3f5ff] to-[#eef2ff] py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 sm:w-96 sm:h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 sm:w-96 sm:h-96 bg-indigo-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          className="flex flex-col justify-center text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center justify-center lg:justify-start mb-4 sm:mb-6 md:mb-8">
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#2e66ff] bg-[#eef2ff] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full">
              Investor Network
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#1e2b4f] leading-tight sm:leading-[1.15] md:leading-[1.1] mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
            Fuel the Revolution.{" "}
            <span className="text-[#2e66ff] italic font-serif block sm:inline-block">
              Invest in Global Greatness
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-lg lg:max-w-2xl font-medium px-2 sm:px-0 mx-auto lg:mx-0">
            Scale your wealth by backing the next generation of global giants.
            Access high-growth, vetted startups with analyzed fundamentals and
            join an elite tier of strategic capital partners.
          </p>

          {/* Features Checklist */}
          <motion.div
            className="space-y-4 sm:space-y-5 md:space-y-6 px-2 sm:px-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Feature 1 */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl hover:bg-white/50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-[#2e66ff] transition-all duration-300">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#2e66ff] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-[#1e2b4f] text-sm sm:text-base md:text-lg">
                  Investment &amp; Fundraising
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
                  Access elite fundraising rounds for high-growth ventures.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl hover:bg-white/50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-all duration-300">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-[#1e2b4f] text-sm sm:text-base md:text-lg">
                  Profit &amp; Returns
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
                  Maximize your ROI with performance-driven market insights.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl hover:bg-white/50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300">
                <ArrowRightLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-[#1e2b4f] text-sm sm:text-base md:text-lg">
                  Direct Withdrawal
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
                  Seamlessly move your earnings to your bank with zero friction.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center lg:justify-start px-2 sm:px-0">
            <motion.button
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-[#2e66ff] text-white font-bold rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 active:scale-95 hover:bg-[#1d4bcc] text-sm sm:text-base whitespace-nowrap"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              Start Investing
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative w-full flex justify-center lg:justify-end px-2 sm:px-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg group">
            {/* Gradient Blur Background */}
            <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-r from-[#2e66ff] to-[#4f8cff] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] blur-2xl sm:blur-3xl opacity-10 group-hover:opacity-20 transition-all duration-500" />

            {/* Image Container */}
            <div className="relative p-1 sm:p-1.5 md:p-2 bg-white/40 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border border-white/60 shadow-xl sm:shadow-2xl group transition-all duration-700 hover:scale-[1.02] active:scale-[0.98]">
              <img
                src={investorImg}
                alt="Investor Network - Access Elite Opportunities"
                className="rounded-xl sm:rounded-2xl md:rounded-[2rem] w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2e66ff]/20 to-transparent" />
    </section>
  );
};

export default BrowseInvestors;