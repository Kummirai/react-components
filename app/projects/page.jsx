"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiGithub,
  FiExternalLink,
  FiBookOpen,
  FiZap,
  FiTool,
  FiHeart,
  FiSmartphone,
  FiSearch,
  FiFilter,
  FiX,
} from "react-icons/fi";

const projectsData = [
  {
    id: 1,
    title: "Highveld Primary",
    category: "Website",
    description:
      "School website with hero section, events calendar, extracurricular activities, gallery, and contact/apply forms.",
    image: "/projects/highveld.svg",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "#",
    liveDemo: "https://highveldmilton.netlify.app",
    featured: true,
    year: "2025",
    icon: <FiBookOpen />,
  },
  {
    id: 2,
    title: "Learnmore Primary",
    category: "Website",
    description:
      "Primary school website with enrollment, subjects, teachers, events, fees, timetable, news, and FAQ.",
    image: "/project-images/LearnMore-Primary-School.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "#",
    liveDemo: "https://learnmoremilton.netlify.app",
    featured: true,
    year: "2025",
    icon: <FiBookOpen />,
  },
  {
    id: 3,
    title: "BNT Electrical Solutions",
    category: "Website",
    description:
      "Electrical contracting company website with residential, commercial, and solar energy services and quote requests.",
    image: "/project-images/BNT-Electrical-Solutions-Professional-Electrical-Services.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "#",
    liveDemo: "https://bntelectrical.netlify.app",
    featured: false,
    year: "2025",
    icon: <FiZap />,
  },
  {
    id: 4,
    title: "Carrington Construction",
    category: "Website",
    description:
      "Construction company website showcasing projects, services, gallery, and WhatsApp contact.",
    image: "/project-images/Carringtons-Plumbing-Construction (1).png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "#",
    liveDemo: "https://carringtonsconstruction.netlify.app",
    featured: false,
    year: "2025",
    icon: <FiTool />,
  },
  {
    id: 5,
    title: "Doctor on 14th",
    category: "Website",
    description:
      "Medical practice website with online appointment booking, services, and admin authentication.",
    image: "/project-images/Doctor-on-14th-—-Dr-Wilna-Lombaard-General-Practitioner-Northcliff.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB"],
    github: "#",
    liveDemo: "https://docmilton.netlify.app",
    featured: false,
    year: "2025",
    icon: <FiHeart />,
  },
  {
    id: 6,
    title: "Xamace",
    category: "Mobile App",
    description:
      "CAPS-aligned maths practice for Grade 7–12 with AI tutoring, timed past papers, and progress tracking.",
    image: "/projects/xamace.svg",
    techStack: ["Next.js", "Expo", "React Native", "MongoDB", "Ably"],
    github: "#",
    liveDemo: "https://xamace.netlify.app",
    featured: true,
    year: "2025",
    icon: <FiSmartphone />,
  },
  {
    id: 7,
    title: "Kapuka Tradings",
    category: "Mobile App",
    description:
      "Driver services platform for fuel delivery, car wash, and cash loans with role-based access and real-time tracking.",
    image: "/projects/kapuka.svg",
    techStack: ["Next.js", "Expo", "React Native", "MongoDB", "Vercel"],
    github: "#",
    liveDemo: "https://kapukandroird.netlify.app",
    featured: true,
    year: "2025",
    icon: <FiSmartphone />,
  },
];

