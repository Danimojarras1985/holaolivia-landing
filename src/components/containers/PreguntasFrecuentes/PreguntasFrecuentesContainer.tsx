"use client";

import { PreguntasFrecuentesCardsContainer } from "./PreguntasFrecuentesCardsContainer";

export function PreguntasFrecuentesContainer() {
  return (
    <section
      className="
        flex flex-col items-start self-stretch
        !gap-[var(--space-24)]
        px-[var(--space-16)] md:px-0
      "
    >
      <h2 className="m-0 text-22-bold md:text-24-bold text-text-primary self-stretch">
        Preguntas frecuentes
      </h2>
      <PreguntasFrecuentesCardsContainer />
    </section>
  );
}
