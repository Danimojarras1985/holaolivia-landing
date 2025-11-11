import { Button } from "@/components/ui/Button/Button";

export function HeaderLanding() {
  return (
    <header className="flex w-full items-center justify-between rounded-lg px-16 py-16 md:px-40 md:py-24 bg-surface-background">
      <div className="h-[38px] w-[38px] flex-shrink-0 bg-[#D9D9D9] rounded-full" />
      <Button text="Hablar con Olivia en WhatsApp" />
    </header>
  );
}

