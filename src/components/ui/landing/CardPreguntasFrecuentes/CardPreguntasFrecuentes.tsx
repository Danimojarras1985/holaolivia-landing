"use client";

import { Icon } from "@/components/ui/Icon";

type CardPreguntasFrecuentesProps = {
  question: string;
  answer: string;
  isOpen?: boolean; // false = Default, true = Active
  onToggle?: () => void; // callback opcional al hacer clic
  className?: string; // clases adicionales para el contenedor
};

export function CardPreguntasFrecuentes({
  question,
  answer,
  isOpen = false,
  onToggle,
  className = "",
}: CardPreguntasFrecuentesProps) {
  return (
    <div
      className={`
        flex flex-col items-start w-full
        bg-surface-card
        border
        ${isOpen ? "border-brand-primary" : "border-border-default"}
        rounded-lg
        overflow-hidden
        px-40 py-24
        gap-16
        ${className}
      `}
    >
      {/* Question Row - Clickeable */}
      <div
        className="flex items-center gap-16 w-full cursor-pointer"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle?.();
          }
        }}
      >
        <Icon
          icon="chevron-down"
          size="md"
          className={`
            flex-shrink-0 transition-transform duration-300
            ${isOpen ? "rotate-180 text-brand-primary" : "text-brand-primary"}
          `}
          aria-hidden="true"
        />
        <p className="text-16-bold text-text-primary flex-1">
          {question}
        </p>
      </div>

      {/* Answer - Only visible when Active */}
      {isOpen && (
        <p className="text-14-medium text-text-secondary w-full">
          {answer}
        </p>
      )}
    </div>
  );
}
