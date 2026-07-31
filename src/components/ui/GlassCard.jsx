import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', dark = false, delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`rounded-2xl ${dark ? 'glass' : 'glass-light shadow-card'} p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
