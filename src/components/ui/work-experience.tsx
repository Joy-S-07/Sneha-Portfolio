import {
  BriefcaseBusinessIcon,
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
} from "lucide-react";
import React from "react";
import ReactMarkdown from "react-markdown";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const iconMap = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  business: BriefcaseBusinessIcon,
  education: GraduationCapIcon,
} as const;

export type ExperiencePositionIconType = keyof typeof iconMap;

export type ExperiencePositionItemType = {
  id: string;
  title: string;
  employmentPeriod: string;
  employmentType?: string;
  description?: string;
  icon?: ExperiencePositionIconType;
  skills?: string[];
  isExpanded?: boolean;
};

export type ExperienceItemType = {
  id: string;
  companyName: string;
  companyLogo?: string;
  positions: ExperiencePositionItemType[];
  isCurrentEmployer?: boolean;
};

export function WorkExperience({
  className,
  experiences,
}: {
  className?: string;
  experiences: ExperienceItemType[];
}) {
  return (
    <div className={cn("px-4 max-w-4xl mx-auto text-white", className)}>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
}

export function ExperienceItem({
  experience,
}: {
  experience: ExperienceItemType;
}) {
  return (
    <div className="space-y-4 py-4">
      <div className="flex items-center gap-3">
        <div
          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/5 overflow-hidden border border-white/10"
          aria-hidden
        >
          {experience.companyLogo ? (
            <img
              src={experience.companyLogo}
              alt={experience.companyName}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="flex size-2 rounded-full bg-white/30" />
          )}
        </div>

        <h3 className="text-xl leading-snug font-semibold text-white">
          {experience.companyName}
        </h3>

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center ml-2">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-[#C3E41D] opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-[#C3E41D]" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-4 before:h-full before:w-px before:bg-white/10 pl-2 ml-[-8px]">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePositionItemType;
}) {
  const ExperienceIcon = iconMap[position.icon || "business"];

  return (
    <Collapsible defaultOpen={position.isExpanded} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-6 last:before:bg-black last:before:-left-4 pl-4">
        <CollapsibleTrigger className="group/experience block w-full text-left select-none outline-none focus-visible:ring-2 focus-visible:ring-[#C3E41D] rounded-lg">
          <div className="relative z-10 mb-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-3 bg-transparent">
            <div className="flex items-center gap-3">
              <div
                className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#C3E41D] border border-white/10"
                aria-hidden
              >
                <ExperienceIcon className="size-4" />
              </div>

              <h4 className="text-lg font-medium text-white">
                {position.title}
              </h4>
            </div>

            <div className="flex items-center gap-2 md:ml-auto pl-11 md:pl-0 text-sm text-neutral-400">
              {position.employmentType && (
                <>
                  <dl>
                    <dt className="sr-only">Employment Type</dt>
                    <dd>{position.employmentType}</dd>
                  </dl>

                  <Separator
                    className="data-[orientation=vertical]:h-4"
                    orientation="vertical"
                  />
                </>
              )}

              <dl>
                <dt className="sr-only">Employment Period</dt>
                <dd>{position.employmentPeriod}</dd>
              </dl>

              <div
                className="shrink-0 text-neutral-400 [&_svg]:size-4 ml-2"
                aria-hidden
              >
                <ChevronsDownUpIcon className="hidden group-data-[state=open]/experience:block" />
                <ChevronsUpDownIcon className="hidden group-data-[state=closed]/experience:block" />
              </div>
            </div>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          {position.description && (
            <Prose className="pt-4 pl-11">
              <ReactMarkdown>{position.description}</ReactMarkdown>
            </Prose>
          )}

          {Array.isArray(position.skills) && position.skills.length > 0 && (
            <ul className="flex flex-wrap gap-2 pt-4 pl-11 pb-2">
              {position.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Skill>{skill}</Skill>
                </li>
              ))}
            </ul>
          )}
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-sm md:text-base text-neutral-400 leading-relaxed",
        "[&_p]:mb-4 last:[&_p]:mb-0",
        "[&_a]:text-[#C3E41D] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-white transition-colors duration-300",
        "[&_ul]:list-disc [&_ul]:ml-4 [&_ul]:space-y-1",
        "[&_li]:pl-1",
        className
      )}
      {...props}
    />
  );
}

function Skill({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-[#C3E41D]/20 bg-[#C3E41D]/10 px-2.5 py-1 text-xs font-medium text-[#C3E41D]",
        className
      )}
      {...props}
    />
  );
}
