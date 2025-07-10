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
    <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center text-center p-4 pt-32 sm:pt-36 relative overflow-hidden bg-[#111827]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient waves animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827]"></div>
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#ff4f19]/20 to-[#ff6b3d]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#ff4f19]/15 to-[#ff6b3d]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#ff4f19]/10 to-[#ff6b3d]/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
          
          {/* Moving gradient lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff4f19]/50 to-transparent animate-slide-right"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-[#ff4f19]/50 to-transparent animate-slide-left"></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#ff4f19] rounded-full animate-float-1"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#ff6b3d] rounded-full animate-float-2"></div>
          <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-[#ff4f19] rounded-full animate-float-3"></div>
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-[#ff6b3d] rounded-full animate-float-4"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-[#ff4f19] rounded-full animate-float-5"></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255, 79, 25, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255, 79, 25, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight hero-title">
          <div className="mb-4">
            <span className="bg-[#ff4f19] text-white px-6 py-4 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] inline-block transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
              BREW
            </span>
            <span className="bg-white dark:bg-gray-800 text-[#ff4f19] px-6 py-4 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] inline-block transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
              CODE
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff4f19] mb-8 hero-subtitle">
          Craft Beer Applications
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white mb-12 max-w-3xl mx-auto hero-description font-medium leading-relaxed">
          Tworzymy aplikacje dla miłośników piwa kraftowego, browarów rzemieślniczych i pasjonatów domowego warzenia.
          <br />
          <span className="text-[#ff4f19] font-bold">
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
            <button className="bg-white dark:bg-gray-800 text-[#ff4f19] px-8 py-4 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 font-bold text-lg relative overflow-hidden hover:translate-x-[-2px] hover:translate-y-[-2px]">
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
              <div className="text-sm font-bold text-[#ff4f19]">{item.name}</div>
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

        /* New animated background animations */
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }

        @keyframes slide-left {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }

        .animate-slide-right {
          animation: slide-right 8s linear infinite;
        }

        .animate-slide-left {
          animation: slide-left 8s linear infinite;
          animation-delay: 4s;
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(20px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(-10px); }
          50% { transform: translateY(-25px) translateX(-5px); }
          75% { transform: translateY(-5px) translateX(-15px); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-30px) translateX(15px); }
          50% { transform: translateY(-15px) translateX(25px); }
          75% { transform: translateY(-35px) translateX(10px); }
        }

        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(-20px); }
          50% { transform: translateY(-20px) translateX(-10px); }
          75% { transform: translateY(-5px) translateX(-25px); }
        }

        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-25px) translateX(5px); }
          50% { transform: translateY(-15px) translateX(15px); }
          75% { transform: translateY(-30px) translateX(0px); }
        }

        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float-3 {
          animation: float-3 12s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-4 {
          animation: float-4 9s ease-in-out infinite;
          animation-delay: 3s;
        }

        .animate-float-5 {
          animation: float-5 11s ease-in-out infinite;
          animation-delay: 4s;
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};

export default Hero; 