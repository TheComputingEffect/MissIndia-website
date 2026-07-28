import { Link } from 'react-router-dom';
import logoPng from '../assets/logo.png';

import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebookF,
} from 'react-icons/fa';

import {
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t-2 border-brand-accent bg-gradient-to-b from-[#033B3D] to-[#02282a] pt-20 pb-10 shadow-[0_-15px_40px_rgba(3,59,61,0.4)]">
      {/* Decorative top cyan glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-brand-accent to-transparent shadow-[0_0_15px_#7FE7E7]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* TOP FOOTER */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="space-y-6">

            <Link
              to="/"
              className="inline-flex flex-col items-start group"
            >
              <img 
                src={logoPng} 
                alt="MISS INDIA" 
                className="h-10 md:h-12 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="font-heading font-bold text-sm tracking-[0.25em] text-white group-hover:text-brand-accent transition-colors uppercase mt-1 leading-none">
                MISS INDIA
              </span>
            </Link>

            <p className="max-w-xs font-body text-sm leading-relaxed text-brand-secondary/70">
              Crafting timeless luxury celebrations with elegance and perfection.
              Your dream event, curated by experts.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/20 text-brand-secondary transition-all duration-300 hover:border-brand-accent hover:text-brand-accent hover:scale-110"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/20 text-brand-secondary transition-all duration-300 hover:border-brand-accent hover:text-brand-accent hover:scale-110"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/20 text-brand-secondary transition-all duration-300 hover:border-brand-accent hover:text-brand-accent hover:scale-110"
              >
                <FaTwitter size={16} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/20 text-brand-secondary transition-all duration-300 hover:border-brand-accent hover:text-brand-accent hover:scale-110"
              >
                <FaLinkedin size={16} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/20 text-brand-secondary transition-all duration-300 hover:border-brand-accent hover:text-brand-accent hover:scale-110"
              >
                <FaYoutube size={16} />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h4 className="mb-6 font-heading text-lg tracking-wider text-brand-secondary">
              Quick Links
            </h4>

            <ul className="space-y-4">

              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Events', path: '/events' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.label}>

                  <Link
                    to={link.path}
                    className="font-body text-sm text-brand-secondary/70 transition-colors duration-300 hover:text-brand-accent"
                  >
                    {link.label}
                  </Link>

                </li>
              ))}

            </ul>
          </div>

          {/* SERVICES */}
          <div>

            <h4 className="mb-6 font-heading text-lg tracking-wider text-brand-secondary">
              Our Services
            </h4>

            <ul className="space-y-4">

              {[
                'Luxury Weddings',
                'Birthday Events',
                'Baby Showers',
                'Corporate Events',
                'Premium Decor',
              ].map((service) => (
                <li key={service}>

                  <Link
                    to="/services"
                    className="font-body text-sm text-brand-secondary/70 transition-colors duration-300 hover:text-brand-accent"
                  >
                    {service}
                  </Link>

                </li>
              ))}

            </ul>
          </div>

          {/* CONTACT */}
          <div>

            <h4 className="mb-6 font-heading text-lg tracking-wider text-brand-secondary">
              Contact Us
            </h4>

            <ul className="space-y-5">

              <li className="flex items-start gap-3 text-sm text-brand-secondary/70">

                <MapPin
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-brand-accent"
                />

                <span>
                  72, Brindavan Nagar, PNT Colony, Kavundampalayam, Coimbatore – 641030
                </span>

              </li>

              <li className="flex items-center gap-3 text-sm text-brand-secondary/70">

                <Phone
                  size={18}
                  className="flex-shrink-0 text-brand-accent"
                />

                <a href="tel:+917904516541" className="hover:text-brand-accent transition-colors">
                  +91 79045 16541
                </a>

              </li>

              <li className="flex items-center gap-3 text-sm text-brand-secondary/70">

                <Mail
                  size={18}
                  className="flex-shrink-0 text-brand-accent"
                />

                <a href="mailto:varshaevents.21@gmail.com" className="hover:text-brand-accent transition-colors break-all">
                  varshaevents.21@gmail.com
                </a>

              </li>

            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-brand-secondary/10 pt-8 md:flex-row">

          <p className="font-body text-xs text-brand-secondary/50">
            © {new Date().getFullYear()} MISSINDIA Event Planner.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              to="/privacy"
              className="font-body text-xs text-brand-secondary/50 transition-colors duration-300 hover:text-brand-accent"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="font-body text-xs text-brand-secondary/50 transition-colors duration-300 hover:text-brand-accent"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;