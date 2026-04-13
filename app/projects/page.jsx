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
  FiBarChart2,
  FiMapPin,
  FiCalendar,
  FiUsers,
  FiSearch,
  FiFilter,
  FiX,
} from "react-icons/fi";

const projectsData = [
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
    featured: true,
    year: "2024",
    icon: <FiShoppingCart />,
  },
  {
    id: 2,
    title: "Creative Portfolio",
    category: "Website",
    description:
      "Modern portfolio for a creative agency with smooth animations and responsive design.",
    image: "/projects/portfolio.jpg",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/",
    liveDemo: "https://example.com",
    featured: true,
    year: "2024",
    icon: <FiLayout />,
  },
  {
    id: 3,
    title: "TaskFlow Manager",
    category: "Web App",
    description:
      "Collaborative task management tool with real-time updates, team workspaces, and file attachments.",
    image: "/projects/taskapp.jpg",
    techStack: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    github: "https://github.com/",
    liveDemo: "https://example.com",
    featured: false,
    year: "2023",
    icon: <FiGrid />,
  },
  {
    id: 4,
    title: "Restaurant Booking",
    category: "Website",
    description:
      "Elegant restaurant website with online ordering, reservation system, and menu management.",
    image: "/projects/restaurant.jpg",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/",
    liveDemo: "https://example.com",
    featured: true,
    year: "2024",
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
    featured: false,
    year: "2023",
    icon: <FiBarChart2 />,
  },
  {
    id: 6,
    title: "Real Estate Hub",
    category: "Website",
    description:
      "Property listing website with advanced search filters, maps integration, and agent profiles.",
    image: "/projects/realestate.jpg",
    techStack: ["Next.js", "Mapbox", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/",
    liveDemo: "https://example.com",
    featured: false,
    year: "2024",
    icon: <FiMapPin />,
  },
  {
    id: 7,
    title: "Event Platform",
    category: "Web App",
    description:
      "Event management platform with ticketing, scheduling, and attendee management.",
    image: "/projects/event.jpg",
    techStack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/",
    liveDemo: "https://example.com",
    featured: false,
    year: "2023",
    icon: <FiCalendar />,
  },
  {
    id: 8,
    title: "Social Community",
    category: "Web App",
    description:
      "Social platform for niche communities with posts, comments, and user profiles.",
    image: "/projects/social.jpg",
    techStack: ["React", "Express", "PostgreSQL", "Socket.io"],
    github: "https://github.com/",
    liveDemo: "https://example.com",
    featured: false,
    year: "2024",
    icon: <FiUsers />,
  },
  {
    id: 9,
    title: "Job Board",
    category: "Website",
    description:
      "Job listing platform with advanced search, filters, and application tracking.",
    image: "/projects/jobs.jpg",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/",
    liveDemo: "https://example.com",
    featured: false,
    year: "2023",
    icon: <FiSearch />,
  },
];

const categories = ["All", "Website", "Web App"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesFeatured = !showFeaturedOnly || project.featured;
    return matchesCategory && matchesSearch && matchesFeatured;
  });

  const featuredProjects = projectsData.filter((p) => p.featured);
  const projectCount = filteredProjects.length;

  return (
    <main className="relative w-full min-h-screen py-20 overflow-hidden">
      {/* Animated gradient background with blur effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development, innovative
            designs, and scalable solutions.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="rounded-2xl p-4 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl text-center">
            <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {projectsData.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Projects
            </div>
          </div>
          <div className="rounded-2xl p-4 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl text-center">
            <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {projectsData.filter((p) => p.category === "Web App").length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Web Apps
            </div>
          </div>
          <div className="rounded-2xl p-4 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl text-center">
            <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {projectsData.filter((p) => p.category === "Website").length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Websites
            </div>
          </div>
          <div className="rounded-2xl p-4 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl text-center">
            <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {projectsData.filter((p) => p.featured).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Featured
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        {activeCategory === "All" && !searchQuery && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.slice(0, 2).map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-blue-50/90 to-purple-50/90 dark:from-blue-900/30 dark:to-purple-900/30 border border-white/20 shadow-2xl shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"></div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl text-blue-500">
                        {project.icon}
                      </div>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition-all duration-300 hover:scale-105"
                      >
                        <FiGithub /> Code
                      </Link>
                      <Link
                        href={project.liveDemo}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition-all duration-300"
                      >
                        <FiExternalLink /> Demo
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filters Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
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

          {/* Search and Filter */}
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all text-sm"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FiX className="text-sm" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                showFeaturedOnly
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-gray-700 dark:text-gray-300 hover:border-blue-500"
              }`}
            >
              <FiFilter className="text-sm" />
              Featured Only
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Found {projectCount} project{projectCount !== 1 ? "s" : ""}
        </div>

        {/* Projects Grid */}
        {projectCount > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Gradient glow effect on hover */}
                <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                  <div className="text-5xl text-blue-500/70 group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>

                  {/* Overlay with blur effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="bg-white/90 p-2.5 rounded-full transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                    >
                      <FiGithub className="text-gray-800 text-xl" />
                    </Link>
                    <Link
                      href={project.liveDemo}
                      target="_blank"
                      className="bg-white/90 p-2.5 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                    >
                      <FiExternalLink className="text-gray-800 text-xl" />
                    </Link>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-linear-to-r from-blue-100 to-purple-100 text-blue-700 dark:from-blue-900/50 dark:to-purple-900/50 dark:text-blue-300">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-gray-600 dark:text-gray-400 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-gray-600 dark:text-gray-400">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Animated decorative line at bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        ) : (
          // No Results State
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
                setShowFeaturedOnly(false);
              }}
              className="mt-4 px-6 py-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
