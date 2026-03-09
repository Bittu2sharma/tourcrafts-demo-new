'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { destinations } from '@/utils/data';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';

const regions = ['All', 'Beach', 'Islands', 'Heritage', 'Nature', 'Mountains', 'Adventure', 'International'];

export default function DestinationsPage() {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('All');

  const filtered = destinations.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = region === 'All' || dest.region === region;
    return matchesSearch && matchesRegion;
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
              Explore <span className="text-[var(--secondary)]">Destinations</span>
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              From pristine beaches to majestic mountains — find your perfect getaway
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
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
              <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent text-sm focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {regions.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRegion(r)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      region === r ? 'text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    style={region === r ? { background: 'var(--gradient-primary)' } : {}}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link href="/packages" className="no-underline block">
                  <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-md">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Region tag */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-white/20 backdrop-blur-sm border border-white/20">
                      {dest.region}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPinIcon className="w-4 h-4 text-[var(--secondary)]" />
                        <h3 className="text-white font-[Outfit] font-bold text-xl">{dest.name}</h3>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-sm">{dest.packages} Packages Available</span>
                        <span className="text-[var(--secondary)] text-sm font-bold">From ₹{dest.startingPrice.toLocaleString()}</span>
                      </div>
                      <div className="mt-3 h-0 group-hover:h-10 transition-all duration-300 overflow-hidden">
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white"
                              style={{ background: 'var(--gradient-primary)' }}>
                          Explore Packages →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <MapPinIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-[Outfit] font-bold text-gray-400 mb-2">No destinations found</h3>
              <p className="text-gray-400 text-sm">Try a different search or region filter</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
