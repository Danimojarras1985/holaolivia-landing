const DEFAULT_TERMS_URL =
  "https://docs.google.com/document/d/1l0IE1HX4NsaYxc2XTUKCyD4udNVluU34oJxqyjPKYEc/edit?tab=t.0";

type FooterContainerProps = {
  linkHref?: string;
  linkLabel?: string;
  className?: string;
};

export function FooterContainer({
  linkHref = DEFAULT_TERMS_URL,
  linkLabel = "Términos y condiciones",
  className = "",
}: FooterContainerProps) {
  return (
    <footer className={`w-full px-16 py-24 md:px-24 ${className}`}>
      <div className="flex items-center justify-center">
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-14-regular text-text-secondary
            underline decoration-1 underline-offset-4
            hover:text-text-primary hover:decoration-text-primary
            transition-colors
          "
        >
          {linkLabel}
        </a>
      </div>
    </footer>
  );
}

