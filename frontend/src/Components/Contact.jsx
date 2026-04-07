import React, { useEffect, useMemo, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
    lat: "",
    lon: "",
    formattedAddress: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });
  const [touched, setTouched] = useState({});

  // ✅ Address lookup UI state
  const [addrQuery, setAddrQuery] = useState("");
  const [addrSuggestions, setAddrSuggestions] = useState([]);
  const [addrLoading, setAddrLoading] = useState(false);
  const [addrOpen, setAddrOpen] = useState(false);

  const abortRef = useRef(null);
  const debounceRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  // Close suggestions on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setAddrOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const patterns = useMemo(
    () => ({
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      mobile: /^[0-9]{10}$/,
      name: /^[a-zA-Z\s]{2,50}$/,
      address: /^[a-zA-Z0-9\s,.-]{5,200}$/,
    }),
    []
  );

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (!patterns.name.test(value.trim()))
          error = "Name must be 2-50 characters";
        break;

      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!patterns.email.test(value.trim())) error = "Invalid email";
        break;

      case "mobile":
        if (!value.trim()) error = "Mobile is required";
        else if (!patterns.mobile.test(value.trim())) error = "10 digits required";
        break;

      case "address":
        if (!value.trim()) error = "Address is required";
        else if (!patterns.address.test(value.trim()))
          error = "Address must be 5-200 characters";
        break;

      case "message":
        if (value.trim().length > 500) error = "Max 500 characters allowed";
        break;

      default:
        break;
    }

    return error;
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: "", message: "" }), 4000);
  };

  // ✅ Nominatim Address Search (no API key)
  const searchAddress = async (q) => {
    const query = String(q || "").trim();
    if (query.length < 3) {
      setAddrSuggestions([]);
      return;
    }

    // cancel previous
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setAddrLoading(true);

    try {
      const url =
        "https://nominatim.openstreetmap.org/search?" +
        new URLSearchParams({
          q: query,
          format: "json",
          addressdetails: "1",
          limit: "6",
        }).toString();

      const res = await fetch(url, {
        method: "GET",
        signal: controller.signal,
        headers: {
          // OSM suggests identifying your app; keep it simple
          "Accept-Language": "en",
        },
      });

      const data = await res.json();
      setAddrSuggestions(Array.isArray(data) ? data : []);
      setAddrOpen(true);
    } catch (e) {
      // ignore abort errors
      if (e?.name !== "AbortError") setAddrSuggestions([]);
    } finally {
      setAddrLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Special handling for address typing: update addrQuery + form.address
    if (name === "address") {
      setAddrQuery(value);
      setForm((prev) => ({
        ...prev,
        address: value,
        // reset geo until user selects a suggestion
        lat: "",
        lon: "",
        formattedAddress: "",
      }));

      if (touched.address) {
        setErrors((prev) => ({ ...prev, address: validateField("address", value) }));
      }

      // debounce search
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => searchAddress(value), 400);
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));

    // ✅ Keep dropdown open a bit to allow click selection
    if (name === "address") {
      setTimeout(() => setAddrOpen(true), 0);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    ["name", "email", "mobile", "address"].forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });
    return newErrors;
  };

  // ✅ When user selects a suggestion
  const selectSuggestion = (item) => {
    const formatted = item?.display_name || "";
    const lat = item?.lat ? String(item.lat) : "";
    const lon = item?.lon ? String(item.lon) : "";

    setForm((prev) => ({
      ...prev,
      address: formatted, 
      formattedAddress: formatted,
      lat,
      lon,
    }));

    setAddrQuery(formatted);
    setAddrOpen(false);
    setAddrSuggestions([]);

    setErrors((prev) => ({ ...prev, address: validateField("address", formatted) }));
    setTouched((prev) => ({ ...prev, address: true }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setTouched({
    name: true,
    email: true,
    mobile: true,
    address: true,
    message: true,
  });

  const newErrors = validateForm();

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    showToast("error", "Please fix the errors");
    return;
  }

  setIsLoading(true);

  try {
    const payload = {
      project: "CROWD_FUNDING",
      name: form.name,
      email: form.email,
      mobile: form.mobile,
      address: form.address,
      formattedAddress: form.formattedAddress || form.address,
      lat: form.lat,
      lon: form.lon,
      message: form.message,
    };

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwTGN-QWyr2BPbV9NGUCWSTpcv9SO_PqQsiNxz-KSOQqoyhm3ZTVyYALMWg3fZYLWSX/exec",
      {
        method: "POST",
    
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      }
    );


    const text = await response.text();

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      console.log("Non-JSON response from Apps Script:", text);
      throw new Error("Server didn't return JSON. Check Apps Script deploy access.");
    }

    if (!response.ok || !result?.ok) {
      throw new Error(result?.error || "Submission failed");
    }

    showToast("success", "We received your message! We'll get back to you soon.");

    setForm({
      name: "",
      email: "",
      mobile: "",
      address: "",
      message: "",
      lat: "",
      lon: "",
      formattedAddress: "",
    });
    setErrors({});
    setTouched({});
    setAddrQuery("");
    setAddrSuggestions([]);
    setAddrOpen(false);
  } catch (err) {
    console.error(err);
    showToast("error", err?.message || "Failed to send. Try again.");
  } finally {
    setIsLoading(false);
  }
};
  return (
    <section
      id="contact"
      className="relative py-[var(--size-fluid-section-py)] bg-gradient-to-b from-[#f8faff] via-white to-[#f3f6ff] overflow-hidden"
    >
      {/* Background Blur */}
      <div className="hidden md:block absolute -top-40 -right-40 w-[200px] sm:w-[400px] lg:w-[600px] h-[200px] sm:h-[400px] lg:h-[600px] bg-indigo-200/30 rounded-full blur-[120px]" />
      <div className="hidden md:block absolute -bottom-40 -left-40 w-[200px] sm:w-[400px] lg:w-[600px] h-[200px] sm:h-[400px] lg:h-[600px] bg-blue-200/30 rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 2xl:mb-20" data-aos="fade-up">
          <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-primary bg-indigo-50 px-5 py-2 rounded-full mb-4 sm:mb-6">
            Get In Touch
          </span>

          <h2 className="heading-section text-gray-900 mb-6 sm:mb-8">
            Let's Start a{" "}
            <span className="text-primary italic">
              Conversation
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-body text-gray-900 font-medium leading-relaxed">
            Ready to transform your vision into reality? Our team is here to 
            support your journey towards global impact.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-11 lg:gap-12 xl:gap-14 2xl:gap-16">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8" data-aos="fade-right">
            {[
              {
                icon: <MdEmail size={24} />,
                title: "Email",
                value: "hello@example.com",
                link: "mailto:hello@example.com",
              },
              {
                icon: <MdLocationOn size={24} />,
                title: "Address",
                value:
                  "3A, Bertram St, Esplanade, Dharmatala, Taltala, Kolkata, West Bengal 700087",
                link:
                  "https://www.google.com/maps?q=3A%20Bertram%20St%2C%20Esplanade%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087",
              },
              {
                icon: <MdPhone size={24} />,
                title: "Phone",
                value: "+91 98305 90929",
                link: "tel:+919830590929",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white rounded-xl p-4 sm:p-5 2xl:p-6 shadow-md border border-gray-100 hover:shadow-xl z-50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex-shrink-0 h-10 w-10 sm:h-11 sm:w-11 2xl:h-12 2xl:w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-gray-900 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-[2.5rem] shadow-2xl p-6 sm:p-8 md:p-10 2xl:p-12 border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Send a Message</h3>
              <p className="text-gray-600 text-sm sm:text-base font-medium mb-8 sm:mb-10 lg:mb-12">
                Fill out the form below and we'll respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8" autoComplete="on">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Full Name <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your name"
                      className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-200 focus:outline-none font-bold text-base ${
                        errors.name && touched.name
                          ? "border-red-500 bg-red-50/50"
                          : "border-gray-200 bg-gray-50 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                      }`}
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-600 text-xs mt-3 font-bold">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Email Address <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your email"
                      className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-200 focus:outline-none font-bold text-base ${
                        errors.email && touched.email
                          ? "border-red-500 bg-red-50/50"
                          : "border-gray-200 bg-gray-50 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-600 text-xs mt-3 font-bold">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Phone Number <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      autoComplete="tel"
                      value={form.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 00000 00000"
                      className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-200 focus:outline-none font-bold text-base ${
                        errors.mobile && touched.mobile
                          ? "border-red-500 bg-red-50/50"
                          : "border-gray-200 bg-gray-50 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                      }`}
                    />
                    {errors.mobile && touched.mobile && (
                      <p className="text-red-600 text-xs mt-3 font-bold">{errors.mobile}</p>
                    )}
                  </div>

                  {/* ✅ Address with suggestions */}
                  <div className="relative" ref={dropdownRef}>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Address <span className="text-red-500 ml-1">*</span>
                    </label>

                    <input
                      type="text"
                      name="address"
                      autoComplete="street-address"
                      value={addrQuery}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={() => {
                        if (addrSuggestions.length) setAddrOpen(true);
                      }}
                      placeholder="Type your address..."
                      className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-200 focus:outline-none font-bold text-base ${
                        errors.address && touched.address
                          ? "border-red-500 bg-red-50/50"
                          : "border-gray-200 bg-gray-50 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100"
                      }`}
                    />

                    {/* Suggestions dropdown */}
                    {addrOpen && (addrLoading || addrSuggestions.length > 0) && (
                      <div className="absolute z-50 mt-2 w-full rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
                        {addrLoading && (
                          <div className="px-4 py-3 text-sm text-gray-600">
                            Searching location...
                          </div>
                        )}

                        {!addrLoading &&
                          addrSuggestions.map((item) => (
                            <button
                              key={item.place_id}
                              type="button"
                              onMouseDown={(e) => e.preventDefault()} // prevent blur
                              onClick={() => selectSuggestion(item)}
                              className="w-full text-left px-4 py-3 hover:bg-gray-50 transition text-sm text-gray-800"
                              title={item.display_name}
                            >
                              {item.display_name}
                            </button>
                          ))}

                        {!addrLoading && addrSuggestions.length === 0 && (
                          <div className="px-4 py-3 text-sm text-gray-600">
                            No results. Try a more specific address.
                          </div>
                        )}
                      </div>
                    )}

                    {errors.address && touched.address && (
                      <p className="text-red-600 text-xs mt-2 font-medium">{errors.address}</p>
                    )}

                    {/* ✅ Show lat/lon if selected */}
                    {form.lat && form.lon && (
                      <p className="text-xs text-gray-500 mt-2">
                        Location pinned: {form.lat}, {form.lon}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-sm font-bold text-gray-800">
                      Message <span className="text-gray-400 font-normal text-xs ml-2">(Optional)</span>
                    </label>
                    <span className="text-xs text-gray-500 font-bold">{form.message.length}/500</span>
                  </div>
                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    maxLength="500"
                    placeholder="How can we help you?"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 bg-gray-50 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 focus:outline-none resize-none font-bold text-base transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-5 mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold rounded-2xl shadow-xl hover:shadow-2xl z-50 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-lg active:scale-[0.98]"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-3">
                      <span className="animate-spin h-5 w-5 border-3 border-white border-t-transparent rounded-full" />
                      Sending Message...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Toast — Bottom Right */}
      {toast.show && (
        <div
          className={`fixed bottom-20 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-2xl z-[9999] border text-xs sm:text-sm font-semibold ${
            toast.type === "success"
              ? "bg-green-100 text-green-700 border-green-200"
              : "bg-red-100 text-red-700 border-red-200"
          }`}
        >
          {toast.message}
        </div>
      )}
    </section>
  );
};

export default ContactUs;