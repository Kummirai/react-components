import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarOne from "@/components/navbar-1/NavbarOne";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Milton | Portfolio",
  description: "Web developer",
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
      link: "Services",
      path: "/services",
    },
    {
      id: 3,
      link: "Components",
      path: "/portfolio",
    },
    {
      id: 4,
      link: "Projects",
      path: "/projects",
    },
    {
      id: 5,
      link: "About",
      path: "/about",
    },
    {
      id: 6,
      link: "Contact",
      path: "/contact",
    },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarOne links={links} />
        {children}
      </body>
    </html>
  );
}
