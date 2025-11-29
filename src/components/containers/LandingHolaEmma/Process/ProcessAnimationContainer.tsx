"use client";

import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import step1Anim from "@/assets/animations/jitter/step1.json";
import step2Anim from "@/assets/animations/jitter/step2.json";
import step3Anim from "@/assets/animations/jitter/step3.json";
import step4Anim from "@/assets/animations/jitter/step4.json";
import step5Anim from "@/assets/animations/jitter/step5.json";
import step6Anim from "@/assets/animations/jitter/step6.json";
import step7Anim from "@/assets/animations/jitter/step7.json";
import step8Anim from "@/assets/animations/jitter/step8.json";
import step9Anim from "@/assets/animations/jitter/step9.json";

interface ProcessAnimationContainerProps {
  stepIndex: number;
}

const stepAnimations = [
  step1Anim,
  step2Anim,
  step3Anim,
  step4Anim,
  step5Anim,
  step6Anim,
  step7Anim,
  step8Anim,
  step9Anim,
];

export function ProcessAnimationContainer({ stepIndex }: ProcessAnimationContainerProps) {
  const animationData = stepAnimations[stepIndex] || stepAnimations[0];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  // Reiniciar cuando cambia el stepIndex
  useEffect(() => {
    setIsVisible(false);
    setHasPlayed(false);
  }, [stepIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          setIsVisible(true);
          setHasPlayed(true);
        }
      },
      { threshold: 0.3 } // dispara cuando el 30% del componente es visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasPlayed]);

  return (
    <div
      ref={containerRef}
      className="
        flex
        justify-center
        items-center
        w-full
        md:flex-1
      "
    >
      <div
        className="
          relative
          w-animation-mobile
          h-animation-mobile
          md:w-animation-desktop
          md:h-animation-desktop
          flex
          items-center
          justify-center
          overflow-hidden
          rounded-xl
          shadow-lg
        "
      >
        {isVisible && (
          <Lottie
            animationData={animationData}
            loop={false}
            autoplay
            className="
              w-full
              h-full
              object-contain
            "
          />
        )}
      </div>
    </div>
  );
}
