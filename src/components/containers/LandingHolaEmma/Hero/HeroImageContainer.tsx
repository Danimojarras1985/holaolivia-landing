type HeroImageContainerProps = {
  children: React.ReactNode;
};

export function HeroImageContainer({ children }: HeroImageContainerProps) {
  return (
    <div
      className="
        hidden md:flex
        md:w-[355px] md:h-[434px]
        md:justify-center md:items-center
      "
    >
      {children}
    </div>
  );
}
