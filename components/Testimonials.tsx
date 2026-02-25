'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Bapak Andi Wijaya',
      location: 'Semarang',
      rating: 5,
      text: 'Pelayanan sangat memuaskan! Tim Renovasee sangat profesional dalam menangani renovasi rumah saya. Hasilnya melebihi ekspektasi dan selesai tepat waktu. Highly recommended!',
      project: 'Renovasi Rumah 2 Lantai',
    },
    {
      name: 'Ibu Siti Nurhaliza',
      location: 'Pemalang',
      rating: 5,
      text: 'Desain interior yang dibuat sangat sesuai dengan keinginan kami. Material yang digunakan berkualitas dan harga sangat transparan. Terima kasih Renovasee!',
      project: 'Desain Interior & Kitchen Set',
    },
    {
      name: 'Bapak Rudi Hartono',
      location: 'Semarang',
      rating: 5,
      text: 'Proses pembangunan rumah baru sangat lancar. Tim selalu update progress dan komunikasi sangat baik. Garansi 1 tahun juga memberikan rasa aman. Puas banget!',
      project: 'Bangun Rumah Baru',
    },
    {
      name: 'Ibu Dewi Lestari',
      location: 'Kendal',
      rating: 5,
      text: 'Desain arsitektur yang modern dan fungsional. Tim desainer sangat membantu dalam memberikan saran terbaik. Hasil akhirnya sangat memuaskan!',
      project: 'Desain Arsitektur Rumah',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-primary font-semibold text-sm tracking-wider">
              APA KATA MEREKA
            </span>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Testimoni Customer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas kami. Lihat apa kata mereka tentang layanan Renovasee
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-lg leading-relaxed text-center mb-8 italic">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>

            {/* Project Type */}
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                {testimonials[currentIndex].project}
              </span>
            </div>

            {/* Customer Info */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-dark mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-500">{testimonials[currentIndex].location}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
