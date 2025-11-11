export function ProcessTitleAndSubtitleContainer() {
  return (
    <div
      className="
        flex flex-col items-center w-full
        px-32
        gap-8
        md:max-w-content-sm
        md:gap-12
        md:px-0
      "
    >
      <h2 className="text-24-medium md:text-32-medium text-text-primary text-center w-full">
      Así fluye el crédito de tu cliente
      </h2>
      <p className="text-14-medium md:text-16-medium text-text-secondary text-center w-full">
      Olivia acompaña a tu cliente en cada paso: explica opciones, reúne documentos, radica el crédito y te mantiene al tanto de todo.
      </p>
    </div>
  );
}

