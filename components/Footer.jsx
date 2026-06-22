"use client";

import React from "react";
import Link from "next/link";
import {
  FiMapPin,
  FiMail,
  FiPhone,
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
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Website Development", href: "/services" },
    { name: "Web Applications", href: "/services" },
    { name: "E-commerce Solutions", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
    { name: "Maintenance & Support", href: "/services" },
  ];

  const contactInfo = [
    { icon: <FiMapPin />, text: "Johannesburg, South Africa", href: null },
    {
      icon: <FiMail />,
      text: "ajaxmilton@hotmail.com",
      href: "mailto:ajaxmilton@hotmail.com",
    },
    { icon: <FiPhone />, text: "+27 68 829 4394", href: "tel:+27688294394" },
    { icon: <FiPhone />, text: "+27 78 267 7436", href: "tel:+27782677436" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/",
      label: "GitHub",
      color: "hover:text-light/80",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/",
      label: "LinkedIn",
      color: "hover:text-cyan",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/",
      label: "Twitter",
      color: "hover:text-cyan",
    },
    {
      icon: <FaFacebook />,
      href: "https://facebook.com/",
      label: "Facebook",
      color: "hover:text-cyan",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/",
      label: "Instagram",
      color: "hover:text-pink",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-navy dark:bg-[#070b15]">
      {/* Top fade gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-navy dark:to-[#070b15] z-10 pointer-events-none" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/30 dark:bg-cyan/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 dark:bg-cyan/[0.08] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="group inline-block">
              <h2 className="text-2xl font-bold">
                <span className="text-light">mil</span>
                <span className="text-cyan">ton.</span>
              </h2>
            </Link>
            <p className="text-sm text-light/60 leading-relaxed">
              Freelance web developer building modern websites and applications.
              Let&apos;s create something amazing together.
            </p>
            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <span className="text-cyan">{info.icon}</span>
                  {info.href ? (
                    <Link
                      href={info.href}
                      className="text-light/60 hover:text-cyan transition-colors"
                    >
                      {info.text}
                    </Link>
                  ) : (
                    <span className="text-light/60">{info.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-light mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-cyan rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-light/60 hover:text-cyan transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-light mb-4 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-cyan rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-light/60 hover:text-cyan transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-pink rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-semibold text-light mb-4 relative inline-block">
              Stay Updated
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-cyan rounded-full"></span>
            </h3>
            <p className="text-sm text-light/60 mb-4">
              Subscribe to get the latest updates on my work and tech insights.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                   className="w-full px-4 py-2 pr-12 rounded-xl bg-white/10 border border-light/20 text-light placeholder-light/40 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-cyan text-white transition-all duration-300 hover:scale-105"
                >
                  <FiSend className="text-sm" />
                </button>
              </div>
            </form>
            <div className="mt-6">
              <h4 className="text-sm font-medium text-light/80 mb-3">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className={`group relative p-2 rounded-full bg-light/10 border border-light/10 text-light/60 transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <span className="text-lg">{social.icon}</span>
                    <div className="absolute inset-0 rounded-full bg-cyan opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-10"></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-light/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-light/50 text-center sm:text-left">
              &copy; {currentYear} Milton Kumirai. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-light/50">
              <span>Made with</span>
              <FiHeart className="text-pink animate-pulse text-sm" />
              <span>in Zimbabwe</span>
            </div>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-light/10 border border-light/10 text-light/70 transition-all duration-300 hover:scale-105 hover:bg-navy hover:text-white dark:hover:bg-cyan"
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
