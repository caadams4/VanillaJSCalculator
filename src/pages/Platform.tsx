import { Button } from "../components/Button";
import { CtaBand } from "../components/CtaBand";
import { FindingCard } from "../components/FindingCard";
import { PageMeta } from "../components/PageMeta";
import { Section } from "../components/Section";
import { SourcePills } from "../components/SourcePills";
import { StepProcess } from "../components/StepProcess";
import {
  aiPrivacyPoints,
  company,
  integrations,
  stackCompare,
} from "../data/content";
import "./PageShared.css";

export function Platform() {
  return (
    <div className="page">
      <PageMeta
        title="Exploit Shield Platform | OSINT Leak Hunting — Exploit Strike"
        description="Explore the Exploit Shield platform: continuous monitoring, actionable findings, workflow integrations, and privacy-focused AI with human oversight."
      />

      <Section tone="contrast" className="page-hero">
        <div className="page-hero-grid">
          <div className="section-heading">
            <p className="eyebrow">Welcome to Exploit Shield</p>
            <h1 className="page-title">
              We hunt for leaks in the developer ecosystem outside of your perimeter.
            </h1>
            <p className="section-lead">
              Exploit Shield hunts for publicly exposed credentials, tokens, and other
              first- and third-party leaks on clear-web developer ecosystems to reduce
              your attack surface before compromise.
            </p>
            <div className="hero-actions">
              <Button to="/book-a-demo">Book a Demo</Button>
              <Button to="/case-studies" variant="secondary">
                View Case Studies
              </Button>
            </div>
          </div>
          <FindingCard />
        </div>
      </Section>

      <Section>
        <div className="section-heading">
          <p className="eyebrow">Monitoring scope</p>
          <h2 className="section-title">Continuous coverage where secrets sprawl</h2>
          <p className="section-lead">
            Continuous monitoring across public developer and deployment platforms—built
            by {company.name} to complement offensive testing and defensive operations.
          </p>
        </div>
        <SourcePills />
      </Section>

      <Section id="how-it-works" tone="surface">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">The process is simple: define signal, then watch leaks populate</h2>
        </div>
        <StepProcess />
      </Section>

      <Section>
        <div className="page-hero-grid">
          <div className="section-heading">
            <p className="eyebrow">Actionable threat intelligence</p>
            <h2 className="section-title">
              Findings include a summary of the leak, inventory of artifacts, and attribution
            </h2>
            <p className="section-lead">
              Every finding is structured so responders can assign, investigate, and
              remediate without wading through raw noise.
            </p>
          </div>
          <FindingCard />
        </div>
      </Section>

      <Section tone="surface">
        <div className="section-heading">
          <p className="eyebrow">Coverage model</p>
          <h2 className="section-title">Where Exploit Shield sits in your stack</h2>
        </div>
        <div className="grid-4">
          {stackCompare.map((item) => (
            <article
              key={item.label}
              className={`card ${item.highlight ? "highlight-card" : ""}`}
            >
              <h3>{item.label}</h3>
              <p>{item.focus}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="integrations">
        <div className="section-heading">
          <p className="eyebrow">Integrations</p>
          <h2 className="section-title">Built to feed the systems you already use</h2>
          <p className="section-lead">
            Additional SIEM, TIP, and workflow integrations are available upon request.
            Exploit Shield is API-driven and designed for mature security environments.
          </p>
        </div>
        <div className="grid-4">
          {integrations.map((item) => (
            <article key={item.name} className="card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="contrast">
        <div className="section-heading">
          <p className="eyebrow">AI & privacy</p>
          <h2 className="section-title">Human-in-the-loop intelligence you can trust</h2>
        </div>
        <ul className="check-list">
          {aiPrivacyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Section>

      <Section>
        <CtaBand
          title="Ready to see Exploit Shield in action?"
          description="Book a demo or scoping call to define keywords, domains, and vendor coverage for your environment."
          secondaryLabel="Talk Solutions"
          secondaryTo="/solutions"
        />
      </Section>
    </div>
  );
}
