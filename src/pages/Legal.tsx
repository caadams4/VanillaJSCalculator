import { PageMeta } from "../components/PageMeta";
import { Section } from "../components/Section";
import { company } from "../data/content";
import "./PageShared.css";

type LegalProps = {
  kind: "privacy" | "terms";
};

export function Legal({ kind }: LegalProps) {
  const isPrivacy = kind === "privacy";
  const title = isPrivacy ? "Privacy" : "Terms";

  return (
    <div className="page">
      <PageMeta
        title={`${title} | Exploit Strike`}
        description={`Lightweight ${title.toLowerCase()} information for the Exploit Shield marketing site.`}
      />

      <Section tone="contrast" className="page-hero">
        <div className="section-heading">
          <p className="eyebrow">Legal</p>
          <h1 className="page-title">{title}</h1>
          <p className="section-lead">
            This page is a lightweight stub for the marketing site. For production legal
            terms governing Exploit Strike services, refer to the agreements published at
            exploitstrike.com or contact {company.email}.
          </p>
        </div>
      </Section>

      <Section>
        <article className="card legal-card">
          {isPrivacy ? (
            <>
              <h2>Information we collect on this site</h2>
              <p>
                If you use the Book a Demo form, your mail client may send the details you
                provide (such as name, work email, company, role, and message) to{" "}
                {company.email}. This static marketing site does not operate a backend that
                stores form submissions.
              </p>
              <h2>Product privacy</h2>
              <p>
                Exploit Shield is designed with privacy controls described on the platform
                page, including client-isolated environments and human-in-the-loop analysis.
                Official service terms and policies supersede this stub.
              </p>
            </>
          ) : (
            <>
              <h2>Use of this website</h2>
              <p>
                Content on this marketing site is provided for informational purposes about{" "}
                {company.legalName} and the Exploit Shield product. Features and examples are
                illustrative and based on publicly described capabilities.
              </p>
              <h2>Services agreement</h2>
              <p>
                Access to Exploit Shield monitoring, dashboards, alerts, and related services
                is governed by Exploit Strike’s customer agreements and end user terms. Contact{" "}
                {company.email} for the current agreement package.
              </p>
            </>
          )}
        </article>
      </Section>
    </div>
  );
}
