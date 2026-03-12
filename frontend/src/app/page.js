'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import PackageCard from '@/components/PackageCard';
import BlogCard from '@/components/BlogCard';
import { packages, destinations, blogs, testimonials, stats, whyChooseUs } from '@/utils/data';
import {
  CurrencyDollarIcon,
  SparklesIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  MapIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const iconMap = {
  currency: CurrencyDollarIcon,
  sparkles: SparklesIcon,
  support: ShieldCheckIcon,
  users: UserGroupIcon,
  calendar: CalendarDaysIcon,
  map: MapIcon,
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Popular Destinations */}
      <section className="section-padding" style={{ background: 'var(--light)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 text-[var(--primary)]"
                  style={{ background: 'rgba(15, 76, 129, 0.1)' }}>
              Explore Destinations
            </span>
            <h2 className="section-title">Popular <span className="gradient-text">Destinations</span></h2>
            <p className="section-subtitle mx-auto">Handpicked destinations loved by thousands of travelers worldwide</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
            {destinations.slice(0, 8).map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link href="/destinations" className="no-underline block">
                  <div className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                    i === 0 || i === 3 ? 'h-80' : 'h-64'
                  }`}>
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-white font-[Outfit] font-bold text-xl mb-2">{dest.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-sm">{dest.packages} Packages</span>
                        <span className="text-[var(--secondary)] text-base font-bold">From ₹{dest.startingPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/destinations" className="btn-secondary">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 text-[var(--secondary)]"
                  style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
              Best Deals
            </span>
            <h2 className="section-title">Featured <span className="gradient-text">Packages</span></h2>
            <p className="section-subtitle mx-auto">Curated tour packages at unbeatable prices</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {packages.slice(0, 8).map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/packages" className="btn-primary">
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'var(--dark)' }}>
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full"
               style={{ background: 'var(--gradient-primary)', filter: 'blur(80px)' }} />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full"
               style={{ background: 'var(--gradient-warm)', filter: 'blur(100px)' }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 text-[var(--accent)]"
                  style={{ background: 'rgba(6, 182, 212, 0.1)' }}>
              Why TourCrafts
            </span>
            <h2 className="section-title" style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}>Why Choose <span style={{ color: 'var(--secondary)', WebkitTextFillColor: 'var(--secondary)' }}>Us?</span></h2>
            <p className="section-subtitle mx-auto text-gray-400">We go above and beyond to make every trip extraordinary</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon] || SparklesIcon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 rounded-2xl border border-white/10 hover:border-[var(--primary)]/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                       style={{ background: 'var(--gradient-primary)' }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-[Outfit] font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-[Outfit] font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 text-[var(--primary)]"
                  style={{ background: 'rgba(15, 76, 129, 0.1)' }}>
              Testimonials
            </span>
            <h2 className="section-title">What Our <span className="gradient-text">Travelers Say</span></h2>
            <p className="section-subtitle mx-auto">Real stories from real travelers who explored with TourCrafts</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <StarIcon key={j} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                       style={{ background: 'var(--gradient-primary)' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--dark)]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding" style={{ background: 'var(--light)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 text-[var(--primary)]"
                    style={{ background: 'rgba(15, 76, 129, 0.1)' }}>
                Travel Blog
              </span>
              <h2 className="section-title">Latest <span className="gradient-text">Travel Stories</span></h2>
              <p className="section-subtitle">Tips, guides, and inspiration for your next adventure</p>
            </div>
            <Link href="/blog" className="btn-secondary mt-6 md:mt-0">
              View All Posts
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80)' }} />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(15, 76, 129, 0.9) 0%, rgba(6, 182, 212, 0.8) 100%)'
          }} />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-[Outfit] font-extrabold text-white mb-6 tracking-tight">
              Ready to Start Your
              <br />
              <span className="text-[var(--secondary)]">Dream Journey?</span>
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
              Let our travel experts craft the perfect itinerary for you. Get a free consultation and a personalized travel plan today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary !bg-white !text-[var(--primary)] hover:!shadow-xl" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
                Plan My Trip
              </Link>
              <a href="https://wa.me/918107331777" target="_blank" rel="noopener noreferrer" className="btn-whatsapp !py-3.5 !px-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat With Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
