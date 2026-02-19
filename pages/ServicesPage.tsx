
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSection = ({ title, description, points, imageUrl, reverse = false }: { title: string, description: string, points: string[], imageUrl: string, reverse?: boolean }) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                    <img src={imageUrl} alt={title} className="rounded-lg shadow-xl w-full h-auto object-cover" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-gray-600 mb-6">{description}</p>
                    <ul className="space-y-3 mb-8">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-6 h-6 text-blue-900 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span className="text-gray-700">{point}</span>
                            </li>
                        ))}
                    </ul>
                    <Link to="/quote" className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                        Request a Quote for this Service
                    </Link>
                </div>
            </div>
        </div>
    );
}

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Construction Services</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">From concept to completion, we offer comprehensive services to bring your residential vision to life.</p>
        </div>
      </section>

      {/* Residential Home Construction */}
      <ServiceSection
        title="Residential Home Construction"
        description="We specialize in building bespoke homes tailored to your lifestyle and preferences. Whether it's a modern duplex, a classic bungalow, or a luxury villa, our team ensures every detail is executed to perfection."
        points={[
          "Custom architectural design and planning.",
          "Complete foundation, structural, and roofing works.",
          "High-quality interior and exterior finishing.",
          "Turnkey solutions from ground-breaking to handover."
        ]}
        imageUrl="https://picsum.photos/seed/service1/800/600"
      />

      <div className="bg-gray-50">
        {/* Apartment Development */}
        <ServiceSection
          title="Apartment Development"
          description="We partner with real estate developers and investors to construct multi-unit residential apartments. Our focus is on creating functional, durable, and profitable properties."
          points={[
            "Construction of low-rise and mid-rise apartment blocks.",
            "Efficient project management to meet timelines and budgets.",
            "Compliance with all building codes and regulations.",
            "Robust construction for long-term value and low maintenance."
          ]}
          imageUrl="https://picsum.photos/seed/service2/800/600"
          reverse={true}
        />
      </div>

      {/* Renovation & Upgrades */}
      <ServiceSection
        title="Renovation & Upgrades"
        description="Transform your existing space with our professional renovation services. We modernize homes, enhance functionality, and improve aesthetic appeal, adding significant value to your property."
        points={[
          "Structural remodeling and space re-configuration.",
          "Modern kitchen and bathroom upgrades.",
          "Flooring, tiling, painting, and POP ceiling installation.",
          "Exterior facelifts and building extensions."
        ]}
        imageUrl="https://picsum.photos/seed/service3/800/600"
      />
    </div>
  );
};

export default ServicesPage;
