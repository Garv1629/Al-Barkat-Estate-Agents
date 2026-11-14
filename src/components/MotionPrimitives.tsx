import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";

export const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

interface EditorialRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
}

export const EditorialReveal: React.FC<EditorialRevealProps> = ({
  children,
  delay = 0,
  distance = 20,
  className = "",
  ...rest
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: 0.6,
        delay,
        ease: EASE_LUXURY,
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

interface StaggerGridProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
}

export const StaggerGrid: React.FC<StaggerGridProps> = ({
  children,
  stagger = 0.07,
  className = "",
  ...rest
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: EASE_LUXURY,
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
