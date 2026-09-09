/* Pil status (liquid glass, tanpa titik), mis. "Current role", "Graduated 2026". */
export function StatusPill({ text }: { text: string }) {
  return <span className="livepill t-fine">{text}</span>;
}
