'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ClockIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/solid';

export default function PackageCard({ pkg, index = 0 }) {
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/package/${pkg.id}`} className="no-underline block">
        <div className="card group cursor-pointer h-full flex flex-col">
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Discount Badge */}
            {discount > 0 && (
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white"
                   style={{ background: 'var(--gradient-warm)' }}>
                {discount}% OFF
              </div>
            )}

            {/* Category */}
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium text-white bg-white/20 backdrop-blur-sm border border-white/20">
              {pkg.category}
            </div>

            {/* Duration */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-sm font-medium">
              <ClockIcon className="w-4 h-4" />
              {pkg.duration}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-2">
              <MapPinIcon className="w-3.5 h-3.5 text-[var(--primary)]" />
              {pkg.destination}
            </div>

            <h3 className="text-lg font-[Outfit] font-bold text-[var(--dark)] mb-2 group-hover:text-[var(--primary)] transition-colors leading-snug">
              {pkg.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
              {pkg.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(pkg.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                {pkg.rating} ({pkg.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div>
                <span className="text-xs text-gray-400 line-through">₹{pkg.originalPrice?.toLocaleString()}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-[Outfit] font-bold text-[var(--primary)]">₹{pkg.price.toLocaleString()}</span>
                  <span className="text-xs text-gray-400">/ person</span>
                </div>
              </div>
              <div className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all group-hover:shadow-lg"
                   style={{ background: 'var(--gradient-primary)' }}>
                View Details
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
