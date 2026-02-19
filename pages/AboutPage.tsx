
import React from 'react';
import { Target, Eye, Users } from 'lucide-react';

const teamMembers = [
  { name: 'Engr. Donatus Okoro', role: 'Founder & CEO', image: 'https://picsum.photos/seed/ceo/400/400' },
  { name: 'Arch. Funke Adebayo', role: 'Lead Architect', image: 'https://picsum.photos/seed/architect/400/400' },
  { name: 'Mr. Ibrahim Musa', role: 'Head of Operations', image: 'https://picsum.photos/seed/ops/400/400' },
  { name: 'Mrs. Chioma Nwosu', role: 'Client Relations Manager', image: 'https://picsum.photos/seed/client/400/400' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative h-64 bg-gray-800">
        <img src="https://picsum.photos/seed/about-bg/1920/400" alt="Construction site" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">About Donatus Construction</h1>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded over a decade ago, Donatus Building Construction Company started with a simple yet powerful vision: to bring world-class construction standards to the Nigerian residential sector. From a humble beginning in Lagos, we have grown into a reputable firm known for our unwavering commitment to quality, integrity, and client satisfaction.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our journey has been one of continuous learning and adaptation, embracing modern techniques and materials while staying true to the core principles of durable and aesthetically pleasing construction. Today, we have successfully delivered numerous homes and apartment complexes across Nigeria, each project a testament to our expertise and passion for building.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img src="https://picsum.photos/seed/story/800/600" alt="Company founder" className="rounded-lg shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <Target size={48} className="text-blue-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600">To build safe, modern, and sustainable homes that enhance the quality of life for our clients, while delivering exceptional value and a seamless construction experience.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <Eye size={48} className="text-blue-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600">To be Nigeria's most trusted and sought-after residential construction company, renowned for our innovation, quality craftsmanship, and client-centric approach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Professionals</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our strength lies in our team of dedicated and skilled professionals who bring a wealth of experience to every project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg" />
                <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
                <p className="text-blue-800">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
