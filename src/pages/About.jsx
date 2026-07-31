import SEO from "../components/SEO";
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Award, Users, MapPin } from 'lucide-react';
import homeSecurity from "../assets/home-security.jpg"
import technician from "../assets/technician.jpg"
import SecurityCameras from "../assets/SecurityCameras.jpg"
import cctvCamera from "../assets/view-footage.jpg"

import SectionHeading from '../components/ui/SectionHeading';
import { processSteps } from '../data/content';


const team = [
  { name: 'Vikram Rathore', role: 'Founder & Lead Engineer', image: 'indian male security engineer portrait professional' },
  { name: 'Ananya Kapoor', role: 'Head of Operations', image: 'indian female operations manager portrait professional' },
  { name: 'Sameer Joshi', role: 'Networking Specialist', image: 'indian male network engineer portrait professional' },
  { name: 'Neha Bhatt', role: 'Client Success Lead', image: 'indian female client success portrait professional' },
];

const achievements = [
  { icon: Award, label: '500+ Installations Delivered' },
  { icon: Users, label: '200+ Business Clients' },
  { icon: ShieldCheck, label: 'Authorised Brand Partner' },
  { icon: MapPin, label: 'Serving 15+ Cities' },
];

export default function About() {
  return (
    <>
      <SEO
  title="About Us | Expert Services"
  description="Learn about Expert Services — an authorised CCTV and security integrator with 10+ years of experience installing surveillance systems nationwide."
/>

      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-950 pt-32">
        <img
  src={homeSecurity}
  alt="Security control room"
  className="absolute inset-0 h-full w-full object-cover opacity-40"
/>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        <div className="container-px relative mx-auto max-w-7xl pb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow text-sky"
          >
            <span className="h-px w-8 bg-sky" /> About Expert Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-3xl font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
          >
            A Decade of Building Trust, One Installation at a Time
          </motion.h1>
        </div>
      </section>

      {/* STORY */}
      <section className="section-pad bg-white">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img
  src={technician}
  alt="Technician installing a camera"
  className="col-span-2 h-72 w-full rounded-2xl object-cover shadow-card"
/>
            <img
  src={SecurityCameras}
  alt="Office building"
  className="h-40 rounded-2xl object-cover shadow-card"
/>
            <img
  src={cctvCamera}
  alt="Camera close-up"
  className="h-40 rounded-2xl object-cover shadow-card"
/>
          </div>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Founded On Precision, Built On Reliability"
              description="Expert Services began as a two-person installation crew fixing overlooked gaps in residential security. A decade later, we design and maintain surveillance and access-control systems for homes, corporate offices, factories, schools, and hospitals across the country — without ever losing that original attention to detail."
            />
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-navy-900/8 p-5">
                <Target className="mb-3 h-6 w-6 text-royal-500" />
                <h4 className="mb-1 font-heading text-sm font-bold text-navy-900">Our Mission</h4>
                <p className="text-xs leading-relaxed text-ink/55">
                  Deliver dependable, professionally installed security systems that property owners can trust
                  without a second thought.
                </p>
              </div>
              <div className="rounded-2xl border border-navy-900/8 p-5">
                <Eye className="mb-3 h-6 w-6 text-royal-500" />
                <h4 className="mb-1 font-heading text-sm font-bold text-navy-900">Our Vision</h4>
                <p className="text-xs leading-relaxed text-ink/55">
                  Become the most trusted name in surveillance and access control across every city we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS STRIP */}
      <section className="bg-navy-950 py-14">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {achievements.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.label} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-5 w-5 text-sky" />
                </span>
                <p className="text-sm font-medium text-white/70">{a.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TEAM */}
      {/* <section className="section-pad bg-bg">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            eyebrow="Our Team"
            title="The People Behind Every Installation"
            description="A small, senior team of engineers and coordinators — not a call-centre operation."
            className="mx-auto mb-14"
          />
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-card"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={img(m.image, 450, 600)}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <p className="font-heading text-sm font-bold text-navy-900">{m.name}</p>
                  <p className="text-xs text-ink/50">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* PROCESS TIMELINE */}
      <section className="section-pad bg-white">
        <div className="container-px mx-auto max-w-5xl">
          <SectionHeading
            align="center"
            eyebrow="Installation Process"
            title="How We Take On Every Project"
            className="mx-auto mb-16"
          />
          <div className="relative">
            <span className="absolute left-6 top-2 bottom-2 hidden w-px bg-navy-900/10 md:block" />
            <div className="space-y-10">
              {processSteps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex gap-6 pl-0 md:pl-16"
                >
                  <span className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-royal-500 to-navy-900 font-heading text-sm font-bold text-white md:flex">
                    {i + 1}
                  </span>
                  <div className="rounded-2xl border border-navy-900/8 p-6 shadow-card">
                    <h4 className="mb-1 font-heading text-lg font-bold text-navy-900">{s.title}</h4>
                    <p className="text-sm text-ink/55">{s.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORISED PARTNER SHOWCASE */}
      <section className="relative overflow-hidden bg-navy-950 py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="container-px relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-500 to-sky shadow-glow">
            <ShieldCheck className="h-7 w-7 text-white" />
          </span>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Officially Authorised Business Partner
          </h2>
          <p className="max-w-2xl text-white/60">
            Our authorisation is verified with a documented referral code and installation-expert certification,
            giving every client full confidence in who is handling their property.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {['ES-2026-VP01', 'Verified', 'Certified', 'Professional'].map((v) => (
              <span key={v} className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold text-white/80">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
