import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import handshakeImg from "../assets/handshake.webp";
import { UserPlus, Wallet, ArrowRightLeft } from "lucide-react";

const Hero = () => {
  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.1 },
    transition: { type: "spring", stiffness: 30, damping: 24 },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.1 },
    transition: { type: "spring", stiffness: 30, damping: 24 },
  };

  const stepCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

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
    <section id="home" className="relative w-full bg-[#fdfdff] pt-16 lg:pt-20 overflow-visible">
      <Helmet>
        <title>M8-BID</title>
      </Helmet>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        aria-hidden="true"
        style={{ 
          backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`, 
          backgroundSize: "30px 30px" 
        }} 
      />
      
      {/* FIRST FOLD: HERO CONTENT */}
      <div className="relative w-full lg:min-h-[calc(100dvh-80px)] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-12 py-6 sm:py-10 lg:py-14">
        <div className="w-full max-w-7xl 2xl:max-w-6xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 md:gap-12 xl:gap-16 2xl:gap-24 items-center">
            
            {/* CONTENT */}
            <motion.div 
              {...slideInLeft} 
              className="text-center lg:text-left order-first transform-gpu"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm mb-5 sm:mb-6 w-fit mx-auto lg:mx-0">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">
                  Fundraising Platform
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-[1.75rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-black tracking-tight text-slate-900 mb-4 sm:mb-6 text-center lg:text-left">
                Turn Your <br className="hidden sm:inline" />
                <span className="text-indigo-600 italic font-serif">Vision</span> <br /> 
                into a <span className="inline-block">Legacy.</span>
              </h1>

              {/* Description */}
              <p className="text-[13px] sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg font-medium leading-relaxed text-slate-700 max-w-xl 2xl:max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 px-2 sm:px-0">
                The definitive arena where radical vision meets elite capital. We transform extraordinary sparks into market-defining landmarks with precision and security.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 lg:gap-6 justify-center lg:justify-start px-2 sm:px-0">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("investors")} 
                  className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-indigo-600 text-white font-bold text-base sm:text-lg lg:text-lg 2xl:text-lg rounded-2xl shadow-xl hover:bg-indigo-700 hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Start Fundraiser
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")} 
                  className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-indigo-600 font-bold text-base sm:text-lg lg:text-lg 2xl:text-lg rounded-2xl hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Join Network
                </motion.button>
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div 
              {...slideInRight} 
              className="flex justify-center lg:justify-end px-2 sm:px-0 transform-gpu"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="relative w-full max-w-[14rem] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg 2xl:max-w-lg">
                <div>
                  {/* Glow Background - Reduced blur for performance */}
                  <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 lg:-inset-12 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-2xl rounded-full" />
                  
                  {/* Image Card */}
                  <div className="relative aspect-[4/3] w-full">
                    <img 
                      src={handshakeImg} 
                      alt="M8 Partnership" 
                      className="rounded-2xl sm:rounded-3xl md:rounded-4xl w-full h-full object-cover cursor-pointer shadow-2xl" 
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SECOND FOLD: STEPS SECTION */}
      <div className="relative w-full bg-white py-14 sm:py-20 lg:py-24 2xl:py-24 overflow-visible z-10">
        <div className="w-full max-w-7xl 2xl:max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-16">
          {/* Steps Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-4xl font-bold tracking-tight text-slate-900 text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16">
            Three Simple Steps
          </h2>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-10 2xl:gap-10">
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
                initial={{ opacity: 0, x: index === 0 ? -100 : index === 2 ? 100 : 0, y: index === 1 ? 70 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 70, 
                  damping: 18, 
                  mass: 1,
                  delay: index * 0.15 
                }}
                className="group p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-indigo-50/50 to-transparent hover:bg-white hover:shadow-2xl transition-all duration-300 transform-gpu w-full cursor-pointer"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="flex items-center gap-5 mb-6">
                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 transition-all group-hover:scale-110 group-hover:bg-indigo-200">
                    {React.cloneElement(step.icon, { className: "w-7 h-7 sm:w-8 h-8" })}
                  </div>

                  <div>
                    {/* Step Number */}
                    <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-1">
                      Step {step.id}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-base 2xl:text-lg font-medium leading-relaxed text-slate-700">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
