import Reveal from './Reveal';

/**
 * Vertical timeline used by Education and Experience.
 * `items` are rendered with `renderItem`; `icon` is shown in each node.
 */
export default function Timeline({ items, icon: Icon, getKey, renderItem }) {
  return (
    <ol className="relative space-y-8 before:absolute before:bottom-2 before:left-5 before:top-2 before:w-px before:bg-gradient-to-b before:from-accent/70 before:via-line before:to-transparent sm:space-y-10">
      {items.map((entry, i) => (
        <Reveal as="li" key={getKey(entry)} delay={i * 0.08} className="relative pl-14 sm:pl-16">
          <span
            aria-hidden="true"
            className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-xl border border-accent/40 bg-surface text-accent shadow-[0_0_0_6px_rgb(var(--bg))]"
          >
            <Icon />
          </span>
          {renderItem(entry, i)}
        </Reveal>
      ))}
    </ol>
  );
}
