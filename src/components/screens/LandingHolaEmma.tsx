'use client';

import { LandingMainContainer } from '@/components/containers/LandingHolaEmma/LandingMainContainer';
import { HeroContainerV2 } from '@/components/containers/LandingHolaEmma/HeroV2/HeroContainerV2';
import { ProcessContainerConAnimation } from '@/components/containers/LandingHolaEmma/Process/ProcessContainerConAnimation';
import { HowWeDoItContainer } from '@/components/containers/LandingHolaEmma/HowWeDoIt/HowWeDoItContainer';
import { CustomerStatusContainer } from '@/components/containers/LandingHolaEmma/CustomerStatus/CustomerStatusContainer';
import { FeeContainer } from '@/components/containers/LandingHolaEmma/Fee/FeeContainer';
import { CloseValuePropContainer } from '@/components/containers/LandingHolaEmma/CloseValueProp/CloseValuePropContainer';
import { PreguntasFrecuentesContainer } from '@/components/containers/PreguntasFrecuentes/PreguntasFrecuentesContainer';

export default function LandingHolaEmmaScreen() {
  return (
    <LandingMainContainer>
      <HeroContainerV2 />
      <HowWeDoItContainer />
      <ProcessContainerConAnimation />
      <CustomerStatusContainer />
      <FeeContainer />
      <CloseValuePropContainer />
      <PreguntasFrecuentesContainer />
    </LandingMainContainer>
  );
}
