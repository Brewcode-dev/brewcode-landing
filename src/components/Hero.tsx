'use client';

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 pt-24 sm:pt-28 relative overflow-hidden bg-[#FFE9CF] dark:bg-gray-900">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-international-orange-500/10 border-2 border-international-orange-500/20 transform rotate-12"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-international-orange-500/15 border-2 border-international-orange-500/20 transform -rotate-12"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="mb-12 animate-fadein">
          <div className="inline-block bg-international-orange-500 text-white px-6 py-3 border-2 border-international-orange-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] font-bold text-sm hover:scale-105 hover:rotate-1 transition-all duration-300">
            🍺 CRAFT BEER APPS
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-fadein2">
          <div className="mb-4">
            <span className="bg-international-orange-500 text-white px-6 py-4 border-2 border-international-orange-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] inline-block hover:scale-105 hover:rotate-1 transition-all duration-300">
              BREW
            </span>
          </div>
          <div>
            <span className="bg-[#FFE9CF] dark:bg-gray-800 text-international-orange-500 px-6 py-4 border-2 border-international-orange-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] inline-block hover:scale-105 hover:-rotate-1 transition-all duration-300">
              CODE
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-international-orange-500 mb-8 animate-fadein3">
          Craft Beer Applications
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-black dark:text-gray-200 mb-12 max-w-3xl mx-auto animate-fadein4 font-medium leading-relaxed">
          Tworzymy aplikacje dla miłośników piwa kraftowego, browarów rzemieślniczych i pasjonatów domowego warzenia.
          <br />
          <span className="text-international-orange-500 font-bold">
            Odkryj nasze narzędzia, które łączą tradycję z nowoczesną technologią.
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadein5">
          <Link href="#apps">
            <button className="bg-international-orange-500 text-white px-8 py-4 border-2 border-international-orange-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:scale-105 hover:rotate-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 font-bold text-lg">
              Zobacz Aplikacje
            </button>
          </Link>
          <Link href="#newsletter">
            <button className="bg-[#FFE9CF] dark:bg-gray-800 text-international-orange-500 px-8 py-4 border-2 border-international-orange-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:scale-105 hover:-rotate-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 font-bold text-lg">
              Dołącz do Newslettera
            </button>
          </Link>
        </div>

        {/* Simple Tech Stack */}
        <div className="mt-16 flex justify-center items-center gap-8 animate-fadein6">
          {[
            { icon: '⚡', name: 'React' },
            { icon: '🚀', name: 'Next.js' },
            { icon: '🎨', name: 'Design' },
            { icon: '💻', name: 'Code' }
          ].map((item, i) => (
            <div
              key={item.name}
              className="text-center hover:scale-110 transition-transform duration-300"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-sm font-bold text-international-orange-500">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadein2 {
          0% { opacity: 0; transform: translateY(50px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes fadein3 {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadein4 {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadein5 {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadein6 {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadein { animation: fadein 0.8s ease-out forwards; }
        .animate-fadein2 { animation: fadein2 1s ease-out 0.2s forwards; opacity: 0; }
        .animate-fadein3 { animation: fadein3 0.8s ease-out 0.4s forwards; opacity: 0; }
        .animate-fadein4 { animation: fadein4 0.8s ease-out 0.6s forwards; opacity: 0; }
        .animate-fadein5 { animation: fadein5 0.8s ease-out 0.8s forwards; opacity: 0; }
        .animate-fadein6 { animation: fadein6 0.8s ease-out 1s forwards; opacity: 0; }
      `}</style>
    </section>
  );
};

export default Hero; 