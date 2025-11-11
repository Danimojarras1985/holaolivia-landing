"use client";

import { CustomerStatusTitleAndSubtitle } from "@/components/containers/LandingHolaEmma/CustomerStatus/CustomerStatusTitleAndSubtitle";
import { CustomerStatusExplanationAndImageContainer } from "@/components/containers/LandingHolaEmma/CustomerStatus/CustomerStatusExplanationAndImageContainer";
import { CustomerStatusImageContainer } from "@/components/containers/LandingHolaEmma/CustomerStatus/CustomerStatusImageContainer";
import { CustomerStatusExplanationContainer } from "@/components/containers/LandingHolaEmma/CustomerStatus/CustomerStatusExplanationContainer";

export function CustomerStatusContainer() {
  return (
    <section
      className="
        flex flex-col items-center w-full bg-surface-card
        py-32 px-0 gap-36
        md:py-56 md:px-40 md:gap-40 md:rounded-lg
      "
    >
      {/* Título + subtítulo (siempre visible) */}
      <CustomerStatusTitleAndSubtitle />

      {/* Desktop: explicación + imagen en dos columnas */}
      <div className="hidden md:flex w-full">
        <CustomerStatusExplanationAndImageContainer />
      </div>

      {/* Mobile: imagen primero, luego explicación */}
      <div className="flex flex-col gap-32 md:hidden w-full">
        <CustomerStatusImageContainer />
        <CustomerStatusExplanationContainer />
      </div>
    </section>
  );
}

