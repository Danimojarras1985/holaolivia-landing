"use client";

export function CustomerStatusTitleAndSubtitle() {
  return (
    <div
      className="
        flex flex-col items-center mx-auto
        px-32 gap-8
        md:max-w-content-sm md:gap-12 md:px-0
      "
    >
      <h2
        className="
          self-stretch text-center text-text-primary
          text-24-medium md:text-28-bold
        "
      >
        Siempre sabrás en qué va tu cliente
      </h2>
      <p
        className="
          self-stretch text-center text-text-secondary
          text-14-medium
        "
      >
        Olivia acompaña a tu cliente y te informa en cada paso por WhatsApp. Así aseguras que el crédito avanza y tu venta llega al cierre.
      </p>
    </div>
  );
}

