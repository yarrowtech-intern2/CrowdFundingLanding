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
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-[#fdfdff] overflow-hidden pt-20 sm:pt-28 lg:pt-32">
      <Helmet>
        <title>M8-BID | Vision to Legacy</title>
      </Helmet>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`, backgroundSize: "30px 30px" }} />
      
      <div className="w-full max-w-[85rem] 2xl:max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10 py-10 md:py-20 lg:py-20 2xl:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 2xl:gap-14 items-center">
          
          {/* CONTENT */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }} className="text-left order-last lg:order-first">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100/50 shadow-sm mb-6 sm:mb-8 w-fit">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">Fundraising Platform</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] 2xl:text-[3.25rem] font-black leading-[1.1] tracking-tighter text-slate-900 mb-6 sm:mb-8">
              Turn Your <br />
              <span className="text-indigo-600 italic font-serif pr-2">Vision</span> <br /> 
              into a Legacy.
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-base font-medium leading-relaxed text-slate-900 max-w-xl lg:max-w-2xl 2xl:max-w-lg mb-10">
              The definitive arena where radical vision meets elite capital. We transform extraordinary sparks into market-defining landmarks with precision and security.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button onClick={() => scrollToSection("investors")} className="px-8 py-3.5 sm:py-4 bg-indigo-600 text-white font-bold text-base 2xl:text-sm rounded-2xl shadow-xl hover:bg-indigo-700 transition-all">
                Start Fundraiser
              </button>
              <button onClick={() => scrollToSection("contact")} className="px-8 py-3.5 sm:py-4 bg-white text-indigo-600 font-bold text-base 2xl:text-sm rounded-2xl border-2 border-indigo-100 hover:border-indigo-200 transition-all shadow-sm">
                Join Network
              </button>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div initial={{ opacity: 0, scale: 0.95, x: 50 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }} className="flex justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-xl 2xl:max-w-[420px] animate-float">
              <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl rounded-full" />
              <div className="relative p-2 sm:p-3 bg-white/40 backdrop-blur-md rounded-[2.8rem] sm:rounded-[3.8rem] border border-white/60 shadow-2xl overflow-hidden aspect-[4/3]">
                <img src={handshakeImg} alt="M8 Partnership" className="rounded-[2.5rem] sm:rounded-[3.5rem] w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* STEPS */}
        <div className="mt-20 sm:mt-28 md:mt-32 pt-16 md:pt-20 border-t border-indigo-100/50">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.2 }} className="text-2xl sm:text-3xl md:text-3xl lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[2rem] font-bold tracking-tight text-slate-900 text-center mb-12 sm:mb-20 2xl:mb-14">Three Simple Steps</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-10">
            {[
              { id: "01", icon: <UserPlus />, title: "Sign Up", desc: "Create your secure profile and link your account to start your journey." },
              { id: "02", icon: <Wallet />, title: "Fund / Invest", desc: "Browse verified projects or launch your campaign to secure capital." },
              { id: "03", icon: <ArrowRightLeft />, title: "Withdraw", desc: "Seamlessly manage your returns or receive fundraised money with security." },
            ].map((step, index) => (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-50/50 to-transparent hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-indigo-100"
              >
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 transition-all mb-6 md:mb-8">
                  {React.cloneElement(step.icon, { className: "w-6 md:w-7 h-6 md:h-7" })}
                </div>
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-indigo-400 mb-2 md:mb-3 block">Step {step.id}</span>
                <h3 className="text-xl md:text-2xl 2xl:text-xl font-bold text-slate-900 mb-3 md:mb-5">{step.title}</h3>
                <p className="text-sm md:text-base lg:text-base xl:text-lg 2xl:text-sm font-medium leading-relaxed text-slate-900">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;