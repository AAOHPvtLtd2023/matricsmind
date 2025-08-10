"use client";
import { useState, useEffect, useRef } from "react";

export default function LazySection({ children, rootMargin = "200px" }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // load only once
        }
      },
      { rootMargin }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return <div ref={sectionRef}>{isVisible ? children : null}</div>;
}
