"use client";

import { FeeTitleAndSubtitle } from "@/components/containers/LandingHolaEmma/Fee/FeeTitleAndSubtitle";
import { FeeExplanationAndImageContainer } from "@/components/containers/LandingHolaEmma/Fee/FeeExplanationAndImageContainer";
import { FeeImageContainer } from "@/components/containers/LandingHolaEmma/Fee/FeeImageContainer";
import { FeeExplanationContainer } from "@/components/containers/LandingHolaEmma/Fee/FeeExplanationContainer";

export function FeeContainer() {
  return (
    <section
      className="
        flex flex-col items-center w-full bg-surface-card
        py-32 px-0 gap-36
        md:py-56 md:px-40 md:gap-40 md:rounded-lg
      "
    >
      {/* Título + subtítulo (siempre visible) */}
      <FeeTitleAndSubtitle />

      {/* Desktop: explicación + imagen en dos columnas */}
      <div className="hidden md:flex w-full">
        <FeeExplanationAndImageContainer />
      </div>

      {/* Mobile: imagen primero, luego explicación */}
      <div className="flex flex-col gap-32 md:hidden w-full">
        <FeeImageContainer />
        <FeeExplanationContainer />
      </div>
    </section>
  );
}

