"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type BaseProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
};

const viewportDefault = {
  amount: 0.2,
  once: false,
};

export function RevealUp({
  children,
  delay = 0,
  className,
  once = false,
}: BaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ ...viewportDefault, once }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealDown({
  children,
  delay = 0,
  className,
  once = false,
}: BaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ ...viewportDefault, once }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealLeft({
  children,
  delay = 0,
  className,
  once = false,
}: BaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -34 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ ...viewportDefault, once }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealRight({
  children,
  delay = 0,
  className,
  once = false,
}: BaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 34 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ ...viewportDefault, once }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealCard({
  children,
  delay = 0,
  className,
  once = false,
}: BaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.97 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ ...viewportDefault, once }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      whileHover={{
        y: -3,
        boxShadow: "0 10px 30px rgba(0,0,0,0.14)",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealButtonRow({
  children,
  delay = 0,
  className,
  once = false,
}: BaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ ...viewportDefault, once }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}