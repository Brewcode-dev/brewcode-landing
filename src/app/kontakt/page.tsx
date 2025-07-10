'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-title', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
      
      gsap.fromTo('.hero-subtitle',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 }
      );

      // Form animation
      gsap.fromTo('.contact-form',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kontakt@brewcode.pl",
      description: "Napisz do nas w dowolnym momencie"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+48 123 456 789",
      description: "Dostępny w godzinach 9:00-17:00"
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "ul. Browarowa 1, 00-000 Warszawa",
      description: "Nasze biuro w centrum miasta"
    },
    {
      icon: Clock,
      title: "Godziny pracy",
      value: "Pon-Pt: 9:00-17:00",
      description: "Weekendy: 10:00-14:00"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 text-center bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center text-[#ff4f19] hover:text-orange-600 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do strony głównej
          </Link>
          
          <h1 className="hero-title text-4xl md:text-6xl font-black text-gray-800 dark:text-white mb-6">
            <span className="text-[#ff4f19]">
              Skontaktuj się z nami
            </span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Jesteśmy tutaj, aby pomóc Ci w realizacji Twoich projektów. 
            Skontaktuj się z nami i dowiedz się, jak możemy Ci pomóc.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 border-2 border-[#ff4f19] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] rounded-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-[#ff4f19] flex items-center justify-center mx-auto mb-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{info.title}</h3>
                  <p className="text-[#ff4f19] font-semibold mb-2">{info.value}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-6">
                Napisz do nas
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Opowiedz nam o swoim projekcie, a my pomożemy Ci go zrealizować. 
                Nasz zespół ekspertów jest gotowy, aby Ci pomóc.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#ff4f19] flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-white"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Bezpłatna konsultacja</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#ff4f19] flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-white"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Szybka odpowiedź</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#ff4f19] flex items-center justify-center mr-4">
                    <div className="w-2 h-2 bg-white"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Indywidualne podejście</span>
                </div>
              </div>
            </div>
            
            <div className="contact-form bg-white dark:bg-gray-800 border-2 border-[#ff4f19] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-800 dark:text-white font-semibold mb-2">
                      Imię i nazwisko
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 focus:border-[#ff4f19] focus:outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                      placeholder="Twoje imię i nazwisko"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 dark:text-white font-semibold mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 focus:border-[#ff4f19] focus:outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                      placeholder="twoj@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-800 dark:text-white font-semibold mb-2">
                    Temat
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 focus:border-[#ff4f19] focus:outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                    placeholder="O czym chcesz porozmawiać?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-800 dark:text-white font-semibold mb-2">
                    Wiadomość
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 focus:border-[#ff4f19] focus:outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white resize-none"
                    placeholder="Opowiedz nam o swoim projekcie..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#ff4f19] text-white py-4 border-2 border-[#ff4f19] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] font-bold hover:scale-105 hover:rotate-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-6">
              Często zadawane pytania
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Odpowiedzi na najczęściej zadawane pytania
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 border-2 border-[#ff4f19] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] p-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                Jak długo trwa realizacja projektu?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Czas realizacji zależy od złożoności projektu. Proste aplikacje mogą być gotowe w ciągu 2-4 tygodni, 
                a bardziej złożone projekty mogą trwać 2-6 miesięcy. Dokładny harmonogram ustalamy na etapie konsultacji.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 border-2 border-[#ff4f19] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] p-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                Jakie technologie wykorzystujecie?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wykorzystujemy najnowsze technologie: React, Next.js, Node.js, Python, Django, oraz różne bazy danych. 
                Wybór technologii zależy od specyfiki projektu i wymagań klienta.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 border-2 border-[#ff4f19] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] p-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                Czy oferujecie wsparcie po wdrożeniu?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tak, oferujemy pełne wsparcie techniczne po wdrożeniu projektu. Obejmuje to monitoring, 
                aktualizacje, konserwację oraz pomoc w rozwiązywaniu problemów.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ff4f19]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Gotowy na realizację swojego projektu?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami i rozpocznij swoją przygodę z nowoczesnymi rozwiązaniami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#ff4f19] px-8 py-4 border-2 border-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] hover:scale-105 hover:rotate-1 hover:shadow-xl transition-all duration-300 font-bold text-lg">
              Rozpocznij projekt
            </button>
            <button className="bg-[#ff4f19] text-white px-8 py-4 border-2 border-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] hover:scale-105 hover:-rotate-1 hover:shadow-xl transition-all duration-300 font-bold text-lg">
              Zobacz portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage; 