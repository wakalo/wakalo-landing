type SectionLabelProps = {
  index: string;
  children: string;
  tone?: "light" | "dark";
};

export default function SectionLabel({ index, children, tone = "light" }: SectionLabelProps) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "light" ? "text-ink/50" : "text-paper/50"
      }`}
    >
      <span className="font-display text-brand">{index}</span>
      <span className={`h-px w-8 ${tone === "light" ? "bg-ink/20" : "bg-paper/20"}`} />
      {children}
    </p>
  );
}
