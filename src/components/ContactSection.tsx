'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kontakt@brewcode.pl',
      link: 'mailto:kontakt@brewcode.pl'
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+48 123 456 789',
      link: 'tel:+48123456789'
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'Warszawa, Polska',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Skontaktuj się z <span className="text-[#ff4f19]">nami</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Masz pytania? Chcesz rozpocząć projekt? Jesteśmy tutaj, aby Ci pomóc. 
            Napisz do nas lub zadzwoń - odpowiemy najszybciej jak to możliwe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-6">
              Wyślij wiadomość
            </h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] text-gray-800 dark:text-white bg-white dark:bg-gray-700 font-bold focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] text-gray-800 dark:text-white bg-white dark:bg-gray-700 font-bold focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Temat
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] text-gray-800 dark:text-white bg-white dark:bg-gray-700 font-bold focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] text-gray-800 dark:text-white bg-white dark:bg-gray-700 font-bold focus:outline-none focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#ff4f19] text-white font-bold py-4 px-8 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-1px] hover:translate-y-[-1px] flex items-center justify-center"
                >
                  <span>Wyślij wiadomość</span>
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            ) : (
              <div className="bg-green-100 dark:bg-green-900 p-6 border-4 border-green-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  <span className="text-green-800 dark:text-green-200 font-bold text-lg">
                    Wiadomość wysłana!
                  </span>
                </div>
                <p className="text-green-700 dark:text-green-300 text-center mt-2">
                  Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.
                </p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-6">
                Informacje kontaktowe
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Jesteśmy dostępni od poniedziałku do piątku w godzinach 9:00-17:00. 
                Możesz też napisać do nas w weekend - odpowiemy w poniedziałek.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="contact-card bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] block"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#ff4f19] flex items-center justify-center mr-4 shadow-lg border-2 border-[#ff4f19]">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-gray-800 dark:text-white">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
              <h4 className="text-lg font-black text-gray-800 dark:text-white mb-4">
                Godziny pracy
              </h4>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Poniedziałek - Piątek</span>
                  <span>9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota - Niedziela</span>
                  <span>Zamknięte</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 