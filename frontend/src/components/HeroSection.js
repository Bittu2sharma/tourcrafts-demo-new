'use client';

import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, MapPinIcon, CalendarDaysIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(15, 76, 129, 0.85) 0%, rgba(10, 54, 96, 0.7) 40%, rgba(6, 182, 212, 0.5) 100%)'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
            India&apos;s Most Trusted Travel Partner
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[Outfit] font-extrabold text-white mb-6 tracking-tight leading-tight">
            Discover Your
            <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #fbbf24, #f59e0b, #ef4444)' }}>
              Perfect Journey
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Handcrafted tour packages, expert local guides, and unforgettable experiences.
            Let us turn your travel dreams into reality.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-3 md:p-4 shadow-2xl flex flex-col md:flex-row items-stretch gap-3">
              <div className="flex-1 flex items-center gap-3 px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <MapPinIcon className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="flex-1 bg-transparent text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none"
                />
              </div>

              <div className="flex-1 flex items-center gap-3 px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <CalendarDaysIcon className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="When?"
                  className="flex-1 bg-transparent text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none"
                />
              </div>

              <div className="flex-1 flex items-center gap-3 px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <UserGroupIcon className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Travelers"
                  className="flex-1 bg-transparent text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none"
                />
              </div>

              <button className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold font-[Outfit] transition-all hover:opacity-90 hover:shadow-lg"
                      style={{ background: 'var(--gradient-primary)' }}>
                <MagnifyingGlassIcon className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-10"
          >
            {[
              { value: '15K+', label: 'Happy Travelers' },
              { value: '50+', label: 'Destinations' },
              { value: '200+', label: 'Tour Packages' },
              { value: '4.9★', label: 'Rating' },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-2xl md:text-3xl font-[Outfit] font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 73.3C120 66.7 240 53.3 360 48C480 42.7 600 45.3 720 50.7C840 56 960 64 1080 64C1200 64 1320 56 1380 52L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
