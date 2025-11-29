type CardLandingProps = {
  title: string;
  description: string;
  className?: string;
};

export function CardLanding({ title, description, className = "" }: CardLandingProps) {
  return (
    <div
      className={`
        flex flex-col items-start
        min-h-[188px]
        gap-16
        px-36 py-40
        flex-[1_0_0]
        rounded-lg
        bg-surface-card
        ${className}
      `}
    >
      <h3 className="self-stretch text-14-bold uppercase text-text-secondary">
        {title}
      </h3>
      <p className="self-stretch text-14-medium text-text-primary">
        {description}
      </p>
    </div>
  );
}
