import { ChevronRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'DESAIN ARSITEKTUR',
      description: 'Desain Rumah, Desain Ruko, Desain Kost, Desain Kantor, Desain Outlet Retail, Desain Cafe, Desain Restoran.',
      features: [
        'Gambar 3D Exterior',
        'Gambar Arsitektural',
        'Gambar Struktural',
        'Gambar Kelistrikan',
        'Gambar Pemipaan',
        'Detail RAB',
      ],
      button: 'KATALOG DESAIN',
    },
    {
      title: 'BANGUN DAN RENOVASI',
      description: 'Bangun Rumah, Mengubah Ruangan, Menambah Lantai, Renov Atap, Renov Dapur, Renov Kamar Mandi.',
      features: [
        'Gratis Biaya Survey',
        'Gratis Biaya Desain',
        'Pembayaran Termyn',
        'Garansi 1 Tahun',
        'Pengurusan IMB',
        'RAB Transparan',
      ],
      button: 'KATALOG PORTOFOLIO',
    },
    {
      title: 'PEKERJAAN INTERIOR',
      description: 'Backdrobe TV, Lemari TV, Wardrobe, Nakas, Kabinet Bawah Tangga, Wall Moulding, Kitchenset, Meja Rias.',
      features: [
        'Gratis Biaya Survey',
        'Free Desain Interior',
        'Gambar Kerja Detail',
        'Material Berkualitas',
        'Selesai Tepat Waktu',
        'Garansi Produk',
      ],
      button: 'KATALOG PRODUK',
    },
  ];

  return (
    <section id="layanan" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-primary font-semibold text-sm tracking-wider">
              PENAWARAN SPESIAL
            </span>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark">
            Layanan Terbaik Renovasee
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-primary text-white p-6 text-center">
                <h3 className="text-lg font-bold">{service.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="w-full bg-white border-2 border-gray-300 text-dark py-3 rounded font-semibold text-sm hover:border-primary hover:text-primary transition-all">
                  {service.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
