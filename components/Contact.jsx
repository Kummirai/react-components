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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
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
      details: ["Harare, Zimbabwe", "Available for remote work worldwide"],
      link: null,
    },
    {
      icon: <FiMail />,
      title: "Email",
      details: ["hello@milton.dev", "support@milton.dev"],
      link: "mailto:hello@milton.dev",
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      details: ["+263 77 123 4567", "+263 71 234 5678"],
      link: "tel:+263771234567",
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
    <section className="relative w-full py-20 overflow-hidden">
      {/* Animated gradient background with blur effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's work
            together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information - Flex Column Layout */}
          <div className="flex flex-col gap-4">
            {/* Contact Info Cards - Vertical Stack */}
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-5 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:opacity-10 transition-opacity duration-300"></div>

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-3xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {info.icon}
                  </div>

                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {info.title}
                    </h3>

                    {/* Details */}
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-sm text-gray-600 dark:text-gray-400"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
              </div>
            ))}

            {/* Social Links Card */}
            <div className="rounded-2xl p-6 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center">
                Connect With Me
              </h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="group relative p-3 rounded-full backdrop-blur-md bg-white/20 border border-white/30 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-110 hover:text-blue-600 hover:border-blue-500"
                    aria-label={social.label}
                  >
                    <span className="text-xl">{social.icon}</span>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-10"></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl p-6 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-3 rounded-xl font-semibold text-white transition-all duration-300
                  flex items-center justify-center gap-2
                  ${
                    isSubmitting
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30 hover:scale-105 hover:shadow-xl"
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

              {/* Success/Error Message */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700">
                  <FiCheckCircle className="text-lg" />
                  <span className="text-sm">
                    Message sent successfully! I'll get back to you soon.
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

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            📍 Available for freelance work | 🚀 Quick response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
