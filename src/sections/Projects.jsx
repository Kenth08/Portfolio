import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projectFilters, projects } from '../data/portfolio';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { AcademicProjectCard, FeaturedProjectCard, ProjectCard } from '../components/ProjectCard';

const cardMotion = {
  layout: true,
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const visible = projects.filter((p) => filter === 'all' || p.category === filter);
  const featured = visible.filter((p) => p.featured);
  const web = visible.filter((p) => !p.featured && p.category === 'web');
  const academic = visible.filter((p) => p.category === 'academic');

  const countFor = (id) => (id === 'all' ? projects.length : projects.filter((p) => p.category === id).length);

  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Projects"
      title="Things I’ve built"
      description="A mix of deployed web apps and academic systems. Hover a card for quick links, or use the buttons below each one."
    >
      <Reveal className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {projectFilters.map(({ id, label }) => {
          const active = filter === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={active}
              className={`relative rounded-xl border px-4 py-2 text-sm font-semibold transition-colors ${
                active
                  ? 'border-transparent text-accent-ink'
                  : 'border-line bg-surface text-muted hover:border-accent/50 hover:text-ink'
              }`}
            >
              {active && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-xl bg-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative">
                {label}
                <span className={`ml-2 font-mono text-xs ${active ? 'opacity-70' : 'text-muted'}`}>{countFor(id)}</span>
              </span>
            </button>
          );
        })}
      </Reveal>

      <motion.div layout className="space-y-6">
        <AnimatePresence mode="popLayout">
          {featured.map((project) => (
            <motion.div key={project.title} {...cardMotion}>
              <FeaturedProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>

        {web.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {web.map((project) => (
                <motion.div key={project.title} {...cardMotion} className="h-full">
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {academic.length > 0 && (
          <div className={filter === 'all' ? 'pt-10' : ''}>
            {filter === 'all' && (
              <h3 className="mb-6 flex items-center gap-3 text-lg font-bold">
                Academic Projects
                <span aria-hidden="true" className="h-px flex-1 bg-line" />
              </h3>
            )}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {academic.map((project) => (
                  <motion.div key={project.title} {...cardMotion} className="h-full">
                    <AcademicProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </motion.div>
    </Section>
  );
}
