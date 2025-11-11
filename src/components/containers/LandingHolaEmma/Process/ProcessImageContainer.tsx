import Image from "next/image";

interface ProcessImageContainerProps {
  stepIndex: number;
}

// TODO: Cuando se suban imágenes reales, asegúrate de que estén en /public/images/steps/
// Actualmente estas rutas son placeholders y devolverán 404 hasta que subas los assets
const stepImages = [
  "/images/steps/step1.png",
  "/images/steps/step2.png",
  "/images/steps/step3.png",
  "/images/steps/step4.png",
  "/images/steps/step5.png",
  "/images/steps/step6.png",
  "/images/steps/step7.png",
  "/images/steps/step8.png",
  "/images/steps/step9.png",
];

export function ProcessImageContainer({ stepIndex }: ProcessImageContainerProps) {
  const src = stepImages[stepIndex] || stepImages[0];

  return (
    <div className="flex w-full justify-center md:flex-1">
      <Image
        src={src}
        alt={`Ilustración del paso ${stepIndex + 1} del proceso`}
        width={302}
        height={528}
        className="
          w-auto 
          h-process-image-mobile
          md:h-process-image-desktop
          rounded-lg 
          object-contain
        "
        priority={stepIndex === 0}
      />
    </div>
  );
}
