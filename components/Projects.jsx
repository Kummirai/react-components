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
} from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Highveld Primary",
    category: "Website",
    description:
      "School website with hero section, events calendar, extracurricular activities, gallery, and contact/apply forms.",
    image: "/projects/highveld.svg",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "#",
    liveDemo: "#",
    icon: <FiBookOpen />,
  },
  {
    id: 2,
    title: "Learnmore Primary",
    category: "Website",
    description:
      "Primary school website with enrollment, subjects, teachers, events, fees, timetable, news, and FAQ.",
    image: "/projects/learnmore.svg",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "#",
    liveDemo: "#",
    icon: <FiBookOpen />,
  },
  {
    id: 3,
    title: "BNT Electrical Solutions",
    category: "Website",
    description:
      "Electrical contracting company website with residential, commercial, and solar energy services and quote requests.",
    image: "/projects/brilliant.svg",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "#",
    liveDemo: "#",
    icon: <FiZap />,
  },
  {
    id: 4,
    title: "Carrington Construction",
    category: "Website",
    description:
      "Construction company website showcasing projects, services, gallery, and WhatsApp contact.",
    image: "/projects/carrington.svg",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "#",
    liveDemo: "https://carringtonsconstruction.netlify.app",
    icon: <FiTool />,
  },
  {
    id: 5,
    title: "Doctor on 14th",
    category: "Website",
    description:
      "Medical practice website for Dr. Wilna Lombaard with online appointment booking, services, and admin authentication.",
    image: "/projects/doctor.svg",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB"],
    github: "#",
    liveDemo: "#",
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
    liveDemo: "https://kapuka.vercel.app",
    icon: <FiSmartphone />,
  },
];

const categories = ["All", "Website", "Mobile App"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" || project.category === activeCategory,
  );

  return (
    <section className="relative w-full py-16 overflow-hidden bg-white dark:bg-[#070b15]" id="projects">
      {/* Top fade gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-[#070b15] z-10 pointer-events-none" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/30 dark:bg-cyan/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 dark:bg-cyan/[0.08] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-navy dark:text-light">
            Client Projects
          </h2>
          <p className="text-lg text-navy/60 dark:text-light/60 max-w-2xl mx-auto">
            Websites and mobile apps built for real businesses — schools,
            trades, medical, and more.
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
                    : "bg-white/60 dark:bg-[#070b15]/80 border border-navy/10 dark:border-light/10 text-navy/70 dark:text-light/70 hover:border-cyan hover:text-cyan hover:scale-105"
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
              className="group relative rounded-2xl overflow-hidden bg-white/60 dark:bg-[#070b15]/80 border border-navy/10 dark:border-light/10 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan/20"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-cyan opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8">
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-green text-white text-xs font-semibold px-4 py-2 rounded-full hover:brightness-110 transition-all duration-300"
                  >
                    <FiExternalLink className="text-sm" />
                    Live Preview
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
