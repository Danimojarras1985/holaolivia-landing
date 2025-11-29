"use client";

export function FeeTitleAndSubtitle() {
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
        Tu comisión del crédito, fácil y segura.
      </h2>
      <p
        className="
          self-stretch text-center text-text-secondary
          text-14-medium
        "
      >
        Recibes tu comisión en cuanto el crédito desembolsa. Sin trámites, sin papeleo y con notificación inmediata por WhatsApp.
      </p>
    </div>
  );
}

