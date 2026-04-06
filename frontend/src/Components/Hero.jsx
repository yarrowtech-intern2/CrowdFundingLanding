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
      <div className="section-container pt-24 sm:pt-28 lg:pt-32 xl:pt-40 2xl:pt-48 pb-14 sm:pb-16 lg:pb-24 xl:pb-32 2xl:pb-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            className="text-left lg:pr-4 xl:pr-12 min-w-0"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-indigo-100 shadow-sm mb-6 sm:mb-8 md:mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-indigo-600">
                Fundraising Platform
              </span>
            </div>

            <h1 className="heading-hero text-[#0f172a] mb-6 sm:mb-8">
              Turn Your <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent italic font-serif">
                Vision
              </span>{" "}
              <br className="hidden md:block" />
              into a Legacy.
            </h1>

            <p className="text-body text-slate-500 max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl mb-8 sm:mb-10 md:mb-12 font-medium">
              The definitive arena where radical vision meets elite capital. We
              transform extraordinary sparks into market-defining landmarks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch">
              <motion.button
                onClick={() => scrollToSection("fundraise")}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-indigo-600 text-white font-extrabold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform active:scale-95 hover:bg-indigo-700 text-sm sm:text-base 2xl:text-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial="rest"
              >
                Start A Fundraiser
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-indigo-600 font-extrabold rounded-2xl border-2 border-indigo-50 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-300 shadow-sm text-sm sm:text-base 2xl:text-lg"
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
            className="relative min-w-0"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.1,
            }}
          >
            <div className="relative max-w-sm sm:max-w-md lg:max-w-full xl:max-w-2xl 2xl:max-w-3xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
              <div className="relative p-2 sm:p-3 bg-white/40 backdrop-blur-md rounded-3xl sm:rounded-[3rem] border border-white/60 shadow-2xl group transition-all duration-700 hover:scale-[1.02] overflow-hidden">
                <img
                  src={handshakeImg}
                  alt="Business Partnership"
                  className="rounded-2xl sm:rounded-[2.5rem] w-full h-auto object-cover aspect-[4/3] shadow-inner"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- STEPS SECTION --- */}
        <motion.div
          className="mt-14 sm:mt-20 lg:mt-32 2xl:mt-48 pt-10 sm:pt-16 border-t border-indigo-100/50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 2xl:gap-20">
            {/* Step 1 */}
            <motion.div
              variants={itemSlideLeft}
              className="group flex items-start gap-4 sm:gap-6 p-6 sm:p-8 2xl:p-12 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border border-transparent hover:border-indigo-50"
            >
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 2xl:w-20 2xl:h-20 rounded-2xl sm:rounded-3xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-500 shadow-sm group-hover:shadow-indigo-200">
                <UserPlus className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10 text-indigo-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-2 block">
                  Step 01
                </span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                  Sign Up
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                  Create your secure profile and link your bank account to start
                  your journey.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={itemVariants}
              className="group flex items-start gap-4 sm:gap-6 p-6 sm:p-8 2xl:p-12 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 border border-transparent hover:border-purple-50"
            >
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 2xl:w-20 2xl:h-20 rounded-2xl sm:rounded-3xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 transition-all duration-500 shadow-sm group-hover:shadow-purple-200">
                <Wallet className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10 text-purple-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-purple-400 mb-2 block">
                  Step 02
                </span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                  Fund / Invest
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                  Browse verified projects or launch your own campaign
                  to secure capital.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={itemSlideRight}
              className="group flex items-start gap-4 sm:gap-6 p-6 sm:p-8 2xl:p-12 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border border-transparent hover:border-indigo-50 sm:col-span-2 lg:col-span-1"
            >
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 2xl:w-20 2xl:h-20 rounded-2xl sm:rounded-3xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-500 shadow-sm group-hover:shadow-indigo-200">
                <ArrowRightLeft className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10 text-indigo-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-2 block">
                  Step 03
                </span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                  Withdraw
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
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