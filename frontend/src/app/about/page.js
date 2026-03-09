'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { stats } from '@/utils/data';
import { GlobeAltIcon, HeartIcon, ShieldCheckIcon, SparklesIcon, UsersIcon, TrophyIcon } from '@heroicons/react/24/outline';

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''));

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const increment = numericTarget / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
          setCount(numericTarget);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 25);
      return () => clearInterval(timer);
    }
  }, [isInView, numericTarget]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const team = [
  { name: 'Arjun Mehta', role: 'Founder & CEO', initials: 'AM', desc: 'Travel enthusiast with 15+ years in the tourism industry.' },
  { name: 'Sneha Kapoor', role: 'Head of Operations', initials: 'SK', desc: 'Expert in crafting seamless travel experiences.' },
  { name: 'Ravi Shankar', role: 'Lead Travel Consultant', initials: 'RS', desc: 'Specializes in international luxury travel.' },
  { name: 'Pooja Desai', role: 'Marketing Head', initials: 'PD', desc: 'Digital marketer with a passion for storytelling.' },
];

const values = [
  { icon: HeartIcon, title: 'Customer First', desc: 'Every decision we make puts our travelers at the center.' },
  { icon: SparklesIcon, title: 'Quality Experience', desc: 'We handpick every hotel, guide, and activity for quality.' },
  { icon: ShieldCheckIcon, title: 'Trust & Safety', desc: 'Your safety and trust are our top priorities.' },
  { icon: GlobeAltIcon, title: 'Sustainable Tourism', desc: 'We promote responsible and eco-friendly travel.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: 'var(--gradient-ocean)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20" style={{ filter: 'blur(80px)' }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-[Outfit] font-extrabold text-white mb-4">
              About <span className="text-[var(--secondary)]">TourCrafts</span>
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Crafting unforgettable travel experiences since 2017
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 text-[var(--primary)]"
                    style={{ background: 'rgba(15, 76, 129, 0.1)' }}>
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-[Outfit] font-extrabold text-[var(--dark)] mb-6">
                Turning Travel Dreams Into <span className="gradient-text">Reality</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2017, TourCrafts began with a simple vision — to make premium travel accessible to everyone. What started as a small team of passionate travelers has grown into one of India&apos;s most trusted travel agencies.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe that every journey should be unique. That&apos;s why we don&apos;t believe in one-size-fits-all packages. Our travel experts personally curate each itinerary, ensuring that every trip is tailored to your preferences, budget, and travel style.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From the pristine beaches of Andaman to the royal palaces of Rajasthan, from the backwaters of Kerala to exotic Bali — we&apos;ve helped over 15,000 travelers discover their perfect journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80" alt="Travel" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-64 rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80" alt="Beach" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-64 rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80" alt="Kerala" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-48 rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=80" alt="Rajasthan" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-white shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                       style={{ background: 'var(--gradient-primary)' }}>
                    <TrophyIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-[Outfit] font-bold text-[var(--dark)]">8+</div>
                    <div className="text-xs text-gray-500">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: 'var(--gradient-primary)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15000', suffix: '+', label: 'Happy Travelers' },
              { value: '50', suffix: '+', label: 'Destinations' },
              { value: '200', suffix: '+', label: 'Tour Packages' },
              { value: '8', suffix: '+', label: 'Years Experience' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-[Outfit] font-extrabold text-white mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: 'var(--light)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 text-[var(--primary)]"
                  style={{ background: 'rgba(15, 76, 129, 0.1)' }}>
              Our Values
            </span>
            <h2 className="section-title">What We <span className="gradient-text">Stand For</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                     style={{ background: 'var(--gradient-primary)' }}>
                  <val.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-[Outfit] font-bold text-[var(--dark)] mb-2">{val.title}</h3>
                <p className="text-gray-500 text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 text-[var(--secondary)]"
                  style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
              Meet Our Team
            </span>
            <h2 className="section-title">The People Behind <span className="gradient-text">TourCrafts</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all group"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-[Outfit] font-bold text-white group-hover:scale-110 transition-transform"
                     style={{ background: 'var(--gradient-primary)' }}>
                  {member.initials}
                </div>
                <h3 className="text-lg font-[Outfit] font-bold text-[var(--dark)]">{member.name}</h3>
                <p className="text-[var(--primary)] text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
