import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });
  const [touched, setTouched] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mobile: /^[0-9]{10}$/,
    name: /^[a-zA-Z\s]{2,50}$/,
  };

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
        else if (!patterns.email.test(value.trim()))
          error = "Invalid email";
        break;

      case "mobile":
        if (!value.trim()) error = "Mobile is required";
        else if (!patterns.mobile.test(value.trim()))
          error = "10 digits required";
        break;

      case "message":
        if (value.trim().length > 500)
          error = "Max 500 characters allowed";
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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
  };

  const validateForm = () => {
    const newErrors = {};
    ["name", "email", "mobile"].forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      mobile: true,
      message: true,
    });

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setToast({
        show: true,
        type: "error",
        message: "Please fix the errors",
      });
      setTimeout(() => setToast({ show: false, type: "", message: "" }), 4000);
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setToast({
        show: true,
        type: "success",
        message: "Message sent successfully! 🎉",
      });
      setForm({ name: "", email: "", mobile: "", message: "" });
      setErrors({});
      setTouched({});
    } catch {
      setToast({
        show: true,
        type: "error",
        message: "Failed to send. Try again.",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setToast({ show: false, type: "", message: "" }), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-[#f8faff] via-white to-[#f3f6ff] overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-100 px-5 py-2 rounded-full mb-6">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text italic text-transparent">
              Conversation
            </span>
          </h2>

          
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8" data-aos="fade-right">
            {[
              {
                icon: <MdEmail size={22} />,
                title: "Email",
                value: "hello@example.com",
                link: "mailto:hello@example.com",
              },
              {
                icon: <MdLocationOn size={22} />,
                title: "Location",
                value:
                  "3A, Bertram St, Esplanade, Dharmatala, Taltala, Kolkata, West Bengal 700087",
                link:
                  "https://www.google.com/maps?q=3A%20Bertram%20St%2C%20Esplanade%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087",
              },
              {
                icon: <MdPhone size={22} />,
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
                className="group flex items-start gap-5 bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form - UPDATED */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Send a Message
              </h3>
              <p className="text-gray-600 text-sm mb-8">
                Fill out the form below and we'll respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Full Name
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your name"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none font-medium text-sm ${
                        errors.name && touched.name
                          ? "border-red-500 bg-red-50/50"
                          : "border-gray-200 bg-gray-50 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                      }`}
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-600 text-xs mt-2 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Email Address
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your mail"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none font-medium text-sm ${
                        errors.email && touched.email
                          ? "border-red-500 bg-red-50/50"
                          : "border-gray-200 bg-gray-50 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-600 text-xs mt-2 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Phone Number
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your mobile number"
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none font-medium text-sm ${
                      errors.mobile && touched.mobile
                        ? "border-red-500 bg-red-50/50"
                        : "border-gray-200 bg-gray-50 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                    }`}
                  />
                  {errors.mobile && touched.mobile && (
                    <p className="text-red-600 text-xs mt-2 font-medium">
                      {errors.mobile}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-semibold text-gray-800">
                      Message
                      <span className="text-gray-400 font-normal text-xs ml-2">
                        (Optional)
                      </span>
                    </label>
                    <span className="text-xs text-gray-500">
                      {form.message.length}/500
                    </span>
                  </div>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    maxLength="500"
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 focus:outline-none resize-none font-medium text-sm transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-base"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      Sending...
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

      {/* Toast */}
      {toast.show && (
        <div
          className={`fixed bottom-10 right-10 px-6 py-4 rounded-full shadow-2xl ${
            toast.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {toast.message}
        </div>
      )}
    </section>
  );
};

export default ContactUs;