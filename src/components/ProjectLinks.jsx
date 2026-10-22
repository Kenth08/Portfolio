import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

/**
 * "Live Demo" and "GitHub" buttons. Each one is hidden when its link is empty.
 */
export default function ProjectLinks({ title, live, github, size = 'md', className = '' }) {
  if (!live && !github) return null;

  const pad = size === 'sm' ? 'px-3.5 py-2 text-xs' : 'px-4 py-2.5 text-sm';

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          aria-label={`Live demo of ${title} (opens in a new tab)`}
          className={`btn-primary ${pad}`}
        >
          Live Demo
          <FiArrowUpRight aria-hidden="true" />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label={`Source code of ${title} on GitHub (opens in a new tab)`}
          className={`btn-ghost ${pad}`}
        >
          <FiGithub aria-hidden="true" />
          GitHub
        </a>
      )}
    </div>
  );
}
