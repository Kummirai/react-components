"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiGrid,
  FiLayout,
  FiShoppingCart,
  FiMessageCircle,
} from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web App",
    description:
      "Full-featured online store with cart, payments, and admin dashboard. Built with Next.js, Stripe, and MongoDB.",
    image: "/projects/ecommerce.jpg",
    techStack: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/",
    liveDemo: "https://example.com",
    icon: <FiShoppingCart />,
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Website",
    description:
      "Modern portfolio for a creative agency with smooth animations and responsive design.",
    image: "/projects/portfolio.jpg",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/",
    liveDemo: "https://example.com",
    icon: <FiLayout />,
  },
  {
    id: 3,
    title: "Task Management App",
    category: "Web App",
    description:
      "Collaborative task management tool with real-time updates, team workspaces, and file attachments.",
    image: "/projects/taskapp.jpg",
    techStack: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    github: "https://github.com/",
    liveDemo: "https://example.com",
    icon: <FiGrid />,
  },
  {
    id: 4,
    title: "Restaurant Website",
    category: "Website",
    description:
      "Elegant restaurant website with online ordering, reservation system, and menu management.",
    image: "/projects/restaurant.jpg",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/",
    liveDemo: "https://example.com",
    icon: <FiMessageCircle />,
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    category: "Web App",
    description:
      "Interactive dashboard for business analytics with real-time charts and data visualization.",
    image: "/projects/dashboard.jpg",
    techStack: ["React", "Chart.js", "Express", "PostgreSQL"],
    github: "https://github.com/",
    liveDemo: "https://example.com",
    icon: <FiCode />,
  },
  {
    id: 6,
    title: "Real Estate Platform",
    category: "Website",
    description:
      "Property listing website with advanced search filters, maps integration, and agent profiles.",
    image: "/projects/realestate.jpg",
    techStack: ["Next.js", "Mapbox", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/",
    liveDemo: "https://example.com",
    icon: <FiLayout />,
  },
];

const categories = ["All", "Website", "Web App"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" || project.category === activeCategory,
  );

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
          <h2 className="text-3xl  font-semibold mb-4 text-gray-800">
            My Recent Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my latest works. Each project is crafted with care
            and attention to detail.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-full text-sm  transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                    : "bg-white/10 backdrop-blur-sm border border-white/20 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 hover:scale-105"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>

              {/* Glow effect */}
              <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                <div className="text-6xl text-blue-500/50 group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                {/* Overlay with blur effect on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="bg-white/90 p-2 rounded-full transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                  >
                    <FiGithub className="text-gray-800 text-xl" />
                  </Link>
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    className="bg-white/90 p-2 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                  >
                    <FiExternalLink className="text-gray-800 text-xl" />
                  </Link>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-linear-to-r from-blue-100 to-purple-100 text-blue-700 dark:from-blue-900/50 dark:to-purple-900/50 dark:text-blue-300 mb-3">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated decorative line at bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            View All Projects
            <FiExternalLink className="text-lg" />
          </Link>
        </div>
      </div>
    </section>
  );
}
