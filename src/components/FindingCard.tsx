import { findingDemo } from "../data/content";
import "./FindingCard.css";

export function FindingCard() {
  return (
    <article className="finding-card" aria-label="Sample Exploit Shield finding">
      <header className="finding-card-header">
        <div>
          <p className="finding-kicker">Actionable Threat Intelligence</p>
          <h3>{findingDemo.title}</h3>
        </div>
        <span className="risk-badge">{findingDemo.riskLevel} Risk</span>
      </header>

      <div className="finding-meta">
        <div>
          <span>Platform</span>
          <strong>{findingDemo.platform}</strong>
        </div>
        <div>
          <span>Visibility</span>
          <strong>{findingDemo.visibility}</strong>
        </div>
        <div>
          <span>First Observed</span>
          <strong>{findingDemo.firstObserved}</strong>
        </div>
      </div>

      <div className="finding-inventory">
        <div className="finding-inventory-title">
          <strong>Leak Inventory</strong>
          <span>{findingDemo.artifactCount} Sensitive Artifacts Identified</span>
        </div>
        <ul>
          {findingDemo.inventory.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <strong>{item.count}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="finding-attribution">
        <p className="finding-kicker">Leak Attribution Summary</p>
        <h4>{findingDemo.attribution.summary}</h4>
        <div className="finding-meta">
          <div>
            <span>Confidence</span>
            <strong>{findingDemo.attribution.confidence}</strong>
          </div>
          <div>
            <span>Source Type</span>
            <strong>{findingDemo.attribution.sourceType}</strong>
          </div>
          <div>
            <span>Leak Vector</span>
            <strong>{findingDemo.attribution.leakVector}</strong>
          </div>
          <div>
            <span>Exposure Scope</span>
            <strong>{findingDemo.attribution.scope}</strong>
          </div>
        </div>
      </div>
    </article>
  );
}
