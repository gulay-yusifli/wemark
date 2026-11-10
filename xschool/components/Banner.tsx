import Image from "next/image";
import { lines } from "@/lib/html";

export default function Banner({ title, image }: { title: string; image: string }) {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__hero">
          <Image src={image} alt="" fill priority sizes="100vw" />
          <div className="banner__shade" />
          <h1 className="banner__title">
            {lines(title).map((l, i) => (
              <span key={i} className="banner__line">{l}</span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
}
