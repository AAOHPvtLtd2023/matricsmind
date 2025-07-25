import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { cn } from "../../lib/utils";

export const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const TextScroll = ({
  children,
  text,
  default_velocity = 5,
  className,
}) => {
  const content = children ?? text ?? "";

  const ParallaxText = ({ children, baseVelocity = 100, className }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (!containerRef.current || !textRef.current) return;

        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;

        if (!textWidth || isNaN(textWidth) || textWidth === 0) {
          setTimeout(calculateRepetitions, 100);
          return;
        }

        const newReps = Math.ceil(containerWidth / textWidth) + 2;
        setRepetitions(newReps > 0 ? newReps : 5);
      };

      calculateRepetitions();

      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [children]);

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        className="w-full overflow-hidden whitespace-nowrap"
        ref={containerRef}
      >
        {repetitions > 0 && (
          <motion.div className={cn("inline-block", className)} style={{ x }}>
            {Array.from({ length: repetitions }).map((_, i) => (
              <span key={i} ref={i === 0 ? textRef : null}>
                {children}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <section className="relative w-full">
      <ParallaxText baseVelocity={default_velocity} className={className}>
        {content}
      </ParallaxText>
      <ParallaxText baseVelocity={-default_velocity} className={className}>
        {content}
      </ParallaxText>
    </section>
  );
};
