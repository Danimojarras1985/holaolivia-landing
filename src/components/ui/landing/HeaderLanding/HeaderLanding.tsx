import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";

export function HeaderLanding() {
  return (
    <header className="flex w-full items-center justify-between rounded-lg px-16 py-16 md:px-40 md:py-24 bg-surface-background">
      <Image
        src="/landing/icons/ChatGPT Image Nov 29, 2025, 03_27_27 PM.png"
        alt="Credflow"
        width={56}
        height={56}
        className="h-[56px] w-[56px] flex-shrink-0 rounded-full"
      />

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScvotPu59VakSZ1jz_fKLFb_e7fq7rJHRiho65nXs8PM03qaQ/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button text="Quiero usar Credflow" />
      </a>
    </header>
  );
}


  