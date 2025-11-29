'use client';

import { HeaderLanding } from '@/components/ui/landing/HeaderLanding/HeaderLanding';
import { HeroTextContainerV2 } from './HeroTextContainerV2';
import { HeroBackgroundSquares } from './HeroBackgroundSquares';

export function HeroContainerV2() {
  return (
    <section
      className="
        relative flex w-full flex-col items-start
        gap-36 px-16
        pt-[var(--space-16)] pb-[var(--space-36)]
        rounded-lg bg-surface-background
        overflow-visible

        md:items-center
        md:gap-88
        md:px-0
        md:pt-[var(--space-24)] md:pb-[var(--space-88)]
        md:flex-col
      "
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroBackgroundSquares />
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full">
        {/* Mobile */}
        <div className="md:hidden w-full">
          <HeaderLanding />
        </div>

        <div className="md:hidden mt-[var(--space-40)]">
          <HeroTextContainerV2 />
        </div>

        {/* Desktop */}
        <div className="hidden md:flex md:flex-col md:items-center md:gap-40 md:w-full">
          <HeaderLanding />
          <HeroTextContainerV2 />
        </div>
      </div>
    </section>
  );
}
