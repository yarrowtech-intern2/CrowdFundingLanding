import React from "react";
import { motion } from "framer-motion";
import investorImg from "../assets/Investor.png";
import { BarChart3, TrendingUp } from "lucide-react";

const BrowseInvestors = () => {
  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.25 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.25 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const featureVariants = {
    hidden: (direction) => ({ opacity: 0, x: direction === "left" ? -60 : 60 }),
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="investors" className="w-full bg-gradient-to-b from-[#f8faff] via-white to-[#f8faff] py-14 sm:py-20 lg:py-24">
      <div className="w-full max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 xl:gap-16 2xl:gap-24 items-center">
        
        {/* Left: Content */}
        <motion.div {...slideInLeft} className="order-first text-center lg:text-left">
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-5 py-2 md:py-2.5 rounded-full mb-8 sm:mb-10 text-shadow-sm">
            Investors
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.9rem] 2xl:text-[3.2rem] font-bold leading-[1.15] tracking-tight text-slate-900 mb-6 sm:mb-8">
            Fuel the Revolution. <br />
            <span className="text-indigo-600 italic font-serif pr-2">Invest in Global Greatness</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-xl font-medium leading-relaxed text-slate-900 mb-10 sm:mb-12 max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0">
            Scale your wealth by backing the next generation of global giants. Access high-growth, vetted startups with analyzed fundamentals and join an elite tier of strategic capital partners.
          </p>

          <div className="space-y-8 sm:space-y-10 2xl:space-y-10">
            {[
              { icon: <BarChart3 />, color: "bg-blue-100 text-blue-600", title: "Investment Rounds", desc: "Access elite fundraising rounds for high-growth ventures." },
              { icon: <TrendingUp />, color: "bg-green-100 text-green-600", title: "Strategic ROI", desc: "Maximize your returns with performance-driven market insights." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                custom={i % 2 === 0 ? "left" : "right"}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
                className="flex items-center gap-6 sm:gap-8 group"
              >
                <div className={`flex-shrink-0 w-14 h-14 2xl:w-16 2xl:h-16 rounded-2xl ${feature.color} flex items-center justify-center transition-all bg-opacity-70 shadow-sm group-hover:scale-105`}>
                  {React.cloneElement(feature.icon, { className: "w-7 h-7 2xl:w-8 2xl:h-8" })}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-slate-900 text-lg 2xl:text-xl mb-1.5 2xl:mb-2">{feature.title}</h4>
                  <p className="text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-lg font-medium text-slate-600 max-w-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div {...slideInRight} className="flex justify-center lg:justify-end px-2 sm:px-0">
          <div className="relative w-full max-w-[17rem] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 lg:-inset-12 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-3xl opacity-40 shadow-2xl"></div>
            <div className="relative p-2 sm:p-3 bg-white/40 backdrop-blur-md rounded-[2.8rem] sm:rounded-[3.8rem] border border-white/60 shadow-2xl overflow-hidden aspect-[4/3]">
              <img src={investorImg} alt="Investor Experience" className="rounded-[2.5rem] sm:rounded-[3.5rem] w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BrowseInvestors;
