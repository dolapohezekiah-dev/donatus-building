
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Building2 className="h-8 w-8 text-blue-900" />
            <span className="text-xl font-bold text-gray-900">DONATUS</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-blue-900 transition-colors font-medium ${isActive ? 'text-blue-900 border-b-2 border-blue-900' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/quote" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors font-semibold">
              Get a Quotation
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-blue-900 transition-colors font-medium ${isActive ? 'text-blue-900' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/quote" onClick={closeMenu} className="w-4/5 text-center bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors font-semibold">
              Get a Quotation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
