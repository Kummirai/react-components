"use client";

import CardTwo from "./cards/CardTwo";
import {
  FiLayout,
  FiFileText,
  FiSmartphone,
  FiMail,
  FiSearch,
  FiBarChart2,
  FiMapPin,
  FiImage,
  FiClock,
  FiCalendar,
  FiUsers,
  FiCreditCard,
  FiDatabase,
  FiTool,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

function Pricing() {
  const [category, setCategory] = useState(1);
  const [myPackageLabel, setMyPackageLabel] = useState("Website");

  const websitePlans = [
    {
      name: "Essential",
      description: "Perfect for freelancers and startups needing a simple online presence",
      price: "R2,500",
      isPopular: false,
      timeline: "3-5 days",
      features: [
        { icon: <FiLayout />, text: "1 Page Website" },
        { icon: <FiSmartphone />, text: "Full Mobile Optimization" },
        { icon: <FiMail />, text: "Contact Form" },
        { icon: <FiSearch />, text: "Basic SEO" },
      ],
      includedFeatures: [
        "5-8 Custom Sections",
        "Social Media Links",
        "Hosting Setup Assistance",
        "2 Rounds of Revisions",
      ],
    },
    {
      name: "Professional",
      description: "Multi-page presence for established businesses",
      price: "R6,500",
      isPopular: true,
      timeline: "5-7 days",
      features: [
        { icon: <FiFileText />, text: "4-5 Pages" },
        { icon: <FiSmartphone />, text: "Premium Mobile Experience" },
        { icon: <FaWhatsapp />, text: "WhatsApp Integration" },
        { icon: <FiMapPin />, text: "Google Maps Integration" },
        { icon: <FiBarChart2 />, text: "Google Analytics" },
        { icon: <FiSearch />, text: "Advanced SEO" },
      ],
      includedFeatures: [
        "12-15 Custom Sections",
        "1 Month Free Maintenance",
        "3 Rounds of Revisions",
        "Priority Email Support",
      ],
    },
    {
      name: "Business",
      description: "Complete solution with blog and advanced features",
      price: "R8,500",
      isPopular: false,
      timeline: "7-10 days",
      features: [
        { icon: <FiFileText />, text: "5-6 Pages + Blog" },
        { icon: <FiSmartphone />, text: "Premium Mobile Experience" },
        { icon: <MdOutlineRateReview />, text: "Testimonials Slider" },
        { icon: <FiMail />, text: "Newsletter Signup" },
        { icon: <FiImage />, text: "Image Gallery" },
        { icon: <FiBarChart2 />, text: "Advanced SEO + Analytics" },
      ],
      includedFeatures: [
        "18+ Custom Sections",
        "3 Months Maintenance",
        "Free .co.za Domain Setup",
        "Content Upload Assistance",
        "Priority Support",
      ],
    },
  ];

  const webAppPlans = [
    {
      name: "Starter App",
      description: "Simple booking system for single professionals",
      price: "R15,000",
      isPopular: false,
      timeline: "2-3 weeks",
      features: [
        { icon: <FiCalendar />, text: "Appointment Booking" },
        { icon: <FiSmartphone />, text: "Mobile Friendly" },
        { icon: <FiMail />, text: "Email Confirmations" },
        { icon: <FiUsers />, text: "Client Portal" },
        { icon: <FiClock />, text: "Availability Management" },
      ],
      includedFeatures: [
        "Single Professional",
        "Cancel/Reschedule",
        "Email Reminders",
        "Basic Dashboard",
        "1 Month Maintenance",
      ],
    },
    {
      name: "Business App",
      description: "Multi-user system for growing businesses",
      price: "R25,000",
      isPopular: true,
      timeline: "4-6 weeks",
      features: [
        { icon: <FiCalendar />, text: "Advanced Booking System" },
        { icon: <FiUsers />, text: "Multiple Staff/Doctors" },
        { icon: <FiMail />, text: "Email & SMS Notifications" },
        { icon: <FiBarChart2 />, text: "Reporting Dashboard" },
        { icon: <FiDatabase />, text: "Client Database" },
        { icon: <FiTool />, text: "Staff Management" },
      ],
      includedFeatures: [
        "Unlimited Appointments",
        "Automated Reminders",
        "3 Months Maintenance",
        "Priority Support",
        "Staff Permissions",
      ],
    },
    {
      name: "Enterprise App",
      description: "Full-featured business management solution",
      price: "R40,000",
      isPopular: false,
      timeline: "6-8 weeks",
      features: [
        { icon: <FiCalendar />, text: "Smart Scheduling" },
        { icon: <FiUsers />, text: "Multiple Locations/Departments" },
        { icon: <FiCreditCard />, text: "Payment Processing" },
        { icon: <FiDatabase />, text: "Advanced Analytics" },
        { icon: <FiTool />, text: "API Integrations" },
        { icon: <FiUsers />, text: "Role-Based Access" },
      ],
      includedFeatures: [
        "API Integrations",
        "Custom Reporting",
        "6 Months Maintenance",
        "Dedicated Support",
        "Training Session",
        "Data Migration Assistance",
      ],
    },
  ];

  const tabs = [
    { id: 1, title: "Website Packages", label: "Website" },
    { id: 2, title: "Web App Packages", label: "Web App" },
  ];

  const selectCategory = (id) => {
    setCategory(id);
    const tab = tabs.find((t) => t.id === id);
    if (tab) setMyPackageLabel(tab.label);
  };

  const handleGetStarted = (plan) => {
    const subject = encodeURIComponent(`Interested in the ${plan.name} plan`);
    const body = encodeURIComponent(
      `Hi Milton,\n\nI'm interested in the ${plan.name} plan (${plan.price}).\n\nCould we discuss this further?\n\nThanks!`,
    );
    window.open(`mailto:hello@milton.dev?subject=${subject}&body=${body}`);
  };

  return (
    <section className="w-full relative overflow-hidden bg-white dark:bg-[#070b15]" id="pricing">
      {/* Top fade gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-[#070b15] z-10 pointer-events-none" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/30 dark:bg-cyan/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 dark:bg-cyan/[0.08] rounded-full blur-3xl"></div>
      </div>

      <section className="mx-auto flex flex-col items-center max-w-3xl py-10 gap-5">
        <h2 className="text-3xl sm:text-[32px] text-center sm:leading-10 text-navy dark:text-light font-semibold max-w-2xl leading-6 p-3 rounded-lg">
          Choose a
          <span className="text-cyan mx-2">{myPackageLabel}</span>
          plan that works for your business
        </h2>
        <p className="text-center text-lg text-navy/60 dark:text-light/60 font-normal max-w-2xl leading-6">
          Whether you need a simple online presence or a powerful web
          application, I&apos;ve got you covered. Every plan includes custom
          design, mobile responsiveness, and ongoing support. Hosting and domain
          are quoted separately based on your needs.
        </p>

        <div className="flex flex-col sm:justify-center sm:flex-row w-3/4 gap-4">
          {tabs.map((tab) => {
            const isActive = tab.id === category;
            return (
              <button
                key={tab.id}
                className={
                  isActive
                    ? "py-2 px-5 text-sm bg-navy dark:bg-cyan text-white rounded-full shadow-lg shadow-navy/30 transition-all duration-300 hover:scale-105"
                    : "text-navy/70 dark:text-light/70 py-2 px-5 text-sm border-2 border-navy/20 dark:border-light/20 rounded-full hover:cursor-pointer hover:border-cyan hover:text-cyan transition-all duration-300 hover:scale-105"
                }
                onClick={() => selectCategory(tab.id)}
              >
                {tab.title}
              </button>
            );
          })}
        </div>
      </section>

      {category === 1 ? (
        <section className="max-w-6xl mx-auto flex items-stretch justify-center flex-wrap gap-5 pb-20">
          {websitePlans.map((plan) => (
            <CardTwo
              key={plan.name}
              plan={plan}
              onGetStarted={() => handleGetStarted(plan)}
            />
          ))}
        </section>
      ) : (
        <section className="max-w-6xl mx-auto flex items-stretch justify-center flex-wrap gap-5 pb-20">
          {webAppPlans.map((plan) => (
            <CardTwo
              key={plan.name}
              plan={plan}
              onGetStarted={() => handleGetStarted(plan)}
            />
          ))}
        </section>
      )}

      <div className="text-center pb-20">
        <p className="text-navy/60 dark:text-light/60 mb-4">
          Don&apos;t see exactly what you need?
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold border-2 border-cyan text-cyan transition-all duration-300 hover:scale-105 hover:bg-cyan hover:text-white"
        >
          Request a Custom Quote
        </Link>
      </div>
    </section>
  );
}

export default Pricing;
