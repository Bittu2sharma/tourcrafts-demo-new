'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Packages', href: '/packages' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const popularDestinations = [
  'Andaman & Nicobar',
  'Goa',
  'Rajasthan',
  'Kerala',
  'Bali',
  'Dubai',
  'Ladakh',
  'Thailand',
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--dark)' }}>
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L48 55C96 50 192 40 288 33.3C384 26.7 480 23.3 576 25C672 26.7 768 33.3 864 36.7C960 40 1056 40 1152 36.7C1248 33.3 1344 26.7 1392 23.3L1440 20V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V60Z" fill="var(--dark)"/>
        </svg>
      </div>

      <div className="container-custom pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                   style={{ background: 'var(--gradient-primary)' }}>
                TC
              </div>
              <span className="text-xl font-bold font-[Outfit] text-white tracking-tight">
                Tour<span className="text-[var(--secondary)]">Crafts</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Crafting unforgettable travel experiences since 2017. Your trusted partner for domestic and international tours, custom itineraries, and hassle-free vacations.
            </p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[var(--primary)] text-gray-400 hover:text-white transition-all duration-300"
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-[Outfit] font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[var(--secondary)] text-sm transition-colors duration-300 no-underline flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-[Outfit] font-semibold text-lg mb-5">Popular Destinations</h4>
            <ul className="space-y-3">
              {popularDestinations.map((dest) => (
                <li key={dest}>
                  <Link href="/destinations" className="text-gray-400 hover:text-[var(--secondary)] text-sm transition-colors duration-300 no-underline flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-[Outfit] font-semibold text-lg mb-5">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-[var(--secondary)] mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">123 Travel Street, Business Hub, Mumbai, Maharashtra 400001</p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-[var(--secondary)] flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white text-sm transition-colors no-underline">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-[var(--secondary)] flex-shrink-0" />
                <a href="mailto:hello@tourcrafts.com" className="text-gray-400 hover:text-white text-sm transition-colors no-underline">
                  hello@tourcrafts.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-white text-sm font-medium mb-3">Subscribe to Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-[var(--primary)]"
                />
                <button className="px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90"
                        style={{ background: 'var(--gradient-primary)' }}>
                  Go
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 TourCrafts. All rights reserved. Crafted with ❤️ for travelers.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-500 hover:text-gray-300 text-xs no-underline transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-gray-300 text-xs no-underline transition-colors">Terms of Service</Link>
            <Link href="#" className="text-gray-500 hover:text-gray-300 text-xs no-underline transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
