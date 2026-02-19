
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-white" />
              <span className="text-xl font-bold">DONATUS CONSTRUCTION</span>
            </Link>
            <p className="text-gray-400">
              Building dreams and delivering excellence in residential construction across Nigeria. We are committed to quality, durability, and client satisfaction.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white">Our Projects</Link></li>
              <li><Link to="/quote" className="text-gray-400 hover:text-white">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-3"><MapPin size={18} /><p>123 Construction Avenue, Lagos, Nigeria</p></li>
              <li className="flex items-center space-x-3"><Mail size={18} /><a href="mailto:info@donatus.com" className="hover:text-white">info@donatus.com</a></li>
              <li className="flex items-center space-x-3"><Phone size={18} /><a href="tel:+2348012345678" className="hover:text-white">+234 801 234 5678</a></li>
              <li className="flex items-center space-x-3"><MessageCircle size={18} /><a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp Us</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Donatus Building Construction Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
