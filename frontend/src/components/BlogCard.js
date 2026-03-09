'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function BlogCard({ blog, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${blog.id}`} className="no-underline block">
        <div className="card group cursor-pointer h-full flex flex-col">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Category */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                 style={{ background: 'var(--gradient-primary)' }}>
              {blog.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
              <div className="flex items-center gap-1.5">
                <CalendarDaysIcon className="w-3.5 h-3.5" />
                {blog.date}
              </div>
              <div className="flex items-center gap-1.5">
                <ClockIcon className="w-3.5 h-3.5" />
                {blog.readTime}
              </div>
            </div>

            <h3 className="text-lg font-[Outfit] font-bold text-[var(--dark)] mb-3 group-hover:text-[var(--primary)] transition-colors leading-snug line-clamp-2">
              {blog.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
              {blog.excerpt}
            </p>

            <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                   style={{ background: 'var(--gradient-primary)' }}>
                TC
              </div>
              <span className="text-xs text-gray-500 font-medium">{blog.author}</span>
              <span className="ml-auto text-xs font-semibold text-[var(--primary)] group-hover:underline">
                Read More →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
