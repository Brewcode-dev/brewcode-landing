'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'O nas', href: '/o-nas' },
      { name: 'Zespół', href: '/zespol' },
      { name: 'Kariera', href: '/kariera' },
      { name: 'Blog', href: '/blog' },
    ],
    products: [
      { name: 'BrewCode Analytics', href: '/app1' },
      { name: 'BrewCode Mobile', href: '/app2' },
      { name: 'BrewCode Platform', href: '/app3' },
      { name: 'API', href: '/api' },
    ],
    support: [
      { name: 'Dokumentacja', href: '/docs' },
      { name: 'Pomoc', href: '/pomoc' },
      { name: 'Status', href: '/status' },
      { name: 'Kontakt', href: '/kontakt' },
    ],
    legal: [
      { name: 'Polityka prywatności', href: '/polityka-prywatnosci' },
      { name: 'Regulamin', href: '/regulamin' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  ];

  return (
    <footer className="bg-gray-900 text-white border-t-2 border-international-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-international-orange-500 rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                <span className="text-white font-black text-sm">BC</span>
              </div>
              <span className="text-white font-black text-xl">Brewcode</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md font-medium">
              Tworzymy innowacyjne rozwiązania technologiczne, które pomagają firmom rozwijać się 
              w cyfrowym świecie. Nasze aplikacje łączą zaawansowaną technologię z intuicyjnym designem.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-international-orange-500" />
                <span className="font-medium">kontakt@brewcode.pl</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-international-orange-500" />
                <span className="font-medium">+48 123 456 789</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-international-orange-500" />
                <span className="font-medium">Warszawa, Polska</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-lg font-black mb-4 text-international-orange-500">Firma</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-international-orange-500 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black mb-4 text-international-orange-500">Produkty</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-international-orange-500 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black mb-4 text-international-orange-500">Wsparcie</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-international-orange-500 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-international-orange-500 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0 font-medium">
              © {currentYear} Brewcode. Wszystkie prawa zastrzeżone.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 border-2 border-international-orange-500 rounded-lg flex items-center justify-center text-gray-300 hover:text-international-orange-500 hover:bg-international-orange-500/10 transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start mt-6 space-x-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-international-orange-500 transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 