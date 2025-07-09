'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Strona główna', href: '/' },
    { name: 'O nas', href: '/#about' },
    { name: 'Technologie', href: '/#technologies' },
    { name: 'Aplikacje', href: '/#apps' },
    { name: 'Proces', href: '/#process' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b-4 border-[#ff4f19] shadow-[0px_4px_0px_0px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 select-none">
            <span className="text-orange-500 font-black text-2xl tracking-tight hover:scale-105 transition-transform duration-200">
              Brewcode
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 dark:text-white hover:text-orange-500 transition-all duration-200 font-bold text-lg px-3 py-2 rounded hover:bg-orange-500/10 hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-800 dark:text-white p-2 hover:bg-orange-500/10 rounded transition-colors duration-200"
              aria-label="Otwórz menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t-4 border-[#ff4f19] shadow-[0px_4px_0px_0px_rgba(0,0,0,0.2)]">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-gray-800 dark:text-white hover:text-orange-500 hover:bg-orange-500/10 font-bold text-lg rounded transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
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