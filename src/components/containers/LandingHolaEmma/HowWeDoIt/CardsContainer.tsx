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
        title="Le compartes el contacto de tu cliente a Credflow" 
        description="Envías el nombre y teléfono por WhatsApp y Credflow toma el caso en segundos." 
        className="flex-1 shrink-0"
      />
      <CardLanding 
        title="Credflow asesora y gestiona el crédito de tu cliente" 
        description="Explica opciones, reúne documentos con checklist y envía la solicitud a varios bancos." 
        className="flex-1 shrink-0"
      />
      <CardLanding 
        title="Credflow te mantiene al tanto del proceso de tu cliente" 
        description="Recibes actualizaciones en cada paso. Siempre sabes en qué va el proceso hasta el desembolso del crédito." 
        className="flex-1 shrink-0"
      />
    </div>
  );
}
