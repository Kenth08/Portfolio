import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { githubCta } from '../data/portfolio';
import Reveal from '../components/Reveal';

export default function GitHubCta() {
  return (
    <section aria-labelledby="github-title" className="py-8 sm:py-12">
      <div className="container-x">
        <Reveal className="relative isolate overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/15 via-surface to-surface p-8 sm:p-12">
          <FiGithub
            aria-hidden="true"
            className="absolute -bottom-10 -right-6 -z-10 h-56 w-56 text-accent/10 sm:h-72 sm:w-72"
          />
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">GitHub</p>
              <h2 id="github-title" className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                {githubCta.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{githubCta.text}</p>
            </div>
            <a
              href={githubCta.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary group w-full shrink-0 sm:w-auto"
              aria-label={`Visit ${githubCta.username} on GitHub (opens in a new tab)`}
            >
              <FiGithub aria-hidden="true" />
              github.com/{githubCta.username}
              <FiArrowUpRight
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
