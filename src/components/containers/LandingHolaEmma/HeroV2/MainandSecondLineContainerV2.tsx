'use client';

export function MainandSecondLineContainerV2() {
  return (
    <div
      className='
        flex flex-col items-start gap-16 self-stretch
        md:items-center md:gap-16
      '
    >
      {/* MainLine */}
      <div className='
        text-34-bold text-text-primary text-left
        md:text-52-bold md:text-center md:self-stretch
      '>
        Olivia se encarga de la asesoría financiera inmobiliaria de tus clientes.
      </div>

      {/* SecondLine */}
      <div className='
        text-14-medium text-text-secondary text-left
        md:text-16-medium md:text-center md:w-880 md:max-w-880
      '>
        Olivia contacta a tu cliente por WhatsApp en segundos, reúne los documentos, los radica ante el banco y te mantiene al tanto en cada paso hasta el desembolso del crédito.
      </div>
    </div>
  );
}
