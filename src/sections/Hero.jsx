import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowRight, FiDownload, FiMail, FiMapPin } from 'react-icons/fi';
import { profile } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';
import SmartImage from '../components/SmartImage';
import SocialLinks from '../components/SocialLinks';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function ProfilePlaceholder() {
  return (
    <div
      role="img"
      aria-label={`${profile.name} profile placeholder`}
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/25 via-elevated to-surface"
    >
      <span className="font-mono text-5xl font-medium tracking-tight text-accent sm:text-6xl">{profile.initials}</span>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" aria-label="Introduction" className="relative isolate overflow-hidden pt-16">
      {/* Background: faint grid and a soft accent glow */}
      <div
        aria-hidden="true"
        className="hero-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-[-10%] -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px] sm:h-[36rem] sm:w-[36rem]"
      />

      <div className="container-x grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20">
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </motion.p>

          <motion.p variants={item} className="font-mono text-sm text-accent">
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-5 min-h-[2.25rem] text-xl font-semibold text-muted sm:text-2xl">
            <span className="sr-only">{profile.roles.join(', ')}</span>
            <span aria-hidden="true">
              <span className="text-ink">{typed}</span>
              <span className="ml-0.5 inline-block h-[1.1em] w-[3px] translate-y-[0.18em] animate-pulse bg-accent" />
            </span>
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary group">
              View Projects
              <FiArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-ghost">
              <FiMail aria-hidden="true" />
              Contact Me
            </a>
            <a href={profile.cvUrl} download className="btn-ghost">
              <FiDownload aria-hidden="true" />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <SocialLinks />
            <span className="flex items-center gap-2 text-sm text-muted">
              <FiMapPin aria-hidden="true" className="text-accent" />
              {profile.location}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 mx-auto w-full max-w-[17rem] sm:max-w-xs lg:order-2 lg:max-w-sm"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border-2 border-accent/50 sm:translate-x-4 sm:translate-y-4"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-elevated shadow-2xl shadow-black/20">
              <SmartImage
                src={profile.image}
                alt={`Portrait of ${profile.name}`}
                eager
                fetchpriority="high"
                width="480"
                height="600"
                className="h-full w-full object-cover"
                fallback={<ProfilePlaceholder />}
              />
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-8">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">Capstone project</p>
              <p className="mt-0.5 text-sm font-semibold">E-Procurement Blockchain System</p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted transition-colors hover:text-accent lg:flex"
        aria-label="Scroll to About section"
      >
        <span className="font-mono uppercase tracking-widest">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <FiArrowDown aria-hidden="true" />
        </motion.span>
      </a>
    </section>
  );
}
