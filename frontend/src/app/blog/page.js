'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';
import { blogs } from '@/utils/data';
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';

const categories = ['All', 'Travel Guide', 'Destinations', 'Budget Travel', 'International', 'Adventure'];

export default function BlogPage() {
  const [category, setCategory] = useState('All');

  const featured = blogs.find(b => b.featured);
  const filtered = blogs.filter(b => {
    return category === 'All' || b.category === category;
  });

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
              Travel <span className="text-[var(--secondary)]">Blog</span>
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Tips, guides, and stories to inspire your next adventure
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--light)' }}>
        <div className="container-custom">
          {/* Featured Post */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold text-white mb-4"
                       style={{ background: 'var(--gradient-primary)' }}>
                    Featured
                  </div>
                  <h2 className="text-2xl md:text-4xl font-[Outfit] font-bold text-white mb-3">{featured.title}</h2>
                  <p className="text-white/80 text-sm md:text-base max-w-2xl mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-white/60 text-sm">
                    <div className="flex items-center gap-1.5">
                      <CalendarDaysIcon className="w-4 h-4" />
                      {featured.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ClockIcon className="w-4 h-4" />
                      {featured.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Category Filters */}
          <div className="flex items-center gap-2 flex-wrap mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  category === cat ? 'text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
                style={category === cat ? { background: 'var(--gradient-primary)' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
