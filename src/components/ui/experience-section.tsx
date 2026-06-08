"use client";

import type { ExperienceItemType } from "@/components/ui/work-experience";
import { WorkExperience } from "@/components/ui/work-experience";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { useRef } from "react";

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "aot",
    companyName: "Academy of Technology (AOT)",
    // We omit the logo to use the default styling for a missing logo
    positions: [
      {
        id: "graphics-team",
        title: "Core Graphics Team Member, Student Chapter of ECE Department",
        employmentPeriod: "Present",
        icon: "design",
        description: "Currently building technical expertise through academic projects, UI/UX design competitions, hackathons, and continuous self-learning.",
        skills: ["UI/UX Design", "Graphic Design", "Self-learning", "Team Collaboration"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
];

export default function ExperienceSection() {
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
    <section className="py-24 md:py-32 px-6 bg-black border-t border-white/10 flex items-center min-h-[60vh]" id="experience">
      <div className="w-full" ref={sectionRef}>
        <div className="flex flex-col items-center gap-16 w-full max-w-5xl mx-auto">
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
                Experience
              </span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
              My professional journey and technical involvements.
            </p>
          </TimelineContent>

          {/* Experience Timeline */}
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={sectionRef}
            customVariants={fadeUpVariants}
            className="w-full"
          >
            <WorkExperience experiences={WORK_EXPERIENCE} />
          </TimelineContent>
        </div>
      </div>
    </section>
  );
}
