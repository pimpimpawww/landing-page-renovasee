import { MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      icon: MapPin,
      title: 'Area Semarang',
      address: 'Jl. Sedayu Kenanga II.',
      city: 'Sembungharjo. Kota Semarang',
      type: 'location',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      phone: '0812 1246 4616',
      contact: 'CP. Nafi',
      type: 'whatsapp',
      link: 'https://wa.me/6281212464616',
    },
    {
      icon: MapPin,
      title: 'Area Pemalang',
      address: 'Jl. Karimata No. 6',
      city: 'Mulyoharjo, Kab. Pemalang',
      type: 'location',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      phone: '081 5672 0578',
      contact: 'CP. Heri',
      type: 'whatsapp',
      link: 'https://wa.me/6281567205578',
    },
  ];

  return (
    <section id="kontak" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-primary font-semibold text-sm tracking-wider">
              KAMI SIAP MEMBANTU ANDA
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark">
            Kontak Renovasee
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                <contact.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-dark mb-3">
                {contact.title}
              </h3>

              {/* Content */}
              {contact.type === 'location' ? (
                <div className="text-gray-600 text-sm space-y-1">
                  <p>{contact.address}</p>
                  <p>{contact.city}</p>
                </div>
              ) : (
                <div className="text-gray-600 text-sm space-y-1">
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-primary transition-colors font-medium"
                  >
                    {contact.phone}
                  </a>
                  <p>{contact.contact}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
