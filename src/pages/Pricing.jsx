import SEO from "../components/SEO";
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import SectionHeading from '../components/ui/SectionHeading';
import PricingCard from '../components/ui/PricingCard';
import pricingPlans, { comparisonRows } from '../data/pricing';
import FAQ from '../components/ui/FAQ';
import { faqs } from '../data/content';
import pricingbg from "../assets/pricingbg.jpg"

const cols = ['starter', 'standard', 'business', 'enterprise'];

export default function Pricing() {
  return (
    <>
      <SEO
  title="Pricing | Expert Services — CCTV Installation Packages"
  description="Compare Starter, Standard, Business and Enterprise CCTV installation packages with camera count, storage, warranty and support details."
  keywords="CCTV Pricing, CCTV Packages, Security Camera Installation Cost, Home CCTV Package, Business Security Solutions, CCTV AMC"
/>

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 pb-20 pt-40">
         <img
                  src={pricingbg}
                  alt="Security control room"
                  className="absolute inset-0 h-full w-full object-cover opacity-40"
                />
        <div className="pointer-events-none absolute inset-0 bg-navy-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="container-px relative mx-auto max-w-4xl text-center">
          <span className="eyebrow justify-center text-sky">
            <span className="h-px w-8 bg-sky" /> Pricing Packages
          </span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Transparent Packages, Tailored On-Site
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Every package below is a starting point — your final quote is confirmed after a free site
            inspection, never before.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="section-pad bg-bg">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((p, i) => (
              <PricingCard key={p.name} plan={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section-pad bg-white">
        <div className="container-px mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Compare Plans"
            title="See Exactly What's Included"
            className="mx-auto mb-14"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto rounded-2xl border border-navy-900/8 shadow-card"
          >
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-navy-950 text-white">
                  <th className="px-6 py-5 text-left font-heading font-semibold">Feature</th>
                  {pricingPlans.map((p) => (
                    <th key={p.name} className="px-6 py-5 text-center font-heading font-semibold">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-bg' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-navy-900">{row.label}</td>
                    {cols.map((c) => (
                      <td key={c} className="px-6 py-4 text-center">
                        {row[c] ? (
                          <Check className="mx-auto h-4 w-4 text-royal-500" />
                        ) : (
                          <X className="mx-auto h-4 w-4 text-ink/20" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-bg">
        <div className="container-px mx-auto max-w-3xl">
          <SectionHeading align="center" eyebrow="FAQ" title="Common Questions About Pricing" className="mx-auto mb-12" />
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-royal-600 via-royal-500 to-sky py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="container-px relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Get Your Exact Quote</h2>
          <p className="max-w-xl text-white/85">
            Share a few details about your property and we'll confirm accurate pricing after inspection.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-heading font-bold text-royal-600 shadow-xl transition-transform hover:-translate-y-0.5"
          >
            Request Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
