export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description: string }[];
};

export type CaseStudy = {
  id: string;
  title: string;
  meta: string;
  summary: string;
  bullets: string[];
  outcome: string;
};

export const company = {
  name: "Exploit Strike",
  legalName: "Exploit Strike LLC",
  product: "Exploit Shield",
  tagline: "Uncovering cybersecurity threats, before hackers do.",
  email: "info@exploitstrike.com",
  supportEmail: "support@exploitstrike.com",
  phone: "(443) 553-3009",
  hours: "Monday–Friday, 9am–5pm EST",
  location: "Newark, DE",
  uei: "M9PSED113UB6",
};

export const navItems: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      {
        label: "Exploit Shield Overview",
        href: "/platform",
        description: "Continuous OSINT leak hunting outside your perimeter.",
      },
      {
        label: "How It Works",
        href: "/platform#how-it-works",
        description: "Onboard, discover, triage, and remediate exposures.",
      },
      {
        label: "Integrations",
        href: "/platform#integrations",
        description: "Deliver findings into Jira, OpenCTI, Splunk, and more.",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "External Threat Intelligence",
        href: "/solutions/external-threat-intelligence",
        description: "Detect indicators of exposure across public developer platforms.",
      },
      {
        label: "Third-Party Exposure",
        href: "/solutions/third-party-exposure",
        description: "Surface vendor and contractor leaks that expand your attack surface.",
      },
      {
        label: "Case Studies",
        href: "/case-studies",
        description: "Real-world leak discoveries that prevented lasting exposure.",
      },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      {
        label: "About Exploit Strike",
        href: "/about",
        description: "Veteran-owned boutique cybersecurity team from Newark, DE.",
      },
      {
        label: "Book a Demo",
        href: "/book-a-demo",
        description: "Schedule a scoping call for Exploit Shield coverage.",
      },
    ],
  },
];

export const liveSources = ["GitHub", "GitLab", "Postman", "Docker Hub"];
export const comingSoonSources = ["Bitbucket", "Pastebin"];

export const processSteps = [
  {
    number: "01",
    title: "Onboard",
    description:
      "Define what matters and reduce noise. Align on keywords, domains, and third-party vendors that expand your exposure surface.",
    points: [
      "Product names, internal systems, unique identifiers",
      "Primary domains and known subdomains",
      "Vendor domains that touch your environment",
    ],
  },
  {
    number: "02",
    title: "Discover",
    description:
      "Exploit Shield continuously searches public sources and reduces raw results into high-signal candidates.",
    points: [
      "Proprietary search across repos, artifacts, and collections",
      "Enrichment with context on location and contents",
      "Deduplication, scoring, and noise filtering",
    ],
  },
  {
    number: "03",
    title: "Triage",
    description:
      "Determine what was exposed, who it impacts, and how bad it is so response can begin.",
    points: [
      "Impact: what was exposed and why it matters",
      "Scope: systems, accounts, vendors, or business units",
      "Blast radius: what could be abused next",
    ],
  },
  {
    number: "04",
    title: "Respond",
    description:
      "Findings are structured for the workflows your security and IT teams already operate.",
    points: [
      "Actionable summaries with artifact inventory",
      "Attribution confidence and leak vector context",
      "Delivery into SIEM, TIP, and ticketing systems",
    ],
  },
];

export const capabilities = [
  {
    title: "Continuous monitoring",
    description:
      "Hunt publicly exposed credentials, tokens, and secrets across clear-web developer ecosystems in near real time.",
  },
  {
    title: "Actionable threat intelligence",
    description:
      "Every finding includes a leak summary, artifact inventory, and attribution context—not just an alert.",
  },
  {
    title: "Third- and fourth-party coverage",
    description:
      "Close gaps created by vendors, contractors, and personal repositories that live outside your perimeter.",
  },
  {
    title: "Workflow-native delivery",
    description:
      "Feed structured findings into Jira, OpenCTI, Splunk, and other systems your team already uses.",
  },
];

export const stackCompare = [
  {
    label: "EDR",
    focus: "Sees endpoints",
  },
  {
    label: "Pentesting",
    focus: "Sees authorized systems",
  },
  {
    label: "ASM",
    focus: "Sees perimeter infrastructure",
  },
  {
    label: "Exploit Shield",
    focus: "Hunts leaks on public developer platforms",
    highlight: true,
  },
];

export const integrations = [
  {
    name: "Jira",
    description: "Open actionable tickets for investigation and remediation.",
  },
  {
    name: "OpenCTI",
    description: "STIX 2.1 compatible delivery into your threat intel platform.",
  },
  {
    name: "Splunk",
    description: "Stream structured findings into your SIEM workflows.",
  },
  {
    name: "API-driven",
    description: "Integrate with mature security environments and custom pipelines.",
  },
];

export const benefits = [
  "Prevent costly data breaches by catching exposures early",
  "Protect brand reputation before leaked secrets are abused",
  "Uncover indicators of exposure (IOE) across the developer ecosystem",
  "Discover historical data leaks that point-in-time tests missed",
  "Hold vendor partners accountable with evidence-backed findings",
];

