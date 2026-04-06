import React from "react";
import investorImg from "../assets/Investor.png";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Landmark, ArrowRightLeft } from "lucide-react";

const BrowseInvestors = () => {
  return (
    <section
      id="investors"
      className="w-full bg-gradient-to-b from-[#f8f9ff] via-[#f3f5ff] to-[#eef2ff] py-20 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT CONTENT (Slides from Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2e66ff] bg-[#eef2ff] px-4 py-1.5 rounded-full mb-6">
            Investor Network
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1e2b4f] leading-[1.1] mb-6">
            Fuel the Revolution. <br />
            <span className="text-[#2e66ff] italic">
              Invest in Global Greatness
            </span>
          </h1>

          <p className="text-[15px] md:text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
            Scale your wealth by backing the next generation of global giants. Access high-growth, vetted startups with analyzed fundamentals and join an elite tier of strategic capital partners.
          </p>

          {/* Features Checklist */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-[#2e66ff] group-hover:text-white transition-all duration-300">
                <BarChart3 className="w-6 h-6 text-[#2e66ff] group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[#1e2b4f] text-lg">Investment & Fundraising</h4>
                <p className="text-sm text-gray-500">Access elite fundraising rounds for high-growth ventures.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-green-600 group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[#1e2b4f] text-lg">Profit & Returns</h4>
                <p className="text-sm text-gray-500">Maximize your ROI with performance-driven market insights.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <ArrowRightLeft className="w-6 h-6 text-purple-600 group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[#1e2b4f] text-lg">Direct Withdrawal</h4>
                <p className="text-sm text-gray-500">Seamlessly move your earnings to your bank with zero friction.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE (Slides from Right) */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2e66ff] to-[#4f8cff] rounded-3xl blur-lg opacity-15 group-hover:opacity-25 transition duration-500"></div>
          <img
            src={investorImg}
            alt="Investor"
            className="relative rounded-3xl shadow-2xl w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default BrowseInvestors;