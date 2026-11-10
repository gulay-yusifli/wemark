import sanitizeHtml from "sanitize-html";

export function cleanHtml(html: string): string {
  const stripped = html
    .replace(/<p>(\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")
    .replace(/<ul>\s*<\/ul>/gi, "");
  return sanitizeHtml(stripped, {
    allowedTags: ["p", "strong", "b", "em", "i", "ul", "ol", "li", "br", "a"],
    allowedAttributes: { a: ["href", "target", "rel"] },
  });
}

export function lines(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}
