import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`eyebrow ${light ? 'text-sky' : ''}`}
        >
          <span className={`h-px w-8 ${light ? 'bg-sky' : 'bg-royal-500'}`} />
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={`font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem] ${
            light ? 'text-white' : 'text-navy-900'
          }`}
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-body text-base leading-relaxed md:text-lg ${light ? 'text-white/70' : 'text-ink/60'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
