import { motion } from 'framer-motion';
import { Check } from 'lucide-react';


export default function ProductCard({ product, index = 0, onRequestQuote }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
      className="group overflow-hidden rounded-2xl border border-navy-900/5 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={img(product.image, 700, 520)}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {product.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-bold text-navy-900">{product.name}</h3>
        <p className="mb-4 text-sm text-royal-500">{product.tagline}</p>
        <ul className="mb-5 space-y-2">
          {product.specs.slice(0, 3).map((s) => (
            <li key={s} className="flex items-start gap-2 text-xs text-ink/60">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-royal-500" />
              {s}
            </li>
          ))}
        </ul>
        <button onClick={() => onRequestQuote?.(product)} className="btn-outline w-full !py-2.5 text-sm">
          Request Quote
        </button>
      </div>
    </motion.div>
  );
}
