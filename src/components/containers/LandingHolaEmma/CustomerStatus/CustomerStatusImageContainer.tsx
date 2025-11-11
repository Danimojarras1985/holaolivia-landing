"use client";

import Image from "next/image";

export function CustomerStatusImageContainer() {
  return (
    <div
      className="
        flex flex-col justify-center items-center
        h-process-image-mobile
        md:flex-1 md:h-process-image-desktop
      "
    >
      <Image
        src="/landing/customer-status/whatsapp-mockup.webp"
        alt="Ejemplo de conversación automatizada entre el asistente y el broker"
        width={1343}
        height={768}
        priority
        className="w-auto h-full object-contain rounded-[var(--radius-lg)]"
      />
    </div>
  );
}

