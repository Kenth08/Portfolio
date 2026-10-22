import { FiAward, FiBookOpen } from 'react-icons/fi';
import { education } from '../data/portfolio';
import Section from '../components/Section';
import Timeline from '../components/Timeline';

export default function Education() {
  return (
    <Section
      id="education"
      index="02"
      eyebrow="Education"
      title="Where I’m learning"
      description="My academic background in information technology, from senior high school ICT to my BSIT degree."
      split
    >
      <div>
        <Timeline
          items={education}
          icon={FiBookOpen}
          getKey={(entry) => entry.degree}
          renderItem={(entry, i) => (
            <article className="card p-6 transition-all duration-300 hover:border-accent/50 sm:p-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`chip ${i === 0 ? 'border-accent/40 bg-accent/10 text-accent' : ''}`}>{entry.status}</span>
                <span className="font-mono text-xs text-muted">{entry.period}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug sm:text-xl">{entry.degree}</h3>
              <p className="mt-1 text-muted">{entry.school}</p>
              {entry.highlights.length > 0 && (
                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm">
                      <FiAward className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                      <span>
                        <span className="font-semibold">Academic highlight — </span>
                        {highlight}
                      </span>
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
