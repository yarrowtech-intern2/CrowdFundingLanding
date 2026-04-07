import React from "react";
import fundraiserImg from "../assets/Fundraiser.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const FundraiserSection = () => {
  return (
    <section
      id="fundraise"
      className="w-full bg-white flex items-center overflow-hidden py-[var(--fluid-py)]"
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 xl:gap-24 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          className="relative group max-w-sm sm:max-w-md lg:max-w-full xl:max-w-[85%] 2xl:max-w-[80%] mx-auto w-full"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2e66ff] to-[#4f8cff] rounded-3xl sm:rounded-[3rem] blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <div className="relative p-2 sm:p-3 bg-white/40 backdrop-blur-md rounded-3xl sm:rounded-[3.5rem] border border-white/60 shadow-2xl group transition-all duration-700 hover:scale-[1.02]">
            <img
              src={fundraiserImg}
              alt="Fundraiser"
              className="rounded-2xl sm:rounded-[3rem] w-full h-auto object-cover aspect-[4/3] shadow-inner"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
        >
          <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-primary bg-indigo-50 px-4 py-1.5 md:py-2 rounded-full mb-6 sm:mb-8">
            Fundraising Platform
          </span>

          <h1 className="heading-section text-primary-dark mb-6 sm:mb-8">
            Ignite Your Ambition.{" "}
            <br className="hidden md:block" />
            <span className="text-primary italic">Architect the Future</span>
          </h1>

          <p className="text-body text-black mb-8 sm:mb-10 md:mb-12 max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl font-medium">
            Launch your vision with <strong>minimal platform fees</strong>, global
            reach, and a direct line to elite capital. We provide the tools and
            exposure you need to transition from an idea to a global market
            leader with unshakeable speed.
          </p>
        </motion.div>
      </div>
    </section>

  );
};

export default FundraiserSection;
