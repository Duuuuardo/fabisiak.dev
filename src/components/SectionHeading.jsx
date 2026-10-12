export default function SectionHeading({ as: Tag = "h2", children, intro, className = "" }) {
  return (
    <div className={className}>
      <Tag className="text-[clamp(2.25rem,5.5vw,4.25rem)] font-light leading-[1.02] tracking-[-0.03em] text-ink">
        <span className="mr-3 font-mono text-[0.55em] text-accent" aria-hidden="true">
          &gt;
        </span>
        {children}
      </Tag>
      {intro && <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-dim">{intro}</p>}
    </div>
  );
}
