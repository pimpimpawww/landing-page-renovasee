'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Konstruksi/Renovasi',
    'Desain Arsitektur',
    'Pekerjaan Interior',
    'Desain Struktur',
  ];

  return (
    <>
      <footer className="bg-dark text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-6">SEKILAS TENTANG RENOVASEE</h3>
              <p className="text-gray-300 leading-relaxed">
                Renovasee adalah kontraktor profesional yang fokus melayani pembangunan dan renovasi rumah. 
                Misi kami memberikan solusi layanan desain dan konstruksi efisien serta berkualitas, membantu 
                anda mulai dari desain, teknis struktur, pekerjaan konstruksi atau renovasi hingga interior.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6">LAYANAN KAMI</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#layanan"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} - Tim Renovasee. All Rights Reserved</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full shadow-lg hover:bg-red-600 transition-all hover:scale-110 flex items-center justify-center z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
