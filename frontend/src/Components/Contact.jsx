import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdEmail, MdLocationOn, MdPhone, MdCheckCircle } from "react-icons/md";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });
  const [touched, setTouched] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 50,
    });
  }, []);

  const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mobile: /^[0-9]{10}$/,
    name: /^[a-zA-Z\s]{2,50}$/,
    location: /^[a-zA-Z0-9\s,.-]{5,100}$/,
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
          error = "Invalid email address";
        break;

      case "mobile":
        if (!value.trim()) error = "Mobile is required";
        else if (!patterns.mobile.test(value.trim()))
          error = "Please enter 10 digits";
        break;

      case "location":
        if (!value.trim()) error = "Location is required";
        else if (!patterns.location.test(value.trim()))
          error = "Location must be 5-100 characters";
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
    ["name", "email", "mobile", "location"].forEach((field) => {
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
      location: true,
      message: true,
    });

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setToast({
        show: true,
        type: "error",
        message: "Please fix the errors below",
      });
      setTimeout(() => setToast({ show: false, type: "", message: "" }), 4000);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwTGN-QWyr2BPbV9NGUCWSTpcv9SO_PqQsiNxz-KSOQqoyhm3ZTVyYALMWg3fZYLWSX/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            project: "CROWD_FUNDING",
            name: form.name,
            email: form.email,
            mobile: form.mobile,
            location: form.location,
            message: form.message,
          }),
        }
      );

      const result = await response.json();

      if (!result.ok) throw new Error("Submission failed");

      setToast({
        show: true,
        type: "success",
        message: "Thank you! We received your inquiry and will respond within 24 hours.",
      });

      setForm({ name: "", email: "", mobile: "", location: "", message: "" });
      setErrors({});
      setTouched({});
    } catch (err) {
      setToast({
        show: true,
        type: "error",
        message: "Unable to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setToast({ show: false, type: "", message: "" }), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-50 rounded-full -mr-48 -mt-48 opacity-70" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-50 rounded-full -ml-40 -mb-40 opacity-70" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-20" data-aos="fade-up">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Let's discuss your<br />
              <span className="bg-gradient-to-r from-blue-600 to-slate-900 bg-clip-text text-transparent">
                next project
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Have questions about our services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Information - Left Sidebar */}
          <div className="md:col-span-2" data-aos="fade-right">
            <div className="space-y-8">
              {/* Email */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    <MdEmail size={20} />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                    Email
                  </h3>
                </div>
                <a
                  href="mailto:hello@example.com"
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  hello@example.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    <MdPhone size={20} />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                    Phone
                  </h3>
                </div>
                <a
                  href="tel:+919830590929"
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  +91 98305 90929
                </a>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    <MdLocationOn size={20} />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                    Office
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  3A, Bertram Street<br />
                  Esplanade, Dharmatala<br />
                  Kolkata, West Bengal 700087
                </p>
                <a
                  href="https://www.google.com/maps?q=3A%20Bertram%20St%2C%20Esplanade%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  View on Map →
                </a>
              </div>

              {/* Hours */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-slate-600">
                  <p className="text-sm">Monday - Friday: 11:00 AM - 7:00 PM</p>
                  <p className="text-sm">Saturday: 11:00 AM - 6:00 PM</p>
                  <p className="text-sm text-slate-500">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Section */}
          <div className="md:col-span-3" data-aos="fade-left">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name | Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Name"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium focus:outline-none ${
                        errors.name && touched.name
                          ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-200"
                          : "border-slate-200 bg-slate-50 focus:border-blue-400 focus:bg-white focus:ring-1 focus:ring-blue-100"
                      }`}
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Email"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium focus:outline-none ${
                        errors.email && touched.email
                          ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-200"
                          : "border-slate-200 bg-slate-50 focus:border-blue-400 focus:bg-white focus:ring-1 focus:ring-blue-100"
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Mobile | Location */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Mobile */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Phone Number"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium focus:outline-none ${
                        errors.mobile && touched.mobile
                          ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-200"
                          : "border-slate-200 bg-slate-50 focus:border-blue-400 focus:bg-white focus:ring-1 focus:ring-blue-100"
                      }`}
                    />
                    {errors.mobile && touched.mobile && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Location"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium focus:outline-none ${
                        errors.location && touched.location
                          ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-200"
                          : "border-slate-200 bg-slate-50 focus:border-blue-400 focus:bg-white focus:ring-1 focus:ring-blue-100"
                      }`}
                    />
                    {errors.location && touched.location && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">
                        {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Description - Full Width */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-semibold text-slate-900">
                      Description <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <span className="text-xs text-slate-500">
                      {form.message.length}/500
                    </span>
                  </div>
                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    maxLength="500"
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-slate-50 focus:border-blue-400 focus:bg-white focus:ring-1 focus:ring-blue-100 focus:outline-none resize-none text-sm font-medium transition-all duration-200"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-sm text-base flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed bottom-8 right-8 max-w-sm px-6 py-4 rounded-lg shadow-lg border flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4 ${
            toast.type === "success"
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          {toast.type === "success" ? (
            <MdCheckCircle size={20} className="flex-shrink-0 mt-0.5" />
          ) : (
            <span className="text-xl flex-shrink-0">⚠️</span>
          )}
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
      )}
    </section>
  );
};

export default ContactUs;