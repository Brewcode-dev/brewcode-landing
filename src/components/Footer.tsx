'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'O nas', href: '#about' },
    { name: 'Technologie', href: '#technologies' },
    { name: 'Aplikacje', href: '#apps' },
    { name: 'Proces', href: '#process' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const productLinks = [
    { name: 'BrewMaster Pro', href: '#apps' },
    { name: 'PubTracker', href: '#apps' },
    { name: 'API', href: '/api' },
    { name: 'Dokumentacja', href: '/docs' },
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

  return (
    <footer className="bg-gray-900 text-white border-t-2 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-sm">B</span>
              </div>
              <span className="text-2xl font-black text-white">Brewcode</span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Tworzymy aplikacje dla miłośników piwa kraftowego. Łączymy tradycję z nowoczesną technologią.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-gray-300">kontakt@brewcode.pl</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-gray-300">+48 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-gray-300">Warszawa, Polska</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-black mb-4 text-orange-500">Firma</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-black mb-4 text-orange-500">Produkty</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-black mb-4 text-orange-500">Wsparcie</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-orange-500 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
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
                    className="w-10 h-10 bg-gray-800 border-2 border-orange-500 rounded-lg flex items-center justify-center text-gray-300 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-200 shadow-lg"
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
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                Polityka prywatności
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 