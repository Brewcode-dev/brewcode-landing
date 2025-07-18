'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import Link from 'next/link';
import Button from '../../components/ui/Button';

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
    <div className="min-h-screen bg-theme-background transition-colors duration-300">
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 text-center bg-theme-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center text-[#ff4f19] hover:text-orange-600 transition-colors duration-200 mb-8 font-heading-poppins"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do strony głównej
          </Link>
          
          <h1 className="hero-title text-4xl md:text-6xl font-black text-gray-800 dark:text-white mb-6 font-heading-poppins">
            <span className="text-[#ff4f19]">
              Skontaktuj się z nami
            </span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-body-roboto">
            Jesteśmy tutaj, aby pomóc Ci w realizacji Twoich projektów. 
            Skontaktuj się z nami i dowiedz się, jak możemy Ci pomóc.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-theme-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-theme-surface p-6 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] text-center hover:shadow-[8px_8px_0px_0px_var(--theme-shadow)] transition-all duration-300 hover:scale-105 hover:translate-x-[-2px] hover:translate-y-[-2px]">
                  <div className="w-16 h-16 bg-[#ff4f19] flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_var(--theme-shadow)] border-2 border-[#ff4f19]">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 font-heading-poppins">{info.title}</h3>
                  <p className="text-[#ff4f19] font-bold mb-2 font-body-roboto">{info.value}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-body-roboto">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-20 bg-theme-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-6 font-heading-poppins">
                Napisz do nas
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-body-roboto">
                Opowiedz nam o swoim projekcie, a my pomożemy Ci go zrealizować. 
                Nasz zespół ekspertów jest gotowy, aby Ci pomóc.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#ff4f19] flex items-center justify-center mr-4 border-2 border-[#ff4f19] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                    <div className="w-2 h-2 bg-white"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 font-body-roboto font-bold">Bezpłatna konsultacja</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#ff4f19] flex items-center justify-center mr-4 border-2 border-[#ff4f19] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                    <div className="w-2 h-2 bg-white"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 font-body-roboto font-bold">Szybka odpowiedź</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#ff4f19] flex items-center justify-center mr-4 border-2 border-[#ff4f19] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                    <div className="w-2 h-2 bg-white"></div>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 font-body-roboto font-bold">Indywidualne podejście</span>
                </div>
              </div>
            </div>
            
            <div className="contact-form bg-theme-surface border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-800 dark:text-white font-bold mb-2 font-heading-poppins">
                      Imię i nazwisko
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border-4 border-gray-300 dark:border-gray-600 focus:border-[#ff4f19] focus:outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-body-roboto"
                      placeholder="Twoje imię i nazwisko"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 dark:text-white font-bold mb-2 font-heading-poppins">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border-4 border-gray-300 dark:border-gray-600 focus:border-[#ff4f19] focus:outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-body-roboto"
                      placeholder="twoj@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-800 dark:text-white font-bold mb-2 font-heading-poppins">
                    Temat
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-4 border-gray-300 dark:border-gray-600 focus:border-[#ff4f19] focus:outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-body-roboto"
                    placeholder="O czym chcesz porozmawiać?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-800 dark:text-white font-bold mb-2 font-heading-poppins">
                    Wiadomość
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border-4 border-gray-300 dark:border-gray-600 focus:border-[#ff4f19] focus:outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white resize-none font-body-roboto"
                    placeholder="Opowiedz nam o swoim projekcie..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#ff4f19] text-white py-4 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] font-bold hover:shadow-[8px_8px_0px_0px_var(--theme-shadow)] transition-all duration-300 flex items-center justify-center font-heading-poppins hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-theme-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-6 font-heading-poppins">
              Znajdź nas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-body-roboto">
              Nasze biuro w centrum Warszawy
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="bg-theme-surface border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] overflow-hidden">
              <div className="relative h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.5!2d21.0122!3d52.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f4be7834e383d5!2sWarszawa%2C%20Polska!5e0!3m2!1spl!2spl!4v1234567890!5m1!1e1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="dark:grayscale dark:invert"
                ></iframe>
              </div>
            </div>
            
            {/* Location Details */}
            <div className="space-y-6">
              <div className="bg-theme-surface border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 font-heading-poppins flex items-center">
                  <MapPin className="w-6 h-6 text-[#ff4f19] mr-3" />
                  Adres
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-body-roboto text-lg">
                  ul. Browarowa 1<br />
                  00-000 Warszawa<br />
                  Polska
                </p>
              </div>
              
              <div className="bg-theme-surface border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 font-heading-poppins flex items-center">
                  <Clock className="w-6 h-6 text-[#ff4f19] mr-3" />
                  Godziny otwarcia
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300 font-body-roboto">
                  <p><strong>Poniedziałek - Piątek:</strong> 9:00 - 17:00</p>
                  <p><strong>Sobota:</strong> 10:00 - 14:00</p>
                  <p><strong>Niedziela:</strong> Zamknięte</p>
                </div>
              </div>
              
              <div className="bg-theme-surface border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 font-heading-poppins flex items-center">
                  <MessageSquare className="w-6 h-6 text-[#ff4f19] mr-3" />
                  Dojazd
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300 font-body-roboto">
                  <p><strong>Metro:</strong> Stacja Centrum (linia M1)</p>
                  <p><strong>Autobus:</strong> Linie 127, 158, 175</p>
                  <p><strong>Tramwaj:</strong> Linie 4, 15, 18</p>
                  <p><strong>Samochód:</strong> Parking podziemny dostępny</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-theme-background dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-6 font-heading-poppins">
              Często zadawane pytania
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-body-roboto">
              Odpowiedzi na najczęściej zadawane pytania
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-theme-background border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] p-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 font-heading-poppins">
                Jak długo trwa realizacja projektu?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-body-roboto">
                Czas realizacji zależy od złożoności projektu. Proste aplikacje mogą być gotowe w ciągu 2-4 tygodni, 
                a bardziej złożone projekty mogą trwać 2-6 miesięcy. Dokładny harmonogram ustalamy na etapie konsultacji.
              </p>
            </div>
            
            <div className="bg-theme-background border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] p-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 font-heading-poppins">
                Jakie technologie wykorzystujecie?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-body-roboto">
                Wykorzystujemy najnowsze technologie: React, Next.js, Node.js, Python, Django, oraz różne bazy danych. 
                Wybór technologii zależy od specyfiki projektu i wymagań klienta.
              </p>
            </div>
            
            <div className="bg-theme-background border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] p-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 font-heading-poppins">
                Czy oferujecie wsparcie po wdrożeniu?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-body-roboto">
                Tak, oferujemy pełne wsparcie techniczne po wdrożeniu projektu. Obejmuje to monitoring, 
                aktualizacje, konserwację oraz pomoc w rozwiązywaniu problemów.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-theme-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 font-heading-poppins">
            Gotowy na realizację swojego projektu?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-body-roboto">
            Skontaktuj się z nami i rozpocznij swoją przygodę z nowoczesnymi rozwiązaniami.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="secondary" size="lg" className="animate-button-glow">
              Rozpocznij projekt
            </Button>
            <Button variant="primary" size="lg" className="animate-button-glow">
              Zobacz portfolio
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage; 