import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

import services from "../data/services";
// import { img } from '../utils/img';
import servicesbg from "../assets/servicesbg.jpg"


export default function Services() {
  return (
    <>
      <SEO
        title="Services | Expert Services — CCTV & Security Solutions"
        description="Explore our full range of CCTV and security services: home, office, commercial and industrial security, networking, biometric access, video door phones and AMC."
        keywords="CCTV Installation, Home Security, Office Security, Commercial Security, Industrial Security, IP Cameras, Biometric Attendance, Video Door Phone, Networking Services, CCTV AMC"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 pb-24 pt-40">
        <img
          src={servicesbg}
          alt="Security control room"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="pointer-events-none absolute inset-0 bg-navy-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="container-px relative mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow justify-center text-sky"
          >
            <span className="h-px w-8 bg-sky" /> Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
          >
            End-To-End Security, Engineered Per Site
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-white/60"
          >
            Eight core service lines, each backed by certified technicians,
            professional-grade hardware, and a free site inspection before any
            quote.
          </motion.p>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      {services.map((s, i) => {
        const Icon = s.icon;
        const reversed = i % 2 === 1;
        return (
          <section
            id={s.slug}
            key={s.slug}
            className={`scroll-mt-28 section-pad ${i % 2 === 0 ? "bg-white" : "bg-bg"}`}
          >
            <div className="container-px mx-auto max-w-7xl">
              <div
                className={`grid grid-cols-1 items-center gap-14 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-[380px] w-full rounded-3xl object-cover shadow-card md:h-[440px]"
                  />
                  <span className="absolute -bottom-6 -left-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-500 to-navy-900 text-white shadow-glow">
                    <Icon className="h-8 w-8" strokeWidth={1.75} />
                  </span>
                </motion.div>

                <div>
                  <span className="eyebrow mb-3">
                    <span className="h-px w-8 bg-royal-500" /> {`0${i + 1}`}
                  </span>
                  <h2 className="mb-4 font-heading text-3xl font-bold text-navy-900 md:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mb-6 text-ink/60">{s.description}</p>

                  <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-heading text-xs font-bold uppercase tracking-widest text-royal-500">
                        Benefits
                      </h4>
                      <ul className="space-y-2.5">
                        {s.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-ink/70"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-royal-500" />{" "}
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-heading text-xs font-bold uppercase tracking-widest text-royal-500">
                        Features
                      </h4>
                      <ul className="space-y-2.5">
                        {s.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm text-ink/70"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-royal-500" />{" "}
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link to="/contact" className="btn-primary">
                    Request Quote for {s.title}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-royal-600 via-royal-500 to-sky py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="container-px relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Not Sure Which Service You Need?
          </h2>
          <p className="max-w-xl text-white/85">
            Book a free site inspection and our team will recommend the right
            combination of services for your property.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-heading font-bold text-royal-600 shadow-xl transition-transform hover:-translate-y-0.5"
          >
            Book Free Site Inspection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
