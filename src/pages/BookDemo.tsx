import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "../components/Button";
import { PageMeta } from "../components/PageMeta";
import { Section } from "../components/Section";
import { company } from "../data/content";
import "./PageShared.css";

type FormState = {
  name: string;
  email: string;
  companyName: string;
  role: string;
  interest: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  companyName: "",
  role: "",
  interest: "Exploit Shield assessment",
  message: "",
};

function validateForm(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }
  if (!values.email.trim()) {
    errors.email = "Work email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.companyName.trim()) {
    errors.companyName = "Company is required.";
  }
  if (!values.role.trim()) {
    errors.role = "Role is required.";
  }

  return errors;
}

function buildMailto(values: FormState) {
  const subject = encodeURIComponent(
    `Exploit Shield demo request — ${values.companyName}`,
  );
  const body = encodeURIComponent(
    [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Company: ${values.companyName}`,
      `Role: ${values.role}`,
      `Interest: ${values.interest}`,
      "",
      values.message || "(No additional message)",
    ].join("\n"),
  );

  return `mailto:${company.email}?subject=${subject}&body=${body}`;
}

export function BookDemo() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    window.location.href = buildMailto(values);
  };

  return (
    <div className="page">
      <PageMeta
        title="Book a Demo | Exploit Shield — Exploit Strike"
        description="Request an Exploit Shield demo or scoping call with Exploit Strike."
      />

      <Section tone="contrast" className="page-hero">
        <div className="section-heading">
          <p className="eyebrow">Book a demo</p>
          <h1 className="page-title">See Exploit Shield threat intelligence in action</h1>
          <p className="section-lead">
            Tell us about your environment. We’ll follow up to schedule a discovery call and
            scoping discussion for continuous leak monitoring.
          </p>
        </div>
      </Section>

      <Section>
        <div className="page-hero-grid">
          <form className="card form-card" onSubmit={onSubmit} noValidate>
            {submitted ? (
              <div className="form-success">
                <h2>Request ready to send</h2>
                <p>
                  Your mail client should open with a pre-filled message to{" "}
                  {company.email}. If it doesn’t, email us directly.
                </p>
                <Button href={`mailto:${company.email}`} variant="secondary">
                  Email {company.email}
                </Button>
              </div>
            ) : null}

            <div className="form-grid two">
              <div className="form-field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={(event) =>
                    setValues({ ...values, name: event.target.value })
                  }
                />
                {errors.name ? <p className="form-error">{errors.name}</p> : null}
              </div>
              <div className="form-field">
                <label htmlFor="email">Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(event) =>
                    setValues({ ...values, email: event.target.value })
                  }
                />
                {errors.email ? <p className="form-error">{errors.email}</p> : null}
              </div>
            </div>

            <div className="form-grid two">
              <div className="form-field">
                <label htmlFor="companyName">Company</label>
                <input
                  id="companyName"
                  name="companyName"
                  value={values.companyName}
                  onChange={(event) =>
                    setValues({ ...values, companyName: event.target.value })
                  }
                />
                {errors.companyName ? (
                  <p className="form-error">{errors.companyName}</p>
                ) : null}
              </div>
              <div className="form-field">
                <label htmlFor="role">Role</label>
                <input
                  id="role"
                  name="role"
                  value={values.role}
                  onChange={(event) =>
                    setValues({ ...values, role: event.target.value })
                  }
                />
                {errors.role ? <p className="form-error">{errors.role}</p> : null}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="interest">I’m interested in</label>
              <select
                id="interest"
                name="interest"
                value={values.interest}
                onChange={(event) =>
                  setValues({ ...values, interest: event.target.value })
                }
              >
                <option>Exploit Shield assessment</option>
                <option>Scoping call</option>
                <option>Platform demo</option>
                <option>General inquiry</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message (optional)</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={(event) =>
                  setValues({ ...values, message: event.target.value })
                }
                placeholder="Domains, vendors, or timelines we should know about"
              />
            </div>

            <Button type="submit">Submit request</Button>
            <p className="muted">
              Prefer email? Reach us at{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a> or call{" "}
              {company.phone}.
            </p>
          </form>

          <aside className="card">
            <h2>What to expect</h2>
            <ul className="check-list">
              <li>A discovery conversation focused on Exploit Shield coverage</li>
              <li>Guidance on keywords, domains, subsidiaries, and vendor inputs</li>
              <li>Clarity on how findings are delivered into your workflows</li>
              <li>Hours: {company.hours}</li>
            </ul>
          </aside>
        </div>
      </Section>
    </div>
  );
}
