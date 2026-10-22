import Reveal from './Reveal';

/**
 * Shared wrapper for every page section: consistent spacing and a numbered heading.
 */
export default function Section({ id, index, eyebrow, title, description, children, className = '' }) {
  const headingId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={headingId} className={`section ${className}`}>
      <div className="container-x">
        <Reveal className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span>{index}</span>
            <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
            <span>{eyebrow}</span>
          </p>
          <h2 id={headingId} className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
