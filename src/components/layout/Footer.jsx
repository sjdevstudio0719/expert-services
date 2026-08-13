import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from 'lucide-react';

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const services = [
  'CCTV Installation',
  'Smart Home Security',
  'Commercial Surveillance',
  'Biometric Attendance',
  'Video Door Phone',
  'Networking & Cabling',
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-royal-500/20 blur-[120px]" />

      <div className="container-px relative mx-auto max-w-7xl pt-20">
        <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="mb-5 flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500 to-sky shadow-glow">
                <ShieldCheck className="h-5 w-5 text-white" />
              </span>
              <span className="font-heading text-lg font-bold leading-none">
                EXPERT
                <span className="block text-[0.6rem] font-semibold tracking-[0.3em] text-sky">SERVICES</span>
              </span>
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/55">
              Authorised CCTV and security integrator delivering site-inspected, professionally installed
              surveillance and access-control systems for homes, offices, and industrial sites.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-royal-500 hover:bg-royal-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="mb-5 font-heading text-sm font-semibold uppercase tracking-widest text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/55 transition-colors hover:text-sky">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 font-heading text-sm font-semibold uppercase tracking-widest text-white/90">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="text-sm text-white/55">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 font-heading text-sm font-semibold uppercase tracking-widest text-white/90">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm text-white/55">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-sky" />
                Nera Sitla More, Sarat Palli, South Dhadka, Dhadka, Asansol, West Bengal 713302
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-sky" />
                +91  00000 00000
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-sky" />
                info@expertservices.in
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 shrink-0 text-sky" />
                Mon – Sat: 9:00 AM – 7:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="mb-8 flex flex-col items-center justify-between gap-6 rounded-2xl glass px-6 py-8 md:flex-row md:px-10">
            <div>
              <h5 className="font-heading text-xl font-bold">Stay updated on security tips</h5>
              <p className="text-sm text-white/55">Subscribe for maintenance reminders and product launches.</p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-sm items-center gap-2 rounded-xl border border-white/15 bg-white/5 p-1.5 md:w-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full flex-1 bg-transparent px-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-royal-500 to-sky text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 md:flex-row">
            <p>© {new Date().getFullYear()} Expert Services. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white/70">Privacy Policy</a>
              <a href="#" className="hover:text-white/70">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
