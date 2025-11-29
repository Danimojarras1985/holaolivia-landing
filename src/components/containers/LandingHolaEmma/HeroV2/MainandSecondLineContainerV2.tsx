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
        Credflow se encarga del crédito de vivienda de tus clientes.
      </div>

      {/* SecondLine */}
      <div className='
        text-14-medium text-text-secondary text-left
        md:text-16-medium md:text-center md:w-880 md:max-w-880
      '>
        Credflow contacta a tu cliente por WhatsApp, reúne y revisa sus documentos, los envía a varios bancos y te avisa en cada paso hasta el desembolso.
      </div>
    </div>
  );
}
