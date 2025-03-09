// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      {/* <p className="mb-3">
        After passing out my <b className="font-medium">High School</b>, I
        decided to pursue my passion for programming. I enrolled in a coding
        bootcamp and learned{" "}
        <b className="font-medium">full-stack web development</b>.{" "}
        <i className="italic">My favorite part of programming</i> is the
        problem-solving aspect. I <u className="underline">love</u> the feeling
        of finally figuring out a solution to a problem. My core stack is{" "}
        <b className="font-medium">React, Next.js, Node.js, and MySQL</b>. I am
        also familiar with TypeScript and Prisma. I am always looking to learn
        new technologies. I am currently looking for a{" "}
        <b className="font-medium">full-time position</b> as a software
        developer.
      </p>

      <p>
        <i className="italic">When I'm not coding</i>, I enjoy playing video
        games, watching movies, and reading novels. I also enjoy{" "}
        <b className="font-medium">learning new things</b>. I am currently
        learning about <b className="font-medium">astronomy and psychology</b>.
        I'm also learning how to build and program robots.
      </p> */}
      <p className="mb-3 text-justify">
  After completing my <b className="font-medium">High School</b>, I pursued my passion for software development. I started with full-stack web development and gained expertise in <b className="font-medium">Angular and .NET</b>. 
  <i className="italic">What excites me most about development</i> is solving complex problems and building scalable solutions. <br /> <br /> My core stack includes
  <b className="font-medium">Angular, .NET Core, SSMS Express, and SQL Server</b>. Additionally, I have hands-on experience with <b className="font-medium">React, Next.js, MEAN, and MERN</b>. 
  I am always eager to learn and explore new technologies. Currently, I am looking for a 
  <b className="font-medium">full-time position</b> as a software developer.
</p>

<p className="text-justify">
  <i className="italic">When I'm not coding</i>, I enjoy working on side projects, exploring new frameworks, and contributing to open-source communities. 
  I also have a keen interest in <b className="font-medium">system architecture and cloud computing</b>. 
  Outside of tech, I enjoy reading, learning about <b className="font-medium">AI advancements and cybersecurity</b>, and experimenting with automation tools.
</p>

    </motion.section>
  );
};

// Export the About component.
export default About;
