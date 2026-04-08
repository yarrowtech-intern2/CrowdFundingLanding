import React, { useEffect, useMemo, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

const ContactUs = () => {
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

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-cubic", once: true, offset: 80 });
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setAddrOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const patterns = useMemo(() => ({
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mobile: /^[0-9]{10}$/,
    name: /^[a-zA-Z\s]{2,50}$/,
    address: /^[a-zA-Z0-9\s,.-]{5,200}$/,
  }), []);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name": if (!value.trim()) error = "Required"; break;
      case "email": if (!value.trim()) error = "Required"; else if (!patterns.email.test(value.trim())) error = "Invalid"; break;
      case "mobile": if (!value.trim()) error = "Required"; else if (!patterns.mobile.test(value.trim())) error = "10 digits"; break;
      case "address": if (!value.trim()) error = "Required"; break;
      default: break;
    }
    return error;
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: "", message: "" }), 4000);
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
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
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
      let result = JSON.parse(text);
      if (!res.ok || !result?.ok) throw new Error("Failed");
      showToast("success", "Message received!");
      setForm({ name: "", email: "", mobile: "", address: "", message: "", lat: "", lon: "", formattedAddress: "" });
      setErrors({}); setTouched({}); setAddrQuery(""); setAddrSuggestions([]); setAddrOpen(false);
    } catch (err) { showToast("error", "Submission failed. Try again."); } finally { setIsLoading(false); }
  };

  return (
    <section id="contact" className="relative py-12 md:py-20 lg:py-24 2xl:py-24 bg-gradient-to-b from-[#f8faff] via-white to-[#f3f6ff] overflow-hidden">
      <div className="w-full max-w-[85rem] 2xl:max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 2xl:mb-20">
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-5 py-2 rounded-full mb-8">
            Get In Touch
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[3rem] font-bold leading-[1.1] tracking-tight text-slate-900 mb-8 sm:mb-10">
            Let's Start a <span className="text-indigo-600 italic font-serif pr-2">Conversation</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-lg font-medium leading-relaxed text-slate-900">
            Ready to transform your vision into reality? Our team is here to support your journey towards global impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 2xl:gap-24">
          {/* Info */}
          <div className="space-y-8 2xl:space-y-10">
            {[
              { icon: <MdEmail size={20} />, title: "Email", value: "hello@example.com", link: "mailto:hello@example.com" },
              { icon: <MdLocationOn size={20} />, title: "Address", value: "3A, Bertram St, Esplanade, Kolkata 700087", link: "#" },
              { icon: <MdPhone size={20} />, title: "Phone", value: "+91 98305 90929", link: "tel:+919830590929" },
            ].map((item, index) => (
              <a key={index} href={item.link} className="flex items-center gap-6 bg-white rounded-2xl p-6 sm:p-8 2xl:p-10 shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 2xl:h-16 2xl:w-16 flex items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg">
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg 2xl:text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm sm:text-base 2xl:text-base font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-[3rem] shadow-2xl p-8 sm:p-12 2xl:p-14 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 2xl:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 2xl:gap-8">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-3 2xl:mb-4 uppercase">Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} placeholder="Name" className="w-full px-6 py-4 2xl:py-5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:border-indigo-600 focus:outline-none transition-all text-base 2xl:text-base font-medium" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-3 2xl:mb-4 uppercase">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email" className="w-full px-6 py-4 2xl:py-5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:border-indigo-600 focus:outline-none transition-all text-base 2xl:text-base font-medium" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 2xl:gap-8">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-3 2xl:mb-4 uppercase">Phone</label>
                  <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} onBlur={handleBlur} placeholder="Phone" className="w-full px-6 py-4 2xl:py-5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:border-indigo-600 focus:outline-none transition-all text-base 2xl:text-base font-medium" />
                </div>
                <div className="relative" ref={dropdownRef}>
                  <label className="block text-xs font-bold text-slate-900 mb-3 2xl:mb-4 uppercase">Address</label>
                  <input type="text" name="address" value={addrQuery} onChange={handleChange} onBlur={handleBlur} placeholder="Address" className="w-full px-6 py-4 2xl:py-5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:border-indigo-600 focus:outline-none transition-all text-base 2xl:text-base font-medium" />
                  {addrOpen && (addrLoading || addrSuggestions.length > 0) && (
                    <div className="absolute z-50 mt-2 w-full rounded-2xl border border-slate-100 bg-white shadow-2xl overflow-hidden text-sm 2xl:text-sm">
                      {addrLoading ? <div className="p-4 text-slate-500">Searching...</div> : 
                        addrSuggestions.map(item => (
                          <button key={item.place_id} type="button" onClick={() => selectSuggestion(item)} className="w-full text-left px-5 py-3 2xl:py-4 hover:bg-slate-50 transition truncate border-b border-slate-50 last:border-0">{item.display_name}</button>
                        ))
                      }
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-3 2xl:mb-4 uppercase">Message</label>
                <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Message" className="w-full px-6 py-4 2xl:py-5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:border-indigo-600 focus:outline-none transition-all resize-none text-base 2xl:text-base font-medium" />
              </div>
              <button type="submit" disabled={isLoading} className="w-full py-5 2xl:py-6 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-700 transition-all text-lg 2xl:text-xl active:scale-[0.98]">
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Full-Width Map Detail */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ amount: 0.1 }}
          transition={{ duration: 1 }}
          className="mt-20 sm:mt-24 2xl:mt-24 w-full h-[350px] sm:h-[450px] 2xl:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white relative group"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2755315510!2d88.351239!3d22.5606456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277063cc9b257%3A0xe54970477e68e4c7!2s3A%2C%20Bertram%20St%2C%20Esplanade%2C%20Kolkata%2C%20West%20Bengal%20700087!5e0!3m2!1sen!2sin!4v1712495000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(1) contrast(1.1) brightness(1.05)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
            className="hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute top-6 left-6 2xl:top-4 2xl:left-4 bg-white/90 backdrop-blur-md p-4 2xl:p-3 rounded-2xl shadow-xl border border-indigo-50/50 hidden sm:block">
            <h5 className="text-sm 2xl:text-xs font-black text-slate-900 mb-1">Corporate HQ</h5>
            <p className="text-xs 2xl:text-[10px] font-bold text-indigo-600">Esplanade, Kolkata</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;