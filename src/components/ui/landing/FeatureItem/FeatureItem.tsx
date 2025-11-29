"use client";

import { Icon } from "@/components/ui/Icon";

type FeatureItemProps = {
  icon: string; // nombre del ícono en el sistema de Icon
  title: string; // texto principal
  description: string; // texto secundario
};

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex flex-row items-start gap-16 w-full">
      {/* Icono */}
      <Icon
        icon={icon}
        size="md"
        className="text-brand-primary flex-shrink-0"
        aria-hidden="true"
      />

      {/* Textos */}
      <div className="flex flex-col gap-4 flex-1">
        <h3 className="text-16-bold text-text-primary">{title}</h3>
        <p className="text-14-medium text-text-secondary">{description}</p>
      </div>
    </div>
  );
}

