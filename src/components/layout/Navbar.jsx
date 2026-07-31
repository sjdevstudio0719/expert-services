import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import logo from "../../assets/logo1.png";
import logoDark from "../../assets/logo-dark.png"

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  // { to: '/products', label: 'Products' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 24));
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`container-px mx-auto flex max-w-7xl items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled ? 'glass-light shadow-card px-5 py-3' : 'px-2 py-2'
          }`}
        >
         <Link to="/" className="flex items-center">
  <img
    src={scrolled ? logoDark : logo}
    alt="Expert Services Logo"
    className="h-14 w-auto transition-all duration-300"
  />
</Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
  `relative rounded-lg px-4 py-2 font-heading text-sm font-medium transition-all duration-300 ${
    isActive
      ? "text-royal-500"
      : scrolled
      ? "text-navy-900 hover:text-royal-500"
      : "text-white hover:text-royal-300"
  }`
}
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-royal-500"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
  href="tel:+918900111190"
  className={`flex items-center gap-2 font-heading text-sm font-semibold transition-colors duration-300 ${
    scrolled ? "text-navy-900" : "text-white"
  }`}
>
  <span
    className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
      scrolled
        ? "bg-royal-50 text-royal-500"
        : "bg-white/10 text-white backdrop-blur-md"
    }`}
  >
    <Phone className="h-4 w-4" />
  </span>

  +91 89001 11190
</a>
            <Link to="/contact" className="btn-primary !px-5 !py-2.5 text-sm">
              Free Inspection
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex h-full flex-col justify-center gap-2 px-10"
            >
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-white/10 py-4 font-heading text-2xl font-semibold ${
                        isActive ? 'text-royal-400' : 'text-white'
                      }`
                    }
                  >
                    {l.label}
                    <ChevronRight className="h-5 w-5 opacity-50" />
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link to="/contact" className="btn-primary w-full">
                  Book Free Site Inspection
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
