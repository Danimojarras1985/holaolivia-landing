export function MainandSecondLineContainer() {
  return (
    <div className="flex flex-col items-start gap-16 self-stretch md:gap-8">
      {/* MainLine */}
      <div className="text-34-bold text-text-primary md:text-52-bold">
        El mejor servicio de asesoría financiera inmobiliaria para tu cliente.
      </div>
      
      {/* SecondLine */}
      <div className="text-14-medium text-text-secondary md:text-16-medium">
      Contactamos a tu cliente en segundos, le damos la mejor asesoría y te mantenemos informado por WhatsApp en todo momento. Nunca perderás un cliente por mala atención.
      </div>
    </div>
  );
}
