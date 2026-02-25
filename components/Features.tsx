import { Gift, MapPin, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Gift,
      title: 'Gratis Biaya Design',
      description: 'Dapatkan desain profesional tanpa biaya tambahan untuk setiap proyek konstruksi Anda',
    },
    {
      icon: MapPin,
      title: 'Gratis Biaya Survey',
      description: 'Survey lokasi dan konsultasi awal gratis untuk memastikan proyek berjalan optimal',
    },
    {
      icon: Shield,
      title: 'Garansi 1 Tahun',
      description: 'Jaminan kualitas konstruksi dengan garansi resmi selama 1 tahun penuh',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
