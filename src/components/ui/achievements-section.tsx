"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { useRef } from "react";
import { Trophy, Code, Palette, BookOpen } from "lucide-react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import UIUX from "../../certification-prizes/UI-UX.png"

const achievementItems: BentoItem[] = [
  {
    title: "Smart India Hackathon",
    meta: "2x Participant",
    description: "Participated in Smart India Hackathon (SIH) twice, developing innovative solutions and gaining practical experience under intense time constraints.",
    icon: <Code className="w-4 h-4 text-[#C3E41D]" />,
    status: "Hackathon",
    tags: ["SIH", "Problem Solving", "Innovation"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "UI/UX Design",
    meta: "Top 3 Position",
    description: "Achieved Top 3 Position in a highly competitive UI/UX Design Competition, showcasing creativity and strong user-centric design principles.",
    icon: <Palette className="w-4 h-4 text-purple-500" />,
    status: "Competition",
    tags: ["Design", "UI/UX"],
    colSpan: 1,
    hasPersistentHover: true,
  },
  {
    title: "Technical Events",
    description: "Participated in multiple college technical events, consistently demonstrating strong teamwork.",
    icon: <Trophy className="w-4 h-4 text-blue-500" />,
    status: "College Level",
    tags: ["Events", "Tech"],
    colSpan: 1,
    hasPersistentHover: true,
  },
  {
    title: "Continuous Learning",
    description: "Active learner in Web Development and Design, constantly exploring new technologies, modern frameworks, and best practices.",
    icon: <BookOpen className="w-4 h-4 text-orange-500" />,
    status: "Ongoing",
    tags: ["Web Dev", "Learning"],
    colSpan: 2,
    hasPersistentHover: true,
  },
];

export default function AchievementsSection() {
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
    <section className="py-24 md:py-32 px-6 bg-[#0a0a0a] border-t border-white/10 flex items-center min-h-[80vh]" id="achievements">
      <div className="w-full" ref={sectionRef}>
        <div className="flex flex-col items-center gap-16 w-full max-w-7xl mx-auto">
          {/* Section Header */}
          <TimelineContent
            as="div"
            animationNum={0}
            timelineRef={sectionRef}
            customVariants={fadeUpVariants}
            className="text-center w-full"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C3E41D] to-white font-bold">
                Achievements
              </span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
              Milestones, competitions, and continuous growth.
            </p>
          </TimelineContent>

          {/* Bento Grid Layout */}
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={sectionRef}
            customVariants={fadeUpVariants}
            className="w-full"
          >
            <BentoGrid items={achievementItems} />
          </TimelineContent>
        </div>
      </div>
    </section>
  );
}
