
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HardHat, ClipboardCheck, Users, BrickWall, ThumbsUp } from 'lucide-react';

const heroSlides = [
  {
    image: 'https://picsum.photos/seed/hero1/1920/1080',
    headline: 'Building Dreams. Delivering Excellence.',
    subheadline: 'Your trusted partner in residential construction across Nigeria.'
  },
  {
    image: 'https://picsum.photos/seed/hero2/1920/1080',
    headline: 'Crafting Homes, Not Just Houses.',
    subheadline: 'Unwavering commitment to quality, durability, and aesthetics.'
  },
  {
    image: 'https://picsum.photos/seed/hero3/1920/1080',
    headline: 'Excellence in Every Brick.',
    subheadline: 'From foundation to finishing, we build with passion and precision.'
  }
];

const services = [
  { title: 'Residential Home Construction', description: 'Custom homes, duplexes, and bungalows built to your specification.', link: '/services' },
  { title: 'Apartment Development', description: 'Multi-unit residential complexes for investors and developers.', link: '/services' },
  { title: 'Renovation & Remodeling', description: 'Modernizing and upgrading existing structures with style.', link: '/services' },
  { title: 'Project Management', description: 'Expert oversight to ensure your project is on time and on budget.', link: '/services' },
];

const whyChooseUsItems = [
    { icon: <Users size={40} className="text-blue-900" />, title: 'Experienced Professionals', description: 'Our team comprises certified architects, engineers, and skilled craftsmen.' },
    { icon: <BrickWall size={40} className="text-blue-900" />, title: 'Quality Materials', description: 'We source only the best, durable materials to ensure longevity and excellence.' },
    { icon: <ClipboardCheck size={40} className="text-blue-900" />, title: 'Timely Delivery', description: 'We adhere to strict timelines to deliver your project as promised.' },
    { icon: <ThumbsUp size={40} className="text-blue-900" />, title: 'Client Satisfaction', description: 'Your satisfaction is our ultimate goal, achieved through collaboration and transparency.' },
];


const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt={slide.headline} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">{heroSlides[currentSlide].headline}</h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl animate-fade-in-up">{heroSlides[currentSlide].subheadline}</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/quote" className="bg-blue-900 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition-transform hover:scale-105">
              Get a Quotation
            </Link>
            <Link to="/projects" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-black transition-colors">
              Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Services</h2>
            <p className="mt-4 text-lg text-gray-600">We provide end-to-end solutions for all your residential construction needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4"><HardHat size={48} className="text-blue-900" /></div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="font-semibold text-blue-900 hover:underline">Learn More &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Donatus Construction?</h2>
                <p className="mt-4 text-lg text-gray-600">Our principles are the foundation of our success.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseUsItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6">
                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">Let's discuss your vision. Contact us today for a free, no-obligation consultation and quotation.</p>
          <Link to="/quote" className="bg-white text-blue-900 px-10 py-4 rounded-md text-lg font-semibold hover:bg-gray-200 transition-colors">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
