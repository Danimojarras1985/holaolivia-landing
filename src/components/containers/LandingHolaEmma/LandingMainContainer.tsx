type LandingMainContainerProps = {
  children: React.ReactNode;
};

export function LandingMainContainer({ children }: LandingMainContainerProps) {
  return (
    <section
      className="
        flex flex-col items-start
        w-full min-h-screen
        max-w-[1200px] mx-auto
        gap-40
        px-0 py-32
        md:px-40 md:pt-[20px] md:pb-88
        bg-surface-background
      "
    >
      {children}
    </section>
  );
}
