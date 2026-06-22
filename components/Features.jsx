import React from "react";
import {
  SiReact,
  SiFigma,
  SiStripe,
} from "react-icons/si";
import { MdSpeed, MdDevices, MdSupportAgent } from "react-icons/md";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "A website that works for you. Built with modern tech so your business gets a fast, reliable online presence — no templates, no limitations.",
    icon: <SiReact />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Design that converts. Interfaces your customers will love using, guiding them naturally from curious to converted.",
    icon: <SiFigma />,
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    description:
      "Sell online without the headache. A full online store handling carts, payments, and inventory — you focus on products, I handle the tech.",
    icon: <SiStripe />,
  },
  {
    id: 4,
    title: "Performance Optimization",
    description:
      "Speed your customers will notice. Faster pages mean better search rankings and happier visitors who actually stick around.",
    icon: <MdSpeed />,
  },
  {
    id: 5,
    title: "Responsive Development",
    description:
      "Perfect on every screen. Your site looks and works great on phones, tablets, and desktops — no visitor left behind.",
    icon: <MdDevices />,
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description:
      "Set it and forget it. I handle updates, security, and fixes so your site stays running smoothly without you lifting a finger.",
    icon: <MdSupportAgent />,
  },
];

export default function Services() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-white dark:bg-[#070b15]" id="services">
      {/* Top fade gradient for smooth hero transition */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white dark:to-[#070b15] z-10 pointer-events-none" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/30 dark:bg-cyan/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 dark:bg-cyan/[0.08] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex flex-col items-center max-w-2xl pt-12 pb-5 gap-3 sm:gap-5">
          <h2 className="text-2xl sm:text-[32px] font-semibold text-center leading-7.5 sm:leading-10 text-navy dark:text-light">
            What I Can Do For You
          </h2>
          <p className="text-center text-lg text-navy/60 dark:text-light/60 font-normal max-w-2xl leading-6 p-3 rounded-lg">
            From concept to launch — I provide end-to-end development services
            to help your business succeed online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col items-center justify-center gap-3 p-8 font-normal text-lg leading-6 rounded-2xl bg-white/60 dark:bg-[#070b15] border border-navy/10 dark:border-light/10 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan/20"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-cyan opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

              <p className="text-4xl text-cyan transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </p>

              <h2 className="text-xl font-semibold text-navy dark:text-light transition-all duration-300">
                {service.title}
              </h2>

              <p className="text-center text-[16px] sm:text-md text-navy/70 dark:text-light/60 line-clamp-4 h-24 transition-all duration-300 group-hover:text-navy/90 dark:group-hover:text-light/80">
                {service.description}
              </p>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
