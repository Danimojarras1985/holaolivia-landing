"use client";

import { FeatureItem } from "@/components/ui/landing/FeatureItem/FeatureItem";
import { Button } from "@/components/ui/Button/Button";

export function FeeExplanationContainer() {
  return (
    <div
      className="
        flex flex-col items-start justify-center
        px-16 gap-32 self-stretch
        md:max-w-customer-status-explanation md:gap-40 md:px-0
      "
    >
      {/* FeatureItems */}
      <FeatureItem
        icon="file-text"
        title="Transparente"
        description="Siempre sabes cuándo y cuánto cobrar. Olivia muestra el estado exacto de cada comisión, sin sorpresas ni números confusos."
      />
      <FeatureItem
        icon="bell-ring"
        title="Inmediata"
        description="En el momento del desembolso, Olivia te notifica. No tienes que preguntar ni hacer seguimiento; el aviso llega directo a tu WhatsApp."
      />
      <FeatureItem
        icon="smartphone"
        title="Simple"
        description="El cobro es 100% digital y toma segundos desde tu celular. Sin papeleo, sin llamadas, sin pasos extra: dos clics y tu comisión queda en tu cuenta."
      />

      {/* CTA */}
      <Button text="Hablar con Olivia en WhatsApp" />
    </div>
  );
}

