import React from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
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
    <div className="min-h-screen bg-[#FFE9CF] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
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
        <div className="space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300"
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
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-4">
              Nie znalazłeś odpowiedzi?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Skontaktuj się z naszym zespołem wsparcia - chętnie pomożemy!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <button className="bg-[#ff4f19] text-white font-bold py-4 px-8 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-1px] hover:translate-y-[-1px]">
                  Skontaktuj się
                </button>
              </Link>
              <Link href="/">
                <button className="bg-white dark:bg-gray-800 text-[#ff4f19] font-bold py-4 px-8 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-1px] hover:translate-y-[-1px]">
                  Powrót do strony głównej
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 