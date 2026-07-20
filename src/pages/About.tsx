import { Button } from "../components/Button";
import { CtaBand } from "../components/CtaBand";
import { PageMeta } from "../components/PageMeta";
import { Section } from "../components/Section";
import { aboutServices, company } from "../data/content";
import "./PageShared.css";

export function About() {
  return (
    <div className="page">
      <PageMeta
        title="About Exploit Strike | Exploit Shield Threat Intelligence"
        description="Exploit Strike LLC is a veteran-owned cybersecurity firm building Exploit Shield OSINT threat intelligence and delivering offensive, collaborative, and defensive security services."
      />

      <Section tone="contrast" className="page-hero">
        <div className="section-heading">
          <p className="eyebrow">About Exploit Strike</p>
          <h1 className="page-title">{company.tagline}</h1>
          <p className="section-lead">
            {company.legalName} is a boutique, veteran-owned cybersecurity company based in{" "}
            {company.location}. Our team focuses on penetration testing, threat intelligence,
            continuous monitoring, and practical CISO support—and we built Exploit Shield to
            close the public leak gap our engagements kept uncovering.
          </p>
          <div className="hero-actions">
            <Button to="/book-a-demo">Book a Demo</Button>
            <Button to="/platform" variant="secondary">
              Explore Exploit Shield
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="section-heading">
          <p className="eyebrow">Services at a glance</p>
          <h2 className="section-title">Offensive, collaborative, and defensive expertise</h2>
          <p className="section-lead">
            Exploit Shield is our SaaS threat intel product. Around it, we still deliver the
            professional services organizations rely on to validate and strengthen defenses.
          </p>
        </div>
        <div className="pillars">
          {aboutServices.map((pillar) => (
            <article key={pillar.pillar} className="card">
              <h3>{pillar.pillar}</h3>
              <ul className="check-list">
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid-2">
          <article className="card">
            <h2>Why we built Exploit Shield</h2>
            <p>
              During offensive engagements, we repeatedly found sensitive material living in
              public developer platforms—outside traditional pentest scope. Exploit Shield
              turns that OSINT capability into continuous monitoring so exposures are found
              before they become breaches.
            </p>
          </article>
          <article className="card">
            <h2>Contact</h2>
            <ul className="check-list">
              <li>
                Email:{" "}
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                Support:{" "}
                <a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a>
              </li>
              <li>Phone: {company.phone}</li>
              <li>Hours: {company.hours}</li>
              <li>UEI: {company.uei}</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section>
        <CtaBand
          title="Talk with a cybersecurity engineer"
          description="Our initial meeting is a discovery and scoping call so we can provide a clear proposal for Exploit Shield coverage or related services."
        />
      </Section>
    </div>
  );
}
