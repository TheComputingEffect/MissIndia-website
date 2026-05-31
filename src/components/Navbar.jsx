import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import clsx from 'clsx';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and reset dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
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
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { 
      name: 'Events', 
      path: '/events',
      dropdown: [
        { name: 'DJ Services', path: '/events/dj-services' },
        { name: 'Dance Crew with Pyros & Blast Effects', path: '/events/dance-crew' },
        { name: 'Wedding & Engagement Events', path: '/events' },
        { name: 'Puberty Ceremony Events', path: '/events' },
        { name: 'Baby Shower Events', path: '/events' },
        { name: 'Collaboration & Modelling Shoots', path: '/events' },
        { name: 'Corporate Events', path: '/events' },
        { name: 'Surprise Events for Loved Ones', path: '/events' }
      ]
    },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        scrolled ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-brand-secondary/20 py-4 shadow-glass' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center lg:grid lg:grid-cols-3 lg:gap-4">
        {/* Column 1: Logo */}
        <div className="flex justify-start items-center">
          <Link to="/" className="text-2xl md:text-3xl font-heading font-bold tracking-widest text-brand-secondary relative group whitespace-nowrap">
            MISSINDIA
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
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
                    initial={{ opacity: 0, y: 10, visibility: 'hidden' }}
                    animate={{ opacity: 1, y: 0, visibility: 'visible' }}
                    exit={{ opacity: 0, y: 10, visibility: 'hidden' }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 w-[340px]"
                  >
                    <div className="bg-brand-dark/95 backdrop-blur-xl border border-brand-secondary/20 rounded-2xl shadow-glass overflow-hidden relative">
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
            <Link
              to="/contact"
              className="relative min-w-[220px] xl:min-w-[245px] h-12 flex items-center justify-center rounded-full border border-brand-secondary/30 text-brand-secondary font-body text-xs xl:text-sm uppercase tracking-widest overflow-hidden group hover:border-brand-accent transition-all duration-500 glass-card whitespace-nowrap px-6 shadow-glass"
            >
              <span className="relative z-10 group-hover:text-brand-accent transition-colors duration-300">Book Consultation</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
            </Link>
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
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-xl border-b border-brand-secondary/20 shadow-glass"
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
              <Link
                to="/contact"
                className="mt-6 w-full h-12 flex items-center justify-center rounded-full border border-brand-accent text-brand-accent font-body text-sm uppercase tracking-widest bg-brand-accent/10 hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 whitespace-nowrap shadow-glass"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveDropdown(null);
                }}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
