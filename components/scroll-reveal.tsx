"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { type ReactNode } from "react";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = "slide",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "slide" | "fade";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variant === "fade" ? fadeVariants : revealVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxImage({
  src,
  alt,
  className,
  sizes = "(max-width: 1024px) 100vw, 58vw",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? ""}`}
      initial={{ scale: 1.08 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <motion.div
        className="relative h-full min-h-0 w-full"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
        />
      </motion.div>
    </motion.div>
  );
}
