import { ButtonArrow } from "@/components/ui/Button/ButtonArrow";

export function StepsButtonsContainer() {
  return (
    <div className="flex items-center gap-24">
      <ButtonArrow direction="left" />
      <ButtonArrow direction="right" />
    </div>
  );
}

