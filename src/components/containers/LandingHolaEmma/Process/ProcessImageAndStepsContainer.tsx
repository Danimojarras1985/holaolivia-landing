import { ProcessImageContainer } from "./ProcessImageContainer";
import { StepsContainer } from "./StepsContainer";

interface ProcessImageAndStepsContainerProps {
  stepIndex: number;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export function ProcessImageAndStepsContainer({
  stepIndex,
  currentStep,
  setCurrentStep,
}: ProcessImageAndStepsContainerProps) {
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
      <ProcessImageContainer stepIndex={stepIndex} />
      <StepsContainer currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
}