const categories = ["All", "Website", "Mobile App"];

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
    <main className="relative w-full min-h-screen py-20 overflow-hidden bg-white dark:bg-[#070b15]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4 text-navy dark:text-light">
            Client Projects
          </h1>
          <p className="text-lg text-navy/60 dark:text-light/60 max-w-2xl mx-auto">
            Websites and mobile apps built for real businesses — schools,
            trades, medical practices, and more.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="rounded-xl p-4 bg-white/60 dark:bg-[#070b15]/80 border border-navy/10 dark:border-light/10 shadow-xl text-center">
            <div className="text-2xl font-bold text-cyan">{projectsData.length}</div>
            <div className="text-sm text-navy/60 dark:text-light/60">Total Projects</div>
          </div>
          <div className="rounded-xl p-4 bg-white/60 dark:bg-[#070b15]/80 border border-navy/10 dark:border-light/10 shadow-xl text-center">
            <div className="text-2xl font-semibold text-cyan">
              {projectsData.filter((p) => p.category === "Mobile App").length}
            </div>
            <div className="text-sm text-navy/60 dark:text-light/60">Mobile Apps</div>
          </div>
          <div className="rounded-xl p-4 bg-white/60 dark:bg-[#070b15]/80 border border-navy/10 dark:border-light/10 shadow-xl text-center">
            <div className="text-2xl font-bold text-cyan">
              {projectsData.filter((p) => p.category === "Website").length}
            </div>
            <div className="text-sm text-navy/60 dark:text-light/60">Websites</div>
          </div>
          <div className="rounded-xl p-4 bg-white/60 dark:bg-[#070b15]/80 border border-navy/10 dark:border-light/10 shadow-xl text-center">
            <div className="text-2xl font-bold text-cyan">
              {projectsData.filter((p) => p.featured).length}
            </div>
            <div className="text-sm text-navy/60 dark:text-light/60">Featured</div>
          </div>
        </div>

        {activeCategory === "All" && !searchQuery && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-navy dark:text-light">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.slice(0, 2).map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-xl overflow-hidden bg-white/60 dark:bg-[#070b15]/80 border border-navy/10 dark:border-light/10 shadow-2xl shadow-cyan/10 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="absolute -inset-0.5 rounded-xl bg-cyan opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"></div>
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl text-cyan">{project.icon}</div>
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan text-white">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold text-navy dark:text-light mb-2">
                        {project.title}
                      </h3>
                      <p className="text-navy/60 dark:text-light/60 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 rounded-full bg-navy/5 dark:bg-light/5 text-navy/60 dark:text-light/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Link
                          href={project.github}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy dark:bg-cyan text-white hover:bg-navy/90 dark:hover:bg-cyan/90 transition-all duration-300 hover:scale-105"
                        >
                          <FiGithub /> Code
                        </Link>
                        <Link
                          href={project.liveDemo}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan text-white hover:scale-105 transition-all duration-300"
                        >
                          <FiExternalLink /> Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeCategory === category
                      ? "bg-navy dark:bg-cyan text-white shadow-lg shadow-navy/30 scale-105"
                      : "bg-white/60 dark:bg-[#070b15]/80 border border-navy/10 dark:border-light/10 text-navy/70 dark:text-light/70 hover:border-cyan hover:text-cyan hover:scale-105"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-full bg-white/60 dark:bg-[#070b15]/80 border border-navy/10 dark:border-light/10 text-navy dark:text-light placeholder-navy/40 dark:placeholder-light/40 focus:outline-none focus:border-cyan transition-all text-sm"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-navy/40 dark:text-light/40 text-sm" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/40 dark:text-light/40 hover:text-navy/60 dark:hover:text-light/60"
                >
                  <FiX className="text-sm" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                showFeaturedOnly
                  ? "bg-navy dark:bg-cyan text-white shadow-lg shadow-navy/30"
                  : "bg-white/60 dark:bg-[#070b15]/80 border border-navy/10 dark:border-light/10 text-navy/70 dark:text-light/70 hover:border-cyan"
              }`}
            >
              <FiFilter className="text-sm" />
              Featured Only
            </button>
          </div>
        </div>

        <div className="mb-6 text-sm text-navy/50 dark:text-light/50">
          Found {projectCount} project{projectCount !== 1 ? "s" : ""}
        </div>

        {projectCount > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-xl overflow-hidden bg-white/60 dark:bg-[#070b15]/80 border border-navy/10 dark:border-light/10 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan/20"
              >
                <div className="absolute -inset-0.5 rounded-xl bg-cyan opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 dark:from-[#070b15]/70 to-transparent p-4 pt-8">
                    <Link
                      href={project.liveDemo}
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-white text-[#070b15] text-xs font-semibold px-4 py-2 rounded-full hover:brightness-110 transition-all duration-300"
                    >
                      <FiExternalLink className="text-sm" />
                      Live Preview
                    </Link>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-cyan/10 text-cyan">
                      {project.category}
                    </span>
                    <span className="text-xs text-navy/50 dark:text-light/50">{project.year}</span>
                  </div>

                  <h3 className="text-md font-bold text-navy dark:text-light mb-2 group-hover:text-cyan transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-navy/60 dark:text-light/60 mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-0.5 rounded-full bg-navy/5 dark:bg-light/5 text-navy/60 dark:text-light/60 border border-navy/10 dark:border-light/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-navy/5 dark:bg-light/5 text-navy/60 dark:text-light/60">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl text-navy/30 dark:text-light/30 mb-4">
              <FiSearch />
            </div>
            <h3 className="text-xl font-semibold text-navy dark:text-light mb-2">
              No projects found
            </h3>
            <p className="text-navy/60 dark:text-light/60">
              Try adjusting your search or filter to find what you&apos;re looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
                setShowFeaturedOnly(false);
              }}
              className="mt-4 px-6 py-2 rounded-full bg-navy dark:bg-cyan text-white hover:scale-105 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
