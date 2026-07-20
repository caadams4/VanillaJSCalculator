import { Button } from "../components/Button";
import { CapabilityCard } from "../components/CapabilityCard";
import { CtaBand } from "../components/CtaBand";
import { FindingCard } from "../components/FindingCard";
import { PageMeta } from "../components/PageMeta";
import { Section } from "../components/Section";
import { SourcePills } from "../components/SourcePills";
import { StepProcess } from "../components/StepProcess";
import {
  aiPrivacyPoints,
  benefits,
  capabilities,
  caseStudies,
  company,
  integrations,
  stackCompare,
} from "../data/content";
import { Link } from "react-router-dom";
import "./Home.css";

export function Home() {
  return (
    <div className="page home-page">
      <PageMeta
        title="Exploit Shield | External Threat Intelligence — Exploit Strike"
        description="Exploit Shield hunts leaked credentials and secrets on public developer platforms, delivering actionable OSINT threat intelligence outside your perimeter."
      />

      <Section className="hero-section" tone="contrast">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Exploit Shield Threat Intelligence</p>
            <h1>Hunt leaks outside your perimeter—before attackers do.</h1>
            <p className="section-lead">
              Exploit Shield continuously monitors public developer platforms for
              exposed credentials, tokens, and sensitive artifacts, then delivers
              attributed findings into the workflows your security team already uses.
            </p>
            <div className="hero-actions">
              <Button to="/book-a-demo">Book a Demo</Button>
              <Button to="/platform" variant="secondary">
                Explore Platform
              </Button>
            </div>
            <p className="hero-note muted">
              Built by {company.name} · Continuous OSINT for OPSEC
            </p>
          </div>
          <FindingCard />
        </div>
      </Section>

      <Section>
        <div className="section-heading">
          <p className="eyebrow">The blind spot</p>
          <h2 className="section-title">Security teams protect infrastructure. Secrets still escape.</h2>
          <p className="section-lead">
            Credentials and other secrets regularly appear on GitHub, Postman, and
            similar tools outside the corporate perimeter. Traditional point-in-time
            assessments often miss exposures that never lived on authorized systems.
          </p>
        </div>
        <div className="grid-4">
          {capabilities.map((item) => (
            <CapabilityCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="split-heading">
          <div className="section-heading">
            <p className="eyebrow">Where we monitor</p>
            <h2 className="section-title">Live coverage across the developer ecosystem</h2>
            <p className="section-lead">
              Continuous monitoring across public developer and deployment platforms
              to reduce your attack surface before compromise.
            </p>
          </div>
          <SourcePills />
        </div>
      </Section>

      <Section id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">Onboard. Discover. Triage. Remediate.</h2>
          <p className="section-lead">
            Tell us what matters, then watch high-signal leaks populate with the
            context your responders need.
          </p>
        </div>
        <StepProcess />
      </Section>

      <Section tone="surface">
        <div className="hero-grid">
          <div className="section-heading">
            <p className="eyebrow">Actionable threat intelligence</p>
            <h2 className="section-title">
              Findings include a leak summary, artifact inventory, and attribution
            </h2>
            <p className="section-lead">
              Every Exploit Shield finding is structured for response—not just an alert.
              See where the leak lives, what was exposed, and how confidently it attributes
              back to your environment or partners.
            </p>
          </div>
          <FindingCard />
        </div>
      </Section>

      <Section>
        <div className="stack-grid">
          <div className="section-heading">
            <p className="eyebrow">Where Exploit Shield sits</p>
            <h2 className="section-title">Fill the gap between perimeter tools and public leaks</h2>
            <p className="section-lead">
              When secrets leak outside your environment, Exploit Shield detects them,
              structures the evidence, and feeds it into your existing workflows.
            </p>
          </div>
          <div className="stack-compare">
            {stackCompare.map((item) => (
              <article
                key={item.label}
                className={`stack-card ${item.highlight ? "is-highlight" : ""}`}
              >
                <h3>{item.label}</h3>
                <p>{item.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="benefits-grid">
          <div className="section-heading">
            <p className="eyebrow">Outcomes</p>
            <h2 className="section-title">Threat intel your team can act on immediately</h2>
          </div>
          <ul className="benefit-list">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface" id="integrations">
        <div className="section-heading">
          <p className="eyebrow">Integrations</p>
          <h2 className="section-title">Built to feed the systems you already use</h2>
          <p className="section-lead">
            Exploit Shield is not another dashboard your team has to monitor. Findings
            are structured and delivered into mature security environments.
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

      <Section>
        <div className="section-heading">
          <p className="eyebrow">Case studies</p>
          <h2 className="section-title">How Exploit Shield enabled teams to prevent lasting exposure</h2>
        </div>
        <div className="grid-3">
          {caseStudies.map((study) => (
            <article key={study.id} className="card case-card">
              <p className="case-meta">{study.meta}</p>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
              <Link to="/case-studies" className="text-link">
                Read case studies →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="contrast">
        <div className="ai-grid">
          <div className="section-heading">
            <p className="eyebrow">AI with oversight</p>
            <h2 className="section-title">Privacy-focused intelligence, human-validated findings</h2>
            <p className="section-lead">
              AI accelerates analysis and attribution while analysts remain in the loop
              for accuracy and responsible use.
            </p>
          </div>
          <ul className="ai-list">
            {aiPrivacyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <CtaBand
          title="See what may already be exposed"
          description="Run an Exploit Shield assessment or book a scoping call. Leaks can be addressed sooner—or the next big leak could become the next big breach."
          secondaryLabel="Explore Platform"
          secondaryTo="/platform"
        />
      </Section>
    </div>
  );
}
