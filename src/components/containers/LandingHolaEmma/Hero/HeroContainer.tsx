import { ChipLanding } from "@/components/ui/landing/ChipLanding/ChipLanding";
import { MainandSecondLineContainer } from "@/components/containers/LandingHolaEmma/Hero/MainandSecondLineContainer";
import { Button } from "@/components/ui/Button/Button";
import { HeroTextContainer } from "@/components/containers/LandingHolaEmma/Hero/HeroTextContainer";
import { HeroImageContainer } from "@/components/containers/LandingHolaEmma/Hero/HeroImageContainer";

export function HeroContainer() {
  return (
    <section
      className="
        flex w-full flex-col items-start
        gap-36
        px-16 py-32
        rounded-lg
        bg-surface-background
        md:flex-row md:gap-40
        md:px-40 md:pt-40 md:pb-56
      "
    >
      {/* Mobile: elementos directos */}
      <div className="md:hidden w-full flex justify-start overflow-visible">
        <ChipLanding label="Asistente de AI para brokers inmobiliarios" />
      </div>
      <div className="md:hidden">
        <MainandSecondLineContainer />
      </div>
      <div className="md:hidden">
        <Button text="Quiero mi asistente ahora" />
      </div>

      {/* Desktop: contenedores agrupados */}
      <div className="hidden md:block md:flex-[1_0_0]">
        <HeroTextContainer />
      </div>
      <HeroImageContainer>
        <div className="w-full h-full bg-surface-subtle rounded-lg" />
      </HeroImageContainer>
    </section>
  );
}
