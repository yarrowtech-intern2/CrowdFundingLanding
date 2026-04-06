import React from "react";
import investorImg from "../assets/Investor.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, ArrowRightLeft } from "lucide-react";

const BrowseInvestors = () => {
  return (
    <section
      id="investors"
      className="w-full bg-gradient-to-b from-[#f8f9ff] via-[#f3f5ff] to-[#eef2ff] py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      <div className="w-full max-w-7xl xl:max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2e66ff] bg-[#eef2ff] px-4 py-1.5 rounded-full mb-4 sm:mb-6">
            Investor Network
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#1e2b4f] leading-[1.1] mb-4 sm:mb-6">
            Fuel the Revolution.{" "}
            <br className="hidden md:block" />
            <span className="text-[#2e66ff] italic">
              Invest in Global Greatness
            </span>
          </h2>

          <p className="text-sm sm:text-[15px] md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-lg lg:max-w-xl xl:max-w-2xl">
            Scale your wealth by backing the next generation of global giants.
            Access high-growth, vetted startups with analyzed fundamentals and
            join an elite tier of strategic capital partners.
          </p>

          {/* Features Checklist */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 sm:gap-4 group"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-[#2e66ff] group-hover:text-white transition-all duration-300">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#2e66ff] group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[#1e2b4f] text-sm sm:text-base md:text-lg">
                  Investment &amp; Fundraising
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  Access elite fundraising rounds for high-growth ventures.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 sm:gap-4 group"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600 group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[#1e2b4f] text-sm sm:text-base md:text-lg">
                  Profit &amp; Returns
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  Maximize your ROI with performance-driven market insights.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 sm:gap-4 group"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <ArrowRightLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-600 group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[#1e2b4f] text-sm sm:text-base md:text-lg">
                  Direct Withdrawal
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  Seamlessly move your earnings to your bank with zero friction.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative group max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto w-full"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2e66ff] to-[#4f8cff] rounded-2xl sm:rounded-3xl blur-lg opacity-15 group-hover:opacity-25 transition duration-500"></div>
          <div className="relative p-1.5 sm:p-2 bg-white/40 backdrop-blur-md rounded-2xl sm:rounded-[2.5rem] border border-white/60 shadow-2xl group transition-all duration-700 hover:scale-[1.02]">
            <img
              src={investorImg}
              alt="Investor"
              className="rounded-xl sm:rounded-[2rem] w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrowseInvestors;
