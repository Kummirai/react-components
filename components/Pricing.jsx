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
  FiDatabase,
  FiTool,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

function Pricing() {
  const [category, setCategory] = useState(1);

  const websitePlans = [
    {
      name: "Essential",
      description: "A single page to get your business online fast — perfect for freelancers and side hustles",
      price: "R2,500",
      isPopular: false,
      timeline: "3-5 days",
      features: [
        { icon: <FiLayout />, text: "One-page site with all your key info" },
        { icon: <FiSmartphone />, text: "Looks great on any device" },
        { icon: <FiMail />, text: "Contact form so clients can reach you" },
        { icon: <FiSearch />, text: "Basic SEO so people can find you" },
      ],
      includedFeatures: [
        "5-8 sections to tell your story",
        "Social media links",
        "Help setting up hosting",
        "2 rounds of changes",
      ],
    },
    {
      name: "Professional",
      description: "A full website that makes your business look established — ideal for local businesses ready to grow",
      price: "R5,000",
      isPopular: true,
      timeline: "5-7 days",
      features: [
        { icon: <FiFileText />, text: "4-5 pages — home, about, services, contact, more" },
        { icon: <FiSmartphone />, text: "Polished mobile experience" },
        { icon: <FaWhatsapp />, text: "WhatsApp button so customers can chat with you" },
        { icon: <FiMapPin />, text: "Google Maps so clients can find your location" },
        { icon: <FiBarChart2 />, text: "Google Analytics to see your traffic" },
        { icon: <FiSearch />, text: "Advanced SEO to rank higher locally" },
      ],
      includedFeatures: [
        "12-15 custom sections",
        "1 month free maintenance",
        "3 rounds of changes",
        "Priority email support",
      ],
    },
    {
      name: "Business",
      description: "A complete online presence with a blog and marketing tools — built for businesses that want to grow their audience",
      price: "R7,500",
      isPopular: false,
      timeline: "7-10 days",
      features: [
        { icon: <FiFileText />, text: "5-6 pages plus a blog to share updates" },
        { icon: <FiSmartphone />, text: "Premium mobile experience" },
        { icon: <MdOutlineRateReview />, text: "Testimonials slider to build trust" },
        { icon: <FiMail />, text: "Newsletter signup to grow your email list" },
        { icon: <FiImage />, text: "Image gallery to showcase your work" },
        { icon: <FiBarChart2 />, text: "Advanced SEO + Analytics" },
      ],
      includedFeatures: [
        "18+ custom sections",
        "3 months free maintenance",
        "Free .co.za domain",
        "Content upload help",
        "Priority support",
      ],
    },
  ];

  const webAppPlans = [
    {
      name: "Starter App",
      description: "Let clients book their own appointments online — perfect for solo professionals like doctors, therapists, or stylists",
      price: "R10,000",
      isPopular: false,
      timeline: "2-3 weeks",
      features: [
        { icon: <FiCalendar />, text: "Online booking — clients pick their own slot" },
        { icon: <FiSmartphone />, text: "Works on phones and tablets" },
        { icon: <FiMail />, text: "Automatic email confirmations" },
        { icon: <FiUsers />, text: "Client portal to manage bookings" },
        { icon: <FiClock />, text: "Set your available hours, block time off" },
      ],
      includedFeatures: [
        "Single professional",
        "Cancel/reschedule built in",
        "Email reminders",
        "Basic dashboard",
        "1 month maintenance",
      ],
    },
    {
      name: "Business App",
      description: "Multi-user booking and management for clinics, salons, or service teams with multiple staff",
      price: "R18,000",
      isPopular: true,
      timeline: "4-6 weeks",
      features: [
        { icon: <FiCalendar />, text: "Advanced booking with staff scheduling" },
        { icon: <FiUsers />, text: "Multiple staff or doctors with profiles" },
        { icon: <FiMail />, text: "Email & SMS notifications" },
        { icon: <FiBarChart2 />, text: "Reporting dashboard to track performance" },
        { icon: <FiDatabase />, text: "Client database with history" },
        { icon: <FiTool />, text: "Staff management and permissions" },
      ],
      includedFeatures: [
        "Unlimited appointments",
        "Automated reminders",
        "3 months maintenance",
        "Priority support",
        "Staff permissions",
      ],
    },
  ];

  const tabs = [
    { id: 1, title: "Website Packages" },
    { id: 2, title: "Web App Packages" },
  ];

  const selectCategory = (id) => {
    setCategory(id);
  };

  const handleGetStarted = (plan) => {
    const subject = encodeURIComponent(`Interested in the ${plan.name} plan`);
    const body = encodeURIComponent(
      `Hi Milton,\n\nI'm interested in the ${plan.name} plan (${plan.price}).\n\nCould we discuss this further?\n\nThanks!`,
    );
    window.open(`mailto:hello@milton.dev?subject=${subject}&body=${body}`);
  };

  return (
    <section className="w-full relative overflow-hidden bg-white dark:bg-[#070b15] py-16" id="services">
      {/* Top fade gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-[#070b15] z-10 pointer-events-none" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/30 dark:bg-cyan/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 dark:bg-cyan/[0.08] rounded-full blur-3xl"></div>
      </div>

      <section className="mx-auto flex flex-col items-center max-w-3xl pt-12 pb-12 gap-8">
        <h2 className="text-3xl sm:text-[32px] text-center sm:leading-10 text-navy dark:text-light font-semibold max-w-2xl leading-6 p-3 rounded-lg">
          Pick a plan
        </h2>
        <p className="text-center text-lg text-navy/60 dark:text-light/60 font-normal max-w-2xl leading-6">
          Custom design, mobile responsiveness, and support on every plan.
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
        <section className="max-w-6xl mx-auto flex items-stretch justify-center flex-wrap gap-8">
          {websitePlans.map((plan) => (
            <CardTwo
              key={plan.name}
              plan={plan}
              onGetStarted={() => handleGetStarted(plan)}
            />
          ))}
        </section>
      ) : (
        <section className="max-w-6xl mx-auto flex items-stretch justify-center flex-wrap gap-8">
          {webAppPlans.map((plan) => (
            <CardTwo
              key={plan.name}
              plan={plan}
              onGetStarted={() => handleGetStarted(plan)}
            />
          ))}
        </section>
      )}

      <p className="text-center text-sm text-navy/40 dark:text-light/40 mt-12">
        * Hosting and domain quoted separately
      </p>

      <div className="text-center">
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
