import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy, FiMail, FiMapPin } from 'react-icons/fi';
import { profile, socials } from '../data/portfolio';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      // Clipboard can be unavailable (insecure context or denied permission); the mailto button still works.
    }
  };

  return (
    <button type="button" onClick={copy} className="btn-ghost">
      {copied ? <FiCheck aria-hidden="true" className="text-accent" /> : <FiCopy aria-hidden="true" />}
      <span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span>
    </button>
  );
}

export default function Contact() {
  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Contact"
      title="Let’s work together"
      description="I’m looking for internship and junior web developer opportunities. If you have a role, a project, or just a question, my inbox is open."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="card relative flex flex-col justify-between gap-8 overflow-hidden p-6 sm:p-10">
          <div aria-hidden="true" className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
              <FiMail size={22} aria-hidden="true" />
            </span>
            <p className="mt-6 text-sm text-muted">Email me at</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 block break-all text-xl font-bold tracking-tight transition-colors hover:text-accent sm:text-3xl"
            >
              {profile.email}
            </a>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <FiMapPin aria-hidden="true" className="text-accent" />
              {profile.location}
            </p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <FiMail aria-hidden="true" />
              Send an Email
            </a>
            <CopyEmailButton />
          </div>
        </Reveal>

        <ul className="grid gap-4">
          {socials.map(({ label, url, icon: Icon, handle }, i) => (
            <Reveal as="li" key={label} delay={0.08 * (i + 1)}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${label}: ${handle} (opens in a new tab)`}
                className="card group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-elevated text-ink transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{label}</span>
                  <span className="block truncate text-sm text-muted">{handle}</span>
                </span>
                <FiArrowUpRight
                  aria-hidden="true"
                  className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
