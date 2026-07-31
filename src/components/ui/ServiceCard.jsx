import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-navy-900/5 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-royal-50 transition-transform duration-500 group-hover:scale-150" />
      <div className="relative flex h-full flex-col">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500 to-navy-900 text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <h3 className="mb-2 font-heading text-xl font-bold text-navy-900">{service.title}</h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-ink/60">{service.short}</p>
        <Link
          to={`/services#${service.slug}`}
          className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-royal-500"
        >
          Read More
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </motion.div>
  );
}
