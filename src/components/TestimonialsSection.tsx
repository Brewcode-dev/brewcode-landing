'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jan Kowalski',
      position: 'Właściciel Browaru Rzemieślniczego',
      company: 'Browar Kowalski',
      content: 'BrewMaster Pro zrewolucjonizował nasze procesy warzenia. Oszczędzamy 30% czasu na planowaniu i mamy znacznie lepszą kontrolę nad jakością piwa.',
      rating: 5,
      avatar: '🍺'
    },
    {
      id: 2,
      name: 'Anna Nowak',
      position: 'Manager Pubu',
      company: 'Pub Pod Kogutem',
      content: 'PubTracker to absolutny game-changer! Mamy pełną kontrolę nad inwentarzem i sprzedażą. Zyski wzrosły o 40% w pierwszym miesiącu.',
      rating: 5,
      avatar: '🍻'
    },
    {
      id: 3,
      name: 'Piotr Wiśniewski',
      position: 'Domowy Warzelnik',
      company: 'Piwowarstwo Domowe',
      content: 'BeerCraft Community to świetna platforma dla pasjonatów. Poznałem wielu wspaniałych ludzi i nauczyłem się nowych technik warzenia.',
      rating: 5,
      avatar: '🏠'
    },
    {
      id: 4,
      name: 'Maria Zielińska',
      position: 'Ekspert Piwowarski',
      company: 'Craft Beer Academy',
      content: 'Jako ekspert w branży, mogę powiedzieć, że aplikacje Brewcode to najlepsze narzędzia dla browarów rzemieślniczych na rynku.',
      rating: 5,
      avatar: '👩‍🏫'
    },
    {
      id: 5,
      name: 'Tomasz Lewandowski',
      position: 'Właściciel Restauracji',
      company: 'Restauracja Smak',
      content: 'Integracja z naszymi systemami była bezproblemowa. Wsparcie techniczne jest na najwyższym poziomie.',
      rating: 5,
      avatar: '🍽️'
    },
    {
      id: 6,
      name: 'Katarzyna Dąbrowska',
      position: 'Sommelier Piwa',
      company: 'Beer Sommelier',
      content: 'Aplikacje Brewcode pomagają mi w codziennej pracy z klientami. Mogę szybko sprawdzić informacje o piwach i doradzać.',
      rating: 5,
      avatar: '👩‍💼'
    }
  ];

  const stats = [
    { number: '98%', label: 'Zadowolonych klientów' },
    { number: '4.9/5', label: 'Średnia ocena' },
    { number: '500+', label: 'Aktywnych użytkowników' },
    { number: '24/7', label: 'Wsparcie techniczne' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Co mówią <span className="text-[#ff4f19]">klienci</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Zobacz, jak nasze aplikacje pomagają browarom, pubom i miłośnikom piwa w codziennej pracy.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-black text-[#ff4f19] mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-[#ff4f19] flex items-center justify-center shadow-lg border-2 border-[#ff4f19]">
                  <span className="text-white font-black text-xl">{testimonial.avatar}</span>
                </div>
                <Quote className="w-8 h-8 text-[#ff4f19] opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-[#ff4f19] fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-body-roboto">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t-4 border-[#ff4f19] pt-4">
                <div className="font-black text-gray-800 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-[#ff4f19] font-bold">
                  {testimonial.position}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-4">
              Dołącz do zadowolonych klientów
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Przetestuj nasze aplikacje przez 30 dni za darmo. Bez zobowiązań, bez ukrytych kosztów.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ff4f19] text-white font-bold py-4 px-8 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-1px] hover:translate-y-[-1px]">
                Rozpocznij darmowy trial
              </button>
              <button className="bg-white dark:bg-gray-800 text-[#ff4f19] font-bold py-4 px-8 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-1px] hover:translate-y-[-1px]">
                Zobacz demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 