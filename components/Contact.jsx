"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiClock,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: "Location",
      details: ["Johannesburg, South Africa", "Available for remote work worldwide"],
      link: null,
    },
    {
      icon: <FiMail />,
      title: "Email",
      details: ["ajaxmilton@hotmail.com"],
      link: "mailto:ajaxmilton@hotmail.com",
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      details: ["+27 68 829 4394", "+27 78 267 7436"],
      link: "tel:+27688294394",
    },
    {
      icon: <FiClock />,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com/", label: "Twitter" },
    { icon: <FaFacebook />, href: "https://facebook.com/", label: "Facebook" },
  ];

  return (
    <section className="relative w-full py-16 overflow-hidden bg-white dark:bg-[#070b15]" id="contact">
      {/* Top fade gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-[#070b15] z-10 pointer-events-none" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/30 dark:bg-cyan/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 dark:bg-cyan/[0.08] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-navy dark:text-light">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-navy/60 dark:text-light/60 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s bring your
            ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-5 bg-white/60 dark:bg-[#070b15]/80 border border-navy/10 dark:border-light/10 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan/20"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-cyan">{info.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-navy dark:text-light mb-2">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-navy/60 dark:text-light/60">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
              </div>
            ))}

            <div className="rounded-2xl p-6 bg-white/60 dark:bg-[#070b15]/80 border border-navy/10 dark:border-light/10 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan/20">
              <h3 className="text-lg font-semibold text-navy dark:text-light mb-4 text-center">
                Connect With Me
              </h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="group relative p-3 rounded-full bg-navy/5 dark:bg-light/5 border border-navy/10 dark:border-light/10 text-navy/70 dark:text-light/70 transition-all duration-300 hover:scale-110 hover:text-cyan hover:border-cyan"
                    aria-label={social.label}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <div className="absolute inset-0 rounded-full bg-cyan opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-10"></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-white/60 dark:bg-[#070b15]/80 border border-navy/10 dark:border-light/10 shadow-xl">
            <h3 className="text-xl font-semibold mb-6 text-navy dark:text-light text-center">
              Get a Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="group">
                <label className="block text-sm font-medium text-navy/70 dark:text-light/70 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-navy/40 dark:text-light/40 group-focus-within:text-cyan transition-colors" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 dark:bg-[#070b15] border border-navy/20 dark:border-light/20 text-navy dark:text-light placeholder-navy/40 dark:placeholder-light/40 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-navy/70 dark:text-light/70 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-navy/40 dark:text-light/40 group-focus-within:text-cyan transition-colors" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 dark:bg-[#070b15] border border-navy/20 dark:border-light/20 text-navy dark:text-light placeholder-navy/40 dark:placeholder-light/40 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-navy/70 dark:text-light/70 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-[#070b15] border border-navy/20 dark:border-light/20 text-navy dark:text-light placeholder-navy/40 dark:placeholder-light/40 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-navy/70 dark:text-light/70 mb-2">
                  Message
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-4 text-navy/40 dark:text-light/40 group-focus-within:text-cyan transition-colors" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/80 dark:bg-[#070b15] border border-navy/20 dark:border-light/20 text-navy dark:text-light placeholder-navy/40 dark:placeholder-light/40 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-3 rounded-xl font-semibold text-white transition-all duration-300
                  flex items-center justify-center gap-2
                  ${
                    isSubmitting
                      ? "bg-navy/50 dark:bg-cyan/50 cursor-not-allowed"
                      : "bg-navy dark:bg-cyan shadow-lg shadow-navy/30 dark:shadow-cyan/30 hover:scale-105 hover:shadow-xl"
                  }
                `}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700">
                  <FiCheckCircle className="text-lg" />
                  <span className="text-sm">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700">
                  <FiAlertCircle className="text-lg" />
                  <span className="text-sm">
                    Something went wrong. Please try again.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-navy/50 dark:text-light/50">
            Available for freelance work | Quick response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
