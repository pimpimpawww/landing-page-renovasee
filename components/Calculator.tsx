'use client';

import { useState } from 'react';
import { Calculator as CalcIcon, Send } from 'lucide-react';

export default function Calculator() {
  const [formData, setFormData] = useState({
    service: '',
    details: '',
    location: '',
    area: '',
    name: '',
    whatsapp: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Renovasee, saya ingin konsultasi:\n\nLayanan: ${formData.service}\nDetail: ${formData.details}\nLokasi: ${formData.location}\nLuas: ${formData.area} m²\nNama: ${formData.name}\nWhatsApp: ${formData.whatsapp}`;
    const waUrl = `https://wa.me/6282137773000?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="kalkulator" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Kalkulator Biaya Konstruksi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hitung estimasi biaya proyek Anda dengan mudah dan dapatkan konsultasi gratis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  Pilih Layanan
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                >
                  <option value="">Pilih layanan...</option>
                  <option value="Renovasi Rumah">Renovasi Rumah</option>
                  <option value="Bangun Baru">Bangun Baru</option>
                  <option value="Desain Interior">Desain Interior</option>
                  <option value="Desain Eksterior">Desain Eksterior</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  Detail Kebutuhan
                </label>
                <textarea
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  rows={4}
                  placeholder="Jelaskan kebutuhan proyek Anda..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Lokasi Proyek
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Kota/Kabupaten"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Luas (m²)
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    placeholder="Contoh: 100"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="08xxxxxxxxxx"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-red-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Hitung Sekarang
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031"
              alt="Konstruksi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent flex items-end p-8">
              <div className="text-white">
                <CalcIcon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Estimasi Akurat</h3>
                <p className="text-gray-200">Dapatkan perhitungan biaya yang transparan dan detail</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
