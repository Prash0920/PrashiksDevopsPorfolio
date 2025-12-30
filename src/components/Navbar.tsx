import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-slate-900">Prashik Manohare</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-slate-900 text-white px-6 py-2 rounded-lg uppercase text-sm tracking-wide hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-gray-50 rounded-lg"
              >
                {link}
              </button>
            ))}
            <button className="w-full bg-slate-900 text-white px-6 py-2 rounded-lg uppercase text-sm tracking-wide hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2 mt-4">
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
