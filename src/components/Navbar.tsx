import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Search, User, ShoppingBag, Sun, Moon, 
  Car, Bell, Heart, Globe, ChevronDown, Phone,
  MapPin, Clock, Mail, Palette
} from 'lucide-react';

interface NavbarProps {
  isDarkMode?: boolean;
  setIsDarkMode?: (value: boolean) => void;
  theme?: string;
  setTheme?: (value: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode = true, setIsDarkMode, theme = 'theme-golden', setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/catalog', label: 'Catalog' },
    { path: '/showroom', label: 'Showroom' },
    { path: '/compare', label: 'Compare' },
    { path: '/saved', label: 'Saved' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={`hidden lg:block bg-premium-navy text-premium-pearl py-2 ${
        scrolled ? 'hidden' : ''
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+18002277" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} />
                <span>1-800-CARS (2277)</span>
              </a>
              <a href="mailto:info@automarket.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} />
                <span>info@automarket.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>Find a Dealer</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>Mon-Sat: 9AM-8PM</span>
              </div>
              <button className="flex items-center gap-1 hover:text-white transition-colors">
                <Globe size={14} />
                <span>EN</span>
                <ChevronDown size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`nav-premium transition-all duration-300 ${
        scrolled ? 'py-3 shadow-premium top-0' : 'py-4 lg:top-10 top-0'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-premium-blue to-accent-indigo rounded-lg shadow-premium">
                <Car className="text-white" size={24} />
              </div>
              <div>
                <span className="text-xl font-bold text-premium-navy dark:text-white">
                  AutoMarket
                </span>
                <span className="block text-xs text-premium-gray">Premium Collection</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-medium transition-all hover:text-premium-blue ${
                    location.pathname === link.path
                      ? 'text-premium-blue'
                      : 'text-premium-slate dark:text-premium-pearl'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-premium-blue rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-premium-pearl dark:hover:bg-dark-hover transition-colors">
                <Search size={20} className="text-premium-slate dark:text-premium-pearl" />
              </button>
              
              <button className="relative p-2 rounded-lg hover:bg-premium-pearl dark:hover:bg-dark-hover transition-colors">
                <Heart size={20} className="text-premium-slate dark:text-premium-pearl" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-premium-gold text-white text-xs rounded-full flex items-center justify-center font-bold">
                  2
                </span>
              </button>

              <button className="relative p-2 rounded-lg hover:bg-premium-pearl dark:hover:bg-dark-hover transition-colors">
                <ShoppingBag size={20} className="text-premium-slate dark:text-premium-pearl" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-blue text-white text-xs rounded-full flex items-center justify-center font-bold">
                  3
                </span>
              </button>

              <button className="relative p-2 rounded-lg hover:bg-premium-pearl dark:hover:bg-dark-hover transition-colors">
                <Bell size={20} className="text-premium-slate dark:text-premium-pearl" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-premium-emerald rounded-full animate-pulse" />
              </button>

              <div className="h-6 w-px bg-premium-silver dark:bg-dark-border mx-2" />

              {/* Theme Selector */}
              {/*
              {setTheme && (
                <button
                  onClick={() => setTheme(theme === 'golden' ? 'default' : 'golden')}
                  className={`p-2 rounded-lg hover:bg-premium-pearl dark:hover:bg-dark-hover transition-colors ${
                    theme === 'golden' ? 'text-yellow-600' : 'text-premium-slate dark:text-premium-pearl'
                  }`}
                  title={`Switch to ${theme === 'golden' ? 'Default' : 'Golden'} Theme`}
                >
                  <Palette size={20} />
                </button>
              )}
              */}
              {/* Dark Mode Toggle */}
              {/* 
              {setIsDarkMode && (
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-lg hover:bg-premium-pearl dark:hover:bg-dark-hover transition-colors"
                >
                  {isDarkMode ? (
                    <Sun size={20} className="text-premium-pearl" />
                  ) : (
                    <Moon size={20} className="text-premium-slate" />
                  )}
                </button>
              )}
              */}
              {/* User Account */}
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-premium-pearl dark:hover:bg-dark-hover transition-colors">
                <User size={20} className="text-premium-slate dark:text-premium-pearl" />
                <span className="text-sm font-medium text-premium-slate dark:text-premium-pearl">Account</span>
                <ChevronDown size={14} className="text-premium-gray" />
              </button>

              <Link to="/catalog" className="btn-premium">
                Browse Catalog
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-premium-slate dark:text-premium-pearl"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-premium-silver dark:border-dark-border">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 font-medium transition-colors hover:text-premium-blue ${
                    location.pathname === link.path
                      ? 'text-premium-blue font-semibold'
                      : 'text-premium-slate dark:text-premium-pearl'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-premium-silver dark:border-dark-border">
                <button className="p-2 rounded-lg bg-premium-pearl dark:bg-dark-hover">
                  <Search size={20} className="text-premium-slate dark:text-premium-pearl" />
                </button>
                <button className="p-2 rounded-lg bg-premium-pearl dark:bg-dark-hover">
                  <Heart size={20} className="text-premium-slate dark:text-premium-pearl" />
                </button>
                <button className="p-2 rounded-lg bg-premium-pearl dark:bg-dark-hover">
                  <ShoppingBag size={20} className="text-premium-slate dark:text-premium-pearl" />
                </button>
                <button className="p-2 rounded-lg bg-premium-pearl dark:bg-dark-hover">
                  <Bell size={20} className="text-premium-slate dark:text-premium-pearl" />
                </button>
                {setTheme && (
                  <button
                    onClick={() => setTheme(theme === 'golden' ? 'default' : 'golden')}
                    className={`p-2 rounded-lg bg-premium-pearl dark:bg-dark-hover ${
                      theme === 'golden' ? 'text-yellow-600' : 'text-premium-slate dark:text-premium-pearl'
                    }`}
                  >
                    <Palette size={20} />
                  </button>
                )}
                {setIsDarkMode && (
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-2 rounded-lg bg-premium-pearl dark:bg-dark-hover"
                  >
                    {isDarkMode ? (
                      <Sun size={20} className="text-premium-pearl" />
                    ) : (
                      <Moon size={20} className="text-premium-slate" />
                    )}
                  </button>
                )}
              </div>
              
              <Link 
                to="/catalog" 
                onClick={() => setIsOpen(false)}
                className="btn-premium w-full mt-4 text-center"
              >
                Browse Catalog
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;