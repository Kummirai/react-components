import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarOne from "@/components/navbar-1/NavbarOne";
import Footer from "@/components/Footer";
import DarkModeProvider from "@/components/DarkModeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Milton | Freelance Web Developer",
  description: "Freelance web developer building modern websites and web apps",
};

export default function RootLayout({ children }) {
  const links = [
    {
      id: 1,
      link: "Home",
      path: "/",
    },
    {
      id: 2,
      link: "Projects",
      path: "/projects",
    },
    {
      id: 3,
      link: "Services",
      path: "/services",
    },
    {
      id: 4,
      link: "Contact",
      path: "/contact",
    },
  ];

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#070b15] transition-colors duration-300`}
      >
        <DarkModeProvider>
          <NavbarOne links={links} />
          {children}
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
