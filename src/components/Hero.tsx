'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('Hero useEffect triggered');
    
    // Dynamic import GSAP
    import('gsap').then(({ gsap }) => {
      console.log('GSAP loaded dynamically');
      
      if (!heroRef.current) {
        console.log('heroRef.current is null');
        return;
      }

      const ctx = gsap.context(() => {
        console.log('GSAP context created');
        
        // Proste animacje z debugowaniem
        gsap.fromTo('.hero-title', 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
        
        gsap.fromTo('.hero-badge',
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.3 }
        );

        gsap.fromTo('.hero-subtitle',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.6 }
        );

        gsap.fromTo('.hero-description',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.9 }
        );

        gsap.fromTo('.hero-buttons',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1.2 }
        );

        gsap.fromTo('.tech-stack',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1.5 }
        );

        // Floating animation
        gsap.to('.floating', {
          y: -20,
          duration: 3,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.5
        });

      }, heroRef);

      return () => ctx.revert();
    }).catch(error => {
      console.error('Failed to load GSAP:', error);
    });
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center text-center p-4 pt-32 sm:pt-36 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating orbs with glow */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full floating shadow-[0_0_30px_rgba(249,115,22,0.3)]"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-orange-500/15 rounded-full floating shadow-[0_0_30px_rgba(249,115,22,0.4)]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-500/8 rounded-full floating shadow-[0_0_20px_rgba(249,115,22,0.2)]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-orange-500/12 rounded-full floating shadow-[0_0_25px_rgba(249,115,22,0.3)]" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50 floating"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="mb-12 hero-badge">
          <div className="inline-block bg-[#ff4f19] text-white px-6 py-3 border-2 border-[#ff4f19] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] font-bold text-sm hover:scale-105 hover:rotate-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
            🍺 CRAFT BEER APPS
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight hero-title">
          <div className="mb-4">
            <span className="bg-[#ff4f19] text-white px-6 py-4 border-2 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] inline-block hover:scale-105 hover:rotate-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
              BREW
            </span>
          </div>
          <div>
            <span className="bg-white dark:bg-gray-800 text-orange-500 px-6 py-4 border-2 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] inline-block hover:scale-105 hover:-rotate-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
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
            <button className="bg-[#ff4f19] text-white px-8 py-4 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 font-bold text-lg relative overflow-hidden hover:translate-x-[-2px] hover:translate-y-[-2px]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
              Zobacz Aplikacje
            </button>
          </Link>
          <Link href="#newsletter">
            <button className="bg-white dark:bg-gray-800 text-orange-500 px-8 py-4 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 font-bold text-lg relative overflow-hidden hover:translate-x-[-2px] hover:translate-y-[-2px]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
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
              className="text-center hover:scale-110 transition-transform duration-300 relative"
              style={{ animationDelay: `${1.2 + i * 0.1}s` }}
            >
              <div className="text-2xl mb-2 relative">
                {item.icon}
                <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-sm"></div>
              </div>
              <div className="text-sm font-bold text-orange-500">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          animation: fadeInUp 1s ease-out;
        }

        .hero-badge {
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .hero-subtitle {
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .hero-description {
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .hero-buttons {
          animation: fadeInUp 1s ease-out 0.8s both;
        }

        .tech-stack {
          animation: fadeInUp 1s ease-out 1s both;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero; 