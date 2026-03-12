'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

/* ─── Service Tabs ─── */
const services = [
  { id: 'flights', label: 'Flights', icon: '✈️' },
  { id: 'hotels', label: 'Hotels', icon: '🏨' },
  { id: 'homestays', label: 'Villas & Homestays', icon: '🏡' },
  { id: 'holidays', label: 'Holiday Packages', icon: '🏖️', badge: 'new' },
  { id: 'trains', label: 'Trains', icon: '🚆' },
  { id: 'buses', label: 'Buses', icon: '🚌' },
  { id: 'cabs', label: 'Cabs', icon: '🚕' },
  { id: 'visa', label: 'Visa', icon: '📄' },
  { id: 'cruise', label: 'Cruise', icon: '🚢', badge: 'new' },
  { id: 'insurance', label: 'Travel Insurance', icon: '🛡️' },
];

/* ─── Special Fare Tags ─── */
const specialFares = [
  { label: 'Regular', active: true },
  { label: 'Armed Forces', icon: '🎖️' },
  { label: 'Student', icon: '🎓' },
  { label: 'Senior Citizen', icon: '👴' },
  { label: 'Doctors & Nurses', icon: '🩺' },
];

/* ─── Shared Field Component ─── */
function SearchField({ label, value, placeholder, sub, type = 'text', style = {} }) {
  const [val, setVal] = useState(value || '');
  return (
    <div style={{ padding: '14px 22px', ...style }}>
      <label style={{ display: 'block', fontSize: '11px', color: '#9ca3af', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
        {label}
      </label>
      <input
        type={type}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder={placeholder}
        style={{ width: '100%', fontSize: '20px', fontWeight: '700', fontFamily: 'Outfit, sans-serif', color: '#1e293b', border: 'none', outline: 'none', background: 'transparent', padding: 0 }}
      />
      {sub && <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>{sub}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════
   SERVICE-SPECIFIC SEARCH FORMS
   ═══════════════════════════════════════════ */

function FlightSearch() {
  const [tripType, setTripType] = useState('oneWay');
  const [activeFare, setActiveFare] = useState('Regular');
  return (
    <div>
      {/* Trip Type Radio */}
      <div style={{ display: 'flex', gap: '24px', padding: '16px 24px 0', flexWrap: 'wrap' }}>
        {[
          { id: 'oneWay', label: 'One Way' },
          { id: 'roundTrip', label: 'Round Trip' },
          { id: 'multiCity', label: 'Multi City' },
        ].map((t) => (
          <label key={t.id} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: tripType === t.id ? '600' : '400', color: tripType === t.id ? '#0f4c81' : '#6b7280' }}>
            <span style={{
              width: '18px', height: '18px', borderRadius: '50%', border: tripType === t.id ? '2px solid #0f4c81' : '2px solid #d1d5db',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {tripType === t.id && <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0f4c81' }} />}
            </span>
            {t.label}
          </label>
        ))}
      </div>

      {/* Fields */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', padding: '12px 0 0' }}>
        <SearchField label="From" placeholder="New Delhi" sub="DEL, India" style={{ borderRight: '1px solid #e5e7eb' }} />
        <SearchField label="To" placeholder="Mumbai" sub="BOM, India" style={{ borderRight: '1px solid #e5e7eb' }} />
        <SearchField label="Departure" placeholder="" sub="Select date" type="date" style={{ borderRight: '1px solid #e5e7eb' }} />
        <SearchField label="Return" placeholder="" sub={tripType === 'oneWay' ? 'Tap to add' : 'Select date'} type={tripType === 'roundTrip' ? 'date' : 'text'} style={{ borderRight: '1px solid #e5e7eb' }} />
        <SearchField label="Travellers & Class" placeholder="1" sub="Adult, Economy" />
      </div>

      {/* Special Fares */}
      <div style={{ padding: '0 24px 18px' }}>
        <p style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '600', marginBottom: '8px' }}>Select a special fare</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {specialFares.map((f) => (
            <button key={f.label} onClick={() => setActiveFare(f.label)}
              style={{
                padding: '7px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: '600', cursor: 'pointer',
                border: activeFare === f.label ? '2px solid #0f4c81' : '1px solid #e5e7eb',
                background: activeFare === f.label ? 'rgba(15,76,129,0.06)' : 'white',
                color: activeFare === f.label ? '#0f4c81' : '#6b7280',
                transition: 'all 0.15s',
              }}>
              {f.icon && <span style={{ marginRight: '4px' }}>{f.icon}</span>}{f.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function HotelSearch() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '16px 0 20px' }}>
      <SearchField label="City / Area / Property" placeholder="Goa" sub="India" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="Check-In" placeholder="" sub="Select date" type="date" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="Check-Out" placeholder="" sub="Select date" type="date" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="Rooms & Guests" placeholder="2" sub="Adults, 1 Room" />
    </div>
  );
}

function HomestaySearch() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '16px 0 20px' }}>
      <SearchField label="Location / Property" placeholder="Manali" sub="Himachal Pradesh" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="Check-In" placeholder="" sub="Select date" type="date" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="Check-Out" placeholder="" sub="Select date" type="date" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="Guests" placeholder="2" sub="Adults" />
    </div>
  );
}

function HolidaySearch() {
  const quickFilters = ['🔥 Trending', '💑 Honeymoon', '🌍 Visa Free', '🏖️ Beach', '⛰️ Hill Station', '🚗 Weekend'];
  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', padding: '14px 24px', flexWrap: 'wrap' }}>
        {quickFilters.map((f, i) => (
          <button key={f} style={{
            padding: '7px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: '600', cursor: 'pointer',
            border: i === 0 ? 'none' : '1px solid #e5e7eb',
            background: i === 0 ? '#0f4c81' : 'white',
            color: i === 0 ? 'white' : '#6b7280',
          }}>{f}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', padding: '4px 0 20px' }}>
        <SearchField label="From City" placeholder="New Delhi" sub="India" style={{ borderRight: '1px solid #e5e7eb' }} />
        <SearchField label="To City / Country" placeholder="Goa" sub="City / Country" style={{ borderRight: '1px solid #e5e7eb' }} />
        <SearchField label="Departure Date" placeholder="" sub="Select date" type="date" style={{ borderRight: '1px solid #e5e7eb' }} />
        <SearchField label="Rooms & Guests" placeholder="2 Adults" sub="1 Room" style={{ borderRight: '1px solid #e5e7eb' }} />
        <SearchField label="Budget per person" placeholder="₹25,000" sub="Optional" />
      </div>
    </div>
  );
}

function TrainSearch() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '16px 0 20px' }}>
      <SearchField label="From Station" placeholder="New Delhi" sub="NDLS" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="To Station" placeholder="Mumbai CST" sub="CSTM" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="Travel Date" placeholder="" sub="Select date" type="date" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="Class" placeholder="Sleeper" sub="All classes" />
    </div>
  );
}

function BusSearch() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: '16px 0 20px' }}>
      <SearchField label="From" placeholder="Delhi" sub="ISBT Kashmere Gate" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="To" placeholder="Jaipur" sub="Sindhi Camp" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="Travel Date" placeholder="" sub="Select date" type="date" />
    </div>
  );
}

