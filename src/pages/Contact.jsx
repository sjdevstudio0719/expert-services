import SEO from "../components/SEO";
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

import SectionHeading from '../components/ui/SectionHeading';
import FAQ from '../components/ui/FAQ';
import { faqs } from '../data/content';

const contactInfo = [
  { icon: MapPin, label: 'Business Address', value: 'Nera Sitla More, Sarat Palli, South Dhadka, Dhadka, Asansol, West Bengal 713302' },
  { icon: Phone, label: 'Phone', value: '+91  89001 11190' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+91  89001 11190' },
  { icon: Mail, label: 'Email', value: 'info@expertservices.in' },
  { icon: Clock, label: 'Business Hours', value: 'Mon – Sat: 9:00 AM – 7:00 PM' },
];

const serviceOptions = [
  'Home Security',
  'Office Security',
  'Commercial Security',
  'Industrial Security',
  'Networking',
  'Biometric Attendance',
  'Video Door Phone',
  'AMC',
];

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <SEO
  title="Contact Us | Expert Services — Book a Free Site Inspection"
  description="Get in touch with Expert Services for a free CCTV and security site inspection. Call, WhatsApp, or fill out our contact form."
/>

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 pb-24 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-navy-radial" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="container-px relative mx-auto max-w-4xl text-center">
          <span className="eyebrow justify-center text-sky">
            <span className="h-px w-8 bg-sky" /> Get In Touch
          </span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Let's Secure Your Property
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Fill out the form below or reach us directly — we typically respond within a few hours.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="relative section-pad bg-bg">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl bg-navy-950 p-8 text-white">
              <h3 className="mb-6 font-heading text-xl font-bold">Contact Information</h3>
              <ul className="space-y-6">
                {contactInfo.map((c) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/40">{c.label}</p>
                        <p className="text-sm font-medium text-white/85">{c.value}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8 overflow-hidden rounded-2xl">
  <iframe
  title="Business location map"
  src="https://maps.google.com/maps?q=Near%20Sitla%20More%2C%20Sarat%20Palli%2C%20South%20Dhadka%2C%20Asansol%2C%20West%20Bengal%20713302&z=17&output=embed"
  className="h-48 w-full grayscale invert-[0.9]"
  loading="lazy"
/>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-navy-900/8 bg-white p-8 shadow-card md:p-10">
              <h3 className="mb-1 font-heading text-xl font-bold text-navy-900">Book a Free Site Inspection</h3>
              <p className="mb-8 text-sm text-ink/50">Tell us a little about your property and requirements.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-royal-50 py-14 text-center"
                >
                  <CheckCircle2 className="h-10 w-10 text-royal-500" />
                  <p className="font-heading text-lg font-bold text-navy-900">Request Received</p>
                  <p className="max-w-sm text-sm text-ink/55">
                    Thanks for reaching out — our team will contact you shortly to schedule your free inspection.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy-900/70">Full Name</label>
                    <input
                      {...register('name', { required: true })}
                      className="w-full rounded-xl border border-navy-900/10 bg-bg px-4 py-3 text-sm focus:border-royal-500 focus:outline-none"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">Name is required</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy-900/70">Phone Number</label>
                    <input
                      {...register('phone', { required: true })}
                      className="w-full rounded-xl border border-navy-900/10 bg-bg px-4 py-3 text-sm focus:border-royal-500 focus:outline-none"
                      placeholder="+91 00000 00000"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">Phone is required</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-navy-900/70">Email Address</label>
                    <input
                      type="email"
                      {...register('email', { required: true })}
                      className="w-full rounded-xl border border-navy-900/10 bg-bg px-4 py-3 text-sm focus:border-royal-500 focus:outline-none"
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">Email is required</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-navy-900/70">Service Needed</label>
                    <select
                      {...register('service')}
                      className="w-full rounded-xl border border-navy-900/10 bg-bg px-4 py-3 text-sm focus:border-royal-500 focus:outline-none"
                    >
                      {serviceOptions.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-navy-900/70">Property Address</label>
                    <input
                      {...register('address')}
                      className="w-full rounded-xl border border-navy-900/10 bg-bg px-4 py-3 text-sm focus:border-royal-500 focus:outline-none"
                      placeholder="Where should we inspect?"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-navy-900/70">Message</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="w-full rounded-xl border border-navy-900/10 bg-bg px-4 py-3 text-sm focus:border-royal-500 focus:outline-none"
                      placeholder="Tell us more about your requirements"
                    />
                  </div>
                  <button type="submit" className="btn-primary sm:col-span-2">
                    Send Request <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-px mx-auto max-w-3xl">
          <SectionHeading align="center" eyebrow="FAQ" title="Frequently Asked Questions" className="mx-auto mb-12" />
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}
