import { Link } from "react-router-dom";
import { company, footerColumns } from "../data/content";
import { Logo } from "./Logo";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Continuous OSINT threat intelligence for leaked credentials and secrets
            outside your perimeter—built by {company.legalName}.
          </p>
          <p className="footer-meta">
            {company.location} · UEI: {company.uei}
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="footer-column">
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <a href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}>
                {company.phone}
              </a>
            </li>
            <li>{company.hours}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </p>
        <p className="muted">{company.tagline}</p>
      </div>
    </footer>
  );
}
