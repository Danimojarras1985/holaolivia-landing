"use client";

import { useState } from "react";
import { CardPreguntasFrecuentes } from "@/components/ui/landing/CardPreguntasFrecuentes/CardPreguntasFrecuentes";

const cards = [
  {
    question: "¿Qué es HolaOlivia?",
    answer:
      "HolaOlivia es un asistente con inteligencia artificial que atiende a tus clientes por WhatsApp, los guía en su proceso de crédito y te mantiene informado en cada paso.",
  },
  {
    question: "¿Qué hace exactamente Olivia?",
    answer:
      "Contacta por WhatsApp, explica opciones con lenguaje sencillo, resuelve dudas, solicita la documentación necesaria por partes y radica la solicitud de crédito ante el banco.",
  },
  {
    question: "¿Cómo me entero del avance de cada cliente?",
    answer:
      "Recibes alertas automáticas, resúmenes por cliente y notificaciones de cualquier novedad directamente en WhatsApp.",
  },
  {
    question: "¿Cuánto tiempo tarda el proceso?",
    answer:
      "Depende del banco y del cliente, pero el asistente agiliza todo porque responde al instante y no deja pendientes.",
  },
  {
    question: "¿Qué tan seguro es?",
    answer:
      "Toda la información se maneja con autorización del cliente y a través de la API oficial de WhatsApp. Cumplimos los estándares de seguridad financiera.",
  },
  {
    question: "¿Cuánto cuesta usar HolaOlivia?",
    answer:
      "No tiene costo fijo para el broker. Tu comisión del crédito se respeta; el modelo de HolaOlivia se basa en acuerdos de comisión del crédito con los aliados financieros.",
  },
  {
    question: "¿Qué necesito para empezar?",
    answer:
      "Solo compartir el contacto del cliente. El asistente se encarga del resto.",
  },
  {
    question: "¿Puedo usarlo con varios clientes a la vez?",
    answer:
      "Sí. El asistente puede atender a muchos clientes simultáneamente y mantenerte informado de todos.",
  },
  {
    question: "¿El cliente sabe que hay una IA detrás?",
    answer:
      "Sí. Desde el primer mensaje, el asistente se presenta como parte de tu equipo y explica que te apoyará durante todo el proceso.",
  },
  {
    question: "¿En qué bancos opera HolaOlivia?",
    answer:
      "Trabajamos con los principales bancos del país y estamos ampliando convenios constantemente para ofrecer más opciones a tus clientes.",
  },
];

export function PreguntasFrecuentesCardsContainer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className="
        flex flex-col items-start self-stretch
        m-0
      "
    >
      {cards.map((card, index) => (
        <CardPreguntasFrecuentes
          key={index}
          question={card.question}
          answer={card.answer}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex((prev) => (prev === index ? null : index))
          }
          className="mb-[var(--space-12)] last:mb-0 md:mb-[var(--space-16)] md:last:mb-0"
        />
      ))}
    </div>
  );
}
