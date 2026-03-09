import './globals.css';

export const metadata = {
  title: 'TourCrafts - Handcrafted Travel Experiences | Tour Packages & Holidays',
  description: 'Discover handcrafted tour packages for domestic and international destinations. Best prices, expert guides, and unforgettable experiences. Book your dream vacation with TourCrafts.',
  keywords: 'tour packages, travel agency, holiday packages, Andaman tours, Goa packages, Rajasthan tours, Kerala backwaters, international tours, Bali packages, Dubai tours',
  openGraph: {
    title: 'TourCrafts - Handcrafted Travel Experiences',
    description: 'Discover handcrafted tour packages for domestic and international destinations.',
    type: 'website',
    url: 'https://tourcrafts.com',
  },
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
