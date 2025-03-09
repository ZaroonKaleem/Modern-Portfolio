import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaAngular, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";

import ddsImg from "@/public/dds.png";
import qmsImg from "@/public/qms.png";
import axioneImg from "@/public/axione.png";
import mcrgImg from "@/public/mcrg.png";
import v2visionsImg from "@/public/v2visions.png";
import sternizImg from "@/public/sterniz.png"

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/zaroon-kaleem-a53006263/",
  github: "https://github.com/ZaroonKaleem",
  resume: "/resume.pdf",
  source_code: "https://github.com/sanidhyy/portfolio",
  email: "zaroonklm@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Superior University",
    description:
      "Earned my Computer Science degree from Superior University, building a strong foundation in technology and problem-solving.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Freelancer Angular Developer",
    description:
      "Freelancer Full-Stack Developer specializing in building dynamic and scalable web applications with modern technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Digital Data Systems | Junior Developer",
    description:
"Worked as a Junior Developer at Digital Data Systems, contributing to the development of efficient and scalable web applications.",
    icon: React.createElement(FaAngular),
    date: "2023 - 2024",
  },
  {
    title: "Axione Tech | Web Developer",
    description:
      "Currently working as a Web Developer at Axione Tech, creating responsive and dynamic web applications with modern technologies.",
    icon: React.createElement(SiNextdotjs),
    date: "2024 - present",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Digital Data Systems",
    description:
      "A fast and efficient web app for seamless data search and retrieval, built with modern technologies.",
    tags: ["Angular", "TypeScript", "Tailwind"],
    imageUrl: ddsImg,
    projectUrl: "https://ddspak.com/",
  },
  {
    title: "DDS QMS",
    description:
      "A powerful system for seamless quote generation and management, built with modern technologies.",
    tags: ["Angular", ".NET WEB API", "SSMS", "Bootstrap", "Bootstrap Icons"],
    imageUrl: qmsImg,
    projectUrl: "https://quotations.fingerprints.com.pk/",
  },
  {
    title: "Employee Management",
    description:
      "A robust Employee Management System for streamlined workforce management, built with modern technologies.",
    tags: ["Angular", "TypeScript", "Material UI", ".NET Web Api", "SSMS", "NGRX"],
    imageUrl: sternizImg,
    projectUrl: "https://employeemanagementsystemclient-egghd2gphnctazh9.canadacentral-01.azurewebsites.net/sign-in",
  },
  {
    title: "Axione Tech",
    description:
      "An angular based dynamic portfolio website showcasing Axione Tech's innovative software solutions.",
    tags: ["Angular", "Material Icons", "Tailwind CSS"],
    imageUrl: axioneImg,
    projectUrl: "https://axionetech.com/",
  },
  {
    title: "MCRG",
    description:
      "A comprehensive platform streamlining medical billing and revenue management for Medcare Revenue Group.",
    tags: ["Angular", "Material Icons", "Tailwind CSS", "Bootstrap"],
    imageUrl: mcrgImg,
    projectUrl: "https://mcrg.us/",
  },
  {
    title: "Vivid Visions",
    description:
      "An angular based dynamic portfolio website showcasing V2Visions' innovative software solutions.",
    tags: ["Angular", "Tailwind CSS", "Material Icons", "Bootstrap"],
    imageUrl: v2visionsImg,
    projectUrl: "https://v2visions.com/",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Three.js",
  "NGRX",
  "Figma",
  "MySQL",
  "SSMS",
  ".NET Core",
  "C#",
  "Express",
  "Mongo Db",
  "Deployment",
] as const;

// Owner name
export const OWNER_NAME = "Zaroon Kaleem";
