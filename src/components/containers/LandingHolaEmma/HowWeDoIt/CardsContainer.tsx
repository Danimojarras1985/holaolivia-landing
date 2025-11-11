import { CardLanding } from "@/components/ui/landing/CardLanding/CardLanding";

export function CardsContainer() {
  return (
    <div
      className="
        flex w-full items-start
        flex-col justify-center gap-12 px-16
        md:flex-row md:justify-start md:gap-24 md:px-0
      "
    >
      <CardLanding 
        title="Le compartes el contacto a Olivia" 
        description="Envías el nombre y teléfono por WhatsApp y Olivia toma el caso en segundos." 
        className="flex-1 shrink-0"
      />
      <CardLanding 
        title="Olivia asesora y gestiona el crédito" 
        description="Explica opciones, reúne documentos con checklist y radica la solicitud ante el banco." 
        className="flex-1 shrink-0"
      />
      <CardLanding 
        title="Olivia te mantiene al tanto" 
        description="Recibes actualizaciones en cada paso. Siempre sabes en qué va el proceso hasta el desembolso del crédito." 
        className="flex-1 shrink-0"
      />
    </div>
  );
}
