import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setVisible(v > 500));

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white shadow-card-hover"
          aria-label="Back to top"
        >
          <svg className="absolute inset-0 h-14 w-14 -rotate-90">
            <motion.circle
              cx="28"
              cy="28"
              r="25"
              fill="none"
              stroke="#0A5BFF"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <ArrowUp className="relative h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
