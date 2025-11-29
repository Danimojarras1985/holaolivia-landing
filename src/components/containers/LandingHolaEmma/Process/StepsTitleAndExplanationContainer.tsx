interface StepsTitleAndExplanationContainerProps {
  title: string;
  subtitle: string;
}

export function StepsTitleAndExplanationContainer({
  title,
  subtitle,
}: StepsTitleAndExplanationContainerProps) {
  return (
    <div className="flex flex-col items-start gap-16 w-full">
      <h3 className="text-14-bold text-text-primary w-full uppercase">
        {title}
      </h3>
      <p className="text-14-medium text-text-secondary w-full">
        {subtitle}
      </p>
    </div>
  );
}

