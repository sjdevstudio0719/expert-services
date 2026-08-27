import SEO from "../components/SEO";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from "../assets/cctv-installation.jpg";
import {
  ShieldCheck,
  Headset,
  Award,
  ThumbsUp,
  Phone,
  ArrowRight,
  BadgeCheck,
  Search,
  ClipboardList,
  Hammer,
  CheckCircle2,
  LifeBuoy,
} from 'lucide-react';

import SectionHeading from '../components/ui/SectionHeading';
import GlassCard from '../components/ui/GlassCard';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import ServiceCard from '../components/ui/ServiceCard';
import ProductCard from '../components/ui/ProductCard';
import GalleryCard from '../components/ui/GalleryCard';
import Testimonial from '../components/ui/Testimonial';
import Button from '../components/ui/Button';
import services from '../data/services';
import products from '../data/products';
import { testimonials, processSteps, projects } from '../data/content';


const stats = [
  { end: 500, suffix: '+', label: 'Projects Installed' },
  { end: 10, suffix: '+', label: 'Years Experience' },
  { end: 24, suffix: '/7', label: 'Support Available' },
  { end: 100, suffix: '%', label: 'Customer Satisfaction' },
];

const processIcons = [Search, ClipboardList, Hammer, CheckCircle2, LifeBuoy];

