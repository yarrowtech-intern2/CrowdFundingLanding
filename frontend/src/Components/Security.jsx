import React from "react";
import { motion } from "framer-motion";
import { MdLock, MdGavel, MdVerified } from "react-icons/md";

const SecurityCompliance = () => {
  const sectionVariants = {
    hidden: (direction) => ({ opacity: 0, x: direction === "left" ? -60 : 60 }),
    visible: { opacity: 1, x: 0 },
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
    <section id="security" className="w-full bg-[#fdfdff] py-14 sm:py-20 lg:py-24">
      <div className="w-full max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-20">
        {/* Header */}
        <motion.div
          custom="left"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-5 py-2 rounded-full mb-8">
            Trust &amp; Safety
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.9rem] 2xl:text-[3.2rem] font-bold leading-[1.1] tracking-tight text-slate-900 mb-6 sm:mb-8">
            Security &amp; <span className="text-indigo-600 italic font-serif pr-2">Compliance</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-xl font-medium leading-relaxed text-slate-900">
            We prioritize your protection with industry-leading security protocols and unwavering adherence to regulatory standards.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 2xl:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index % 2 === 0 ? "left" : "right"}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.08 }}
              className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-9 lg:p-10 2xl:p-12 shadow-sm border border-slate-100 hover:bg-slate-50 transition-all duration-300 flex flex-col group"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-10 2xl:mb-10 bg-indigo-600 text-white">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl 2xl:text-2xl font-bold text-slate-900 mb-6 tracking-tight">{item.title}</h3>
              <p className="text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-lg font-medium leading-[1.7] text-slate-600 flex-1">
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
