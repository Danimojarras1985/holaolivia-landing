import { ProcessAnimationContainer } from "./ProcessAnimationContainer";
import { StepsContainer } from "./StepsContainer";

interface ProcessAnimationAndStepsContainerProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export function ProcessAnimationAndStepsContainer({
  currentStep,
  setCurrentStep,
}: ProcessAnimationAndStepsContainerProps) {
  return (
    <div
      className="
        hidden
        md:flex
        md:justify-between
        md:items-center
        w-full
      "
    >
      <ProcessAnimationContainer stepIndex={currentStep} />
      <StepsContainer currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
}