export default function Home() {
  return (
    <>
      <SEO
  title="Expert Services | Premium CCTV & Security Solutions"
  description="Advanced CCTV, smart home security, commercial surveillance and networking solutions for homes and businesses. Book a free site inspection today."
  keywords="CCTV Installation, Security Systems, IP Cameras, Smart Home Security, Commercial CCTV, Surveillance Systems"
/>

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 pt-32">
        <div className="pointer-events-none absolute inset-0 bg-navy-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="pointer-events-none absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-royal-500/30 blur-[100px]"
        />

        <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 py-20 lg:grid-cols-2">
          <div>
     {/* ========== SJ DEV STUDIO CREDIT ========== */}
              <motion.a
                href="https://sj-dev-studio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group mb-5 flex w-fit items-center gap-2 text-xs sm:text-sm"
              >
                <span className="text-white/45">
                  Expert Services website designed & developed by
                </span>

                <span className="font-semibold text-royal-400 transition-colors group-hover:text-sky">
                  SJ DEV STUDIO ↗
                </span>
              </motion.a>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-sky backdrop-blur-sm"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Trusted CCTV &amp; Security Experts
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            >
              Protect What <span className="text-gradient">Matters Most</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-xl text-lg text-white/70"
            >
              Advanced CCTV &amp; smart security solutions for modern homes &amp; businesses.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 max-w-xl text-sm leading-relaxed text-white/50"
            >
              We provide professional CCTV installation, surveillance systems, biometric access control,
              networking solutions, and annual maintenance services for homes, offices, factories, schools,
              hospitals, and commercial properties.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Button to="/contact" icon={ArrowRight}>Book Free Site Inspection</Button>
              <Button href="tel:+918900111190" variant="ghostLight" icon={Phone}>Call Now</Button>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl"
            >
             <img
  src={heroImage}
  alt="Professional CCTV installer at work"
  className="h-[520px] w-full object-cover"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -left-6 top-10 hidden sm:block"
            >
              <GlassCard dark className="w-48 !p-4 animate-float">
                <Headset className="mb-2 h-5 w-5 text-sky" />
                <p className="font-heading text-sm font-bold text-white">24/7 Support</p>
                <p className="text-xs text-white/50">Always here to help</p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="absolute -right-4 top-1/3 hidden sm:block"
            >
              <GlassCard dark className="w-48 !p-4 animate-float-slow">
                <Award className="mb-2 h-5 w-5 text-sky" />
                <p className="font-heading text-sm font-bold text-white">500+ Installations</p>
                <p className="text-xs text-white/50">Across India</p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="absolute -bottom-6 left-8 hidden sm:block"
            >
              <GlassCard dark className="w-52 !p-4 animate-float">
                <ThumbsUp className="mb-2 h-5 w-5 text-sky" />
                <p className="font-heading text-sm font-bold text-white">10+ Years Experience</p>
                <p className="text-xs text-white/50">Certified technicians</p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.15 }}
              className="absolute -bottom-8 right-0 hidden sm:block"
            >
              <GlassCard dark className="w-44 !p-4 animate-float-slow">
                <BadgeCheck className="mb-2 h-5 w-5 text-sky" />
                <p className="font-heading text-sm font-bold text-white">Authorised Partner</p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ TRUST INDICATORS ============ */}
      <section className="border-b border-navy-900/5 bg-white">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-4xl font-extrabold text-navy-900 md:text-5xl">
                <AnimatedCounter end={s.end} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-ink/50">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ AUTHORISED PARTNER TRUST SECTION ============ */}
      <section className="section-pad relative overflow-hidden bg-navy-950">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-royal-500/20 blur-[120px]" />
        <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <SectionHeading
            light
            eyebrow="Verified &amp; Authorised"
            title="A Certified Partner You Can Trust"
            description="Every installation is carried out under our official authorisation, backed by a documented referral code and a verified installation record — so you always know exactly who is working on your property."
          />
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass relative overflow-hidden rounded-3xl p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500 to-sky">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </span>
                  <div>
                    <p className="font-heading text-base font-bold text-white">Expert Services</p>
                    <p className="text-xs text-white/50">Authorised Business Partner</p>
                  </div>
                </div>
                <span className="rounded-full bg-royal-500/20 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-sky">
                  Verified
                </span>
              </div>

              <div className="mb-8 grid grid-cols-2 gap-5">
                {[
                  { label: 'Referral Code', value: 'ES-2026-VP01' },
                  { label: 'Partner Status', value: 'Official' },
                  { label: 'Install Expert', value: 'Verified' },
                  { label: 'Support Tier', value: 'Professional' },
                ].map((f) => (
                  <div key={f.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[0.65rem] uppercase tracking-wider text-white/40">{f.label}</p>
                    <p className="mt-1 font-heading text-sm font-bold text-white">{f.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-sky/20 bg-sky/10 p-4">
                <BadgeCheck className="h-5 w-5 shrink-0 text-sky" />
                <p className="text-xs leading-relaxed text-white/70">
                  This authorisation confirms professional support and verified installation standards on
                  every project we deliver.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES PREVIEW ============ */}
      <section className="section-pad bg-bg">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What We Offer"
              title="Security Solutions Built For Every Property"
              description="From single-camera homes to multi-site industrial plants, every system is designed around your property, your risks, and your budget."
            />
            <Button to="/services" variant="outline" icon={ArrowRight} className="shrink-0">
              View All Services
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS PREVIEW ============ */}
      {/* <section className="section-pad bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Hardware We Install"
              title="Premium Cameras &amp; Security Hardware"
              description="Sourced from certified manufacturers and matched to your site during our free inspection — never a one-size-fits-all install."
            />
            <Button to="/products" variant="outline" icon={ArrowRight} className="shrink-0">
              View All Products
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section> */}

      {/* ============ WHY CHOOSE US / PROCESS TIMELINE ============ */}
      <section className="section-pad relative overflow-hidden bg-navy-950">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="container-px relative mx-auto max-w-7xl">
          <SectionHeading
            light
            align="center"
            eyebrow="Why Choose Us"
            title="A Process Designed Around Accuracy"
            description="Every project follows the same disciplined sequence, so nothing about your installation is left to guesswork."
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {processSteps.map((step, i) => {
              const Icon = processIcons[i];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {i < processSteps.length - 1 && (
                    <span className="absolute left-1/2 top-8 hidden h-px w-full bg-white/10 md:block" />
                  )}
                  <span className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-500 to-sky shadow-glow">
                    <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                  </span>
                  <h3 className="mb-2 font-heading text-base font-bold text-white">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-white/50">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ RECENT PROJECTS ============ */}
      {/* <section className="section-pad bg-bg">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Recent Installations"
            title="Projects Across Every Property Type"
            description="A snapshot of sites we've secured recently — from private residences to full hospital campuses."
            className="mb-14"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <GalleryCard key={p.title} item={{ ...p, title: `${p.title} — ${p.cameras} Cameras` }} index={i} />
            ))}
          </div>
        </div>
      </section> */}

      {/* ============ GOOGLE REVIEWS ============ */}
      <section className="section-pad bg-gradient-to-b from-white to-slate-50">
  <div className="container-px mx-auto max-w-7xl">

    <SectionHeading
      align="center"
      eyebrow="Why Choose Us"
      title="Trusted Security Solutions Across Every Industry"
      description="From homes to commercial buildings, we deliver reliable CCTV and security systems with professional installation and long-term support."
      className="mx-auto mb-14"
    />

    {/* Trust Statistics */}
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-4xl font-bold text-royal-500">500+</h3>
        <p className="mt-3 text-sm text-slate-600">Projects Completed</p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-4xl font-bold text-royal-500">4.9★</h3>
        <p className="mt-3 text-sm text-slate-600">Average Rating</p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-4xl font-bold text-royal-500">98%</h3>
        <p className="mt-3 text-sm text-slate-600">Customer Satisfaction</p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <h3 className="text-4xl font-bold text-royal-500">24/7</h3>
        <p className="mt-3 text-sm text-slate-600">Technical Support</p>
      </div>

    </div>

  </div>
</section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-royal-600 via-royal-500 to-sky py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <div className="container-px relative mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Need Professional Security?
          </h2>
          <p className="max-w-xl text-white/85">
            Book your free site inspection today and get a tailored recommendation within 24 hours.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-heading font-bold text-royal-600 shadow-xl transition-transform hover:-translate-y-0.5"
            >
              Book Free Site Inspection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+918900111190"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 font-heading font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
