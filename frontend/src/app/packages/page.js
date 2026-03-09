'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PackageCard from '@/components/PackageCard';
import { packages } from '@/utils/data';
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const categories = ['All', 'Beach', 'Heritage', 'Nature', 'Adventure', 'International'];
const durations = ['All', '3-4 Days', '5-6 Days', '7+ Days'];
const priceRanges = ['All', 'Under ₹20,000', '₹20,000 - ₹40,000', '₹40,000+'];

export default function PackagesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch = pkg.title.toLowerCase().includes(search.toLowerCase()) ||
                          pkg.destination.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || pkg.category === category;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviews - a.reviews; // popular
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
              Tour <span className="text-[var(--secondary)]">Packages</span>
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Explore our handcrafted tour packages designed for every kind of traveler
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="section-padding" style={{ background: 'var(--light)' }}>
        <div className="container-custom">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-5 shadow-sm mb-8 border border-gray-100"
          >
            <div className="flex flex-col lg:flex-row items-stretch gap-4">
              {/* Search */}
              <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search packages or destinations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent text-sm focus:outline-none"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      category === cat
                        ? 'text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    style={category === cat ? { background: 'var(--gradient-primary)' } : {}}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[var(--primary)]"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </motion.div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-500 text-sm">
              Showing <span className="font-semibold text-[var(--dark)]">{filteredPackages.length}</span> packages
            </p>
          </div>

          {/* Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-20">
              <AdjustmentsHorizontalIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-[Outfit] font-bold text-gray-400 mb-2">No packages found</h3>
              <p className="text-gray-400 text-sm">Try changing your filters or search query</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
