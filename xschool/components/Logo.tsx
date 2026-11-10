export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo${light ? " logo--light" : ""}`} aria-label="Wemark">
      wemark
    </span>
  );
}
