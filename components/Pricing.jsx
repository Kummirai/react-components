"use client";

import CardTwo from "./cards/CardTwo";
import {
  FiLayout,
  FiFileText,
  FiGrid,
  FiTool,
  FiSettings,
  FiSmartphone,
  FiMail,
  FiMessageCircle,
  FiBell,
  FiSearch,
  FiTrendingUp,
  FiBarChart2,
  FiMapPin,
  FiImage,
  FiStar,
  FiClock,
  FiCalendar,
  FiUsers,
  FiLock,
  FiShield,
  FiCreditCard,
  FiDatabase,
  FiGlobe,
  FiEdit,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { useState } from "react";

function Pricing() {
  const [category, setCategory] = useState(1);
  const [myPackage, setMyPackage] = useState("Website Packages");

  const websitePlans = [
    {
      name: "Express",
      description:
        "Perfect for freelancers and small businesses starting online",
      price: "R2,500",
      isPopular: false,
      features: [
        { icon: <FiLayout />, text: "1 Page Website" },
        { icon: <FiSmartphone />, text: "Full Mobile Optimization" },
        { icon: <FiMail />, text: "Contact Form" },
        { icon: <FiSearch />, text: "SEO Optimization" },
      ],
      includedFeatures: [
        "5-8 Custom Sections",
        "Social Media Links",
        "Hosting Setup Assistance",
        "5 Rounds of Revisions",
      ],
    },
    {
      name: "Essential",
      description: "Professional online presence for growing businesses",
      price: "R4,500",
      isPopular: false,
      features: [
        { icon: <FiFileText />, text: "3 Page Website" },
        { icon: <FiSmartphone />, text: "Full Mobile Optimization" },
        { icon: <FiMail />, text: "Contact Forms" },
        { icon: <FaWhatsapp />, text: "WhatsApp Integration" },
        { icon: <FiSearch />, text: "SEO Optimization" },
      ],
      includedFeatures: [
        "8-10 Custom Sections",
        "Google Maps Integration",
        "2 Rounds of Revisions",
        "Email Setup Guidance",
      ],
    },
    {
      name: "Professional",
      description: "Multi-page presence for established businesses",
      price: "R6,500",
      isPopular: true,
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
        "2 Rounds of Revisions",
        "1 Month Free Maintenance",
        "Priority Email Support",
      ],
    },
    {
      name: "Business",
      description: "Complete solution with advanced features",
      price: "R8,500",
      isPopular: false,
      features: [
        { icon: <FiFileText />, text: "5-6 Pages + Blog" },
        { icon: <FiSmartphone />, text: "Premium Mobile Experience" },
        { icon: <MdOutlineRateReview />, text: "Testimonials Slider" },
        { icon: <FiMail />, text: "Newsletter Signup" },
        { icon: <FiImage />, text: "Image Gallery" },
        { icon: <FiTrendingUp />, text: "Advanced SEO + Analytics" },
      ],
      includedFeatures: [
        "18+ Custom Sections",
        "3 Rounds of Revisions",
        "3 Months Maintenance",
        "Priority Support",
        "Free .co.za Domain Setup",
        "Content Upload Assistance",
      ],
    },
    {
      name: "Premium",
      description: "Feature-rich website with e-commerce capabilities",
      price: "R12,000",
      isPopular: false,
      features: [
        { icon: <FiFileText />, text: "10+ Pages" },
        { icon: <FiSmartphone />, text: "Premium Mobile Experience" },
        { icon: <FiCreditCard />, text: "E-commerce Integration" },
        { icon: <FiMail />, text: "Newsletter System" },
        { icon: <FiImage />, text: "Advanced Gallery" },
        { icon: <FiUsers />, text: "User Accounts" },
      ],
      includedFeatures: [
        "25+ Custom Sections",
        "Product Management",
        "Payment Gateway Setup",
        "6 Months Maintenance",
        "Priority Support",
        "SEO & Analytics Package",
      ],
    },
  ];

  const webAppPlans = [
    {
      name: "Booking App",
      description: "Simple appointment booking for single professionals",
      price: "R15,000",
      isPopular: false,
      features: [
        { icon: <FiCalendar />, text: "Appointment Booking" },
        { icon: <FiSmartphone />, text: "Mobile Friendly" },
        { icon: <FiMail />, text: "Email Confirmations" },
        { icon: <FiUsers />, text: "Patient/Client Portal" },
        { icon: <FiClock />, text: "Availability Management" },
      ],
      includedFeatures: [
        "Single Professional/Doctor",
        "Cancel/Reschedule Functionality",
        "Email Reminders",
        "1 Month Maintenance",
        "Basic Dashboard",
      ],
    },
    {
      name: "Business App",
      description: "Multi-user system for growing businesses",
      price: "R25,000",
      isPopular: true,
      features: [
        { icon: <FiCalendar />, text: "Advanced Booking System" },
        { icon: <FiUsers />, text: "Multiple Staff/Doctors" },
        { icon: <FiMail />, text: "Email & SMS Notifications" },
        { icon: <FiBarChart2 />, text: "Reporting Dashboard" },
        { icon: <FiDatabase />, text: "Client Database" },
        { icon: <FiSettings />, text: "Staff Management" },
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
      features: [
        { icon: <FiCalendar />, text: "Smart Scheduling" },
        { icon: <FiUsers />, text: "Multiple Locations/Departments" },
        { icon: <FiCreditCard />, text: "Payment Processing" },
        { icon: <FiBell />, text: "Real-time Notifications" },
        { icon: <FiDatabase />, text: "Advanced Analytics" },
        { icon: <FiLock />, text: "Role-Based Access" },
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
    {
      name: "Custom Web App",
      description: "Tailor-made solution for your specific needs",
      price: "Custom",
      isPopular: false,
      features: [
        { icon: <FiTool />, text: "Custom Features" },
        { icon: <FiDatabase />, text: "Custom Database Design" },
        { icon: <FiUsers />, text: "User Authentication" },
        { icon: <FiShield />, text: "Security First Approach" },
        { icon: <FiSettings />, text: "Scalable Architecture" },
        { icon: <FiGlobe />, text: "API Integrations" },
      ],
      includedFeatures: [
        "Tailored to Your Requirements",
        "Full Source Code Ownership",
        "3 Months Maintenance",
        "Priority Support",
        "Comprehensive Documentation",
        "Training Included",
      ],
    },
  ];

  const tabs = [
    {
      id: 1,
      title: "Website Packages",
    },
    {
      id: 2,
      title: "Web App Packages",
    },
  ];

  const selectCategory = (id) => {
    setCategory(id);
    setMyPackage(tabs[id - 1].title);
  };

  return (
    <section className="w-full relative overflow-hidden">
      {/* Gradient background with blur effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <section className="mx-auto flex flex-col items-center max-w-3xl py-10 gap-5">
        <h2 className="text-2xl  sm:text-[32px] text-center sm:leading-10 w-7/9 text-gray-800  dark:text-gray-300 font-medium max-w-2xl leading-6 backdrop-blur-sm bg-white/5 p-3 rounded-lg">
          Choose a
          <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mx-2">
            {myPackage.toLowerCase().slice(0, -1)}
          </span>
          that works for your business
        </h2>
        <p className="text-center text-lg text-gray-600 font-normal max-w-2xl leading-6">
          Choose a {myPackage.toLowerCase().slice(0, -1)} that works for your
          business Whether you need a simple online presence or a powerful web
          application, We've got you covered. Every plan includes custom design,
          mobile responsiveness, and ongoing support.
        </p>

        {/* Category Tabs with gradient theme */}
        <div className="flex flex-col sm:justify-center sm:flex-row w-3/4 gap-4">
          {tabs.map((tab) => {
            const isActive = tab.id === category;
            return (
              <button
                key={tab.id}
                className={
                  isActive
                    ? "py-2 px-5 text-sm bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                    : "text-gray-600 py-2 px-5 text-sm border-2 border-gray-300 rounded-full hover:cursor-pointer hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                }
                onClick={() => selectCategory(tab.id)}
              >
                {tab.title}
              </button>
            );
          })}
        </div>
      </section>

      {/* Plans Grid */}
      {category === 1 ? (
        <section className="max-w-6xl mx-auto min-h-screen flex items-center justify-center flex-wrap gap-5 pb-20">
          {websitePlans.map((plan) => {
            return <CardTwo key={plan.name} plan={plan} />;
          })}
        </section>
      ) : category === 2 ? (
        <section className="max-w-6xl mx-auto min-h-screen flex items-center justify-center flex-wrap gap-5 pb-20">
          {webAppPlans.map((plan) => {
            return <CardTwo key={plan.name} plan={plan} />;
          })}
        </section>
      ) : (
        " "
      )}
    </section>
  );
}

export default Pricing;
