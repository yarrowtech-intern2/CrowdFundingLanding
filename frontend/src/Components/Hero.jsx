import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import handshakeImg from "../assets/handshake.png";
import { UserPlus, Wallet, ArrowRightLeft } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (!element) return;
      const navbarOffset = 90;
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-[#fdfdff] pt-20 overflow-visible">
      <Helmet>
        <title>M8-BID | Vision to Legacy</title>
      </Helmet>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`, 
          backgroundSize: "30px 30px" 
        }} 
      />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-14 xl:gap-20 2xl:gap-20 items-center">
          
          {/* CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ amount: 0.2 }} 
            transition={{ duration: 0.8 }} 
            className="text-center lg:text-left order-last lg:order-first"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100/50 shadow-sm mb-5 sm:mb-6 w-fit mx-auto lg:mx-0">
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">
                Fundraising Platform
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-black leading-[1.1] tracking-tighter text-slate-900 mb-5 sm:mb-6 px-2 sm:px-0">
              Turn Your <br className="hidden sm:inline" />
              <span className="text-indigo-600 italic font-serif">Vision</span> <br /> 
              into a <span className="inline-block">Legacy.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-lg lg:text-xl 2xl:text-lg font-medium leading-relaxed text-slate-700 max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-8 px-2 sm:px-0">
              The definitive arena where radical vision meets elite capital. We transform extraordinary sparks into market-defining landmarks with precision and security.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start px-2 sm:px-0">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("investors")} 
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-indigo-600 text-white font-bold text-base sm:text-lg 2xl:text-lg rounded-2xl shadow-xl hover:bg-indigo-700 hover:shadow-2xl transition-all duration-200"
              >
                Start Fundraiser
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("contact")} 
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-indigo-600 font-bold text-base sm:text-lg 2xl:text-lg rounded-2xl border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-200"
              >
                Join Network
              </motion.button>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 50 }} 
            whileInView={{ opacity: 1, scale: 1, x: 0 }} 
            viewport={{ amount: 0.2 }} 
            transition={{ duration: 0.8 }} 
            className="flex justify-center px-4 sm:px-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-xl animate-float">
              {/* Glow Background */}
              <div className="absolute -inset-8 sm:-inset-10 md:-inset-12 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl rounded-full" />
              
              {/* Image Card */}
              <div className="relative p-2 sm:p-3 md:p-4 bg-white/40 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-4xl border border-white/60 shadow-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src={handshakeImg} 
                  alt="M8 Partnership" 
                  className="rounded-xl sm:rounded-2xl md:rounded-3xl w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* STEPS SECTION */}
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 pt-8 sm:pt-12 md:pt-16 border-t border-indigo-100/50">
          {/* Steps Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ amount: 0.2 }} 
            className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold tracking-tight text-slate-900 text-center mb-10 sm:mb-12 md:mb-12 2xl:mb-12 px-2 sm:px-0"
          >
            Three Simple Steps
          </motion.h2>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 2xl:gap-10 px-2 sm:px-0">
            {[
              { 
                id: "01", 
                icon: <UserPlus />, 
                title: "Sign Up", 
                desc: "Create your secure profile and link your account to start your journey." 
              },
              { 
                id: "02", 
                icon: <Wallet />, 
                title: "Fund / Invest", 
                desc: "Browse verified projects or launch your campaign to secure capital." 
              },
              { 
                id: "03", 
                icon: <ArrowRightLeft />, 
                title: "Withdraw", 
                desc: "Seamlessly manage your returns or receive fundraised money with security." 
              },
            ].map((step, index) => (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-6 sm:p-8 md:p-8 2xl:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-50/50 to-transparent hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-indigo-100/50"
              >
                {/* Icon Container */}
                <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg sm:rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 transition-all mb-6 sm:mb-8 group-hover:scale-110 group-hover:bg-indigo-200">
                  {React.cloneElement(step.icon, { className: "w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" })}
                </div>

                {/* Step Number */}
                <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2 sm:mb-3 md:mb-4 block">
                  Step {step.id}
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-base 2xl:text-sm font-medium leading-relaxed text-slate-700">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Animation CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;