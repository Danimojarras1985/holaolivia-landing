"use client";

export function CloseValuePropTitleandSubtitleContainer() {
  return (
    <div
      className="
        flex flex-col gap-16
        items-start w-full
        md:items-center md:justify-center md:w-[688px] md:max-w-[688px]
      "
    >
      <h2
        className="
          w-full text-center text-text-primary
          text-24-bold md:text-32-bold
        "
      >
        OLIVIA IMPULSA TU NEGOCIO INMOBILIARIO CON UNA MEJOR ASESORÍA FINANCIERA
      </h2>

      <p
        className="
          w-full text-center text-text-secondary
          text-14-medium md:text-16-medium
        "
      >
        La mejor asesoría financiera para tu cliente se traduce en ventas inmobiliarias que se cierran sin esfuerzo y en tu comisión asegurada con cada desembolso.
      </p>
    </div>
  );
}
