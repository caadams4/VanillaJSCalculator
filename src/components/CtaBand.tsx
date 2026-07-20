import { Button } from "./Button";
import "./CtaBand.css";

type CtaBandProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export function CtaBand({
  title,
  description,
  primaryLabel = "Book a Demo",
  primaryTo = "/book-a-demo",
  secondaryLabel,
  secondaryTo,
}: CtaBandProps) {
  return (
    <div className="cta-band">
      <div className="cta-band-copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="cta-band-actions">
        <Button to={primaryTo}>{primaryLabel}</Button>
        {secondaryLabel && secondaryTo ? (
          <Button to={secondaryTo} variant="secondary">
            {secondaryLabel}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
