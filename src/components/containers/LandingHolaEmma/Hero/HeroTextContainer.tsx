import { ChipLanding } from "@/components/ui/landing/ChipLanding/ChipLanding";
import { MainandSecondLineContainer } from "@/components/containers/LandingHolaEmma/Hero/MainandSecondLineContainer";
import { Button } from "@/components/ui/Button/Button";

export function HeroTextContainer() {
  return (
    <div className="flex flex-col items-start gap-16 w-full md:gap-40 md:flex-[1_0_0]">
      <ChipLanding label="Asistente de AI para brokers inmobiliarios" />
      <MainandSecondLineContainer />
      <Button text="Quiero mi asistente ahora" />
    </div>
  );
}
