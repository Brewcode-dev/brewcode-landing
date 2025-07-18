'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ThemeSelector from './ThemeSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  const navItems = [
    { name: 'Strona główna', href: '/' },
    { name: 'O nas', href: '/#about' },
    { name: 'Technologie', href: '/#technologies' },
    { name: 'Aplikacje', href: '/#apps' },
    { name: 'Proces', href: '/#process' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        const sections = ['about', 'technologies', 'apps', 'process'];
        const headerHeight = 80; // Header height in pixels
        const scrollPosition = window.scrollY + headerHeight + 50; // Offset for header + extra space

        let foundActiveSection = '';
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              foundActiveSection = section;
              break;
            }
          }
        }
        
        setActiveSection(foundActiveSection);
      }
    };

    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
    } else {
      setActiveSection(''); // Clear active section on other pages
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    // Check if it's the current page
    if (href === '/' && pathname === '/') return true;
    if (href === '/kontakt' && pathname === '/kontakt') return true;
    if (href === '/support' && pathname === '/support') return true;
    if (href === '/wsparcie' && pathname === '/wsparcie') return true;
    if (href === '/help' && pathname === '/help') return true;
    if (href === '/faq' && pathname === '/faq') return true;
    if (href === '/privacy' && pathname === '/privacy') return true;
    if (href === '/terms' && pathname === '/terms') return true;
    if (href === '/status' && pathname === '/status') return true;
    
    // Check if it's the active section on homepage
    if (href.startsWith('/#') && pathname === '/') {
      const sectionId = href.substring(2);
      return activeSection === sectionId;
    }
    
    return false;
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    // Jeśli to link do sekcji na stronie głównej
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2); // Usuń '/#'
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Zamknij menu mobilne jeśli jest otwarte
        setIsMenuOpen(false);
        
        // Smooth scroll do sekcji z uwzględnieniem wysokości headera
        const headerHeight = 80; // Header height in pixels
        const targetPosition = targetElement.offsetTop - headerHeight; // Extra offset for better positioning
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Close mobile menu for page navigation
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-[0px_4px_0px_0px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 select-none">
            <span className="text-[#ff4f19] font-black text-2xl tracking-tight transition-transform duration-200 font-heading-poppins">
              Brewcode
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`transition-all duration-200 font-bold text-lg px-3 py-2 cursor-pointer font-heading-poppins border-2 ${
                  isActiveLink(item.href)
                    ? 'text-[#ff4f19] bg-[#ff4f19]/10 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]'
                    : 'text-gray-800 dark:text-white hover:text-[#ff4f19] hover:bg-[#ff4f19]/10  border-transparent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeSelector />
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-800 dark:text-white p-2 hover:bg-orange-500/10 transition-colors duration-150"
              aria-label="Otwórz menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t-4 border-[#ff4f19] shadow-[0px_4px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-150">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`block px-3 py-3 font-bold text-lg transition-all duration-150 cursor-pointer font-heading-poppins border-2 ${
                    isActiveLink(item.href)
                      ? 'text-[#ff4f19] bg-[#ff4f19]/10 border-[#ff4f19] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                      : 'text-gray-800 dark:text-white hover:text-[#ff4f19] hover:bg-[#ff4f19]/10 border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 