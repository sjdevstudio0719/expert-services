import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';


export default function Testimonial({ item, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      className="relative flex h-full flex-col rounded-2xl border border-navy-900/5 bg-white p-7 shadow-card"
    >
      <Quote className="mb-4 h-8 w-8 text-royal-100" fill="currentColor" />
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-royal-500 text-royal-500" />
        ))}
      </div>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-ink/70">"{item.quote}"</p>
      <div className="flex items-center gap-3">
        <img src={img(item.image, 100, 100)} alt={item.name} className="h-11 w-11 rounded-full object-cover" />
        <div>
          <p className="font-heading text-sm font-bold text-navy-900">{item.name}</p>
          <p className="text-xs text-ink/50">{item.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
