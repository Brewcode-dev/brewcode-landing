import React from 'react';
import Link from 'next/link';
import { LifeBuoy, Mail, Phone, MessageCircle, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#FFE9CF] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-[#ff4f19] flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-[#ff4f19]">
            <LifeBuoy className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Wsparcie <span className="text-[#ff4f19]">Techniczne</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Potrzebujesz pomocy? Skontaktuj się z naszym zespołem wsparcia lub skorzystaj z poniższych zasobów.
          </p>
        </div>

        {/* Quick Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Link href="/help" className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] flex flex-col items-center hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px]">
            <MessageCircle className="w-8 h-8 text-[#ff4f19] mb-4" />
            <h3 className="text-lg font-black text-gray-800 dark:text-white mb-2">Centrum Pomocy</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">FAQ, poradniki, tutoriale</p>
          </Link>
          <Link href="/status" className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] flex flex-col items-center hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px]">
            <CheckCircle className="w-8 h-8 text-[#ff4f19] mb-4" />
            <h3 className="text-lg font-black text-gray-800 dark:text-white mb-2">Status Usług</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Sprawdź czy wszystko działa</p>
          </Link>
        </div>

        {/* Service Hours */}
        <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] mb-12 flex flex-col items-center">
          <Clock className="w-8 h-8 text-[#ff4f19] mb-4" />
          <h3 className="text-lg font-black text-gray-800 dark:text-white mb-2">Godziny wsparcia</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Poniedziałek - Piątek: 9:00 - 17:00</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Weekend: tylko email</p>
        </div>

        {/* Alert */}
        <div className="bg-yellow-50 dark:bg-yellow-900 p-6 border-4 border-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] flex items-center mb-8">
          <AlertTriangle className="w-6 h-6 text-yellow-500 mr-4" />
          <span className="text-yellow-800 dark:text-yellow-200 font-bold">W przypadku awarii lub pilnych problemów, napisz "PILNE" w tytule maila.</span>
        </div>
      </div>
    </div>
  );
} 