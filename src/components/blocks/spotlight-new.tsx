"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number | string;
  height?: number | string;
  smallWidth?: number | string;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
  translateY = -350,
  width = "50vw", // Changed to relative unit
  height = 1380,
  smallWidth = "25vw", // Changed to relative unit
  duration = 7,
  xOffset = 50, // Reduced default offset
}: SpotlightProps = {}) => {
  // Responsive xOffset based on screen width
  const [responsiveOffset, setResponsiveOffset] = useState(xOffset);

  useEffect(() => {
    // Update offset on window resize
    const handleResize = () => {
      setResponsiveOffset(window.innerWidth < 768 ? Math.min(30, xOffset / 2) : xOffset);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [xOffset]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="pointer-events-none absolute inset-0 h-full overflow-hidden z-0"
    >
      <motion.div
        animate={{
          x: [0, responsiveOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-full h-screen z-40 pointer-events-none overflow-hidden"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: width,
            height: height,
          }}
          className="absolute top-0 left-0"
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: smallWidth,
            height: height,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: smallWidth,
            height: height,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -responsiveOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-full h-screen z-40 pointer-events-none overflow-hidden"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: width,
            height: height,
          }}
          className="absolute top-0 right-0"
        />

        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: smallWidth,
            height: height,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />

        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: smallWidth,
            height: height,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
};

export const GridBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    />
  );
};