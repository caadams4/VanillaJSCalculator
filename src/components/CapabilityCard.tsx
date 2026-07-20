type CapabilityCardProps = {
  title: string;
  description: string;
};

export function CapabilityCard({ title, description }: CapabilityCardProps) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