export const caseStudies: CaseStudy[] = [
  {
    id: "gateway-to-mass-exposure",
    title: "Gateway to Mass Exposure",
    meta: "23 Financial Institutions · Shared Vendor · 3 Years Public",
    summary:
      "A single public personal GitHub repository contained production configuration files for 23 credit unions and banks.",
    bullets: [
      "Core banking URLs (Symitar, Fiserv DNA)",
      "Visa and Mastercard integration credentials",
      "Institution-specific production secrets",
    ],
    outcome:
      "The repository was public from May 2022 to February 2025. None of the affected parties detected it until Exploit Shield was engaged.",
  },
  {
    id: "enterprise-api-ecosystem",
    title: "Enterprise API Ecosystem Exposure",
    meta: "Fortune 500 · Hundreds of API Credentials · 12+ Months Public",
    summary:
      "An employee moved private Postman collections to a personal account and made them public.",
    bullets: [
      "Hundreds of API credentials",
      "Production and non-production secrets",
      "Authentication tokens actively in use",
    ],
    outcome:
      "The exposure persisted for over a year before disclosure. The organization was unaware until Exploit Shield was engaged.",
  },
  {
    id: "twenty-year-admin-repo",
    title: "The 20-Year Admin Repository",
    meta: "Health Insurer · Domain Admin Credentials · Public GitHub",
    summary:
      "During OSINT recon for a penetration test, Exploit Shield discovered a public personal GitHub repository containing decades of internal notes.",
    bullets: [
      "20 years of internal sysadmin notes",
      "Plaintext domain administrator credentials",
      "Service account passwords",
    ],
    outcome:
      "The repository was not malicious—it was a trusted employee preserving personal notes before leaving the company.",
  },
];

export const solutions = [
  {
    slug: "external-threat-intelligence",
    title: "External Threat Intelligence",
    eyebrow: "OSINT for OPSEC",
    hero:
      "Continuous visibility into publicly exposed credentials, tokens, and sensitive artifacts that live outside your corporate perimeter.",
    problem:
      "Security teams harden infrastructure, but secrets still escape into public developer platforms. Point-in-time assessments often miss exposures that never existed on authorized systems.",
    outcomes: [
      "Real-time monitoring across GitHub, GitLab, Postman, Docker Hub, and more",
      "High-signal findings with summary, inventory, and attribution",
      "Historical exposure discovery for long-lived leaks",
      "Human-validated triage to reduce false positives",
    ],
    useCases: [
      "Brand and domain-based leak hunting",
      "Credential and API key exposure detection",
      "OPSEC monitoring that complements offensive testing",
    ],
  },
  {
    slug: "third-party-exposure",
    title: "Third-Party Exposure",
    eyebrow: "Vendor & contractor risk",
    hero:
      "Surface first-, third-, and fourth-party leaks introduced by vendors, partners, and contractors who touch your environment.",
    problem:
      "As organizations depend on more vendors and services, secrets sprawl grows. A contractor’s personal repository or a vendor’s shared configuration can expose dozens of downstream customers.",
    outcomes: [
      "Map vendor domains and partners during onboarding",
      "Detect shared-vendor exposures before they become breaches",
      "Evidence-backed findings to drive vendor accountability",
      "Scoping guidance for domains, subsidiaries, and related entities",
    ],
    useCases: [
      "Shared SaaS / MSP configuration leaks",
      "Contractor and former-employee repository risk",
      "Supply-chain exposure discovery beyond questionnaires",
    ],
  },
];

export const aboutServices = [
  {
    pillar: "Offensive",
    items: ["Penetration Testing", "Assumed Breach", "Red Teaming", "Physical Testing"],
  },
  {
    pillar: "Collaborative",
    items: ["Purple Teaming", "Detection Engineering", "Adversary Simulation Workshops"],
  },
  {
    pillar: "Defensive",
    items: ["vCISO Consulting", "SOC Advisory", "Security Program Development"],
  },
];

export const findingDemo = {
  title: "Public GitHub Exposure",
  platform: "GitHub",
  visibility: "Public",
  firstObserved: "Feb 18, 2026",
  riskLevel: "High",
  artifactCount: 17,
  inventory: [
    { label: "API Keys", count: 6 },
    { label: "Credentials", count: 4 },
    { label: "OAuth Secrets", count: 3 },
    { label: "Internal URLs", count: 4 },
  ],
  attribution: {
    summary: "Likely Internal Developer Exposure",
    confidence: "92%",
    sourceType: "Employee Repository",
    leakVector: "Public Repo Commit",
    scope: "Multi-Organization",
  },
};

export const aiPrivacyPoints = [
  "AI is a supplemental capability used to accelerate identification and attribution.",
  "Built on a locally hosted, pretrained open-source model—not trained on customer data.",
  "Human-in-the-loop oversight reduces false positives and keeps decisions accountable.",
  "Environments are isolated by client; data is encrypted in transit with secure authentication controls.",
];

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Exploit Shield", href: "/platform" },
      { label: "How It Works", href: "/platform#how-it-works" },
      { label: "Integrations", href: "/platform#integrations" },
      { label: "Book a Demo", href: "/book-a-demo" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "External Threat Intelligence", href: "/solutions/external-threat-intelligence" },
      { label: "Third-Party Exposure", href: "/solutions/third-party-exposure" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/book-a-demo" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
