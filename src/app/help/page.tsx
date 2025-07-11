import React from 'react';
import Link from 'next/link';
import { HelpCircle, BookOpen, MessageCircle, Video, FileText, Search } from 'lucide-react';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#FFE9CF] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-[#ff4f19] flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-[#ff4f19]">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Centrum <span className="text-[#ff4f19]">Pomocy</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Znajdź odpowiedzi na najczęściej zadawane pytania i naucz się korzystać z naszych aplikacji.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Szukaj w pomocy..."
              className="w-full pl-12 pr-4 py-4 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] text-gray-800 dark:text-white bg-white dark:bg-gray-700 font-bold focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link href="/help/videos" className="quick-action-card bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] block">
            <div className="w-12 h-12 bg-[#ff4f19] flex items-center justify-center mb-6 shadow-lg border-2 border-[#ff4f19]">
              <Video className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-black text-gray-800 dark:text-white mb-2">
              Zobacz tutoriale wideo
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Krótkie filmy instruktażowe
            </p>
          </Link>
          
          <Link href="/help/docs" className="quick-action-card bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] block">
            <div className="w-12 h-12 bg-[#ff4f19] flex items-center justify-center mb-6 shadow-lg border-2 border-[#ff4f19]">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-black text-gray-800 dark:text-white mb-2">
              Pobierz dokumentację PDF
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Kompletne przewodniki użytkownika
            </p>
          </Link>
          
          <Link href="/kontakt" className="quick-action-card bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] block">
            <div className="w-12 h-12 bg-[#ff4f19] flex items-center justify-center mb-6 shadow-lg border-2 border-[#ff4f19]">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-black text-gray-800 dark:text-white mb-2">
              Skontaktuj się z supportem
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Odpowiemy w ciągu 24h
            </p>
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-black text-gray-800 dark:text-white mb-8 text-center">
            Często zadawane pytania
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <h3 className="font-black text-gray-800 dark:text-white mb-2">
                Jak zmienić plan subskrypcji?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Przejdź do ustawień konta i wybierz "Zmień plan". Różnica w cenie zostanie rozliczona proporcjonalnie.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <h3 className="font-black text-gray-800 dark:text-white mb-2">
                Czy mogę eksportować moje dane?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Tak, w ustawieniach konta znajdziesz opcję eksportu danych w formatach CSV, JSON i PDF.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <h3 className="font-black text-gray-800 dark:text-white mb-2">
                Jak skontaktować się z supportem?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Użyj formularza kontaktowego, napisz na support@brewcode.pl lub zadzwoń +48 123 456 789.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <h3 className="font-black text-gray-800 dark:text-white mb-2">
                Czy aplikacje działają offline?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Tak, podstawowe funkcje działają offline. Synchronizacja nastąpi po ponownym połączeniu z internetem.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-4">
              Nie znalazłeś odpowiedzi?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Nasz zespół wsparcia jest gotowy pomóc Ci w każdej sprawie.
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