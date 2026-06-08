"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import image1 from "../../gallery/image1.png"
import image2 from "../../gallery/image2.png"
import image3 from "../../gallery/image3.png"
import image4 from "../../gallery/image4.png"
import image5 from "../../gallery/image5.png"
import image6 from "../../gallery/image6.png"

const galleryImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

// We double the array to create a seamless infinite marquee effect
const marqueeImages = [...galleryImages, ...galleryImages];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const fadeUpVariants = {
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
      },
    },
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };

  return (
    <section className="py-24 overflow-hidden bg-[#0a0a0a] border-t border-white/5" id="gallery">
      <div className="w-full" ref={sectionRef}>
        <div className="flex flex-col items-center gap-12 w-full">
          
          <TimelineContent
            as="div"
            animationNum={0}
            timelineRef={sectionRef}
            customVariants={fadeUpVariants}
            className="text-center w-full px-6"
          >
            <h2 className="text-3xl sm:text-4xl font-medium text-white mb-4 tracking-tight">
              In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C3E41D] to-white font-bold">Action</span>
            </h2>
            <p className="text-neutral-400 text-base max-w-xl mx-auto">
              Glimpses of hackathons, teamwork, and late-night coding sessions.
            </p>
          </TimelineContent>

          {/* Marquee Container */}
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={sectionRef}
            customVariants={fadeUpVariants}
            className="w-full relative py-10"
          >
            {/* Gradient masks for smooth fading at the edges */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
            
            {/* Scrolling Track */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 sm:gap-6 px-4 sm:px-6">
              {marqueeImages.map((src, index) => (
                <div 
                  key={index} 
                  className="relative group w-64 sm:w-80 h-40 sm:h-52 rounded-2xl overflow-hidden shrink-0"
                >
                  <img
                    src={src}
                    alt={`Gallery item ${index}`}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-500",
                      // Default state: black & white, slightly dimmed
                      "grayscale opacity-60",
                      // Hover state: colorful, full opacity, popped up (scaled)
                      "hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
                    )}
                  />
                  {/* Subtle inner border */}
                  <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none transition-colors duration-500 group-hover:border-[#C3E41D]/50" />
                </div>
              ))}
            </div>
          </TimelineContent>

        </div>
      </div>
    </section>
  );
}
