import { processSteps } from "../data/content";
import "./StepProcess.css";

export function StepProcess() {
  return (
    <ol className="step-process">
      {processSteps.map((step) => (
        <li key={step.number} className="step-card card">
          <div className="step-number">{step.number}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          <ul>
            {step.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
