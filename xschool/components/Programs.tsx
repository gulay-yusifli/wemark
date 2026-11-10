import { cleanHtml } from "@/lib/html";

export default function Programs({ programs }: { programs: { title: string; description: string }[] }) {
  return (
    <section className="section programs" id="programs">
      <div className="container">
        {programs.map((p, i) => (
          <div className="programs__grid" key={i}>
            <h2 className="section__title">{p.title}</h2>
            <div className="richtext" dangerouslySetInnerHTML={{ __html: cleanHtml(p.description) }} />
          </div>
        ))}
      </div>
    </section>
  );
}
