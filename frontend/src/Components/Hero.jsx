import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import handshakeImg from "../assets/handshake.png";
import { UserPlus, Wallet, ArrowRightLeft } from "lucide-react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 640 && window.innerWidth < 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(
        window.innerWidth >= 640 && window.innerWidth < 1024
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const navbarOffset = isMobile ? 60 : 110;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: isMobile ? {} : { scale: 1.05, transition: { duration: 0.25 } },
    tap: { scale: 0.98 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const itemSlideLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const itemSlideRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#fdfdff] overflow-hidden"
    >
      <Helmet>
        <title>M8-BID</title>
        <meta
          name="description"
          content="M8-BID: The definitive arena where radical vision meets elite capital. Transform extraordinary sparks into market-defining landmarks through our secure crowdfunding platform."
        />
      </Helmet>

      {/* 1. Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`,
          backgroundSize: isMobile ? "32px 32px" : "24px 24px",
        }}
      />

      {/* 2. Abstract Mesh Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[15%] -left-[15%] w-[80%] h-[80%] sm:w-[60%] sm:h-[70%] bg-indigo-100/40 rounded-full blur-[80px] sm:blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-[15%] -right-[15%] w-[80%] h-[80%] sm:w-[60%] sm:h-[70%] bg-purple-100/40 rounded-full blur-[80px] sm:blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-white/50 to-white" />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-indigo-100 shadow-sm mb-4 sm:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-indigo-600">
                Fundraising Platform
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0f172a] leading-tight sm:leading-[1.15] md:leading-[1.1] mb-4 sm:mb-6 md:mb-8 tracking-tight px-2 sm:px-0">
              Turn Your{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent italic font-serif block sm:inline-block">
                Vision
              </span>{" "}
              into a Legacy.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-lg lg:max-w-2xl leading-relaxed mb-6 sm:mb-8 md:mb-10 font-medium px-2 sm:px-0 mx-auto lg:mx-0">
              The definitive arena where radical vision meets elite capital. We
              transform extraordinary sparks into market-defining landmarks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-2 sm:px-0 justify-center lg:justify-start">
              <motion.button
                onClick={() => scrollToSection("fundraise")}
                className="w-full sm:w-auto px-5 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-indigo-600 text-white font-bold rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 active:scale-95 hover:bg-indigo-700 text-sm sm:text-base whitespace-nowrap"
                variants={buttonVariants}
                whileHover={isMobile ? "" : "hover"}
                whileTap="tap"
                initial="rest"
              >
                Start A Fundraiser
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-5 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-white text-indigo-600 font-bold rounded-xl sm:rounded-2xl border-2 border-indigo-50 hover:border-indigo-100 hover:bg-indigo-50/50 transition-all duration-300 shadow-sm text-sm sm:text-base whitespace-nowrap"
                variants={buttonVariants}
                whileHover={isMobile ? "" : "hover"}
                whileTap="tap"
                initial="rest"
              >
                Join Network
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            className="relative w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.1,
            }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Glow Background */}
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl sm:blur-3xl rounded-full" />

              {/* Image Container */}
              <div className="relative p-1 sm:p-1.5 md:p-2 bg-white/40 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border border-white/60 shadow-xl sm:shadow-2xl group transition-all duration-700 hover:scale-[1.02] active:scale-[0.98]">
                <img
                  src={handshakeImg}
                  alt="Business Partnership"
                  className="rounded-xl sm:rounded-2xl md:rounded-[2rem] w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- STEPS SECTION --- */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-32 pt-8 sm:pt-10 md:pt-12 border-t border-indigo-100/50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-2 sm:px-0">
            {/* Step 1 */}
            <motion.div
              variants={itemSlideLeft}
              className="group flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl hover:bg-white hover:shadow-lg sm:hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-500 flex-col sm:flex-col justify-center">
                <UserPlus className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-indigo-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="text-center sm:text-left">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-indigo-400 mb-1 block">
                  Step 01
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 sm:mb-2">
                  Sign Up / Add Bank Details
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                  Create your secure profile and link your bank account to start
                  your journey.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl hover:bg-white hover:shadow-lg sm:hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-500">
                <Wallet className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="text-center sm:text-left">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-purple-400 mb-1 block">
                  Step 02
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 sm:mb-2">
                  Fundraise or Invest
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                  Browse verified projects/startups or launch your own campaign
                  to secure capital.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={itemSlideRight}
              className="group flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl hover:bg-white hover:shadow-lg sm:hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 sm:col-span-2 lg:col-span-1"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-500">
                <ArrowRightLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-indigo-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="text-center sm:text-left">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-indigo-400 mb-1 block">
                  Step 03
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 sm:mb-2">
                  Withdraw / Receive Money
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                  Seamlessly manage your returns or receive fundraised money with
                  elite security.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;