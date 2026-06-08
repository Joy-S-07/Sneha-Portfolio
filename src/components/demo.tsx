import React from "react";
import Component from "./ui/portfolio-hero";
import AboutSection from "./ui/about-section";
import EducationSection from "./ui/education-section";
import SkillsSection from "./ui/skills-section";
import ProjectsSection from "./ui/projects-section";
import ExperienceSection from "./ui/experience-section";
import AchievementsSection from "./ui/achievements-section";
import GallerySection from "./ui/gallery-section";
import ContactSection from "./ui/contact-section";
import { Footer } from "./ui/footer-section";
import { Mail } from "lucide-react";

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
    <path d="M12 18h.01" />
  </svg>
);

const socialLinks = [
  {
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/sneha-banik-ab2922346/",
    label: "LinkedIn",
  },
  {
    icon: <GithubIcon />,
    href: "https://github.com/SnehaBanik",
    label: "GitHub",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:snehabanikk@gmail.com",
    label: "Email",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Demo() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
      />
      <div className="w-full flex flex-col">
        <Component />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <GallerySection />
        <ContactSection />
        <Footer
          brandName="Sneha Banik"
          brandDescription="Aspiring Web Developer & UI/UX Designer crafting responsive, intuitive, and modern user experiences."
          socialLinks={socialLinks}
          navLinks={navLinks}
        />
      </div>
    </>
  );
}
