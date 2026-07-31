import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-navy-950"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-500 to-sky shadow-glow"
            >
              <ShieldCheck className="h-10 w-10 text-white" strokeWidth={1.75} />
              <motion.span
                className="absolute inset-0 rounded-2xl border border-royal-400/50"
                animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-sm tracking-[0.3em] text-white/70 uppercase"
            >
              Expert Services
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
