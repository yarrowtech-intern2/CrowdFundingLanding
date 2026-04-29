import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { ArrowUpRight } from "lucide-react";

const ContactUs = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { type: "spring", stiffness: 50, damping: 20 },
  };

  const [form, setForm] = useState({
    name: "", email: "", mobile: "", address: "", message: "",
    lat: "", lon: "", formattedAddress: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });
  const [touched, setTouched] = useState({});

  const [addrQuery, setAddrQuery] = useState("");
  const [addrSuggestions, setAddrSuggestions] = useState([]);
  const [addrLoading, setAddrLoading] = useState(false);
  const [addrOpen, setAddrOpen] = useState(false);

  const abortRef = useRef(null);
  const debounceRef = useRef(null);
  const dropdownRef = useRef(null);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setAddrOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (abortRef.current) abortRef.current.abort();
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const patterns = useMemo(() => ({
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mobile: /^[0-9]{10}$/,
    name: /^[a-zA-Z\s]{2,50}$/,
    address: /^[a-zA-Z0-9\s,.-]{5,200}$/,
  }), []);

  const validateField = (name, value) => {
    const trimmed = String(value || "").trim();
    let error = "";
    switch (name) {
      case "name":
        if (!trimmed) error = "Required";
        else if (!patterns.name.test(trimmed)) error = "2-50 letters only";
        break;
      case "email":
        if (!trimmed) error = "Required";
        else if (!patterns.email.test(trimmed)) error = "Invalid";
        break;
      case "mobile":
        if (!trimmed) error = "Required";
        else if (!patterns.mobile.test(trimmed)) error = "10 digits";
        break;
      case "address":
        if (!trimmed) error = "Required";
        else if (!patterns.address.test(trimmed)) error = "Invalid address";
        break;
      default: break;
    }
    return error;
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast({ show: false, type: "", message: "" }), 4000);
  };

  const searchAddress = async (q) => {
    const query = String(q || "").trim();
    if (query.length < 3) { setAddrSuggestions([]); return; }
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setAddrLoading(true);
    try {
      const url = "https://nominatim.openstreetmap.org/search?" + new URLSearchParams({ q: query, format: "json", addressdetails: "1", limit: "6" }).toString();
      const res = await fetch(url, { method: "GET", signal: controller.signal, headers: { "Accept-Language": "en" } });
      const data = await res.json();
      setAddrSuggestions(data); setAddrOpen(true);
    } catch (e) { if (e?.name !== "AbortError") setAddrSuggestions([]); } finally { setAddrLoading(false); }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "address") {
      setAddrQuery(value);
      setForm((prev) => ({ ...prev, address: value, lat: "", lon: "", formattedAddress: "" }));
      if (touched.address) setErrors((prev) => ({ ...prev, address: validateField("address", value) }));
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => searchAddress(value), 400);
      return;
    }
    const nextValue = name === "mobile" ? value.replace(/\D/g, "").slice(0, 10) : value;
    setForm((prev) => ({ ...prev, [name]: nextValue }));
    if (touched[name]) setErrors((prev) => ({ ...prev, [name]: validateField(name, nextValue) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validateForm = () => {
    const newErrors = {};
    ["name", "email", "mobile", "address"].forEach((f) => {
      const e = validateField(f, form[f]);
      if (e) newErrors[f] = e;
    });
    return newErrors;
  };

  const selectSuggestion = (item) => {
    const formatted = item?.display_name || "";
    setForm((prev) => ({ ...prev, address: formatted, formattedAddress: formatted, lat: String(item.lat), lon: String(item.lon) }));
    setAddrQuery(formatted); setAddrOpen(false); setAddrSuggestions([]);
    setErrors((prev) => ({ ...prev, address: validateField("address", formatted) }));
    setTouched((prev) => ({ ...prev, address: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, mobile: true, address: true, message: true });
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); showToast("error", "Please fix errors"); return; }
    setIsLoading(true);
    try {
      const payload = { project: "CROWD_FUNDING", ...form };
      const res = await fetch("https://script.google.com/macros/s/AKfycbwTGN-QWyr2BPbV9NGUCWSTpcv9SO_PqQsiNxz-KSOQqoyhm3ZTVyYALMWg3fZYLWSX/exec", { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) });
      const text = await res.text();
      let result = null;
      try {
        result = JSON.parse(text);
      } catch {
        result = { ok: res.ok };
      }
      if (!res.ok || result?.ok === false) throw new Error("Failed");
      showToast("success", "Message received!");
      setForm({ name: "", email: "", mobile: "", address: "", message: "", lat: "", lon: "", formattedAddress: "" });
      setErrors({}); setTouched({}); setAddrQuery(""); setAddrSuggestions([]); setAddrOpen(false);
    } catch (err) { showToast("error", "Submission failed. Try again."); } finally { setIsLoading(false); }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden bg-slate-50/50">
      {toast.show && (
        <div className={`fixed right-4 top-24 z-[100] rounded-xl px-4 py-3 text-sm font-semibold shadow-lg ${toast.type === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"}`}>
          {toast.message}
        </div>
      )}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section: Now Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-5 py-2 rounded-full mb-6">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-slate-900 mb-6">
            Let's Start a <br className="sm:hidden" />
            <span className="text-indigo-600 italic font-serif"> Conversation</span>
          </h2>
          <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-600">
            Whether you're raising capital or looking for high-growth opportunities, our team is ready to assist your journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start w-full">
          {/* Left Side: Contact Information (Card) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-500/5 p-8 sm:p-10 md:p-12 transform-gpu relative overflow-hidden h-full"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 -z-10 w-32 h-32 bg-indigo-50/50 rounded-br-[100px]" />

            <div className="space-y-8">
              {[
                { 
                  icon: <MdEmail size={24} />, 
                  title: "Email Us", 
                  value: "hello@m8bid.com", 
                  desc: "Our team usually responds within 24 hours.",
                  link: "mailto:hello@m8bid.com" 
                },
                { 
                  icon: <MdLocationOn size={24} />, 
                  title: "Visit Us", 
                  value: "3A, Bertram St, Esplanade, Kolkata 700087", 
                  desc: "Monday - Friday, 10am - 6pm",
                  link: "#" 
                },
                { 
                  icon: <MdPhone size={24} />, 
                  title: "Call Us", 
                  value: "+91 98305 90929", 
                  desc: "Available for urgent inquiries.",
                  link: "tel:+919830590929" 
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-2xl bg-white shadow-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-indigo-600 font-bold text-base mb-1">{item.value}</p>
                    <p className="text-slate-500 text-xs font-medium">{item.desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20, 
              delay: 0.1 
            }}
            className="bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-500/10 p-8 sm:p-10 transform-gpu w-full relative"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -z-10 w-32 h-32 bg-indigo-50/50 rounded-bl-[100px]" />
            
            <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-900 uppercase tracking-widest text-left ml-1 flex items-center">Full Name <span className="text-red-500 ml-1">*</span></label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your name" className={`w-full px-5 py-4 rounded-2xl bg-slate-50/50 focus:border-indigo-600 focus:bg-white focus:outline-none transition-all text-sm font-bold text-black border-2 ${errors.name ? "border-red-500" : "border-transparent"}`} />
                  {errors.name && <p className="mt-1 text-left text-[10px] font-bold text-red-500 ml-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-900 uppercase tracking-widest text-left ml-1 flex items-center">Email Address <span className="text-red-500 ml-1">*</span></label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your mail" className={`w-full px-5 py-4 rounded-2xl bg-slate-50/50 focus:border-indigo-600 focus:bg-white focus:outline-none transition-all text-sm font-bold text-black border-2 ${errors.email ? "border-red-500" : "border-transparent"}`} />
                  {errors.email && <p className="mt-1 text-left text-[10px] font-bold text-red-500 ml-1">{errors.email}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-900 uppercase tracking-widest text-left ml-1 flex items-center">Phone Number <span className="text-red-500 ml-1">*</span></label>
                  <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} onBlur={handleBlur} placeholder="+91 00000 00000" className={`w-full px-5 py-4 rounded-2xl bg-slate-50/50 focus:border-indigo-600 focus:bg-white focus:outline-none transition-all text-sm font-bold text-black border-2 ${errors.mobile ? "border-red-500" : "border-transparent"}`} />
                  {errors.mobile && <p className="mt-1 text-left text-[10px] font-bold text-red-500 ml-1">{errors.mobile}</p>}
                </div>
                <div className="relative space-y-2" ref={dropdownRef}>
                  <label className="block text-[10px] font-black text-slate-900 uppercase tracking-widest text-left ml-1 flex items-center">Location <span className="text-red-500 ml-1">*</span></label>
                  <input type="text" name="address" value={addrQuery} onChange={handleChange} onBlur={handleBlur} placeholder="Search address..." className={`w-full px-5 py-4 rounded-2xl bg-slate-50/50 focus:border-indigo-600 focus:bg-white focus:outline-none transition-all text-sm font-bold text-black border-2 ${errors.address ? "border-red-500" : "border-transparent"}`} />
                  {errors.address && <p className="mt-1 text-left text-[10px] font-bold text-red-500 ml-1">{errors.address}</p>}
                  {addrOpen && (addrLoading || addrSuggestions.length > 0) && (
                    <div className="absolute z-50 mt-2 w-full rounded-2xl bg-white shadow-2xl overflow-hidden text-sm">
                      {addrLoading ? <div className="p-4 text-slate-500">Searching...</div> : 
                        addrSuggestions.map(item => (
                          <button key={item.place_id} type="button" onClick={() => selectSuggestion(item)} className="w-full text-left px-5 py-4 hover:bg-slate-50 transition truncate border-b border-slate-50 last:border-0 font-medium">{item.display_name}</button>
                        ))
                      }
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-black text-slate-900 uppercase tracking-widest text-left ml-1">Message</label>
                <textarea name="message" rows="4" value={form.message} onChange={handleChange} onBlur={handleBlur} placeholder="How can we help you?" className={`w-full px-5 py-4 rounded-2xl bg-slate-50/50 focus:border-indigo-600 focus:bg-white focus:outline-none transition-all resize-none text-sm font-bold text-black min-h-[120px] border-2 ${errors.message ? "border-red-500" : "border-transparent"}`} />
              </div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isLoading}
                className="group w-full py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 text-base uppercase tracking-widest mt-6 cursor-pointer"
              >
                {isLoading ? "Sending..." : <>Send Message <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
