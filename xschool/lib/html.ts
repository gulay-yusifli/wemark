import sanitizeHtml from "sanitize-html";

/** Cleans CMS (rich text) HTML: sanitizes it and removes empty spacer blocks. */
export function cleanHtml(html: string): string {
  const stripped = html
    .replace(/<p>(\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")
    .replace(/<ul>\s*<\/ul>/gi, "");
  return sanitizeHtml(stripped, {
    allowedTags: ["p", "strong", "b", "em", "i", "ul", "ol", "li", "br", "a"],
    allowedAttributes: { a: ["href", "target", "rel"] },
  });
}

/** Plain text from API with \r\n line breaks -> array of lines. */
export function lines(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}
