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

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-[#fdfdff] overflow-hidden pt-20 sm:pt-28 lg:pt-36">
      <Helmet>
        <title>M8-BID</title>
      </Helmet>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`, backgroundSize: "30px 30px" }} />
      
      {/* Decorative Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-indigo-100/30 rounded-full blur-[100px]" />
        <motion.div animate={{ x: [0, -30, 0], y: [0, 20, 0] }} transition={{ duration: 25, repeat: Infinity, delay: 2 }} className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-purple-100/25 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* CONTENT */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.8 }} className="text-left order-last lg:order-first">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100/50 shadow-sm mb-8 w-fit">
              <div className="relative flex h-2 w-2">
                <div className="animate-ping absolute h-full w-full rounded-full bg-indigo-400 opacity-75"></div>
                <div className="relative h-2 w-2 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">Fundraising Platform</span>
            </div>

            <h1 className="heading-hero text-slate-900 mb-8 tracking-tighter">
              Turn Your <br />
              <span className="text-indigo-600 italic font-serif pr-2">Vision</span> <br /> 
              into a Legacy.
            </h1>

            <p className="text-body text-slate-900 max-w-xl lg:max-w-2xl mb-10 font-medium">
              The definitive arena where radical vision meets elite capital. We transform extraordinary sparks into market-defining landmarks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button onClick={() => scrollToSection("investors")} className="px-10 py-4 sm:py-5 bg-indigo-600 text-white font-black text-lg rounded-2xl shadow-xl hover:bg-indigo-700 transition-all" variants={buttonVariants} whileHover="hover" whileTap="tap">
                Start A Fundraiser
              </motion.button>
              <motion.button onClick={() => scrollToSection("contact")} className="px-10 py-4 sm:py-5 bg-white text-indigo-600 font-black text-lg rounded-2xl border-2 border-indigo-100 hover:border-indigo-200 transition-all shadow-sm" variants={buttonVariants} whileHover="hover" whileTap="tap">
                Join Network
              </motion.button>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div initial={{ opacity: 0, scale: 0.95, x: 50 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[480px] lg:max-w-xl 2xl:max-w-2xl animate-float">
              <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl rounded-full" />
              <div className="relative p-2 sm:p-3 bg-white/40 backdrop-blur-md rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/60 shadow-2xl overflow-hidden aspect-[4/3]">
                <img src={handshakeImg} alt="M8 Partnership" className="rounded-[2.2rem] sm:rounded-[3.2rem] w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* STEPS */}
        <div className="mt-20 sm:mt-32 pt-16 border-t border-indigo-100/50">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="heading-section text-slate-900 text-center mb-16 sm:mb-20">Three Simple Steps</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              { id: "01", icon: <UserPlus />, title: "Sign Up", desc: "Create your secure profile and link your bank account to start your journey." },
              { id: "02", icon: <Wallet />, title: "Fund / Invest", desc: "Browse verified projects or launch your own campaign to secure capital." },
              { id: "03", icon: <ArrowRightLeft />, title: "Withdraw", desc: "Seamlessly manage your returns or receive fundraised money with elite security." },
            ].map((step, index) => (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 20 }} 
                whileInView={{ opacity: 1, x: 0, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-50/50 to-transparent hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-indigo-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all mb-8">
                  {React.cloneElement(step.icon, { className: "w-7 h-7" })}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-2 block">Step {step.id}</span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">{step.title}</h3>
                <p className="text-body text-slate-900 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;