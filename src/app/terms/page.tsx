'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { useFadeInUp, useStaggerAnimation } from '../../hooks/useScrollAnimation';

export default function TermsPage() {
  // Animation refs
  const headerRef = useFadeInUp(0, 0.2);
  const lastUpdatedRef = useFadeInUp(0.2, 0.3);
  const introRef = useFadeInUp(0.3, 0.4);
  const sectionsRef = useStaggerAnimation(0.15);
  const dosDontsRef = useFadeInUp(0.4, 0.5);
  const terminationRef = useFadeInUp(0.5, 0.6);
  const contactRef = useFadeInUp(0.6, 0.7);
  const backRef = useFadeInUp(0.7, 0.8);

  const sections = [
    {
      title: 'Akceptacja regulaminu',
      icon: CheckCircle,
      content: [
        'Korzystanie z naszych usług oznacza akceptację niniejszego regulaminu',
        'Regulamin może być zmieniony w dowolnym momencie',
        'O zmianach będziemy informować drogą elektroniczną',
        'Kontynuacja korzystania oznacza akceptację zmian'
      ]
    },
    {
      title: 'Zakres usług',
      icon: FileText,
      content: [
        'Dostęp do aplikacji webowych i mobilnych',
        'Wsparcie techniczne w godzinach pracy',
        'Aktualizacje i nowe funkcje',
        'Dokumentacja i szkolenia online'
      ]
    },
    {
      title: 'Obligacje użytkownika',
      icon: AlertTriangle,
      content: [
        'Zachowanie poufności danych logowania',
        'Zakaz udostępniania konta osobom trzecim',
        'Zakaz używania aplikacji do celów nielegalnych',
        'Przestrzeganie praw autorskich'
      ]
    },
    {
      title: 'Ograniczenia odpowiedzialności',
      icon: Scale,
      content: [
        'Nie odpowiadamy za straty pośrednie',
        'Maksymalna odpowiedzialność to kwota opłacona za usługę',
        'Nie gwarantujemy ciągłości działania',
        'Użytkownik ponosi odpowiedzialność za swoje dane'
      ]
    }
  ];

  const prohibited = [
    'Używanie aplikacji do celów nielegalnych',
    'Próby włamania lub sabotażu',
    'Udostępnianie danych osobom trzecim',
    'Kopiowanie i rozpowszechnianie kodu',
    'Przeciążanie serwerów',
    'Spam i niepożądane treści'
  ];

  const allowed = [
    'Korzystanie zgodnie z przeznaczeniem',
    'Kontakt w sprawie problemów technicznych',
    'Sugerowanie nowych funkcji',
    'Udostępnianie opinii i feedbacku',
    'Korzystanie z dokumentacji',
    'Uczestnictwo w społeczności'
  ];

  return (
    <div className="min-h-screen bg-[#FFE9CF] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="w-16 h-16 bg-[#ff4f19] flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-[#ff4f19]">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Regulamin <span className="text-[#ff4f19]">Usług</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Zapoznaj się z warunkami korzystania z naszych aplikacji i usług.
          </p>
        </div>

        {/* Last Updated */}
        <div ref={lastUpdatedRef} className="bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] mb-12">
          <p className="text-gray-600 dark:text-gray-300 text-center">
            <strong>Ostatnia aktualizacja:</strong> 15 stycznia 2024
          </p>
        </div>

        {/* Introduction */}
        <div ref={introRef} className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] mb-12">
          <h2 className="text-2xl font-black text-gray-800 dark:text-white mb-6">
            Wprowadzenie
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Niniejszy regulamin określa warunki korzystania z aplikacji i usług świadczonych przez Brewcode. 
            Korzystając z naszych usług, akceptujesz wszystkie postanowienia tego regulaminu.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Jeśli nie zgadzasz się z którymkolwiek z postanowień, nie korzystaj z naszych usług.
          </p>
        </div>

        {/* Sections */}
        <div ref={sectionsRef} className="space-y-8 mb-12">
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
                      <div className="w-2 h-2 bg-[#ff4f19] mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Do's and Don'ts */}
        <div ref={dosDontsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Allowed */}
          <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-500 mr-4" />
              <h3 className="text-2xl font-black text-gray-800 dark:text-white">
                Dozwolone
              </h3>
            </div>
            <ul className="space-y-3">
              {allowed.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prohibited */}
          <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
            <div className="flex items-center mb-6">
              <XCircle className="w-8 h-8 text-red-500 mr-4" />
              <h3 className="text-2xl font-black text-gray-800 dark:text-white">
                Zabronione
              </h3>
            </div>
            <ul className="space-y-3">
              {prohibited.map((item, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Termination */}
        <div ref={terminationRef} className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] mb-12">
          <h2 className="text-2xl font-black text-gray-800 dark:text-white mb-6">
            Rozwiązanie umowy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-black text-gray-800 dark:text-white">Przez użytkownika</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Możesz zrezygnować z usługi w dowolnym momencie poprzez panel użytkownika lub kontakt z nami.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-black text-gray-800 dark:text-white">Przez nas</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Możemy zawiesić lub zakończyć usługę w przypadku naruszenia regulaminu.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div ref={contactRef} className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] mb-12">
          <h2 className="text-2xl font-black text-gray-800 dark:text-white mb-6">
            Kontakt
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Jeśli masz pytania dotyczące tego regulaminu, skontaktuj się z nami:
          </p>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p><strong>Email:</strong> legal@brewcode.pl</p>
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