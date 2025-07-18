'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { LifeBuoy, HelpCircle, Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { useFadeInUp, useStaggerAnimation } from '../../hooks/useScrollAnimation';

export default function WsparciePage() {
  // Animation refs
  const headerRef = useFadeInUp(0, 0.2);
  const faqRef = useStaggerAnimation(0.15);
  const contactRef = useStaggerAnimation(0.2);
  const helpCenterRef = useFadeInUp(0.3, 0.4);

  const faqs = [
    {
      question: 'Jak zgłosić problem techniczny?',
      answer: 'Najlepiej napisz do nas na support@brewcode.pl lub skorzystaj z formularza kontaktowego.'
    },
    {
      question: 'Jak szybko odpowiadacie?',
      answer: 'W dni robocze odpowiadamy w ciągu 24h. W weekendy tylko na pilne zgłoszenia.'
    },
    {
      question: 'Czy mogę zadzwonić?',
      answer: 'Tak, nasz numer to +48 123 456 789 (Pon-Pt 9:00-17:00).'
    },
    {
      question: 'Gdzie znajdę instrukcje i poradniki?',
      answer: 'Wszystkie materiały znajdziesz w Centrum Pomocy.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFE9CF] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="w-16 h-16 bg-[#ff4f19] flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-[#ff4f19]">
            <LifeBuoy className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Wsparcie <span className="text-[#ff4f19]">Brewcode</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Potrzebujesz pomocy? Sprawdź najczęstsze pytania lub skontaktuj się z nami.
          </p>
        </div>

        {/* FAQ */}
        <div ref={faqRef} className="mb-16">
          <h2 className="text-2xl font-black text-gray-800 dark:text-white mb-8 text-center">
            Najczęstsze pytania
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
                <h3 className="text-lg font-black text-gray-800 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div ref={contactRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] flex flex-col items-center">
            <Mail className="w-8 h-8 text-[#ff4f19] mb-4" />
            <h3 className="text-lg font-black text-gray-800 dark:text-white mb-2">Email</h3>
            <a href="mailto:support@brewcode.pl" className="text-[#ff4f19] font-bold mb-2">support@brewcode.pl</a>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Odpowiadamy w ciągu 24h</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] flex flex-col items-center">
            <Phone className="w-8 h-8 text-[#ff4f19] mb-4" />
            <h3 className="text-lg font-black text-gray-800 dark:text-white mb-2">Telefon</h3>
            <a href="tel:+48123456789" className="text-[#ff4f19] font-bold mb-2">+48 123 456 789</a>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Pon-Pt: 9:00-17:00</p>
          </div>
        </div>

        {/* Help Center Link */}
        <div ref={helpCenterRef} className="text-center">
          <Link href="/help" className="inline-flex items-center text-[#ff4f19] hover:text-orange-600 transition-colors duration-200 font-bold">
            <HelpCircle className="w-5 h-5 mr-2" />
            Przejdź do Centrum Pomocy
          </Link>
        </div>
      </div>
    </div>
  );
} 