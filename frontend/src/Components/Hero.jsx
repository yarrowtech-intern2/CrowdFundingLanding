import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import handshakeImg from "../assets/handshake.png";
import { UserPlus, Wallet, ArrowRightLeft } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const navbarOffset = 110;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.25 } },
    tap: { scale: 0.98 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const itemSlideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const itemSlideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] flex items-center justify-center bg-[#fdfdff] overflow-hidden"
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
          backgroundSize: "24px 24px",
        }}
      />

      {/* 2. Abstract Mesh Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[70%] bg-indigo-100/40 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[70%] bg-purple-100/40 rounded-full blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-white/50 to-white" />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl xl:max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 xl:pt-36 pb-14 sm:pb-16 lg:pb-20 xl:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-20 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            className="text-left lg:pr-4 xl:pr-12"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-indigo-100 shadow-sm mb-4 sm:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">
                Fundraising Platform
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0f172a] leading-[1.1] mb-4 sm:mb-6 tracking-tight">
              Turn Your <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent italic font-serif">
                Vision
              </span>{" "}
              <br className="hidden md:block" />
              into a Legacy.
            </h1>

            <p className="text-sm sm:text-[15px] md:text-lg text-slate-500 max-w-lg lg:max-w-xl xl:max-w-2xl leading-relaxed mb-6 sm:mb-8 font-medium">
              The definitive arena where radical vision meets elite capital. We
              transform extraordinary sparks into market-defining landmarks.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.button
                onClick={() => scrollToSection("fundraise")}
                className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform active:scale-95 hover:bg-indigo-700 text-sm sm:text-base"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial="rest"
              >
                Start A Fundraiser
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-4 bg-white text-indigo-600 font-bold rounded-2xl border-2 border-indigo-50 hover:border-indigo-100 hover:bg-indigo-50/50 transition-all duration-300 shadow-sm text-sm sm:text-base"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial="rest"
              >
                Join Network
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.1,
            }}
          >
            <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
              <div className="relative p-1.5 sm:p-2 bg-white/40 backdrop-blur-md rounded-2xl sm:rounded-[2.5rem] border border-white/60 shadow-2xl group transition-all duration-700 hover:scale-[1.02]">
                <img
                  src={handshakeImg}
                  alt="Business Partnership"
                  className="rounded-xl sm:rounded-[2rem] w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- STEPS SECTION --- */}
        <motion.div
          className="mt-14 sm:mt-20 lg:mt-32 pt-8 sm:pt-12 border-t border-indigo-100/50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Step 1 */}
            <motion.div
              variants={itemSlideLeft}
              className="group flex items-start gap-3 sm:gap-5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500"
            >
              <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-500">
                <UserPlus className="w-5 h-5 sm:w-7 sm:h-7 text-indigo-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-1 block">
                  Step 01
                </span>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-1 sm:mb-2">
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
              className="group flex items-start gap-3 sm:gap-5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500"
            >
              <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-500">
                <Wallet className="w-5 h-5 sm:w-7 sm:h-7 text-purple-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400 mb-1 block">
                  Step 02
                </span>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-1 sm:mb-2">
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
              className="group flex items-start gap-3 sm:gap-5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 sm:col-span-2 lg:col-span-1"
            >
              <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-500">
                <ArrowRightLeft className="w-5 h-5 sm:w-7 sm:h-7 text-indigo-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-1 block">
                  Step 03
                </span>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-1 sm:mb-2">
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