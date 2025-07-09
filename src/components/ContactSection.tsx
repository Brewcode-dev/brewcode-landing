'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Skontaktuj się z <span className="text-orange-500">nami</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Gotowy na współpracę? Napisz do nas lub zadzwoń. Odpowiemy w ciągu 24 godzin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-6">
              Wyślij wiadomość
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-800 dark:text-white mb-2">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-[#ff4f19] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 font-medium"
                  placeholder="Twoje imię i nazwisko"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-800 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-[#ff4f19] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 font-medium"
                  placeholder="twoj@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-800 dark:text-white mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-[#ff4f19] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 font-medium"
                  placeholder="+48 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-800 dark:text-white mb-2">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-[#ff4f19] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 font-medium resize-none"
                  placeholder="Opisz swój projekt lub pytanie..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff4f19] text-white px-8 py-4 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 font-bold text-lg disabled:opacity-50 hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                Wyślij wiadomość
                <Send className="w-5 h-5 ml-2 inline" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg border-2 border-[#ff4f19]">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">kontakt@brewcode.pl</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg border-2 border-[#ff4f19]">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">Telefon</h4>
                  <p className="text-gray-600 dark:text-gray-300">+48 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg border-2 border-[#ff4f19]">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">Adres</h4>
                  <p className="text-gray-600 dark:text-gray-300">Warszawa, Polska</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-orange-500 mr-3" />
                <h4 className="text-lg font-bold text-gray-800 dark:text-white">Godziny pracy</h4>
              </div>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>Poniedziałek - Piątek: 9:00 - 18:00</p>
                <p>Sobota: 10:00 - 14:00</p>
                <p>Niedziela: Zamknięte</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-orange-500 mr-3" />
                <h4 className="text-lg font-bold text-gray-800 dark:text-white">Szybki kontakt</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Potrzebujesz szybkiej odpowiedzi? Napisz do nas na WhatsApp lub Messenger.
              </p>
              <div className="flex space-x-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold border-2 border-[#ff4f19] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-300">
                  WhatsApp
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold border-2 border-[#ff4f19] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-300">
                  Messenger
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 