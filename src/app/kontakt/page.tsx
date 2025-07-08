'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

// Dynamic import for Leaflet to avoid SSR issues
const MapComponent = dynamic(() => import('../../components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-dim-gray rounded-lg flex items-center justify-center">
      <div className="text-french-gray">Ładowanie mapy...</div>
    </div>
  ),
});

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setMessage('Proszę wypełnić wszystkie wymagane pola.');
      return;
    }

    if (!formData.email.includes('@')) {
      setStatus('error');
      setMessage('Proszę wprowadzić poprawny adres email.');
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically make an API call to your backend
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setStatus('success');
      setMessage('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setMessage('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kontakt@brewcode.pl',
      description: 'Odpowiemy w ciągu 24 godzin'
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+48 123 456 789',
      description: 'Pon-Pt 9:00-17:00'
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'Warszawa, Polska',
      description: 'ul. Przykładowa 123, 00-000'
    },
    {
      icon: Clock,
      title: 'Godziny pracy',
      value: 'Pon-Pt 9:00-17:00',
      description: 'Weekendy: na życzenie'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-raisin-black to-dim-gray pt-16">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skontaktuj się z <span className="bg-gradient-to-r from-gold-metallic to-hunyadi-yellow bg-clip-text text-transparent">nami</span>
          </h1>
          <p className="text-xl text-french-gray max-w-2xl mx-auto">
            Jesteśmy tutaj, aby pomóc Ci w realizacji Twoich projektów. 
            Skontaktuj się z nami i omówmy, jak możemy wspólnie osiągnąć sukces.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Informacje kontaktowe</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-gold-metallic to-hunyadi-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-raisin-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-gold-metallic font-medium">{info.value}</p>
                        <p className="text-french-gray text-sm">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-4">Nasza lokalizacja</h3>
                <MapComponent />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Wyślij wiadomość</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gold-metallic/30 rounded-lg text-white placeholder-french-gray focus:outline-none focus:border-gold-metallic focus:ring-2 focus:ring-gold-metallic/20 transition-all duration-300"
                      placeholder="Twoje imię i nazwisko"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gold-metallic/30 rounded-lg text-white placeholder-french-gray focus:outline-none focus:border-gold-metallic focus:ring-2 focus:ring-gold-metallic/20 transition-all duration-300"
                      placeholder="twoj@email.pl"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Firma
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gold-metallic/30 rounded-lg text-white placeholder-french-gray focus:outline-none focus:border-gold-metallic focus:ring-2 focus:ring-gold-metallic/20 transition-all duration-300"
                      placeholder="Nazwa firmy"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Temat
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gold-metallic/30 rounded-lg text-white focus:outline-none focus:border-gold-metallic focus:ring-2 focus:ring-gold-metallic/20 transition-all duration-300"
                    >
                      <option value="">Wybierz temat</option>
                      <option value="general">Pytanie ogólne</option>
                      <option value="project">Nowy projekt</option>
                      <option value="support">Wsparcie techniczne</option>
                      <option value="partnership">Współpraca</option>
                      <option value="other">Inne</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-gold-metallic/30 rounded-lg text-white placeholder-french-gray focus:outline-none focus:border-gold-metallic focus:ring-2 focus:ring-gold-metallic/20 transition-all duration-300 resize-none"
                    placeholder="Opisz swój projekt lub pytanie..."
                    required
                  />
                </div>

                {/* Status Message */}
                {status !== 'idle' && (
                  <div className={`p-4 rounded-lg flex items-center ${
                    status === 'success' 
                      ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                      : 'bg-red-500/20 border border-red-500/30 text-red-300'
                  }`}>
                    {status === 'success' ? (
                      <CheckCircle className="w-5 h-5 mr-3" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-3" />
                    )}
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-gold-metallic to-hunyadi-yellow text-raisin-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-raisin-black border-t-transparent rounded-full animate-spin mr-3"></div>
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Wyślij wiadomość
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 