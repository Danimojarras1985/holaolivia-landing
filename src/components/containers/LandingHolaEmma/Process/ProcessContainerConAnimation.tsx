"use client";

import { useState } from "react";
import { ProcessTitleAndSubtitleContainer } from "./ProcessTitleAndSubtitleContainer";
import { ProcessAnimationAndStepsContainer } from "./ProcessAnimationAndStepsContainer";
import { ProcessAnimationContainer } from "./ProcessAnimationContainer";
import { StepsContainer } from "./StepsContainer";

export function ProcessContainerConAnimation() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section
      className="
        flex flex-col items-center w-full
        py-32 px-0
        gap-36
        bg-surface-card
        md:py-56 md:px-40
        md:gap-40
        md:rounded-lg
      "
    >
      <ProcessTitleAndSubtitleContainer />

      {/* Solo en desktop */}
      <div className="hidden md:block w-full">
        <ProcessAnimationAndStepsContainer
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>

      {/* Solo en mobile */}
      <div className="md:hidden w-full flex flex-col gap-24">
        <ProcessAnimationContainer stepIndex={currentStep} />
        <StepsContainer currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
    </section>
  );
}

