import { motion } from 'framer-motion';

/**
 * Fades and lifts its children into view once, when scrolled to.
 */
export default function Reveal({ children, delay = 0, y = 24, as = 'div', className = '', ...rest }) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}
