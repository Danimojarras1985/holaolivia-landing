"use client";

import { CustomerStatusExplanationContainer } from "@/components/containers/LandingHolaEmma/CustomerStatus/CustomerStatusExplanationContainer";
import { CustomerStatusImageContainer } from "@/components/containers/LandingHolaEmma/CustomerStatus/CustomerStatusImageContainer";

export function CustomerStatusExplanationAndImageContainer() {
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
      <CustomerStatusExplanationContainer />

      {/* Imagen (lado derecho) */}
      <CustomerStatusImageContainer />
    </div>
  );
}

