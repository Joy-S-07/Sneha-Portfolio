import * as React from "react";
import { cn } from "@/lib/utils";

export interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  category: string;
  name: string;
}

const SkillCard = React.forwardRef<HTMLDivElement, SkillCardProps>(
  ({ className, icon, category, name, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group flex min-w-[200px] items-center gap-4 rounded-xl border border-white/10 bg-[#0f0f0f] p-4 shadow-sm",
          "transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1 hover:border-white/20 hover:bg-black/50 cursor-pointer",
          className
        )}
        {...props}
      >
        {/* Icon Slot - Always visible in original colors */}
        <div className="relative flex shrink-0 items-center justify-center size-12 rounded-lg bg-white/5 border border-white/10 text-white overflow-hidden transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10">
          <div className="absolute inset-0 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col text-left">
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{category}</p>
          <p className="text-base font-semibold text-white mt-0.5">{name}</p>
        </div>
      </div>
    );
  }
);
SkillCard.displayName = "SkillCard";

export { SkillCard };
