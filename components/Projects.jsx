"use client";

import React, { useState } from "react";
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

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" || project.category === activeCategory,
  );

  return (
    <section className="relative w-full py-20 overflow-hidden bg-white dark:bg-navy/90" id="projects">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-navy dark:text-light">
            Recent Client Work
          </h2>
          <p className="text-lg text-navy/60 dark:text-light/60 max-w-2xl mx-auto">
            Here are some projects I&apos;ve built for clients. Each one is crafted
            with care and attention to detail.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-full text-sm transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-navy dark:bg-cyan text-white shadow-lg shadow-navy/30 scale-105"
                    : "bg-white/60 dark:bg-navy/80 border border-navy/10 dark:border-light/10 text-navy/70 dark:text-light/70 hover:border-cyan hover:text-cyan hover:scale-105"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-white/60 dark:bg-navy/80 border border-navy/10 dark:border-light/10 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan/20"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-cyan opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

              <div className="relative h-48 bg-navy/5 dark:bg-light/5 flex items-center justify-center">
                <div className="text-6xl text-cyan/50 group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="bg-white/90 dark:bg-navy p-2 rounded-full transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                  >
                    <FiGithub className="text-navy dark:text-light text-xl" />
                  </Link>
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    className="bg-white/90 dark:bg-navy p-2 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                  >
                    <FiExternalLink className="text-navy dark:text-light text-xl" />
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-cyan/10 text-cyan mb-3">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold text-navy dark:text-light mb-2 group-hover:text-cyan transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-navy/60 dark:text-light/60 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-navy/5 dark:bg-light/5 text-navy/60 dark:text-light/60 border border-navy/10 dark:border-light/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold bg-navy dark:bg-cyan text-white shadow-lg shadow-navy/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            View All Projects
            <FiExternalLink className="text-lg" />
          </Link>
        </div>
      </div>
    </section>
  );
}
