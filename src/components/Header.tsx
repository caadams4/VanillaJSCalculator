import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems } from "../data/content";
import { Button } from "./Button";
import { Logo } from "./Logo";
import "./Header.css";

function closeOnEscape(event: KeyboardEvent, close: () => void) {
  if (event.key === "Escape") {
    close();
  }
}

export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      closeOnEscape(event, () => {
        setMobileOpen(false);
        setOpenMenu(null);
      });
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <div className="container header-bar">
        <Logo />

        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`nav-item ${openMenu === item.label ? "is-open" : ""}`}
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                className="nav-trigger"
                aria-expanded={openMenu === item.label}
                onClick={() =>
                  setOpenMenu(openMenu === item.label ? null : item.label)
                }
              >
                {item.label}
                <span aria-hidden="true">▾</span>
              </button>
              {item.children ? (
                <div className="nav-popover">
                  {item.children.map((child) => (
                    <Link key={child.href} to={child.href} className="nav-card">
                      <strong>{child.label}</strong>
                      <span>{child.description}</span>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <Button to="/book-a-demo" className="header-cta">
            Book a Demo
          </Button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <span aria-hidden="true">{mobileOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav ${mobileOpen ? "is-open" : ""}`}
        hidden={!mobileOpen}
      >
        <div className="container mobile-nav-inner">
          {navItems.map((item) => (
            <div key={item.label} className="mobile-group">
              <NavLink to={item.href} className="mobile-group-title">
                {item.label}
              </NavLink>
              {item.children?.map((child) => (
                <Link key={child.href} to={child.href} className="mobile-link">
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Button to="/book-a-demo">Book a Demo</Button>
        </div>
      </div>
    </header>
  );
}
