'use client';

import TextType from '@/components/ui/landing/TextType/TextType';

type ChipLandingProps = {
  label?: string | string[];
};

export function ChipLanding({ label }: ChipLandingProps) {
  const messages = label || [
    "Asistente de AI para brokers inmobiliarios",
    "Tu Broker Financiero en WhatsApp",
    "Convierte leads en cierres"
  ];

  return (
    <span
      className="
        inline-flex items-center justify-center
        whitespace-nowrap
        rounded-full border border-state-info
        px-16 py-4
        text-12-medium text-text-primary
        bg-surface-background
      "
    >
      <TextType
        text={messages}
        typingSpeed={60}
        deletingSpeed={40}
        pauseDuration={3100}
        loop={true}
        showCursor={true}
        cursorCharacter="|"
        cursorClassName="text-brand-primary"
        className="text-text-primary"
      />
    </span>
  );
}
