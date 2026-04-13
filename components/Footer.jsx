"use client";

import React from "react";
import Link from "next/link";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiClock,
  FiSend,
  FiArrowUp,
  FiHeart,
} from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Website Development", href: "/services/websites" },
    { name: "Web Applications", href: "/services/web-apps" },
    { name: "E-commerce Solutions", href: "/services/ecommerce" },
    { name: "UI/UX Design", href: "/services/design" },
    { name: "SEO Optimization", href: "/services/seo" },
  ];

  const contactInfo = [
    { icon: <FiMapPin />, text: "Harare, Zimbabwe", href: null },
    {
      icon: <FiMail />,
      text: "hello@milton.dev",
      href: "mailto:hello@milton.dev",
    },
    { icon: <FiPhone />, text: "+263 77 123 4567", href: "tel:+263771234567" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/",
      label: "GitHub",
      color: "hover:text-gray-900",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/",
      label: "LinkedIn",
      color: "hover:text-[#0077B5]",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/",
      label: "Twitter",
      color: "hover:text-[#1DA1F2]",
    },
    {
      icon: <FaFacebook />,
      href: "https://facebook.com/",
      label: "Facebook",
      color: "hover:text-[#1877F2]",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/",
      label: "Instagram",
      color: "hover:text-[#E4405F]",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Animated gradient background with blur effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="group inline-block">
              <h2 className="text-2xl font-bold">
                <span className="text-gray-800 dark:text-white">mil</span>
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  ton.
                </span>
              </h2>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Crafting robust web solutions with modern technologies. Let's
              build something amazing together.
            </p>
            {/* Contact Info */}
            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <span className="text-blue-500">{info.icon}</span>
                  {info.href ? (
                    <Link
                      href={info.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      {info.text}
                    </Link>
                  ) : (
                    <span className="text-gray-600 dark:text-gray-400">
                      {info.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 relative inline-block">
              Stay Updated
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to get the latest updates on my work and tech insights.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 pr-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-all duration-300 hover:scale-105"
                >
                  <FiSend className="text-sm" />
                </button>
              </div>
            </form>
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className={`group relative p-2 rounded-full backdrop-blur-md bg-white/20 border border-white/30 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <span className="text-lg">{social.icon}</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-10"></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
              © {currentYear} Milton Kumirai. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span>Made with</span>
              <FiHeart className="text-red-500 animate-pulse text-sm" />
              <span>in Zimbabwe</span>
            </div>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white/10 backdrop-blur-sm border border-white/30 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white"
            >
              <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
