import { Icon } from "@/components/ui/Icon";

type ButtonArrowProps = {
  direction?: "left" | "right";
};

export function ButtonArrow({ direction = "left" }: ButtonArrowProps) {
  const iconName = direction === "left" ? "arrow-left" : "arrow-right";
  
  return (
    <button className="inline-flex items-center justify-center p-12 rounded-full bg-text-primary hover:bg-brand-primary-hover">
      <Icon icon={iconName} size="md" className="text-surface-background" />
    </button>
  );
}
