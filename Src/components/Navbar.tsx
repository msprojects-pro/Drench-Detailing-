import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Calendar, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/detailingData';

interface NavbarProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Results', href: '#transformation' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification / Banner Bar */}
      <div className="bg-blue-950/90 border-b border-blue-800/40 text-blue-200 text-xs py-1.5 px-4 text-center tracking-wide font-medium backdrop-blur-sm z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center space-x-2 text-blue-300">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Mobile Service across Cheshire & Manchester • We bring our own Water & Power</span>
          </div>
          <div className="flex items-center justify-center sm:justify-end space-x-4 w-full sm:w-auto text-center">
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} 
              className="flex items-center space-x-1.5 text-white hover:text-blue-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span className="font-semibold">{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-blue-700">|</span>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Drench%20Detailing,%20I%20would%20like%20a%20quote%20for%20my%20vehicle.`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-1.5 text-blue-300 hover:text-blue-100 transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3' 
            : 'bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-900 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Branding */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-blue-500/60 shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center justify-center font-black text-xl tracking-tighter transition-transform duration-300 group-hover:scale-105 select-none">
              <span className="text-white">D</span>
              <span className="text-blue-500">D</span>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                  DRENCH
                </span>
                <span className="text-xl font-extrabold text-blue-500">.</span>
              </div>
              <span className="text-[10px] tracking-widest text-blue-400 uppercase font-semibold block -mt-1">
                Mobile Detailing
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="px-4 py-2.5 rounded-lg text-sm font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 border border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-blue-600 flex items-center space-x-1"
            >
              <span>Quote</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[88px] z-30 bg-neutral-950/95 backdrop-blur-xl border-t border-neutral-800 lg:hidden flex flex-col p-6 animate-fadeIn">
          <div className="flex flex-col space-y-3 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-lg font-medium text-neutral-200 hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto space-y-3 pt-6 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3.5 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/30 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Request Instant Quote</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="py-3 rounded-xl text-sm font-semibold text-neutral-200 bg-neutral-900 border border-neutral-800 flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-xl text-sm font-semibold text-white bg-emerald-900/40 border border-emerald-700/50 flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
