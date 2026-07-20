import { Link } from "react-router-dom";
import logoMark from "../assets/logo-mark.svg";
import "./Logo.css";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link to="/" className={`brand-logo ${compact ? "brand-logo-compact" : ""}`}>
      <span className="brand-mark" aria-hidden="true">
        <img src={logoMark} alt="" width={28} height={28} />
      </span>
      <span className="brand-text">
        <strong>Exploit Strike</strong>
        {!compact ? <small>Exploit Shield</small> : null}
      </span>
    </Link>
  );
}
