import { useMemo, useState } from 'react';
import SEO from "../components/SEO";
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import SectionHeading from '../components/ui/SectionHeading';
import GalleryCard from '../components/ui/GalleryCard';
import { galleryImages, projectCategories } from '../data/content';

import gallerybg from "../assets/gallerybg.jpg"
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () => (active === 'All' ? galleryImages : galleryImages.filter((g) => g.category === active)),
    [active]
  );

  const openAt = (item) => setLightboxIndex(filtered.findIndex((f) => f === item));
  const close = () => setLightboxIndex(null);
  const step = (dir) => setLightboxIndex((i) => (i + dir + filtered.length) % filtered.length);

  return (
    <>
     <SEO
  title="Gallery | Expert Services — Installation Showcase"
  description="Browse completed CCTV and security installations across residential, commercial, office, warehouse, school and hospital properties."
/>

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 pb-20 pt-40">
        <img
                  src={gallerybg}
                  alt="Security control room"
                  className="absolute inset-0 h-full w-full object-cover opacity-40"
                />
        <div className="pointer-events-none absolute inset-0 bg-navy-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="container-px relative mx-auto max-w-4xl text-center">
          <span className="eyebrow justify-center text-sky">
            <span className="h-px w-8 bg-sky" /> Installation Gallery
          </span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            A Look Inside Our Completed Work
          </h1>
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="section-pad bg-bg">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {['All', ...projectCategories].map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2.5 font-heading text-sm font-semibold transition-all duration-300 ${
                  active === c
                    ? 'bg-gradient-to-r from-royal-500 to-sky text-white shadow-glow'
                    : 'border border-navy-900/10 bg-white text-navy-900/70 hover:border-royal-500 hover:text-royal-500'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {filtered.map((item, i) => (
              <GalleryCard key={item.title} item={item} index={i} tall={i % 5 === 0} onOpen={openAt} />
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-950/95 p-6 backdrop-blur-md"
            onClick={close}
          >
            <button onClick={close} className="absolute right-6 top-6 text-white/70 hover:text-white">
              <X className="h-7 w-7" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(1); }}
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl overflow-hidden rounded-2xl"
            >
             <img
  src={filtered[lightboxIndex].image}
  alt={filtered[lightboxIndex].title}
  className="max-h-[75vh] w-full object-cover"
/>
              <div className="bg-navy-900 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-sky">
                  {filtered[lightboxIndex].category}
                </p>
                <p className="font-heading text-lg font-bold text-white">{filtered[lightboxIndex].title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BEFORE / AFTER */}
      
    </>
  );
}
