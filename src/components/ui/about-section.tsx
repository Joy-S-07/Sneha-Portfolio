"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { Zap } from "lucide-react";
import { useRef } from "react";

export default function AboutSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2, // Faster than original for snappier feel
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };
  
  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-black min-h-[80vh] flex items-center border-t border-white/10" id="about">
      <div className="w-full" ref={heroRef}>
        <div className="flex flex-col items-center text-center gap-8 w-full max-w-5xl mx-auto">
          {/* Right side - Content */}
          <div className="flex-1">
            <TimelineContent
              as="h2"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="text-2xl sm:text-3xl md:text-4xl !leading-[1.6] font-medium text-white mb-12 tracking-tight"
            >
              Aspiring{" "}
              <TimelineContent
                as="span"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-[#C3E41D] border border-[#C3E41D]/30 inline-block px-4 py-1 rounded-full bg-[#C3E41D]/10 mx-1"
              >
                Web Developer
              </TimelineContent>{" "}
              and{" "}
              <TimelineContent
                as="span"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-purple-400 border border-purple-500/30 inline-block px-4 py-1 rounded-full bg-purple-500/10 mx-1"
              >
                Aspiring UI/UX Designer
              </TimelineContent>
              . B.Tech ECE Student at Maulana Abul Kalam Azad University of Technology. Passionate about creating responsive websites and intuitive user experiences.
              Currently learning front-end technologies and UI/UX design while building projects that blend{" "}
              <TimelineContent
                as="span"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-pink-400 border border-pink-500/30 inline-block px-4 py-1 rounded-full bg-pink-500/10 mx-1"
              >
                creativity
              </TimelineContent>{" "}
              with{" "}
              <TimelineContent
                as="span"
                animationNum={4}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-blue-400 border border-blue-500/30 inline-block px-4 py-1 rounded-full bg-blue-500/10 mx-1"
              >
                technology
              </TimelineContent>
              . Always eager to learn, innovate, and grow in the digital product space.
            </TimelineContent>

            <div className="mt-16 flex flex-col sm:flex-row gap-8 items-center justify-center border-t border-white/10 pt-10 w-full">
              <TimelineContent
                as="div"
                animationNum={5}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="mb-4 sm:text-xl text-sm sm:text-right"
              >
                <div className="font-medium text-neutral-400 mb-1 capitalize">
                  Let's build something amazing
                </div>
                <div className="text-[#C3E41D] font-bold uppercase tracking-widest text-2xl">
                  Together
                </div>
              </TimelineContent>

              <TimelineContent
                as="a"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="bg-[#C3E41D] hover:bg-white transition-colors duration-300 gap-2 font-bold text-black h-14 px-8 rounded-full text-base inline-flex items-center cursor-pointer shadow-[0_0_20px_rgba(195,228,29,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                href="#contact"
              >
                <Zap fill="black" size={20} className="text-black" />
                Contact Me
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
