interface DotsProps {
  total: number;
  selectedIndex: number;
}

export function Dots({ total, selectedIndex }: DotsProps) {
  return (
    <div className="inline-flex items-start gap-8">
      {Array.from({ length: total }, (_, index) => (
        <div
          key={index}
          className={
            index === selectedIndex
              ? "w-8 h-8 rounded-full bg-brand-primary"
              : "w-8 h-8 rounded-full bg-border-default"
          }
        />
      ))}
    </div>
  );
}

