"use client";

import { useId, useState } from "react";

function lines(text: string) {
  return text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
}

/** `answer` is sanitized on the server before it reaches this component (see app/page.tsx). */
export default function Faq({
  title,
  items,
}: {
  title: string;
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <h2 className="section__title">
          {lines(title).map((l, i) => (
            <span key={i} className="block">{l}</span>
          ))}
        </h2>
        <div className="faq__list">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq__item${isOpen ? " is-open" : ""}`} key={i}>
                <h3>
                  <button
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={`${uid}-${i}`}
                    id={`${uid}-q-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.question}</span>
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq__a" id={`${uid}-${i}`} role="region" aria-labelledby={`${uid}-q-${i}`}>
                  <div className="faq__a-inner richtext" dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
