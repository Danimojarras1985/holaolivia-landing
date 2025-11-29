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
        description="Si falta un documento, hay un bloqueo o el banco notifica algo, Credflow te avisa al instante."
      />
      <FeatureItem
        icon="list-todo"
        title="Resumen por cliente"
        description="Recibes un resumen claro de cada conversación de Credflow con tu cliente: avances, pendientes y próximas acciones."
      />
      <FeatureItem
        icon="message-circle"
        title="Todo por WhatsApp"
        description="Todo sucede en WhatsApp. Sin portales ni llamadas, solo mensajes que importan, como si tuvieras un asistente personal."
      />

      {/* CTA */}
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

