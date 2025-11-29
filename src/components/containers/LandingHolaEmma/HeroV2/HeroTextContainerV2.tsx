'use client';

import { ChipLanding } from '@/components/ui/landing/ChipLanding/ChipLanding';
import { MainandSecondLineContainerV2 } from './MainandSecondLineContainerV2';
import { Button } from '@/components/ui/Button/Button';

export function HeroTextContainerV2() {
  return (
    <div
      className="
        flex flex-col items-start gap-16 w-full
        md:items-center md:gap-40 md:self-stretch
      "
    >
      <ChipLanding />

      <MainandSecondLineContainerV2 />

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScvotPu59VakSZ1jz_fKLFb_e7fq7rJHRiho65nXs8PM03qaQ/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button text="Quiero usar Credflow" />
      </a>
    </div>
  );
}
