import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Leadership', path: '/leadership' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="w-6 flex flex-col space-y-1">
          <span className={`h-0.5 w-full bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`h-0.5 w-full bg-gray-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-full bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </button>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-8">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink 
              to={item.path}
              className={({ isActive }) => 
                `block ${isActive ? 'text-primary font-bold' : 'text-gray-800 hover:text-primary font-semibold'} transition-colors`
              }
              end
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white w-3/4 h-full p-6 animate-slideIn">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={toggleMenu}
            >
              ✕
            </button>
            <ul className="mt-12 space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => 
                      `block py-2 ${isActive ? 'text-primary font-semibold' : 'text-gray-800 hover:text-primary'}`
                    }
                    onClick={toggleMenu}
                    end
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}