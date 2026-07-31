import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2.4, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp end={end} duration={duration} prefix={prefix} suffix={suffix} separator="," />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}
