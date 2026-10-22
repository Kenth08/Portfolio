import { FiArrowUpRight, FiAward, FiCalendar, FiFileText } from 'react-icons/fi';
import { achievements, certifications } from '../data/portfolio';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import SmartImage from '../components/SmartImage';

function CredentialCard({ item, type, wide = false }) {
  const Icon = type === 'Certificate' ? FiFileText : FiAward;
  const iconHeader = (
    <div
      className={`flex aspect-[16/7] h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 via-elevated to-surface ${
        wide ? 'sm:aspect-auto' : ''
      }`}
    >
      <span className="grid h-14 w-14 place-items-center rounded-2xl border border-accent/40 bg-surface text-accent">
        <Icon size={24} aria-hidden="true" />
      </span>
    </div>
  );

  return (
    <article
      className={`card group h-full overflow-hidden ${wide ? 'flex flex-col sm:grid sm:grid-cols-[14rem_1fr]' : 'flex flex-col'} transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5`}
    >
      <div className={`overflow-hidden border-line ${wide ? 'border-b sm:border-b-0 sm:border-r' : 'border-b'}`}>
        <SmartImage
          src={item.image}
          alt={`${item.title} — ${type.toLowerCase()} image`}
          className="aspect-[16/7] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          fallback={iconHeader}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[0.65rem] uppercase tracking-widest text-accent">{type}</p>
        <h3 className="mt-2 font-bold leading-snug">{item.title}</h3>
        <p className="mt-1 text-sm text-muted">{item.issuer}</p>
        {item.description && <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
          {item.date && (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <FiCalendar aria-hidden="true" />
              {item.date}
            </span>
          )}
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all hover:gap-2"
              aria-label={`View ${item.title} (opens in a new tab)`}
            >
              View
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Achievements() {
  const items = [
    ...achievements.map((item) => ({ item, type: 'Achievement' })),
    ...certifications.map((item) => ({ item, type: 'Certificate' })),
  ];

  const single = items.length === 1;

  return (
    <Section
      id="achievements"
      index="06"
      eyebrow="Achievements"
      title="Achievements & certifications"
      description="Milestones from school and beyond. New certificates are added as I earn them."
      split
    >
      <div className={`grid gap-6 ${single ? '' : 'sm:grid-cols-2'}`}>
        {items.map(({ item, type }, i) => (
          <Reveal key={item.title} delay={i * 0.08} className="h-full">
            <CredentialCard item={item} type={type} wide={single} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
