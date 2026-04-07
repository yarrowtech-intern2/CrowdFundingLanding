import React from "react";
import investorImg from "../assets/Investor.png";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";

const BrowseInvestors = () => {
  return (
    <section id="investors" className="w-full bg-gradient-to-b from-[#f8faff] via-white to-[#f8faff] py-12 md:py-20 lg:py-24 2xl:py-20 overflow-hidden">
      <div className="w-full max-w-[85rem] 2xl:max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
        
        {/* Left: Content */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }} className="order-last lg:order-first">
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-5 py-2 md:py-2.5 rounded-full mb-8 sm:mb-10 text-shadow-sm">
            Investors
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[3rem] font-bold leading-[1.15] tracking-tight text-slate-900 mb-8 sm:mb-10">
            Fuel the Revolution. <br />
            <span className="text-indigo-600 italic font-serif pr-2">Invest in Global Greatness</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-lg font-medium leading-relaxed text-slate-900 mb-12 max-w-lg lg:max-w-xl">
            Scale your wealth by backing the next generation of global giants. Access high-growth, vetted startups with analyzed fundamentals and join an elite tier of strategic capital partners.
          </p>

          <div className="space-y-8 sm:space-y-10">
            {[
              { icon: <BarChart3 />, color: "bg-blue-100 text-blue-600", title: "Investment Rounds", desc: "Access elite fundraising rounds for high-growth ventures." },
              { icon: <TrendingUp />, color: "bg-green-100 text-green-600", title: "Strategic ROI", desc: "Maximize your returns with performance-driven market insights." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }} 
                className="flex items-center gap-8 group"
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl sm:rounded-2xl ${feature.color} flex items-center justify-center transition-all bg-opacity-70 shadow-sm group-hover:scale-105`}>
                  {React.cloneElement(feature.icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg sm:text-xl mb-1.5">{feature.title}</h4>
                  <p className="text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-base font-medium text-slate-600 max-w-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div initial={{ opacity: 0, scale: 0.95, x: 50 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }} className="flex justify-center">
          <div className="relative w-full max-w-[300px] sm:max-w-[440px] lg:max-w-xl 2xl:max-w-lg">
            <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-3xl opacity-40 shadow-2xl shadow-indigo-600"></div>
            <div className="relative p-2 sm:p-3 bg-white/40 backdrop-blur-md rounded-[2.8rem] sm:rounded-[3.8rem] border border-white/60 shadow-2xl overflow-hidden aspect-[4/3]">
              <img src={investorImg} alt="Investor Experience" className="rounded-[2.5rem] sm:rounded-[3.5rem] w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BrowseInvestors;
