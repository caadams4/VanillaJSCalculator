import { comingSoonSources, liveSources } from "../data/content";
import "./SourcePills.css";

export function SourcePills() {
  return (
    <div className="source-pills">
      <div>
        <p className="source-label">Live Sources</p>
        <ul>
          {liveSources.map((source) => (
            <li key={source} className="pill pill-live">
              <span aria-hidden="true">✓</span>
              {source}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="source-label">Coming Soon</p>
        <ul>
          {comingSoonSources.map((source) => (
            <li key={source} className="pill pill-soon">
              <span aria-hidden="true">○</span>
              {source}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
