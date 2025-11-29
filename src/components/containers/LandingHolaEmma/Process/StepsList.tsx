import { StepsTitleAndExplanationContainer } from "@/components/containers/LandingHolaEmma/Process/StepsTitleAndExplanationContainer";

export function StepsList() {
  return (
    <div className="flex flex-col gap-24">
      <StepsTitleAndExplanationContainer
        title="RECIBIMOS EL CONTACTO DEL CLIENTE"
        subtitle="El broker nos comparte el nombre y número del cliente por WhatsApp, igual que si lo refiriera a un asesor humano."
      />
      <StepsTitleAndExplanationContainer
        title="RECIBIMOS EL CONTACTO DEL CLIENTE"
        subtitle="El broker nos comparte el nombre y número del cliente por WhatsApp, igual que si lo refiriera a un asesor humano."
      />
      <StepsTitleAndExplanationContainer
        title="Lo contactamos de inmediato POR WHATSAPP"
        subtitle="Apenas recibimos el contacto, tu cliente recibe una guía clara. Le explicamos todo como si fuera un asesor humano."
      />
      <StepsTitleAndExplanationContainer
        title="Asesoramos a TU cliente y lo guiamos paso a paso"
        subtitle="Le explicamos con claridad qué necesita, cómo avanza su solicitud y resolvemos cualquier duda."
      />
      <StepsTitleAndExplanationContainer
        title="Recolectamos la información clave del cliente"
        subtitle="Emmale pide al cliente los documentos necesarios de forma amable, clara y por partes. No hay links, formularios ni confusión: todo ocurre en WhatsApp."
      />
      <StepsTitleAndExplanationContainer
        title="Validamos los documentos antes de aplicar"
        subtitle="La IA revisa que los archivos estén completos, legibles y actualizados, y guía al cliente si algo está mal. Nada se envía a bancos sin una revisión previa."
      />
      <StepsTitleAndExplanationContainer
        title="Radicamos la solicitud en el banco"
        subtitle="Una vez revisado todo, enviamos la solicitud al banco. Tu cliente recibe confirmación inmediata y tú sabes que el proceso ya está en marcha."
      />
      <StepsTitleAndExplanationContainer
        title="Damos seguimiento en tiempo real"
        subtitle="Cada requisito adicional del banco se convierte en un mensaje claro. Tu cliente sabe qué debe hacer y tú recibes un resumen del avance."
      />
      <StepsTitleAndExplanationContainer
        title="Comunicamos la aprobación del crédito"
        subtitle="Avisamos a tu cliente que su crédito fue aprobado 🎉 y te informamos a ti que tu venta está lista para cerrarse. Seguridad para ambos."
      />
      <StepsTitleAndExplanationContainer
        title="Te notificamos tu comisión"
        subtitle="Cuando el banco desembolsa, te avisamos al instante. Tu venta quedó cerrada y tu comisión ya está disponible para cobro."
      />
    </div>
  );
}

