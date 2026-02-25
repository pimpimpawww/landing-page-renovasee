import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Siap Bangun Rumah Impian Anda?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Konsultasikan proyek Anda dengan tim profesional kami dan wujudkan rumah impian dengan kualitas terbaik
        </p>
        <a
          href="#kontak"
          className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
        >
          Mulai Konsultasi Gratis
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
