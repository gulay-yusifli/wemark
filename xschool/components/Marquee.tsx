function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const group = (hidden: boolean) => (
    <ul className="marquee__group" aria-hidden={hidden || undefined}>
      {[...items, ...items].map((text, i) => (
        <li key={i} className="marquee__item">
          <span>{text}</span>
          <span className="marquee__dot" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`marquee__track${reverse ? " is-reverse" : ""}`}>
      {group(false)}
      {group(true)}
    </div>
  );
}

export default function Marquee({ items }: { items: string[] }) {
  return (
    <section className="marquee" aria-label={items.join(", ")}>
      <Row items={items} />
      <Row items={items} reverse />
    </section>
  );
}