function CabSearch() {
  const [tripType, setTripType] = useState('outstation');
  return (
    <div>
      <div style={{ display: 'flex', gap: '20px', padding: '14px 24px 0' }}>
        {['outstation', 'local', 'airport'].map((t) => (
          <label key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: tripType === t ? '600' : '400', color: tripType === t ? '#0f4c81' : '#6b7280', textTransform: 'capitalize' }}>
            <span style={{ width: '18px', height: '18px', borderRadius: '50%', border: tripType === t ? '2px solid #0f4c81' : '2px solid #d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {tripType === t && <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0f4c81' }} />}
            </span>
            {t === 'airport' ? 'Airport Transfer' : t.charAt(0).toUpperCase() + t.slice(1)}
          </label>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '12px 0 20px' }}>
        <SearchField label="Pickup City" placeholder="Delhi" sub="India" style={{ borderRight: '1px solid #e5e7eb' }} />
        <SearchField label="Drop City" placeholder="Agra" sub="India" style={{ borderRight: '1px solid #e5e7eb' }} />
        <SearchField label="Pickup Date" placeholder="" sub="Select date" type="date" style={{ borderRight: '1px solid #e5e7eb' }} />
        <SearchField label="Pickup Time" placeholder="10:00 AM" sub="Select time" />
      </div>
    </div>
  );
}

function VisaSearch() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: '16px 0 20px' }}>
      <SearchField label="Destination Country" placeholder="Thailand" sub="Select country" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="Travel Date" placeholder="" sub="Select date" type="date" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="No. of Travellers" placeholder="2" sub="Adults" />
    </div>
  );
}

function CruiseSearch() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '16px 0 20px' }}>
      <SearchField label="Departure Port" placeholder="Mumbai" sub="India" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="Cruise Line" placeholder="Cordelia" sub="Any cruise" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="Departure Date" placeholder="" sub="Select date" type="date" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="Passengers" placeholder="2" sub="Adults" />
    </div>
  );
}

function InsuranceSearch() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: '16px 0 20px' }}>
      <SearchField label="Destination" placeholder="International" sub="Or Domestic" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="Travel Dates" placeholder="" sub="Select dates" type="date" style={{ borderRight: '1px solid #e5e7eb' }} />
      <SearchField label="No. of Travellers" placeholder="2" sub="Including children" />
    </div>
  );
}

