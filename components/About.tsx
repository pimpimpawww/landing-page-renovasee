import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const benefits = [
    'Proses Aman & Transparan',
    'Desain Sesuai Anggaran',
    'Tepat Waktu & Bergaransi',
    'Tim Profesional Berpengalaman',
  ];

  return (
    <section id="tentang" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
                alt="Tim Renovasee"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-sm">Tahun Pengalaman</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              Mitra Konstruksi Anda
            </h2>
            <p className="text-xl text-primary font-semibold mb-6">
              Profesional & Berpengalaman
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Renovasee hadir sebagai solusi terpercaya untuk kebutuhan konstruksi dan renovasi Anda. 
              Dengan pengalaman lebih dari 5 tahun, kami telah menangani ratusan proyek dengan tingkat 
              kepuasan pelanggan yang tinggi. Kami berkomitmen memberikan layanan terbaik dengan 
              transparansi penuh di setiap tahapan proyek.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-dark font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="#kontak"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-all shadow-lg hover:shadow-xl"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
