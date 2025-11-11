"use client";

import { FeatureItem } from "@/components/ui/landing/FeatureItem/FeatureItem";
import { Button } from "@/components/ui/Button/Button";

export function CustomerStatusExplanationContainer() {
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
        icon="bell-ring"
        title="Alertas automáticas"
        description="Si falta un documento, hay un bloqueo o el banco notifica algo, Olivia te avisa al instante."
      />
      <FeatureItem
        icon="list-todo"
        title="Resumen por cliente"
        description="Recibes un resumen claro de cada conversación de Olivia con tu cliente: avances, pendientes y próximas acciones."
      />
      <FeatureItem
        icon="message-circle"
        title="Todo por WhatsApp"
        description="Todo sucede en WhatsApp. Sin portales ni llamadas, solo mensajes que importan, como si tuvieras un asistente personal."
      />

      {/* CTA */}
      <Button text="Hablar con Olivia en WhatsApp" />
    </div>
  );
}

