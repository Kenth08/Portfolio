import { FiArrowUpRight, FiFolder, FiGithub, FiStar } from 'react-icons/fi';
import SmartImage from './SmartImage';
import ProjectLinks from './ProjectLinks';

function Tags({ tags }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {tags.map((tag) => (
        <li key={tag} className="chip font-mono">
          {tag}
        </li>
      ))}
    </ul>
  );
}

// Shown when a screenshot is missing: a mock browser window with the project initials.
function ScreenshotPlaceholder({ title }) {
  const initials = title
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join('');

  return (
    <div
      role="img"
      aria-label={`${title} preview placeholder`}
      className="flex h-full w-full flex-col bg-gradient-to-br from-accent/20 via-elevated to-surface"
    >
      <div className="flex gap-1.5 border-b border-line/70 px-4 py-3" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      <div className="grid flex-1 place-items-center">
        <span className="font-mono text-4xl font-medium text-accent">{initials}</span>
      </div>
    </div>
  );
}

function Preview({ project, className = '' }) {
  const { title, image, live, github } = project;

  return (
    <div className={`relative overflow-hidden bg-elevated ${className}`}>
      <SmartImage
        src={image}
        alt={`Screenshot of ${title}`}
        width="1200"
        height="750"
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        fallback={<ScreenshotPlaceholder title={title} />}
      />
      {/* Hover overlay. The same links are always available below the image for touch and keyboard users. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden items-center justify-center gap-3 bg-bg/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 md:flex"
      >
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
            className="grid h-12 w-12 translate-y-3 place-items-center rounded-full bg-accent text-accent-ink transition-transform duration-300 hover:scale-110 group-hover:translate-y-0"
          >
            <FiArrowUpRight size={20} />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
            className="grid h-12 w-12 translate-y-3 place-items-center rounded-full border border-line bg-surface text-ink transition-transform delay-75 duration-300 hover:scale-110 group-hover:translate-y-0"
          >
            <FiGithub size={20} />
          </a>
        )}
      </div>
    </div>
  );
}

export function FeaturedProjectCard({ project }) {
  return (
    <article className="card group grid overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 lg:grid-cols-[1.25fr_1fr]">
      <Preview project={project} className="aspect-[16/10] lg:aspect-auto lg:min-h-[22rem]" />
      <div className="flex flex-col p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-ink">
            <FiStar aria-hidden="true" />
            Featured
          </span>
          {project.label && <span className="font-mono text-xs text-muted">{project.label}</span>}
        </div>
        <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h3>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
        <div className="mt-6">
          <Tags tags={project.tags} />
        </div>
        <ProjectLinks {...project} className="mt-auto pt-8" />
      </div>
    </article>
  );
}

export function ProjectCard({ project }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10">
      <Preview project={project} className="aspect-[16/10]" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-5">
          <Tags tags={project.tags} />
        </div>
        <ProjectLinks {...project} size="sm" className="mt-auto pt-6" />
      </div>
    </article>
  );
}

export function AcademicProjectCard({ project }) {
  return (
    <article className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-ink">
          <FiFolder size={20} aria-hidden="true" />
        </span>
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">Academic</span>
      </div>
      <h3 className="mt-5 font-bold">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-5">
        <Tags tags={project.tags} />
      </div>
      <ProjectLinks {...project} size="sm" className="mt-auto pt-6" />
    </article>
  );
}
