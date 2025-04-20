import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavBarProps {
  activeSection: string;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <a className="text-xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors" href="#home">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <li key={item.id}>
              <button 
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'text-indigo-600' 
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-bottom-right"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <ul className="container mx-auto px-6 py-4 space-y-4">
            {navItems.map(item => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 rounded ${
                    activeSection === item.id 
                      ? 'bg-indigo-100 text-indigo-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;