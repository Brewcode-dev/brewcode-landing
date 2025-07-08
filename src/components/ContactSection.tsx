'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setMessage('Proszę wypełnić wszystkie wymagane pola.');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically make an API call to your backend
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setStatus('success');
      setMessage('Dziękujemy za wiadomość! Skontaktujemy się z Tobą w ciągu 24 godzin.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setStatus('error');
      setMessage('Wystąpił błąd. Spróbuj ponownie później.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#F5E6D3] dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6">
            Skontaktuj się z <span className="text-international-orange-500">nami</span>
          </h2>
          <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Gotowy na współpracę? Opowiedz nam o swoim projekcie, a my pomożemy Ci go zrealizować.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-[#FFF2E6] dark:bg-gray-900 p-8 border-2 border-international-orange-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
                            <h3 className="text-2xl font-black text-black dark:text-white mb-6">
                  Wyślij wiadomość
                </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-800 dark:text-white mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-international-orange-500 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-international-orange-500/20 transition-all duration-300 font-medium"
                    placeholder="Twoje imię i nazwisko"
                    disabled={status === 'loading'}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-800 dark:text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-international-orange-500 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-international-orange-500/20 transition-all duration-300 font-medium"
                    placeholder="twoj@email.com"
                    disabled={status === 'loading'}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-bold text-gray-800 dark:text-white mb-2">
                  Firma
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-international-orange-500 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-international-orange-500/20 transition-all duration-300 font-medium"
                  placeholder="Nazwa firmy (opcjonalnie)"
                  disabled={status === 'loading'}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-800 dark:text-white mb-2">
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-international-orange-500 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-international-orange-500/20 transition-all duration-300 font-medium resize-none"
                  placeholder="Opisz swój projekt, potrzeby lub pytania..."
                  disabled={status === 'loading'}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-international-orange-500 text-white px-8 py-4 border-2 border-international-orange-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:scale-105 hover:rotate-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:rotate-0 flex items-center justify-center"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Wyślij wiadomość
                  </>
                )}
              </button>

              {/* Status Message */}
              {status !== 'idle' && (
                <div className={`p-4 border-2 rounded-lg flex items-center font-bold ${
                  status === 'success' 
                    ? 'bg-green-500/10 border-green-500 text-green-700 dark:text-green-300' 
                    : 'bg-red-500/10 border-red-500 text-red-700 dark:text-red-300'
                }`}>
                  {status === 'success' ? (
                    <CheckCircle className="w-5 h-5 mr-2" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mr-2" />
                  )}
                  {message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-black text-black dark:text-white mb-6">
                Informacje kontaktowe
              </h3>
                              <p className="text-lg text-black dark:text-gray-300 font-medium mb-8">
                Jesteśmy dostępni 24/7. Skontaktuj się z nami w dogodny dla Ciebie sposób.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-international-orange-500 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-gray-800 dark:text-white mb-2">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">kontakt@brewcode.pl</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Odpowiadamy w ciągu 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-international-orange-500 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-gray-800 dark:text-white mb-2">Telefon</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">+48 123 456 789</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Pn-Pt 9:00-18:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-international-orange-500 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-gray-800 dark:text-white mb-2">Adres</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Warszawa, Polska</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Spotkania online i stacjonarnie</p>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white dark:bg-gray-900 p-6 border-2 border-international-orange-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <h4 className="text-lg font-black text-gray-800 dark:text-white mb-4">
                Dlaczego warto z nami współpracować?
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 font-medium">
                <li>• Darmowa konsultacja i wycena</li>
                <li>• Przejrzysty proces i komunikacja</li>
                <li>• Wsparcie techniczne 24/7</li>
                <li>• Gwarancja jakości kodu</li>
                <li>• Elastyczne modele współpracy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 