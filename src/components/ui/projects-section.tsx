"use client";
import { ProjectCard } from "@/components/ui/project-card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { useRef } from "react";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.jpeg";
import p3 from "../../assets/p3.png"

export default function ProjectsSection() {
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
    <section className="py-24 md:py-32 px-6 bg-black min-h-[80vh] border-t border-white/10 flex items-center" id="projects">
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
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C3E41D] to-white font-bold">
                Projects
              </span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
              A showcase of my recent work bridging the gap between design and front-end development.
            </p>
          </TimelineContent>

          {/* Projects Grid */}
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={sectionRef}
            customVariants={fadeUpVariants}
            className="w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
              <ProjectCard
                title="Cohort Landing Page"
                description="A modern and fully responsive landing page built using HTML and CSS, inspired by a coding cohort platform."
                imgSrc={p1}
                link="https://snehabanik.github.io/cohort-landing-page/"
                linkText="Go to Page"
                githubLink="https://github.com/SnehaBanik/cohort-landing-page"
              />
              <ProjectCard
                title="Amazon Clone"
                description="A detailed clone of the Amazon e-commerce interface, showcasing complex layout management and responsive design capabilities."
                imgSrc={p2}
                link="https://snehabanik.github.io/Amazon-Clone/"
                linkText="Go to Page"
                githubLink="https://github.com/SnehaBanik/Amazon-Clone"
              />
              <ProjectCard
                title="Portfolio Website"
                description="Portfolio website built using React and Tailwind CSS, showcasing my projects and skills."
                imgSrc={p3}
                link="https://github.com/SnehaBanik/Portfolio"
                linkText="Go to Page"
                githubLink="https://snehabanik-dev.vercel.app"
              />
            </div>
          </TimelineContent>
        </div>
      </div>
    </section>
  );
}
