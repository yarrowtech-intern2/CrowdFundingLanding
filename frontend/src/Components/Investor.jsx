import React from "react";
import investorImg from "../assets/Investor.png";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";

const BrowseInvestors = () => {
  return (
    <section id="investors" className="w-full bg-gradient-to-b from-[#f8faff] via-white to-[#f8faff] py-[var(--fluid-py)] overflow-hidden">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-18 2xl:gap-32 items-center">
        
        {/* Left: Content */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-last lg:order-first">
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-4 py-1.5 md:py-2 rounded-full mb-6 sm:mb-8">
            Investor Network
          </span>

          <h2 className="heading-section text-slate-900 mb-6 sm:mb-8 tracking-tight">
            Fuel the Revolution. <br />
            <span className="text-indigo-600 italic font-serif pr-2">Invest in Global Greatness</span>
          </h2>

          <p className="text-body text-slate-900 mb-10 max-w-lg lg:max-w-2xl 2xl:max-w-4xl font-medium leading-relaxed">
            Scale your wealth by backing the next generation of global giants. Access high-growth, vetted startups with analyzed fundamentals and join an elite tier of strategic capital partners.
          </p>

          <div className="space-y-6 sm:space-y-8">
            {[
              { icon: <BarChart3 />, color: "bg-blue-100 text-blue-600", title: "Investment & Fundraising", desc: "Access elite fundraising rounds for high-growth ventures." },
              { icon: <TrendingUp />, color: "bg-green-100 text-green-600", title: "Profit & Returns", desc: "Maximize your ROI with performance-driven market insights." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i === 0 ? -80 : 80 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }} 
                className="flex items-center gap-6 group"
              >
                <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 2xl:w-18 2xl:h-18 rounded-xl sm:rounded-2xl ${feature.color} flex items-center justify-center transition-all bg-opacity-70 group-hover:scale-105`}>
                  {React.cloneElement(feature.icon, { className: "w-6 h-6 sm:w-7 sm:h-7 2xl:w-9 2xl:h-9" })}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base sm:text-xl 2xl:text-2xl mb-1">{feature.title}</h4>
                  <p className="text-xs sm:text-sm 2xl:text-lg text-slate-900 font-medium max-w-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div initial={{ opacity: 0, scale: 0.95, x: 50 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }} className="flex justify-center">
          <div className="relative w-full max-w-[280px] sm:max-w-[420px] lg:max-w-xl 2xl:max-w-2xl">
            <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-30 shadow-2xl shadow-indigo-600"></div>
            <div className="relative p-2 sm:p-3 bg-white/40 backdrop-blur-md rounded-[2.5rem] sm:rounded-[3rem] border border-white/60 shadow-2xl overflow-hidden aspect-[4/3]">
              <img src={investorImg} alt="Investor Experience" className="rounded-[2rem] sm:rounded-[2.8rem] w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BrowseInvestors;
