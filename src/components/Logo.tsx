import { Link } from "react-router-dom";
import "./Logo.css";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link to="/" className={`brand-logo ${compact ? "brand-logo-compact" : ""}`}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="28" height="28">
          <path
            d="M16 2L28 9.5V22.5L16 30L4 22.5V9.5L16 2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M10 17.5L15 11L18 16L22 12.5L16.5 22H13.5L10 17.5Z" fill="currentColor" />
        </svg>
      </span>
      <span className="brand-text">
        <strong>Exploit Strike</strong>
        {!compact ? <small>Exploit Shield</small> : null}
      </span>
    </Link>
  );
}
