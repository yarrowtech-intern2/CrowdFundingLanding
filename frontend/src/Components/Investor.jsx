import React from "react";
import { motion } from "framer-motion";
import investorImg from "../assets/Investor.webp";
import { BarChart3, TrendingUp, ArrowUpRight } from "lucide-react";

const BrowseInvestors = () => {
  const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { type: "spring", stiffness: 100, damping: 20 },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { type: "spring", stiffness: 100, damping: 20 },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="investors" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden bg-[#fdfdff]">
      <div className="w-full max-w-7xl 2xl:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        
        {/* Left: Content */}
        <div className="text-center lg:text-left order-last lg:order-first">
          <motion.div 
            {...slideInLeft} 
            className="mb-8 sm:mb-10 transform-gpu"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-5 py-2 rounded-full mb-6">
              Investors
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-5xl font-black leading-[1.1] tracking-tight text-slate-900 mb-6">
              Fuel the Revolution. <br />
              <span className="text-indigo-600 italic font-serif pr-2">Invest in Global Greatness</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-lg lg:text-lg 2xl:text-lg font-medium leading-relaxed text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Access curated high-growth opportunities and secure your position in the next generation of market-defining landmarks.
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-10 2xl:space-y-10">
            {[
              { icon: <BarChart3 />, color: "bg-blue-100 text-blue-600", title: "Investment Rounds", desc: "Access elite fundraising rounds for high-growth ventures." },
              { icon: <TrendingUp />, color: "bg-green-100 text-green-600", title: "Strategic ROI", desc: "Maximize your returns with performance-driven market insights." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 80, 
                  damping: 18, 
                  delay: i * 0.1 
                }}
                className="flex items-center gap-6 sm:gap-8 group transform-gpu"
                style={{ willChange: "transform, opacity" }}
              >
                <div className={`flex-shrink-0 w-14 h-14 2xl:w-16 2xl:h-16 rounded-2xl ${feature.color} flex items-center justify-center transition-all bg-opacity-70 shadow-sm group-hover:scale-105`}>
                  {React.cloneElement(feature.icon, { className: "w-7 h-7 2xl:w-8 2xl:h-8" })}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-slate-900 text-lg lg:text-lg 2xl:text-lg mb-1 2xl:mb-2">{feature.title}</h4>
                  <p className="text-sm xs:text-base lg:text-base 2xl:text-base font-medium text-slate-600 max-w-sm mb-2">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <motion.div {...slideInRight} className="flex justify-center lg:justify-end px-2 sm:px-0">
          <div className="relative w-full max-w-[17rem] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg 2xl:max-w-lg">
            <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 lg:-inset-12 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-40 shadow-2xl" />
            <div className="relative aspect-[4/3] w-full">
              <img src={investorImg} alt="Investor Experience" className="rounded-[2.8rem] sm:rounded-[3.8rem] w-full h-full object-cover cursor-pointer shadow-2xl" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BrowseInvestors;
