import Image from "next/image";
import type { Founder as FounderType } from "@/lib/types";

export default function Founder({ founders }: { founders: FounderType[] }) {
  return (
    <section className="section founder" id="founder">
      <div className="container">
        <h2 className="section__title">Founder</h2>
        {founders.map((f) => (
          <article className="founder__card" key={f.name}>
            <figure className="founder__photo">
              <Image src={f.image} alt={f.name} fill sizes="(max-width: 800px) 100vw, 36vw" />
              <figcaption className="founder__tag">
                <strong>{f.name}</strong>
                <span>{f.position}</span>
              </figcaption>
            </figure>
            <div className="founder__body">
              <p className="label">{f.title}</p>
              <p className="founder__desc">{f.description}</p>
              <div className="founder__social">
                {f.linkedin_url && (
                  <a className="textlink" href={f.linkedin_url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                )}
                {f.instagram_url && (
                  <a className="textlink" href={f.instagram_url} target="_blank" rel="noopener noreferrer">Instagram</a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
