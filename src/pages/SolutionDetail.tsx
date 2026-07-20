import { Navigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { CtaBand } from "../components/CtaBand";
import { PageMeta } from "../components/PageMeta";
import { Section } from "../components/Section";
import { solutions } from "../data/content";
import "./PageShared.css";
import "./Home.css";

export function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <div className="page">
      <PageMeta
        title={`${solution.title} | Exploit Shield — Exploit Strike`}
        description={solution.hero}
      />

      <Section tone="contrast" className="page-hero">
        <div className="section-heading">
          <p className="eyebrow">{solution.eyebrow}</p>
          <h1 className="page-title">{solution.title}</h1>
          <p className="section-lead">{solution.hero}</p>
          <div className="hero-actions">
            <Button to="/book-a-demo">Book a Demo</Button>
            <Button to="/platform" variant="secondary">
              Platform Overview
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid-2">
          <article className="card">
            <h2>The problem</h2>
            <p>{solution.problem}</p>
          </article>
          <article className="card">
            <h2>Use cases</h2>
            <ul className="check-list">
              {solution.useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section tone="surface">
        <div className="section-heading">
          <p className="eyebrow">What you gain</p>
          <h2 className="section-title">Outcomes security and risk teams can defend</h2>
        </div>
        <ul className="check-list">
          {solution.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section>
        <CtaBand
          title={`Put ${solution.title.toLowerCase()} to work`}
          description="Schedule a demo to see how Exploit Shield findings look in your workflows."
          secondaryLabel="View Case Studies"
          secondaryTo="/case-studies"
        />
      </Section>
    </div>
  );
}
