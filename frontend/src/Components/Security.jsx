import React from "react";
import { motion } from "framer-motion";
import { MdLock, MdGavel, MdVerified } from "react-icons/md";

const SecurityCompliance = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { type: "spring", stiffness: 50, damping: 20 },
  };

  const items = [
    {
      id: 1,
      title: "Data Encryption",
      desc: "All transactions and personal data are encrypted with 256-bit SSL, ensuring your financial information remains private.",
      icon: <MdLock className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Regulatory Compliance",
      desc: "Fully compliant with SEBI and government regulations. Our platform undergoes regular audits to ensure total compliance.",
      icon: <MdGavel className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Verified Properties",
      desc: "All listed investments are thoroughly vetted by our expert team. Every property undergoes a rigorous due diligence process.",
      icon: <MdVerified className="w-6 h-6" />,
    },
  ];

  return (
    <section id="security" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden bg-[#fdfdff]">
      <div className="w-full max-w-7xl 2xl:max-w-6xl mx-auto text-center relative z-10">
        <motion.div 
          {...slideInUp} 
          className="mb-12 sm:mb-16 md:mb-20 transform-gpu"
          style={{ willChange: "transform, opacity" }}
        >
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-5 py-2 rounded-full mb-6">
            Trust &amp; Safety
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-5xl font-black leading-[1.1] tracking-tight text-slate-900 mb-6">
            Security &amp; <span className="text-indigo-600 italic font-serif pr-2">Compliance</span>
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-lg lg:text-lg 2xl:text-lg font-medium leading-relaxed text-slate-600">
            We prioritize your protection with industry-leading security protocols and unwavering adherence to regulatory standards.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                type: "spring", 
                stiffness: 70, 
                damping: 18, 
                mass: 1,
                delay: index * 0.15 
              }}
              className="bg-white rounded-3xl sm:rounded-[2.5rem] p-6 xs:p-7 sm:p-9 lg:p-10 2xl:p-10 shadow-sm border border-slate-100 hover:bg-slate-50 transition-all duration-300 flex flex-col group transform-gpu text-left"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="flex items-center gap-4 sm:gap-5 mb-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-lg bg-indigo-600 text-white transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl 2xl:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base lg:text-base 2xl:text-base font-medium leading-[1.7] text-slate-600 flex-1">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
