"use client";

// Nota: La imagen en mobile se renderiza únicamente desde ProcessContainer para evitar duplicados.

import { Dots } from "@/components/ui/Dots";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon";
import { StepsTitleAndExplanationContainer } from "./StepsTitleAndExplanationContainer";

const steps = [
  {
    title: "Comparte el contacto de tu cliente con Olivia",
    subtitle: "Le envías el nombre y el número de tu cliente por WhatsApp y ella se encarga del resto.",
  },
  {
    title: "OLIVIA CONTACTA A TU CLIENTE DE INMEDIATO",
    subtitle: "Al recibir el contacto, le escribe por WhatsApp, se presenta y comparte una guía rápida y clara.",
  },
  {
    title: "OLIVIA ASESORA A TU CLIENTE",
    subtitle: "Explica con claridad y responde dudas en lenguaje sencillo para que tu cliente se sienta seguro.",
  },
  {
    title: "OLIVIA REÚNE LA INFORMACIÓN DE TU CLIENTE",
    subtitle: "Pide solo la documentación necesaria, por WhatsApp y por partes, con instrucciones claras. Sin enlaces ni formularios.",
  },
  {
    title: "OLIVIA VALIDA LOS DOCUMENTOS ANTES DE APLICAR",
    subtitle: "Revisa que estén completos, legibles y vigentes. Si falta algo, indica cómo corregirlo. Nada se envía al banco sin una revisión previa.",
  },
  {
    title: "OLIVIA RADICA LA SOLICITUD EN EL BANCO",
    subtitle: "Tras la revisión, Olivia radica ante el banco. Llega la confirmación al cliente y tú quedas al tanto del inicio del trámite.",
  },
  {
    title: "OLIVIA DA SEGUIMIENTO EN TIEMPO REAL",
    subtitle: "Olivia monitorea las alertas del banco, coordina los pasos con el cliente y te informa cada progreso hasta el desembolso.",
  },
  {
    title: "OLIVIA COMUNICA LA APROBACIÓN DEL CRÉDITO",
    subtitle: "Informa a tu cliente que su crédito fue aprobado 🎉 y te confirma que la venta está lista para cerrarse. Claridad y tranquilidad para ambos.",
  },
  {
    title: "OLIVIA TE NOTIFICA TU COMISIÓN",
    subtitle: "Cuando el banco desembolsa el crédito, Olivia te avisa al instante. Tu comisión del crédito queda disponible para cobro.",
  },
];

interface StepsContainerProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export function StepsContainer({ currentStep, setCurrentStep }: StepsContainerProps) {
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div
      className="
        flex flex-col justify-center items-start w-full
        px-16 gap-24
        md:px-0 md:gap-40 md:flex-1
      "
    >
      <StepsTitleAndExplanationContainer
        title={steps[currentStep].title}
        subtitle={steps[currentStep].subtitle}
      />

      <Dots total={steps.length} selectedIndex={currentStep} />

      <div className="flex items-center gap-24">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="inline-flex items-center justify-center p-12 rounded-full bg-text-primary hover:bg-brand-primary-hover disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Icon icon="arrow-left" size="md" className="text-surface-background" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className="inline-flex items-center justify-center p-12 rounded-full bg-text-primary hover:bg-brand-primary-hover disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Icon icon="arrow-right" size="md" className="text-surface-background" />
        </button>
      </div>

      <Button text="Hablar con Olivia en WhatsApp" />
    </div>
  );
}
