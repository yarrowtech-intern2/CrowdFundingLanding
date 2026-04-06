import React from "react";
import investorImg from "../assets/Investor.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, ArrowRightLeft } from "lucide-react";

const BrowseInvestors = () => {
  return (
    <section
      id="investors"
      className="w-full bg-gradient-to-b from-[#f8f9ff] via-[#f3f5ff] to-[#eef2ff] py-16 sm:py-20 md:py-28 lg:py-36 2xl:py-48 overflow-hidden"
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 2xl:gap-32 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-[#2e66ff] bg-[#eef2ff] px-4 py-1.5 md:py-2 rounded-full mb-6 sm:mb-8">
            Investor Network
          </span>

          <h2 className="heading-section text-primary-dark mb-6 sm:mb-8">
            Fuel the Revolution.{" "}
            <br className="hidden md:block" />
            <span className="text-primary italic">
              Invest in Global Greatness
            </span>
          </h2>

          <p className="text-body text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl font-medium">
            Scale your wealth by backing the next generation of global giants.
            Access high-growth, vetted startups with analyzed fundamentals and
            join an elite tier of strategic capital partners.
          </p>

          {/* Features Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8 md:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 sm:gap-6 group"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-[#2e66ff] group-hover:text-white transition-all duration-300 shadow-sm">
                <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#2e66ff] group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[#1e2b4f] text-base sm:text-lg md:text-xl 2xl:text-2xl">
                  Investment &amp; Fundraising
                </h4>
                <p className="text-sm sm:text-base text-gray-500 font-medium">
                  Access elite fundraising rounds for high-growth ventures.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 sm:gap-6 group"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600 group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[#1e2b4f] text-base sm:text-lg md:text-xl 2xl:text-2xl">
                  Profit &amp; Returns
                </h4>
                <p className="text-sm sm:text-base text-gray-500 font-medium">
                  Maximize your ROI with performance-driven market insights.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative group max-w-sm sm:max-w-md lg:max-w-full xl:max-w-2xl 2xl:max-w-3xl mx-auto w-full"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2e66ff] to-[#4f8cff] rounded-3xl sm:rounded-[3rem] blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <div className="relative p-2 sm:p-3 bg-white/40 backdrop-blur-md rounded-3xl sm:rounded-[3.5rem] border border-white/60 shadow-2xl group transition-all duration-700 hover:scale-[1.02]">
            <img
              src={investorImg}
              alt="Investor"
              className="rounded-2xl sm:rounded-[3rem] w-full h-auto object-cover aspect-[4/3] shadow-inner"
            />
          </div>
        </motion.div>
      </div>
    </section>

  );
};

export default BrowseInvestors;
