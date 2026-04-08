import React from "react";
import { motion } from "framer-motion";
import { MdLock, MdGavel, MdVerified } from "react-icons/md";

const SecurityCompliance = () => {
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
    <section id="security" className="w-full bg-[#fdfdff] py-12 md:py-20 lg:py-24 2xl:py-20">
      <div className="w-full max-w-[85rem] 2xl:max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-24 2xl:mb-12" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-5 py-2 rounded-full mb-8">
            Trust &amp; Safety
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-slate-900 mb-8 sm:mb-10">
            Security &amp; <span className="text-indigo-600 italic font-serif pr-2">Compliance</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-lg font-medium leading-relaxed text-slate-900">
            We prioritize your protection with industry-leading security protocols and unwavering adherence to regulatory standards.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 2xl:gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }} 
              className="bg-white rounded-[2.5rem] p-10 sm:p-12 2xl:p-12 shadow-sm border border-slate-100 hover:bg-slate-50 transition-all duration-300 flex flex-col group"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-10 2xl:mb-10 bg-indigo-600 text-white">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl 2xl:text-xl font-bold text-slate-900 mb-6 2xl:mb-6 tracking-tight">{item.title}</h3>
              <p className="text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-base font-medium leading-[1.7] text-slate-600 flex-1">
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