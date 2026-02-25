'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Modern House Design',
      category: 'desain',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
      size: 'large',
    },
    {
      title: 'Interior Bedroom',
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070',
      size: 'medium',
    },
    {
      title: 'Modern Bathroom',
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070',
      size: 'small',
    },
    {
      title: 'Kitchen Set',
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?q=80&w=2070',
      size: 'small',
    },
    {
      title: 'Living Room',
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074',
      size: 'small',
    },
    {
      title: 'Minimalist House',
      category: 'konstruksi',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
      size: 'small',
    },
    {
      title: 'Carport Design',
      category: 'konstruksi',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084',
      size: 'medium',
    },
    {
      title: 'Architecture Design',
      category: 'desain',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
      size: 'large',
    },
  ];

  const filters = [
    { id: 'all', label: 'ALL PROJECT' },
    { id: 'desain', label: 'DESAIN' },
    { id: 'interior', label: 'INTERIOR' },
    { id: 'konstruksi', label: 'KONSTRUKSI' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portofolio" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-primary font-semibold text-sm tracking-wider">
              PORTOFOLIO PROYEK RENOVASEE
            </span>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-8">
            Mungkin Anda Suka
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded font-semibold text-sm transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-dark border-2 border-gray-300 hover:border-primary hover:text-primary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                project.size === 'medium' ? 'md:row-span-1' : ''
              }`}
            >
              <div className={`relative ${
                project.size === 'large' ? 'h-96 md:h-full' : 'h-64'
              }`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-semibold">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-all shadow-lg hover:shadow-xl">
            Lihat Lebih Banyak
          </button>
        </div>
      </div>
    </section>
  );
}
