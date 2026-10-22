import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers } from 'react-icons/fi';
import { skillGroups, softSkills } from '../data/portfolio';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

function SkillBar({ name, icon: Icon, level, delay }) {
  return (
    <li>
      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
        <span className="flex min-w-0 items-center gap-2.5 font-medium">
          <Icon className="shrink-0 text-base text-muted" aria-hidden="true" />
          <span className="truncate">{name}</span>
        </span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full bg-elevated"
        role="progressbar"
        aria-label={`${name} proficiency`}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full origin-left rounded-full bg-gradient-to-r from-accent/60 to-accent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: level / 100 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </li>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Skills"
      title="Tools I build with"
      description="The languages, frameworks, and tools I use day to day, with an honest look at where I am with each."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ title, icon: GroupIcon, skills }, groupIndex) => (
          <Reveal key={title} delay={groupIndex * 0.1}>
            <div className="card group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="flex items-center gap-3 text-lg font-bold">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                  <GroupIcon aria-hidden="true" />
                </span>
                {title}
              </h3>
              <span className="font-mono text-xs text-muted">{String(skills.length).padStart(2, '0')}</span>
            </div>
            <ul className="space-y-5">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={0.1 + i * 0.07} />
              ))}
            </ul>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.2} className="card p-6 sm:p-7 md:col-span-2 lg:col-span-3">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="flex items-center gap-3 text-lg font-bold">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                <FiUsers aria-hidden="true" />
              </span>
              Soft Skills
            </h3>
            <ul className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 rounded-xl border border-line bg-elevated px-4 py-2 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <FiCheckCircle className="text-accent" aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
