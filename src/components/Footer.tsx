'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github, Settings } from 'lucide-react';
import CookieConsent from './CookieConsent';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const pathname = usePathname();

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
    if (href === '/app1' && pathname === '/app1') return true;
    if (href === '/app2' && pathname === '/app2') return true;
    if (href === '/app3' && pathname === '/app3') return true;
    
    return false;
  };

  const companyLinks = [
    { name: 'O nas', href: '/#about' },
    { name: 'Technologie', href: '/#technologies' },
    { name: 'Aplikacje', href: '/#apps' },
    { name: 'Proces', href: '/#process' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const productLinks = [
    { name: 'BrewMaster Pro', href: '/app1' },
    { name: 'PubTracker', href: '/app2' },
    { name: 'BeerCraft Community', href: '/app3' },
    { name: 'API', href: '/api' },
  ];

  const supportLinks = [
    { name: 'Pomoc', href: '/help' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Wsparcie', href: '/support' },
    { name: 'Status', href: '/status' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
  ];

  const handleCookieSettings = () => {
    // Resetuj cookie consent i pokaż ponownie
    if (typeof window !== 'undefined' && (window as any).resetCookieConsent) {
      (window as any).resetCookieConsent();
    } else {
      // Fallback - pokaż ustawienia
      setShowCookieSettings(true);
    }
  };

  return (
    <>
      <footer className="bg-theme-background text-white border-t-4 border-[#ff4f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-[#ff4f19] flex items-center justify-center shadow-lg border-2 border-[#ff4f19]">
                  <span className="text-white font-black text-sm">B</span>
                </div>
                <span className="text-2xl font-black text-white font-heading-poppins">Brewcode</span>
              </div>
              
              <p className="text-theme-secondary mb-6 max-w-md font-body-roboto">
                Tworzymy aplikacje dla miłośników piwa kraftowego. Łączymy tradycję z nowoczesną technologią.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#ff4f19]" />
                  <span className="text-theme-secondary font-body-roboto">kontakt@brewcode.pl</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#ff4f19]" />
                  <span className="text-theme-secondary font-body-roboto">+48 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-[#ff4f19]" />
                  <span className="text-theme-secondary font-body-roboto">Warszawa, Polska</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-black mb-4 text-[#ff4f19] font-heading-poppins">Firma</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`transition-colors duration-200 font-medium font-body-roboto ${
                        isActiveLink(link.href)
                          ? 'text-[#ff4f19] font-bold'
                          : 'text-theme-secondary hover:text-[#ff4f19]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-lg font-black mb-4 text-[#ff4f19] font-heading-poppins">Produkty</h3>
              <ul className="space-y-2">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`transition-colors duration-200 font-medium font-body-roboto ${
                        isActiveLink(link.href)
                          ? 'text-[#ff4f19] font-bold'
                          : 'text-theme-secondary hover:text-[#ff4f19]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-black mb-4 text-[#ff4f19] font-heading-poppins">Wsparcie</h3>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`transition-colors duration-200 font-medium font-body-roboto ${
                        isActiveLink(link.href)
                          ? 'text-[#ff4f19] font-bold'
                          : 'text-theme-secondary hover:text-[#ff4f19]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t-4 border-[#ff4f19] mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-theme-secondary text-sm font-body-roboto">
                  © {currentYear} Brewcode. Wszystkie prawa zastrzeżone.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-theme-surface border-2 border-[#ff4f19] flex items-center justify-center text-theme-secondary hover:text-[#ff4f19] transition-all duration-200 shadow-[3px_3px_0px_0px_var(--theme-shadow)]"
                    >
                      <IconComponent className="w-4 h-4" />
                    </Link>
                  );
                })}
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6 text-sm">
                <Link
                  href="/privacy"
                  className={`transition-colors duration-200 font-medium font-body-roboto ${
                    isActiveLink('/privacy')
                      ? 'text-[#ff4f19] font-bold'
                      : 'text-theme-secondary hover:text-[#ff4f19]'
                  }`}
                >
                  Polityka prywatności
                </Link>
                <Link
                  href="/terms"
                  className={`transition-colors duration-200 font-medium font-body-roboto ${
                    isActiveLink('/terms')
                      ? 'text-[#ff4f19] font-bold'
                      : 'text-theme-secondary hover:text-[#ff4f19]'
                  }`}
                >
                  Regulamin
                </Link>
                <button
                  onClick={handleCookieSettings}
                  className="text-theme-secondary hover:text-[#ff4f19] transition-colors duration-200 font-medium flex items-center font-body-roboto"
                >
                  <Settings className="w-4 h-4 mr-1" />
                  Cookie
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent - pokaż ponownie jeśli użytkownik kliknął "Cookie" w footerze */}
      {showCookieSettings && (
        <CookieConsent 
          forceShow={true} 
          onPreferencesChange={(preferences) => {
            console.log('Preferencje cookie zmienione z footer:', preferences);
            setShowCookieSettings(false);
          }}
        />
      )}
    </>
  );
};

export default Footer; 