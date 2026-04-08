import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CustomCursorProps = {
  isDark: boolean;
};

export default function CustomCursor({ isDark }: CustomCursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 220, damping: 24, mass: 0.8 });
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 24, mass: 0.8 });

  const dotX = useSpring(mouseX, { stiffness: 320, damping: 30, mass: 0.6 });
  const dotY = useSpring(mouseY, { stiffness: 320, damping: 30, mass: 0.6 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(media.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsTouchDevice(event.matches);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const isInteractive = !!target?.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor='hover']"
      );
      setIsHovering(isInteractive);
    };

    media.addEventListener("change", handleChange);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      media.removeEventListener("change", handleChange);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border mix-blend-difference ${
          isDark ? "border-violet-400/70" : "border-violet-500/70"
        }`}
        style={{
          x: ringX,
          y: ringY,
          width: 28,
          height: 28,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 260, damping: 18 },
          opacity: { duration: 0.2 },
        }}
      />

      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[9999] rounded-full mix-blend-difference ${
          isDark ? "bg-violet-400" : "bg-violet-500"
        }`}
        style={{
          x: dotX,
          y: dotY,
          width: 10,
          height: 10,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? [1, 1.15, 1] : [1, 1.08, 1],
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: {
            duration: 0.7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </>
  );
}