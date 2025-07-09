'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animacja głównego tytułu
      gsap.fromTo('.hero-title', 
        { y: 100, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      );
      
      // Animacja podtytułu
      gsap.fromTo('.hero-subtitle',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 }
      );

      // Animacja opisu
      gsap.fromTo('.hero-description',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.6 }
      );

      // Animacja przycisków
      gsap.fromTo('.hero-buttons',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.9 }
      );

      // Animacja tech stack
      gsap.fromTo('.tech-stack',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 1.2 }
      );

      // Animacja badge
      gsap.fromTo('.hero-badge',
        { y: -50, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)", delay: 0.1 }
      );

      // Floating animation dla elementów
      gsap.to('.floating', {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center text-center p-4 pt-24 sm:pt-28 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/5 rounded-full floating"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-500/8 rounded-full floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-500/3 rounded-full floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-orange-500/6 rounded-full floating" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="mb-12 hero-badge">
          <div className="inline-block bg-orange-500 text-white px-6 py-3 border-2 border-orange-500 shadow-lg font-bold text-sm hover:scale-105 hover:rotate-1 transition-all duration-300">
            🍺 CRAFT BEER APPS
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight hero-title">
          <div className="mb-4">
            <span className="bg-orange-500 text-white px-6 py-4 border-2 border-orange-500 shadow-lg inline-block hover:scale-105 hover:rotate-1 transition-all duration-300">
              BREW
            </span>
          </div>
          <div>
            <span className="bg-white dark:bg-gray-800 text-orange-500 px-6 py-4 border-2 border-orange-500 shadow-lg inline-block hover:scale-105 hover:-rotate-1 transition-all duration-300">
              CODE
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-8 hero-subtitle">
          Craft Beer Applications
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 mb-12 max-w-3xl mx-auto hero-description font-medium leading-relaxed">
          Tworzymy aplikacje dla miłośników piwa kraftowego, browarów rzemieślniczych i pasjonatów domowego warzenia.
          <br />
          <span className="text-orange-500 font-bold">
            Odkryj nasze narzędzia, które łączą tradycję z nowoczesną technologią.
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center hero-buttons">
          <Link href="#apps">
            <button className="bg-orange-500 text-white px-8 py-4 border-2 border-orange-500 shadow-lg hover:scale-105 hover:rotate-1 hover:shadow-xl transition-all duration-300 font-bold text-lg">
              Zobacz Aplikacje
            </button>
          </Link>
          <Link href="#newsletter">
            <button className="bg-white dark:bg-gray-800 text-orange-500 px-8 py-4 border-2 border-orange-500 shadow-lg hover:scale-105 hover:-rotate-1 hover:shadow-xl transition-all duration-300 font-bold text-lg">
              Dołącz do Newslettera
            </button>
          </Link>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 flex justify-center items-center gap-8 tech-stack">
          {[
            { icon: '⚡', name: 'React' },
            { icon: '🚀', name: 'Next.js' },
            { icon: '🎨', name: 'Design' },
            { icon: '💻', name: 'Code' }
          ].map((item, i) => (
            <div
              key={item.name}
              className="text-center hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: `${1.2 + i * 0.1}s` }}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-sm font-bold text-orange-500">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 