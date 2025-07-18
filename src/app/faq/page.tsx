'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../../components/ui/Button';
import { useFadeInUp, useStaggerAnimation } from '../../hooks/useScrollAnimation';

export default function FAQPage() {
  // Animation refs
  const headerRef = useFadeInUp(0, 0.2);
  const faqsRef = useStaggerAnimation(0.15);
  const contactRef = useFadeInUp(0.3, 0.3);

  const faqs = [
    {
      question: 'Jak rozpocząć darmowy trial?',
      answer: 'Wystarczy zarejestrować się na naszej stronie i wybrać plan. Nie wymagamy karty kredytowej - trial trwa 30 dni.'
    },
    {
      question: 'Czy mogę zmienić plan w trakcie subskrypcji?',
      answer: 'Tak, możesz zmienić plan w dowolnym momencie. Różnica w cenie zostanie rozliczona proporcjonalnie.'
    },
    {
      question: 'Jakie są metody płatności?',
      answer: 'Akceptujemy karty kredytowe (Visa, MasterCard), przelewy bankowe i płatności online (PayPal, Stripe).'
    },
    {
      question: 'Czy moje dane są bezpieczne?',
      answer: 'Tak, używamy najwyższych standardów bezpieczeństwa, w tym szyfrowania SSL/TLS i regularnych audytów bezpieczeństwa.'
    },
    {
      question: 'Czy aplikacje działają na telefonach?',
      answer: 'Tak, wszystkie nasze aplikacje są w pełni responsywne i działają na urządzeniach mobilnych.'
    },
    {
      question: 'Jak mogę skontaktować się z supportem?',
      answer: 'Możesz napisać na support@brewcode.pl, zadzwonić +48 123 456 789 lub użyć formularza kontaktowego.'
    },
    {
      question: 'Czy mogę eksportować moje dane?',
      answer: 'Tak, w ustawieniach konta znajdziesz opcję eksportu danych w formatach CSV, JSON i PDF.'
    },
    {
      question: 'Jak często są aktualizacje?',
      answer: 'Wprowadzamy nowe funkcje co miesiąc. Aktualizacje są automatyczne i nie wymagają interwencji użytkownika.'
    }
  ];

  return (
    <div className="min-h-screen bg-theme-background transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="w-16 h-16 bg-[#ff4f19] flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-[#ff4f19]">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Często zadawane <span className="text-[#ff4f19]">pytania</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych aplikacji i usług.
          </p>
        </div>

        {/* FAQ List */}
        <div ref={faqsRef} className="space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-theme-surface p-6 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] hover:shadow-[8px_8px_0px_0px_var(--theme-shadow)] transition-all duration-300"
            >
              <h3 className="text-lg font-black text-gray-800 dark:text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div ref={contactRef} className="text-center">
          <div className="bg-theme-surface p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_var(--theme-shadow)]">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-4">
              Nie znalazłeś odpowiedzi?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Skontaktuj się z naszym zespołem wsparcia - chętnie pomożemy!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button variant="primary" size="md">
                  Skontaktuj się
                </Button>
              </Link>
              <Link href="/">
                <Button variant="secondary" size="md">
                  Powrót do strony głównej
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 