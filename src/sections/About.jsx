import { FiBookOpen, FiBriefcase, FiMail, FiMapPin, FiTarget } from 'react-icons/fi';
import { education, profile } from '../data/portfolio';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const details = [
  { icon: FiMapPin, label: 'Location', value: profile.location },
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiBookOpen, label: 'Studying', value: `BSIT, ${education[0].period}` },
  { icon: FiBriefcase, label: 'Status', value: profile.availability },
];

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="A developer who cares about the details">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <div className="space-y-6">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {profile.description.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="card relative overflow-hidden p-6 sm:p-8">
            <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-accent" />
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
              <FiTarget aria-hidden="true" />
              Career Objective
            </h3>
            <p className="mt-3 leading-relaxed text-ink/90">{profile.objective}</p>
          </Reveal>
        </div>

        <div className="space-y-6">
          <Reveal delay={0.15} className="card p-6 sm:p-7">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Basic Information</h3>
            <dl className="mt-5 space-y-4">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Icon aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-xs text-muted">{label}</dt>
                    <dd className="break-words font-medium">
                      {href ? (
                        <a href={href} className="link-underline transition-colors hover:text-accent">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2} className="card p-6 sm:p-7">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Career Interests</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
