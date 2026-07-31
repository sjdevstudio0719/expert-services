import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Wrench, HardDrive, ShieldCheck, Headset, Star } from 'lucide-react';

const rows = [
  { key: 'cameras', icon: Camera },
  { key: 'installation', icon: Wrench },
  { key: 'storage', icon: HardDrive },
  { key: 'warranty', icon: ShieldCheck },
  { key: 'support', icon: Headset },
];

export default function PricingCard({ plan, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -10 }}
      className={`relative flex flex-col rounded-2xl p-8 transition-shadow duration-300 ${
        plan.highlight
          ? 'bg-gradient-to-b from-navy-900 to-navy-950 text-white shadow-glow'
          : 'border border-navy-900/8 bg-white text-navy-900 shadow-card hover:shadow-card-hover'
      }`}
    >
      {plan.highlight && (
        <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-royal-500 to-sky px-4 py-1.5 text-xs font-bold text-white">
          <Star className="h-3 w-3 fill-white" /> Most Popular
        </span>
      )}
      <h3 className="font-heading text-2xl font-bold">{plan.name}</h3>
      <p className={`mb-6 text-sm ${plan.highlight ? 'text-white/60' : 'text-ink/50'}`}>{plan.tagline}</p>

      <ul className="mb-8 flex-1 space-y-4">
        {rows.map(({ key, icon: Icon }) => (
          <li key={key} className="flex items-start gap-3">
            <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlight ? 'text-sky' : 'text-royal-500'}`} />
            <span className={`text-sm ${plan.highlight ? 'text-white/85' : 'text-ink/75'}`}>{plan[key]}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={plan.highlight ? 'btn-ghost-light w-full' : 'btn-primary w-full'}
      >
        Request Quote
      </Link>
    </motion.div>
  );
}
