"use client";

import { FeeExplanationContainer } from "@/components/containers/LandingHolaEmma/Fee/FeeExplanationContainer";
import { FeeImageContainer } from "@/components/containers/LandingHolaEmma/Fee/FeeImageContainer";

export function FeeExplanationAndImageContainer() {
  return (
    <div
      className="
        hidden
        md:flex
        md:items-center
        md:justify-between
        w-full
      "
    >
      {/* Explicación (lado izquierdo) */}
      <FeeExplanationContainer />

      {/* Imagen (lado derecho) */}
      <FeeImageContainer />
    </div>
  );
}

