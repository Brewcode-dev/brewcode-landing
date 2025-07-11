import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, Database, Users, Mail } from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    {
      title: 'Zbieranie danych',
      icon: Database,
      content: [
        'Dane osobowe (imię, nazwisko, email)',
        'Dane techniczne (IP, przeglądarka, urządzenie)',
        'Dane użytkowania aplikacji',
        'Dane płatności (przetwarzane przez zewnętrznych operatorów)'
      ]
    },
    {
      title: 'Wykorzystanie danych',
      icon: Users,
      content: [
        'Świadczenie usług i wsparcie techniczne',
        'Komunikacja marketingowa (za zgodą)',
        'Analiza i ulepszanie aplikacji',
        'Zapewnienie bezpieczeństwa'
      ]
    },
    {
      title: 'Udostępnianie danych',
      icon: Mail,
      content: [
        'Dostawcy usług płatności',
        'Dostawcy infrastruktury technicznej',
        'Organy prawne (na żądanie)',
        'Nie sprzedajemy danych osobom trzecim'
      ]
    },
    {
      title: 'Bezpieczeństwo',
      icon: Lock,
      content: [
        'Szyfrowanie SSL/TLS',
        'Regularne audyty bezpieczeństwa',
        'Kontrola dostępu do danych',
        'Backup i recovery'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFE9CF] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-[#ff4f19] flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-[#ff4f19]">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Polityka <span className="text-[#ff4f19]">Prywatności</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dbamy o Twoją prywatność. Dowiedz się, jak chronimy i wykorzystujemy Twoje dane.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] mb-12">
          <p className="text-gray-600 dark:text-gray-300 text-center">
            <strong>Ostatnia aktualizacja:</strong> 15 stycznia 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] mb-12">
          <h2 className="text-2xl font-black text-gray-800 dark:text-white mb-6">
            Wprowadzenie
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Brewcode ("my", "nas", "nasza firma") szanuje prywatność użytkowników naszych aplikacji i stron internetowych. 
            Ta Polityka Prywatności wyjaśnia, jak zbieramy, wykorzystujemy i chronimy Twoje dane osobowe.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Korzystając z naszych usług, wyrażasz zgodę na zbieranie i wykorzystywanie informacji zgodnie z tą polityką.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-center mb-6">
                  <IconComponent className="w-8 h-8 text-[#ff4f19] mr-4" />
                  <h3 className="text-2xl font-black text-gray-800 dark:text-white">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-[#ff4f19] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Rights */}
        <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] mb-12">
          <h2 className="text-2xl font-black text-gray-800 dark:text-white mb-6">
            Twoje prawa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-black text-gray-800 dark:text-white">Dostęp do danych</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Możesz poprosić o kopię swoich danych osobowych w dowolnym momencie.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-black text-gray-800 dark:text-white">Poprawka danych</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Możesz poprosić o poprawienie nieprawidłowych lub niekompletnych danych.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-black text-gray-800 dark:text-white">Usunięcie danych</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Możesz poprosić o usunięcie swoich danych osobowych.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-black text-gray-800 dark:text-white">Przenoszenie danych</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Możesz poprosić o przeniesienie danych do innego administratora.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] mb-12">
          <h2 className="text-2xl font-black text-gray-800 dark:text-white mb-6">
            Kontakt
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Jeśli masz pytania dotyczące tej Polityki Prywatności, skontaktuj się z nami:
          </p>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p><strong>Email:</strong> privacy@brewcode.pl</p>
            <p><strong>Telefon:</strong> +48 123 456 789</p>
            <p><strong>Adres:</strong> Warszawa, Polska</p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/">
            <button className="bg-[#ff4f19] text-white font-bold py-4 px-8 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-1px] hover:translate-y-[-1px]">
              Powrót do strony głównej
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 