import "./Section.css";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  tone?: "default" | "surface" | "contrast";
};

export function Section({
  children,
  id,
  className = "",
  tone = "default",
}: SectionProps) {
  return (
    <section id={id} className={`section section-${tone} ${className}`.trim()}>
      <div className="container section-inner">{children}</div>
    </section>
  );
}
