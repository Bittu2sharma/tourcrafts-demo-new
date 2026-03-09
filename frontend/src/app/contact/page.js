'use client';

import { motion } from 'framer-motion';
import InquiryForm from '@/components/InquiryForm';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: MapPinIcon,
    title: 'Visit Our Office',
    details: ['123 Travel Street, Business Hub', 'Mumbai, Maharashtra 400001'],
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    details: ['+91 98765 43210', '+91 12345 67890'],
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    details: ['hello@tourcrafts.com', 'bookings@tourcrafts.com'],
  },
  {
    icon: ClockIcon,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 4:00 PM'],
  },
];

export default function ContactPage() {
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
              Contact <span className="text-[var(--secondary)]">Us</span>
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Have a question or ready to plan your dream trip? We&apos;d love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--light)' }}>
        <div className="container-custom">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                     style={{ background: 'var(--gradient-primary)' }}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-[Outfit] font-bold text-[var(--dark)] mb-3">{info.title}</h3>
                {info.details.map((detail, j) => (
                  <p key={j} className="text-gray-500 text-sm">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <InquiryForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709222834!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
