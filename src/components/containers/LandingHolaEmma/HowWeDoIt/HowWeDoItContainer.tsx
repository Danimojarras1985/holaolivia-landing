import { HowWeDoItTitleAndSubtitleContainer } from "@/components/containers/LandingHolaEmma/HowWeDoIt/HowWeDoItTitleAndSubtitleContainer";
import { CardsContainer } from "@/components/containers/LandingHolaEmma/HowWeDoIt/CardsContainer";

export function HowWeDoItContainer() {
  return (
    <section
      className="
        flex flex-col items-center w-full
        gap-16
        md:gap-40
      "
    >
      <HowWeDoItTitleAndSubtitleContainer />
      <CardsContainer />
    </section>
  );
}
