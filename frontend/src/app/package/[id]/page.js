'use client';

import { useState, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { packages } from '@/utils/data';
import InquiryForm from '@/components/InquiryForm';
import PackageCard from '@/components/PackageCard';
import {
  MapPinIcon, ClockIcon, StarIcon, CheckCircleIcon, XCircleIcon,
  ChevronDownIcon, CalendarDaysIcon, UserGroupIcon, ArrowDownTrayIcon,
  HeartIcon, ShareIcon
} from '@heroicons/react/24/solid';
import {
  ShieldCheckIcon, CurrencyDollarIcon, PhoneIcon
} from '@heroicons/react/24/outline';

export default function PackageDetailPage({ params }) {
  const unwrappedParams = use(params);
  const id = parseInt(unwrappedParams.id);
  const pkg = packages.find(p => p.id === id) || packages[0];

  const [selectedTier, setSelectedTier] = useState('deluxe');
  const [travelers, setTravelers] = useState(2);
  const [selectedDate, setSelectedDate] = useState('');
  const [openDay, setOpenDay] = useState(0);
  const [showPriceBreak, setShowPriceBreak] = useState(false);

  const tierData = pkg.tiers[selectedTier];
  const basePrice = tierData.price;
  const totalBase = basePrice * travelers;
  const taxes = Math.round(totalBase * 0.05);
  const discount = travelers >= 4 ? Math.round(totalBase * 0.1) : 0;
  const finalPrice = totalBase + taxes - discount;

  const similarPackages = packages.filter(p => p.id !== pkg.id).slice(0, 4);

  return (
    <>
      {/* Hero Gallery */}
      <section className="relative pt-20">
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container-custom">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold text-white" style={{ background: 'var(--gradient-primary)' }}>
                    {pkg.category}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <StarIcon className="w-4 h-4" />
                    <span className="text-white text-sm font-medium">{pkg.rating}</span>
                    <span className="text-white/60 text-xs">({pkg.reviews} reviews)</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-5xl font-[Outfit] font-extrabold text-white mb-3">{pkg.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1.5"><MapPinIcon className="w-4 h-4" />{pkg.destination}</span>
                  <span className="flex items-center gap-1.5"><ClockIcon className="w-4 h-4" />{pkg.duration}</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="absolute top-28 right-6 flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all">
              <HeartIcon className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all">
              <ShareIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ background: 'var(--light)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-xl font-[Outfit] font-bold text-[var(--dark)] mb-4">About This Package</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{pkg.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {pkg.highlights.map((h) => (
                    <span key={h} className="px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--light)] text-[var(--primary)] border border-[var(--primary)]/10">
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Day-wise Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-xl font-[Outfit] font-bold text-[var(--dark)] mb-6">Day-wise Itinerary</h2>
                <div className="space-y-3">
                  {pkg.itinerary.map((day, i) => (
                    <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenDay(openDay === i ? -1 : i)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                               style={{ background: 'var(--gradient-primary)' }}>
                            {day.day}
                          </div>
                          <span className="text-sm font-semibold text-[var(--dark)] text-left">{day.title}</span>
                        </div>
                        <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openDay === i ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDay === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 pl-17 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 ml-[52px]">
                              {day.description}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Inclusions / Exclusions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-[Outfit] font-bold text-[var(--dark)] mb-4 flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    Inclusions
                  </h3>
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-[Outfit] font-bold text-[var(--dark)] mb-4 flex items-center gap-2">
                    <XCircleIcon className="w-5 h-5 text-red-400" />
                    Exclusions
                  </h3>
                  <ul className="space-y-2.5">
                    {pkg.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <XCircleIcon className="w-4 h-4 text-red-300 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar — Pricing Engine */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24"
              >
                {/* Price Header */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-[Outfit] font-extrabold text-[var(--primary)]">₹{basePrice.toLocaleString()}</span>
                    <span className="text-sm text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                  </div>
                  <span className="text-xs text-gray-500">per person</span>
                </div>

                {/* Tier Selection */}
                <div className="mb-5">
                  <label className="text-sm font-semibold text-[var(--dark)] mb-2 block">Choose Your Experience</label>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(pkg.tiers).map(([key, tier]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedTier(key)}
                        className={`p-3 rounded-xl text-center transition-all border-2 ${
                          selectedTier === key
                            ? 'border-[var(--primary)] bg-[var(--primary)]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`text-xs font-bold mb-1 capitalize ${selectedTier === key ? 'text-[var(--primary)]' : 'text-gray-600'}`}>
                          {key}
                        </div>
                        <div className={`text-sm font-[Outfit] font-bold ${selectedTier === key ? 'text-[var(--primary)]' : 'text-gray-700'}`}>
                          ₹{tier.price.toLocaleString()}
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 p-3 rounded-lg bg-gray-50 text-xs text-gray-500">
                    <div className="font-medium text-gray-700">{tierData.hotel}</div>
                    <div>{tierData.meals}</div>
                  </div>
                </div>

                {/* Date Selection */}
                <div className="mb-5">
                  <label className="text-sm font-semibold text-[var(--dark)] mb-2 block">
                    <CalendarDaysIcon className="w-4 h-4 inline mr-1.5" />
                    Travel Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10"
                  />
                </div>

                {/* Travelers */}
                <div className="mb-5">
                  <label className="text-sm font-semibold text-[var(--dark)] mb-2 block">
                    <UserGroupIcon className="w-4 h-4 inline mr-1.5" />
                    Number of Travelers
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-lg font-bold hover:bg-gray-200 transition-colors"
                    >
                      −
                    </button>
                    <span className="text-xl font-[Outfit] font-bold text-[var(--dark)] w-10 text-center">{travelers}</span>
                    <button
                      onClick={() => setTravelers(Math.min(20, travelers + 1))}
                      className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-lg font-bold hover:bg-gray-200 transition-colors"
                    >
                      +
                    </button>
                    <span className="text-xs text-gray-400 ml-2">
                      {travelers >= 4 && '🎉 Group discount applied!'}
                    </span>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="mb-5 border-t border-gray-100 pt-5">
                  <button
                    onClick={() => setShowPriceBreak(!showPriceBreak)}
                    className="flex items-center justify-between w-full text-sm font-semibold text-[var(--dark)] mb-3"
                  >
                    Price Breakdown
                    <ChevronDownIcon className={`w-4 h-4 transition-transform ${showPriceBreak ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {showPriceBreak && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden space-y-2 text-sm"
                      >
                        <div className="flex justify-between text-gray-500">
                          <span>Base Price ({travelers} × ₹{basePrice.toLocaleString()})</span>
                          <span>₹{totalBase.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-gray-500">
                          <span>GST (5%)</span>
                          <span>₹{taxes.toLocaleString()}</span>
                        </div>
                        {discount > 0 && (
                          <div className="flex justify-between text-green-600 font-medium">
                            <span>Group Discount (10%)</span>
                            <span>-₹{discount.toLocaleString()}</span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="flex justify-between items-center font-bold mt-3 pt-3 border-t border-gray-100">
                    <span className="text-[var(--dark)]">Total</span>
                    <span className="text-xl font-[Outfit] text-[var(--primary)]">₹{finalPrice.toLocaleString()}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button className="w-full py-3.5 rounded-xl text-white font-semibold font-[Outfit] transition-all hover:shadow-lg hover:opacity-90"
                          style={{ background: 'var(--gradient-primary)' }}>
                    Book Now
                  </button>
                  <button className="btn-whatsapp w-full justify-center !py-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Inquire on WhatsApp
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200 transition-colors">
                    <ArrowDownTrayIcon className="w-4 h-4" />
                    Download Itinerary PDF
                  </button>
                </div>

                {/* Trust badges */}
                <div className="mt-5 pt-5 border-t border-gray-100 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                    100% Secure
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <CurrencyDollarIcon className="w-4 h-4 text-green-500" />
                    Best Price
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <PhoneIcon className="w-4 h-4 text-green-500" />
                    24/7 Support
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    Free Cancellation
                  </div>
                </div>
              </motion.div>

              {/* Inquiry Form */}
              <InquiryForm packageTitle={pkg.title} compact={true} />
            </div>
          </div>

          {/* Similar Packages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-[Outfit] font-bold text-[var(--dark)] mb-8">
              Similar <span className="gradient-text">Packages</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarPackages.map((p, i) => (
                <PackageCard key={p.id} pkg={p} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
