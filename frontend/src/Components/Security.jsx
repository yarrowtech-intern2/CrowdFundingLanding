import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdLock, MdGavel, MdVerified } from "react-icons/md";

const items = [
  {
    id: 1,
    title: "Data Encryption",
    desc: "All transactions and personal data are encrypted with 256-bit SSL, ensuring your financial information remains completely private and protected from unauthorized access.",
    icon: <MdLock size={24} color="white" />,
    direction: -50,
  },
  {
    id: 2,
    title: "Regulatory Compliance",
    desc: "Fully compliant with SEBI and government regulations. Our platform undergoes regular audits to ensure adherence to all applicable financial laws and investor protection guidelines.",
    icon: <MdGavel size={24} color="white" />,
    direction: 0,
    y: 40,
  },
  {
    id: 3,
    title: "Verified Properties",
    desc: "All listed investments are thoroughly vetted by our expert team. Every property undergoes a rigorous due diligence process before being made available to investors on our platform.",
    icon: <MdVerified size={24} color="white" />,
    direction: 50,
  },
];

const SecurityCompliance = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction || 0,
      y: 30,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section
      id="security"
      className="relative w-full bg-[#f6f7fb] py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 sm:w-96 sm:h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 sm:w-96 sm:h-96 bg-indigo-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* HEADER */}
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#2e66ff] bg-[#eef2ff] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full">
              Trust &amp; Safety
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e2b4f] mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0 leading-tight sm:leading-[1.15] md:leading-[1.1]">
            Security &amp;{" "}
            <span className="text-[#2e66ff] italic font-serif">Compliance</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0 mt-4 sm:mt-6">
            Your trust is our foundation. We maintain the highest standards of security and regulatory compliance.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-2 sm:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              custom={isMobile ? 0 : item.direction}
              variants={itemVariants}
              className={`bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100/50 hover:border-[#2e66ff]/20 ${
                item.id === 3 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              whileHover={isMobile ? {} : { y: -8 }}
            >
              {/* Icon Container */}
              <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-[#2e66ff] flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:bg-[#1e2b4f] transition-all duration-300 mb-4 sm:mb-5 md:mb-6 flex-shrink-0">
                {React.cloneElement(item.icon, {
                  size: isMobile ? 22 : 28,
                })}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1e2b4f] mb-3 sm:mb-4 md:mb-5 line-clamp-2">
                {item.title}
              </h3>

              {/* Divider */}
              <div className="border-t border-gray-100 mb-4 sm:mb-5 md:mb-6" />

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed flex-1">
                {item.desc}
              </p>

              {/* Accent Bar on Hover */}
              <div className="h-0.5 bg-gradient-to-r from-[#2e66ff] to-transparent mt-4 sm:mt-5 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Stat 1 */}
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-gray-100/50 hover:border-[#2e66ff]/20 transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2e66ff] mb-1 sm:mb-2">
              256-bit
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
              SSL Encryption
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-gray-100/50 hover:border-[#2e66ff]/20 transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2e66ff] mb-1 sm:mb-2">
              100%
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
              Compliant
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-gray-100/50 hover:border-[#2e66ff]/20 transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2e66ff] mb-1 sm:mb-2">
              24/7
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
              Monitoring
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2e66ff]/20 to-transparent" />
    </section>
  );
};

export default SecurityCompliance;