import { CtaBand } from "../components/CtaBand";
import { PageMeta } from "../components/PageMeta";
import { Section } from "../components/Section";
import { caseStudies } from "../data/content";
import "./PageShared.css";
import "./Home.css";

export function CaseStudies() {
  return (
    <div className="page">
      <PageMeta
        title="Case Studies | Exploit Shield — Exploit Strike"
        description="Real-world Exploit Shield discoveries across financial services, enterprise API ecosystems, and healthcare environments."
      />

      <Section tone="contrast" className="page-hero">
        <div className="section-heading">
          <p className="eyebrow">Case studies</p>
          <h1 className="page-title">How Exploit Shield enabled teams to prevent massive exposures</h1>
          <p className="section-lead">
            These narratives reflect publicly shared Exploit Strike findings at the level of
            detail already published—illustrating why continuous OSINT leak hunting matters.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid-3">
          {caseStudies.map((study) => (
            <article key={study.id} className="card case-detail">
              <p className="case-meta">{study.meta}</p>
              <h2>{study.title}</h2>
              <p>{study.summary}</p>
              <ul>
                {study.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p>
                <strong>Outcome:</strong> {study.outcome}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <CtaBand
          title="Want coverage before the next long-lived leak?"
          description="Book a demo to discuss brand, domain, and vendor scoping for continuous monitoring."
        />
      </Section>
    </div>
  );
}
