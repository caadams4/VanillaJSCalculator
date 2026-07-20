import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { CtaBand } from "../components/CtaBand";
import { PageMeta } from "../components/PageMeta";
import { Section } from "../components/Section";
import { solutions } from "../data/content";
import "./PageShared.css";

export function Solutions() {
  return (
    <div className="page">
      <PageMeta
        title="Solutions | Exploit Shield Threat Intelligence — Exploit Strike"
        description="Explore Exploit Shield solutions for external threat intelligence and third-party exposure across public developer platforms."
      />

      <Section tone="contrast" className="page-hero">
        <div className="section-heading">
          <p className="eyebrow">Solutions</p>
          <h1 className="page-title">Threat intelligence built for exposures outside your walls</h1>
          <p className="section-lead">
            Exploit Shield helps security teams detect, attribute, and remediate leaked
            secrets across first-, third-, and fourth-party developer ecosystems.
          </p>
          <div className="hero-actions">
            <Button to="/book-a-demo">Book a Demo</Button>
            <Button to="/platform" variant="secondary">
              See the Platform
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid-2">
          {solutions.map((solution) => (
            <article key={solution.slug} className="card case-detail">
              <p className="eyebrow">{solution.eyebrow}</p>
              <h2>{solution.title}</h2>
              <p>{solution.hero}</p>
              <Link className="text-link" to={`/solutions/${solution.slug}`}>
                Explore solution →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <CtaBand
          title="Not sure where to start?"
          description="Book a scoping call and we’ll help define the keywords, domains, and vendor coverage that matter most."
        />
      </Section>
    </div>
  );
}
