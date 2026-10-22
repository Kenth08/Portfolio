import Reveal from './Reveal';

/**
 * Shared wrapper for every page section: consistent spacing and a numbered heading.
 * With `split`, the heading sits in a sticky left column on large screens.
 */
export default function Section({ id, index, eyebrow, title, description, split = false, children, className = '' }) {
  const headingId = `${id}-title`;

  const heading = (
    <Reveal className={split ? 'mb-12 lg:sticky lg:top-28 lg:mb-0 lg:self-start' : 'mb-12 max-w-2xl sm:mb-16'}>
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
  );

  return (
    <section id={id} aria-labelledby={headingId} className={`section ${className}`}>
      <div className={`container-x ${split ? 'lg:grid lg:grid-cols-[1fr_1.9fr] lg:gap-16' : ''}`}>
        {heading}
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