const formMap = {
  flights: FlightSearch,
  hotels: HotelSearch,
  homestays: HomestaySearch,
  holidays: HolidaySearch,
  trains: TrainSearch,
  buses: BusSearch,
  cabs: CabSearch,
  visa: VisaSearch,
  cruise: CruiseSearch,
  insurance: InsuranceSearch,
};

/* ═══════════════════════════════════════════
   MAIN HERO SECTION
   ═══════════════════════════════════════════ */
export default function HeroSection() {
  const [activeService, setActiveService] = useState('holidays');
  const ActiveForm = formMap[activeService];

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* BG Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,50,90,0.82) 0%, rgba(10,50,90,0.55) 50%, rgba(6,182,212,0.35) 100%)' }} />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div key={i} className="absolute w-2 h-2 bg-white/15 rounded-full"
            style={{ left: `${10 + i * 18}%`, top: `${15 + (i % 3) * 20}%` }}
            animate={{ y: [-15, 15, -15], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6" style={{ paddingTop: '110px', paddingBottom: '80px' }}>

        {/* Hero Heading */}
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Outfit] font-extrabold text-white mb-3 tracking-tight leading-[1.1]">
            Where Would You Like{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #fbbf24, #f59e0b, #ef4444)' }}>
              To Go?
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/60 max-w-lg mx-auto">
            Flights, hotels, holidays &amp; more — all in one place.
          </p>
        </motion.div>

        {/* ═══ FLOATING BOOKING PANEL ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          className="w-full"
          style={{ maxWidth: '1140px' }}
        >
          <div style={{
            background: 'rgba(255,255,255,0.98)',
            borderRadius: '20px',
            boxShadow: '0 30px 90px rgba(0,0,0,0.28), 0 12px 36px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.8)',
            overflow: 'hidden',
          }}>

            {/* ── Service Tab Bar ── */}
            <div style={{
              display: 'flex', alignItems: 'stretch',
              overflowX: 'auto', scrollbarWidth: 'none',
              background: '#f8fafc', borderRadius: '20px 20px 0 0',
              borderBottom: '1px solid #e2e5e9',
            }}>
              {services.map((svc) => {
                const isActive = activeService === svc.id;
                return (
                  <button key={svc.id} onClick={() => setActiveService(svc.id)}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                      padding: '16px 18px', minWidth: '90px', border: 'none', cursor: 'pointer',
                      background: isActive ? 'white' : 'transparent',
                      borderBottom: isActive ? '3px solid #0f4c81' : '3px solid transparent',
                      transition: 'all 0.2s', flexShrink: 0, position: 'relative',
                    }}>
                    <span style={{ fontSize: '24px', lineHeight: 1 }}>{svc.icon}</span>
                    <span style={{
                      fontSize: '11px', fontWeight: isActive ? '700' : '500',
                      color: isActive ? '#0f4c81' : '#6b7280',
                      whiteSpace: 'nowrap', fontFamily: 'Outfit, sans-serif',
                    }}>
                      {svc.label}
                    </span>
                    {svc.badge && (
                      <span style={{
                        position: 'absolute', top: '8px', right: '6px',
                        fontSize: '8px', fontWeight: '700', color: 'white', textTransform: 'uppercase',
                        background: '#ef4444', padding: '1px 5px', borderRadius: '4px',
                      }}>{svc.badge}</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* ── Dynamic Form ── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <ActiveForm />
              </motion.div>
            </AnimatePresence>

            {/* ── Search Button ── */}
            <div style={{ padding: '0 24px 22px', display: 'flex', justifyContent: 'center' }}>
              <Link href="/packages" className="no-underline">
                <button style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  padding: '16px 64px', borderRadius: '999px', border: 'none',
                  background: 'linear-gradient(135deg, #0f4c81 0%, #06b6d4 100%)',
                  color: 'white', fontSize: '18px', fontWeight: '700',
                  fontFamily: 'Outfit, sans-serif', cursor: 'pointer',
                  transition: 'all 0.3s', letterSpacing: '0.04em',
                  boxShadow: '0 8px 30px rgba(15, 76, 129, 0.4)',
                }}>
                  <MagnifyingGlassIcon style={{ width: '20px', height: '20px' }} />
                  SEARCH
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-10 mt-10">
          {[
            { value: '15K+', label: 'Happy Travelers' },
            { value: '50+', label: 'Destinations' },
            { value: '200+', label: 'Tour Packages' },
            { value: '4.9★', label: 'Rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-[Outfit] font-extrabold text-white">{stat.value}</div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 73.3C120 66.7 240 53.3 360 48C480 42.7 600 45.3 720 50.7C840 56 960 64 1080 64C1200 64 1320 56 1380 52L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-grid-5 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .hero-grid-5 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
