'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Kalkulator', href: '#kalkulator' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#beranda" className="flex items-center gap-3">
            {/* Logo Icon - positioned beside text */}
            <svg width="35" height="42" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              {/* Left tall building */}
              <path d="M10 30 L10 110 L35 110 L35 30 Z" fill="#E53935"/>
              {/* Top right building */}
              <path d="M40 10 L40 65 L85 65 L85 10 Z" fill="#E53935"/>
              {/* Bottom right building */}
              <path d="M50 70 L50 110 L95 110 L95 70 Z" fill="#E53935"/>
            </svg>
            
            {/* Text and Tagline */}
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold leading-tight text-primary">
                RENOVASEE
              </span>
              <span className="text-[10px] lg:text-xs font-light tracking-wide text-gray-600">
                Design & Build Contractor
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-dark' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontak"
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-dark' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-dark' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-dark hover:text-primary font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-primary text-white px-6 py-2.5 rounded-lg font-medium text-center hover:bg-red-600 transition-colors"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
