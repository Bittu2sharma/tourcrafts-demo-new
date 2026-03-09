'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserIcon, EnvelopeIcon, PhoneIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';

export default function InquiryForm({ packageTitle = '', compact = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleWhatsApp = () => {
    const { name, message } = formData;
    const whatsappMessage = encodeURIComponent(
      `Hi TourCrafts! I'm ${name || 'a traveler'}.\n\nI'm interested in: ${packageTitle || 'your travel packages'}\n\nMessage: ${message || 'I would like more information.'}`
    );
    window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, '_blank');
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-white rounded-2xl ${compact ? 'p-5' : 'p-8'} text-center shadow-lg border border-gray-100`}
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-[Outfit] font-bold text-[var(--dark)] mb-2">Thank You!</h3>
        <p className="text-gray-500 text-sm">We&apos;ve received your inquiry. Our travel expert will contact you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl ${compact ? 'p-5' : 'p-8'} shadow-lg border border-gray-100`}>
      <h3 className={`font-[Outfit] font-bold text-[var(--dark)] mb-1 ${compact ? 'text-lg' : 'text-xl'}`}>
        {packageTitle ? 'Inquire About This Package' : 'Get Free Travel Consultation'}
      </h3>
      <p className="text-gray-400 text-sm mb-5">Fill the form or chat with us on WhatsApp</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all"
          />
        </div>

        <div className="relative">
          <EnvelopeIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all"
          />
        </div>

        <div className="relative">
          <PhoneIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all"
          />
        </div>

        <div className="relative">
          <ChatBubbleLeftEllipsisIcon className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-gray-400" />
          <textarea
            name="message"
            placeholder="Tell us about your travel plans..."
            value={formData.message}
            onChange={handleChange}
            rows={compact ? 2 : 3}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-xl text-white font-semibold font-[Outfit] transition-all hover:shadow-lg hover:opacity-90"
          style={{ background: 'var(--gradient-primary)' }}
        >
          Send Inquiry
        </button>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-gray-200 flex-1" />
          <span className="px-4 text-xs text-gray-400">or</span>
          <div className="border-t border-gray-200 flex-1" />
        </div>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="btn-whatsapp w-full justify-center !py-3"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat on WhatsApp
        </button>
      </form>
    </div>
  );
}
