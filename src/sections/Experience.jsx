import { FiBriefcase, FiMapPin } from 'react-icons/fi';
import { experience } from '../data/portfolio';
import Section from '../components/Section';
import Timeline from '../components/Timeline';

export default function Experience() {
  return (
    <Section
      id="experience"
      index="05"
      eyebrow="Experience"
      title="Where I’ve worked"
      description="Hands-on work building interfaces for real clients and teams."
      split
    >
      <div>
        <Timeline
          items={experience}
          icon={FiBriefcase}
          getKey={(entry) => `${entry.role}-${entry.period}`}
          renderItem={(entry) => (
            <article className="card p-6 transition-all duration-300 hover:border-accent/50 sm:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold leading-snug sm:text-xl">{entry.role}</h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted">
                    <span className="font-medium text-ink/90">{entry.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <FiMapPin aria-hidden="true" className="text-xs" />
                      {entry.location}
                    </span>
                  </p>
                </div>
                <span className="chip w-fit shrink-0 border-accent/40 bg-accent/10 font-mono text-accent">
                  {entry.period}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-muted">{entry.description}</p>
              {entry.tags?.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Skills used">
                  {entry.tags.map((tag) => (
                    <li key={tag} className="chip font-mono">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          )}
        />
      </div>
    </Section>
  );
}
