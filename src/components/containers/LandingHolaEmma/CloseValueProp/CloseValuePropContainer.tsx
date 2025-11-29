"use client";

import { CloseValuePropTitleandSubtitleContainer } from "./CloseValuePropTitleandSubtitleContainer";

export function CloseValuePropContainer() {
  return (
    <section
      className="
        flex flex-col justify-center items-center self-stretch w-full
        px-[var(--space-16)] py-36
        md:px-0 md:py-88
      "
    >
      <CloseValuePropTitleandSubtitleContainer />
    </section>
  );
}
