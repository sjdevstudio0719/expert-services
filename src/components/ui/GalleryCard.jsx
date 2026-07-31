import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';


export default function GalleryCard({ item, index = 0, tall = false, onOpen }) {
  return (
    <motion.button
      onClick={() => onOpen?.(item)}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className={`group relative block w-full overflow-hidden rounded-2xl text-left ${tall ? 'row-span-2' : ''}`}
    >
      <img
    src={item.image}
    alt={item.title}
    className="w-full object-cover"
/>
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
        <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-sky">{item.category}</span>
        <span className="font-heading text-base font-bold text-white">{item.title}</span>
      </div>
      <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
        <Expand className="h-4 w-4" />
      </span>
    </motion.button>
  );
}
