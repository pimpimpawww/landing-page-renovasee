'use client';

import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-white text-sm font-medium mb-6">
            SOLUSI LAYANAN DESAIN KONSTRUKSI
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Efisien dan <br />
            <span className="text-primary">Berkualitas</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Renovasee adalah kontraktor profesional yang fokus melayani pembangunan rumah mulai dari desain, struktur, konstruksi hingga interior.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#kontak"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-all hover:scale-105 shadow-lg"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
            >
              <Play className="mr-2 w-5 h-5" />
              Lihat Layanan
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
