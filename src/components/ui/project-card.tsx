import * as React from "react";
import { ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Internal cn utility since @/lib/utils might not exist or might not be perfectly exported
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Define the props interface for type safety and clarity
export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  githubLink?: string;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, imgSrc, title, description, link, linkText = "View Project", githubLink, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] text-white shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C3E41D]/10 hover:border-white/20",
          className
        )}
        {...props}
      >
        {/* Card Image Section */}
        <div className="aspect-video overflow-hidden bg-black/50">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
        </div>

        {/* Card Content Section */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#C3E41D]">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-neutral-400 text-sm md:text-base leading-relaxed">{description}</p>
          
          {/* Card Footer */}
          <div className="mt-6 flex items-center justify-between">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/button inline-flex items-center gap-2 text-sm font-bold text-[#C3E41D] transition-all duration-300 hover:text-white"
              onClick={(e) => e.stopPropagation()} // Prevent card's onClick if it has one
            >
              {linkText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
            </a>
            
            <a
              href={githubLink || "#"}
              target={githubLink ? "_blank" : undefined}
              rel={githubLink ? "noopener noreferrer" : undefined}
              className="text-[#C3E41D] transition-all duration-300 hover:text-white hover:scale-110 hover:-translate-y-1"
              onClick={(e) => {
                e.stopPropagation();
                if (!githubLink) e.preventDefault();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
