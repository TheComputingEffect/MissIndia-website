import { Link } from 'react-router-dom';

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
    <footer className="relative z-10 border-t border-brand-secondary/10 bg-brand-dark pt-20 pb-10">
      
      <div className="container mx-auto px-6 lg:px-12">

        {/* TOP FOOTER */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="space-y-6">

            <Link
              to="/"
              className="font-heading text-3xl font-bold tracking-[0.25em] text-brand-secondary"
            >
              MISSINDIA
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
                'Home',
                'About',
                'Gallery',
                'Packages',
                'Blogs',
                'Contact',
              ].map((link) => (
                <li key={link}>

                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="font-body text-sm text-brand-secondary/70 transition-colors duration-300 hover:text-brand-accent"
                  >
                    {link}
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
                  Coimbatore, Tamil Nadu, India
                </span>

              </li>

              <li className="flex items-center gap-3 text-sm text-brand-secondary/70">

                <Phone
                  size={18}
                  className="flex-shrink-0 text-brand-accent"
                />

                <span>
                  +91 98765 43210
                </span>

              </li>

              <li className="flex items-center gap-3 text-sm text-brand-secondary/70">

                <Mail
                  size={18}
                  className="flex-shrink-0 text-brand-accent"
                />

                <span>
                  hello@missindiaevents.com
                </span>

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