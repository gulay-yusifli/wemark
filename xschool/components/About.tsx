import { lines } from "@/lib/html";
import AboutSlider from "./AboutSlider";

function Heading({ line }: { line: string }) {
  if (/^x[A-Z]/.test(line)) {
    return (
      <>
        <span className="keep-case">x</span>
        {line.slice(1)}
      </>
    );
  }
  return <>{line}</>;
}

export default function About({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: { image: string }[];
}) {
  const paragraphs = description
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__head">
          <h2 className="section__title">
            {lines(title).map((l, i) => (
              <span key={i} className="block"><Heading line={l} /></span>
            ))}
          </h2>
          <a className="textlink" href="#programs">Go to xSchool</a>
        </div>
        <div className="about__text">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <AboutSlider images={images.map((i) => i.image)} />
    </section>
  );
}
