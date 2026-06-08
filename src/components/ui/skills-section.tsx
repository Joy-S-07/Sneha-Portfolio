"use client";
import { SkillCard } from "@/components/ui/skill-card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { useRef } from "react";
import { motion } from "framer-motion";
import ChatGPT from "../../icon/chatgpt.png"
import { MessageSquare, Users, Lightbulb, Puzzle, Handshake } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "C",
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" className="h-6 w-6 object-contain" />
      },
      {
        name: "C++",
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className="h-6 w-6 object-contain" />
      },
      {
        name: "JavaScript",
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-6 w-6 object-contain" />
      },
    ]
  },
  {
    title: "Web Development",
    skills: [
      {
        name: "HTML",
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="h-6 w-6 object-contain" />
      },
      {
        name: "CSS",
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className="h-6 w-6 object-contain" />
      },
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      {
        name: "ChatGPT",
        icon: <img src={ChatGPT} alt="ChatGPT" className="h-6 w-6 object-contain rounded-sm invert" />
      },
      {
        name: "Gemini",
        icon: <img src="https://cdn.simpleicons.org/googlegemini" alt="Gemini" className="h-6 w-6 object-contain" />
      },
      {
        name: "Claude",
        // Lowercase hex D18EE2 for Anthropic peach
        icon: <img src="https://cdn.simpleicons.org/anthropic/d18ee2" alt="Claude" className="h-6 w-6 object-contain" />
      },
      {
        name: "Canva",
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" className="h-6 w-6 object-contain" />
      },
      {
        name: "Figma",
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" className="h-6 w-6 object-contain" />
      },
      {
        name: "GitHub",
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="h-6 w-6 object-contain brightness-0 invert" />
      },
      {
        name: "VS Code",
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" className="h-6 w-6 object-contain" />
      },
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      {
        name: "Communication",
        icon: <MessageSquare className="h-6 w-6 text-blue-400" />,
      },
      {
        name: "Teamwork",
        icon: <Users className="h-6 w-6 text-green-400" />,
      },
      {
        name: "Collaboration",
        icon: <Handshake className="h-6 w-6 text-purple-400" />,
      },
      {
        name: "Problem Solving",
        icon: <Puzzle className="h-6 w-6 text-orange-400" />,
      },
      {
        name: "Creativity",
        icon: <Lightbulb className="h-6 w-6 text-yellow-400" />,
      },
    ]
  }
];

// Framer Motion animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const fadeUpVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-[#0a0a0a] border-t border-white/10 flex items-center min-h-[80vh]" id="skills">
      <div className="w-full" ref={sectionRef}>
        <div className="flex flex-col items-center gap-16 w-full max-w-6xl mx-auto">
          {/* Section Header */}
          <TimelineContent
            as="div"
            animationNum={0}
            timelineRef={sectionRef}
            customVariants={fadeUpVariants}
            className="text-center w-full"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C3E41D] to-white font-bold">
                Arsenal
              </span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
              My core technical skills, design tools, and soft skills I bring to every project.
            </p>
          </TimelineContent>

          {/* Skills Categories with Staggered Animation */}
          <div className="w-full space-y-16">
            {skillCategories.map((category, catIndex) => (
              <TimelineContent
                key={catIndex}
                as="div"
                animationNum={1 + catIndex}
                timelineRef={sectionRef}
                customVariants={fadeUpVariants}
                className="w-full"
              >
                <div className="flex flex-col gap-6">
                  {/* Category Header */}
                  <h3 className="text-xl md:text-2xl font-semibold text-white/80 border-b border-white/10 pb-2">
                    {category.title}
                  </h3>
                  
                  {/* Category Grid */}
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    {category.skills.map((skill, index) => (
                      <motion.div key={index} variants={itemVariants} className="w-full">
                        <SkillCard
                          icon={skill.icon}
                          category={category.title.split(" ")[0]} // Shorten category name for the card badge
                          name={skill.name}
                          className="w-full h-full"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </TimelineContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
