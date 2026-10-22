import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center gap-5">
        <motion.span
          className="grid h-16 w-16 place-items-center rounded-2xl border border-accent/40 bg-accent/10 font-mono text-lg font-medium text-accent"
          initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        >
          {profile.initials}
        </motion.span>
        <div className="h-0.5 w-32 overflow-hidden rounded-full bg-line">
          <motion.div
            className="h-full origin-left bg-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}
