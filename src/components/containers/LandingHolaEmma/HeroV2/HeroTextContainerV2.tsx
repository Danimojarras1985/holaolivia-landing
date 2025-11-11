'use client';

import { ChipLanding } from '@/components/ui/landing/ChipLanding/ChipLanding';
import { MainandSecondLineContainerV2 } from './MainandSecondLineContainerV2';
import { Button } from '@/components/ui/Button/Button';

export function HeroTextContainerV2() {
  return (
    <div
      className='
        flex flex-col items-start gap-16 w-full
        md:items-center md:gap-40 md:self-stretch
      '
    >
      <ChipLanding />
      <MainandSecondLineContainerV2 />
      <Button text='Hablar con Olivia en WhatsApp' />
    </div>
  );
}
