"use client";

import type { ExperienceItemType } from "@/components/ui/work-experience";
import { WorkExperience } from "@/components/ui/work-experience";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { useRef } from "react";

const EDUCATION: ExperienceItemType[] = [
  {
    id: "aot-edu",
    companyName: "Academy of Technology",
    positions: [
      {
        id: "btech-ece",
        title: "Bachelor of Technology (B.Tech) in Electronics & Communication Engineering",
        employmentPeriod: "Present",
        icon: "education",
        description: `
**University:** MAKAUT  
**Current Year:** Second Year  
**Graduation Year:** 2028
        `,
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
];

export default function EducationSection() {
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
    <section className="py-24 md:py-32 px-6 bg-black border-t border-white/10 flex items-center min-h-[60vh]" id="education">
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
                Education
              </span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
              My academic background and qualifications.
            </p>
          </TimelineContent>

          {/* Education Timeline */}
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={sectionRef}
            customVariants={fadeUpVariants}
            className="w-full"
          >
            <WorkExperience experiences={EDUCATION} />
          </TimelineContent>
        </div>
      </div>
    </section>
  );
}
