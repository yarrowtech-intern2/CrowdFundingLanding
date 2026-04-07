import React from "react";
import { motion } from "framer-motion";
import { MdLock, MdGavel, MdVerified } from "react-icons/md";

const SecurityCompliance = () => {
  const items = [
    {
      id: 1,
      title: "Data Encryption",
      desc: "All transactions and personal data are encrypted with 256-bit SSL, ensuring your financial information remains completely private and protected from unauthorized access.",
      icon: <MdLock className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Regulatory Compliance",
      desc: "Fully compliant with SEBI and government regulations. Our platform undergoes regular audits to ensure adherence to all applicable financial laws and investor protection guidelines.",
      icon: <MdGavel className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Verified Properties",
      desc: "All listed investments are thoroughly vetted by our expert team. Every property undergoes a rigorous due diligence process before being made available to investors on our platform.",
      icon: <MdVerified className="w-6 h-6" />,
    },
  ];

  return (
    <section id="security" className="w-full bg-[#fdfdff] py-[var(--fluid-py)] overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20" 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-indigo-600 bg-indigo-50 px-5 py-1.5 rounded-full mb-6">
            Trust &amp; Safety
          </span>
          <h2 className="heading-section text-slate-900 mb-6 font-black tracking-tighter">
            Security &amp; <span className="text-indigo-600 italic font-serif pr-2">Compliance</span>
          </h2>
          <p className="max-w-2xl mx-auto text-body text-slate-900 font-medium leading-relaxed">
            We prioritize your protection with industry-leading security protocols and unwavering adherence to global regulatory standards.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 40 }} 
              whileInView={{ opacity: 1, x: 0, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }} 
              className="bg-white rounded-[1.5rem] p-10 shadow-sm border border-slate-100 hover:bg-indigo-50/40 hover:border-indigo-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all mb-8 bg-indigo-600 text-white">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight group-hover:text-indigo-600 transition-colors">{item.title}</h3>
              <div className="w-10 h-[1.5px] bg-indigo-100 mb-8 group-hover:w-full transition-all duration-500" />
              <p className="text-sm sm:text-base text-slate-900 font-medium leading-[1.8] flex-1">
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