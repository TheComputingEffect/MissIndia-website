import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import clsx from 'clsx';
import { useConsultation } from '../utils/ConsultationContext';

import logoPng from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { openModal } = useConsultation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled((prev) => {
        if (prev !== isScrolled) return isScrolled;
        return prev;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and reset dropdowns on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { 
      name: 'Events', 
      path: '/events',
      dropdown: [
        { name: 'DJ Services', path: '/events/dj-services' },
        { name: 'Dance Crew with Pyros & Blast Effects', path: '/events/dance-crew' },
        { name: 'Wedding & Engagement Events', path: '/wedding-engagement-events' },
        { name: 'Puberty Ceremony Events', path: '/puberty-ceremony-events' },
        { name: 'Baby Shower Events', path: '/baby-shower-events' },
        { name: 'Collaboration & Modelling Shoots', path: '/collaboration-modelling-shoots' },
        { name: 'Corporate Events', path: '/corporate-events' },
        { name: 'Surprise Events for Loved Ones', path: '/surprise-events-for-loved-ones' }
      ]
    },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-200',
        scrolled ? 'bg-[#011415]/90 backdrop-blur-md border-b border-brand-accent/20 py-3 shadow-glass' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center lg:grid lg:grid-cols-3 lg:gap-4">
        {/* Column 1: Logo */}
        <div className="flex justify-start items-center">
          <Link to="/" className="relative group flex flex-col items-center justify-center text-center">
            <img 
              src={logoPng} 
              alt="MISS INDIA" 
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" 
            />
            <span className="font-heading font-bold text-xs md:text-sm tracking-[0.25em] text-white group-hover:text-brand-accent transition-colors uppercase mt-1 leading-none">
              MISS INDIA
            </span>
          </Link>
        </div>

        {/* Column 2: Desktop Navigation Links (Mathematically Centered) */}
        <nav className="hidden lg:flex justify-center items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group py-6"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={clsx(
                  'text-sm uppercase tracking-wider font-body hover:text-brand-accent transition-colors duration-300 relative flex items-center whitespace-nowrap',
                  location.pathname === link.path ? 'text-brand-accent' : 'text-brand-secondary/80'
                )}
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown 
                    size={14} 
                    className={clsx(
                      "ml-1 opacity-70 transition-transform duration-300",
                      activeDropdown === link.name ? "rotate-180" : ""
                    )} 
                  />
                )}
                <span className={clsx(
                  "absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300",
                  location.pathname === link.path || activeDropdown === link.name ? "w-full" : "w-0"
                )}></span>
              </Link>
              
              {/* Desktop Dropdown Menu */}
              <AnimatePresence>
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 w-[340px]"
                  >
                    <div className="bg-brand-dark/95 backdrop-blur-md border border-brand-secondary/20 rounded-2xl shadow-glass overflow-hidden relative">
                      {/* Decorative Top Accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50" />
                      
                      <div className="py-3">
                        {link.dropdown.map((subItem, idx) => (
                          <Link 
                            key={idx} 
                            to={subItem.path}
                            className="block px-6 py-3 text-xs md:text-sm text-brand-secondary hover:text-brand-dark hover:bg-brand-accent transition-colors duration-200 font-body relative z-10"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Column 3: Desktop CTA Button & Mobile Menu Toggle */}
        <div className="flex justify-end items-center">
          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={openModal}
              className="relative min-w-[220px] xl:min-w-[245px] h-12 flex items-center justify-center rounded-full border-2 border-brand-accent text-brand-accent font-body text-xs xl:text-sm uppercase tracking-widest overflow-hidden group bg-brand-accent/15 hover:bg-brand-accent hover:text-brand-dark transition-all duration-500 whitespace-nowrap px-6 shadow-[0_0_20px_rgba(127,231,231,0.5)] hover:shadow-[0_0_30px_rgba(127,231,231,0.85)] cursor-pointer"
            >
              <span className="relative z-10 font-bold tracking-widest">Book Consultation</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0"></div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-brand-secondary focus:outline-none flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-md border-b border-brand-secondary/20 shadow-glass"
          >
            <div className="flex flex-col px-6 py-8 space-y-6 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <div className="flex justify-between items-center w-full">
                      <Link
                        to={link.path}
                        className={clsx(
                          'text-lg uppercase tracking-wider font-heading hover:text-brand-accent transition-colors duration-300',
                          location.pathname === link.path ? 'text-brand-accent' : 'text-brand-secondary'
                        )}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <button 
                        className="p-2 text-brand-secondary hover:text-brand-accent"
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      >
                        {activeDropdown === link.name ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 mt-4 space-y-4 border-l-2 border-brand-secondary/20 ml-1 py-2">
                          {link.dropdown.map((subItem, idx) => (
                            <Link
                              key={idx}
                              to={subItem.path}
                              className="block text-sm text-brand-secondary/80 hover:text-brand-accent transition-colors duration-200 font-body"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveDropdown(null);
                  openModal();
                }}
                className="mt-6 w-full h-12 flex items-center justify-center rounded-full border-2 border-brand-accent text-brand-accent font-body text-sm font-bold uppercase tracking-widest bg-brand-accent/20 hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 whitespace-nowrap shadow-[0_0_20px_rgba(127,231,231,0.6)] cursor-pointer"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
