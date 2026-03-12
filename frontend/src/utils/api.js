// API utility functions for TourCrafts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function fetchPackages() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/packages`);
    if (!res.ok) throw new Error('Failed to fetch packages');
    return await res.json();
  } catch (error) {
    console.error('Error fetching packages:', error);
    return [];
  }
}

export async function fetchPackageById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/packages/${id}`);
    if (!res.ok) throw new Error('Failed to fetch package');
    return await res.json();
  } catch (error) {
    console.error('Error fetching package:', error);
    return null;
  }
}

export async function fetchBlogs() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/blogs`);
    if (!res.ok) throw new Error('Failed to fetch blogs');
    return await res.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function submitLead(leadData) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData),
    });
    if (!res.ok) throw new Error('Failed to submit lead');
    return await res.json();
  } catch (error) {
    console.error('Error submitting lead:', error);
    return null;
  }
}

export async function submitInquiry(inquiryData) {
  // WhatsApp integration helper
  const { name, phone, message, packageTitle } = inquiryData;
  const whatsappMessage = encodeURIComponent(
    `Hi TourCrafts! I'm ${name}.\n\nI'm interested in: ${packageTitle || 'your travel packages'}\n\nMessage: ${message}`
  );
  const whatsappUrl = `https://wa.me/918107331777?text=${whatsappMessage}`;
  window.open(whatsappUrl, '_blank');
}
