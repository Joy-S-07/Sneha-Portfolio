import React, { useMemo } from "react";
import { motion, useInView } from "framer-motion";

interface TimelineContentProps {
  as?: React.ElementType;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement | HTMLDivElement | null>;
  customVariants: any;
  className?: string;
  children: React.ReactNode;
}

export function TimelineContent({
  as: Component = "div",
  animationNum,
  timelineRef,
  customVariants,
  className = "",
  children,
}: TimelineContentProps) {
  // Use Framer Motion's useInView hook on the provided ref
  const isInView = useInView(timelineRef as React.RefObject<Element>, { once: true, amount: 0.2 });

  // Memoize the motion component creation to prevent infinite render loops.
  // Always use motion(Component) to avoid dynamic indexing into `motion`
  // which is unreliable in framer-motion v12+.
  const MotionComponent = useMemo(() => {
    return motion.create(Component as string);
  }, [Component]) as React.ElementType;

  return (
    <MotionComponent
      custom={animationNum}
      variants={customVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
