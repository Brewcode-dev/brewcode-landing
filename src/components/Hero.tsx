'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Button from './ui/Button';

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
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
        
        gsap.fromTo('.hero-subtitle',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.3 }
        );

        gsap.fromTo('.hero-description',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.6 }
        );

        gsap.fromTo('.hero-buttons',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.9 }
        );

        gsap.fromTo('.tech-stack',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 1.2 }
        );



      }, heroRef);

      return () => ctx.revert();
    }).catch(error => {
      console.error('Failed to load GSAP:', error);
    });
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center text-center p-4 pt-32 sm:pt-36 relative overflow-hidden bg-theme-background" style={{ willChange: 'auto' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-theme-background overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#ff4f19]/10 to-[#ff6b3d]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#ff4f19]/8 to-[#ff6b3d]/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#ff4f19]/5 to-[#ff6b3d]/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        
        {/* Horizontal moving lines - creating grid effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff4f19]/30 to-transparent animate-slide-right"></div>
        <div className="absolute top-1/10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff4f19]/20 to-transparent animate-slide-left" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-2/10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff4f19]/15 to-transparent animate-slide-right" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff4f19]/25 to-transparent animate-slide-left" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-4/10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff4f19]/20 to-transparent animate-slide-right" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-5/10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff4f19]/18 to-transparent animate-slide-left" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-6/10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff4f19]/22 to-transparent animate-slide-right" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-7/10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff4f19]/16 to-transparent animate-slide-left" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-8/10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff4f19]/19 to-transparent animate-slide-right" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-9/10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff4f19]/17 to-transparent animate-slide-left" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-[#ff4f19]/30 to-transparent animate-slide-left"></div>
        
        {/* Vertical moving lines - creating grid effect */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#ff4f19]/30 to-transparent animate-slide-down"></div>
        <div className="absolute top-0 left-1/10 w-0.5 h-full bg-gradient-to-b from-transparent via-[#ff4f19]/20 to-transparent animate-slide-up" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-0 left-2/10 w-0.5 h-full bg-gradient-to-b from-transparent via-[#ff4f19]/15 to-transparent animate-slide-down" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-3/10 w-0.5 h-full bg-gradient-to-b from-transparent via-[#ff4f19]/25 to-transparent animate-slide-up" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-0 left-4/10 w-0.5 h-full bg-gradient-to-b from-transparent via-[#ff4f19]/20 to-transparent animate-slide-down" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-5/10 w-0.5 h-full bg-gradient-to-b from-transparent via-[#ff4f19]/18 to-transparent animate-slide-up" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-0 left-6/10 w-0.5 h-full bg-gradient-to-b from-transparent via-[#ff4f19]/22 to-transparent animate-slide-down" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-0 left-7/10 w-0.5 h-full bg-gradient-to-b from-transparent via-[#ff4f19]/16 to-transparent animate-slide-up" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-0 left-8/10 w-0.5 h-full bg-gradient-to-b from-transparent via-[#ff4f19]/19 to-transparent animate-slide-down" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-0 left-9/10 w-0.5 h-full bg-gradient-to-b from-transparent via-[#ff4f19]/17 to-transparent animate-slide-up" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#ff4f19]/30 to-transparent animate-slide-up"></div>
        
        {/* Diagonal lines for extra effect */}
        <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-[#ff4f19]/20 to-transparent animate-diagonal-1"></div>
        <div className="absolute top-0 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-[#ff4f19]/20 to-transparent animate-diagonal-2"></div>
        <div className="absolute top-0 left-1/4 w-0.5 h-24 bg-gradient-to-b from-transparent via-[#ff4f19]/15 to-transparent animate-diagonal-3"></div>
        <div className="absolute top-0 right-1/4 w-0.5 h-24 bg-gradient-to-b from-transparent via-[#ff4f19]/15 to-transparent animate-diagonal-4"></div>
        <div className="absolute top-0 left-3/4 w-0.5 h-28 bg-gradient-to-b from-transparent via-[#ff4f19]/18 to-transparent animate-diagonal-5"></div>
        <div className="absolute top-0 right-3/4 w-0.5 h-28 bg-gradient-to-b from-transparent via-[#ff4f19]/18 to-transparent animate-diagonal-6"></div>
        <div className="absolute top-0 left-1/3 w-0.5 h-20 bg-gradient-to-b from-transparent via-[#ff4f19]/12 to-transparent animate-diagonal-7"></div>
        <div className="absolute top-0 right-1/3 w-0.5 h-20 bg-gradient-to-b from-transparent via-[#ff4f19]/12 to-transparent animate-diagonal-8"></div>
        <div className="absolute top-0 left-2/3 w-0.5 h-26 bg-gradient-to-b from-transparent via-[#ff4f19]/16 to-transparent animate-diagonal-9"></div>
        <div className="absolute top-0 right-2/3 w-0.5 h-26 bg-gradient-to-b from-transparent via-[#ff4f19]/16 to-transparent animate-diagonal-10"></div>
        <div className="absolute top-0 left-1/8 w-0.5 h-18 bg-gradient-to-b from-transparent via-[#ff4f19]/10 to-transparent animate-diagonal-11"></div>
        <div className="absolute top-0 right-1/8 w-0.5 h-18 bg-gradient-to-b from-transparent via-[#ff4f19]/10 to-transparent animate-diagonal-12"></div>
        <div className="absolute top-0 left-3/8 w-0.5 h-22 bg-gradient-to-b from-transparent via-[#ff4f19]/14 to-transparent animate-diagonal-13"></div>
        <div className="absolute top-0 right-3/8 w-0.5 h-22 bg-gradient-to-b from-transparent via-[#ff4f19]/14 to-transparent animate-diagonal-14"></div>
        <div className="absolute top-0 left-5/8 w-0.5 h-20 bg-gradient-to-b from-transparent via-[#ff4f19]/13 to-transparent animate-diagonal-15"></div>
        <div className="absolute top-0 right-5/8 w-0.5 h-20 bg-gradient-to-b from-transparent via-[#ff4f19]/13 to-transparent animate-diagonal-16"></div>
        <div className="absolute top-0 left-7/8 w-0.5 h-24 bg-gradient-to-b from-transparent via-[#ff4f19]/17 to-transparent animate-diagonal-17"></div>
        <div className="absolute top-0 right-7/8 w-0.5 h-24 bg-gradient-to-b from-transparent via-[#ff4f19]/17 to-transparent animate-diagonal-18"></div>
        <div className="absolute top-0 left-1/10 w-0.5 h-16 bg-gradient-to-b from-transparent via-[#ff4f19]/8 to-transparent animate-diagonal-19"></div>
        <div className="absolute top-0 right-1/10 w-0.5 h-16 bg-gradient-to-b from-transparent via-[#ff4f19]/8 to-transparent animate-diagonal-20"></div>
        <div className="absolute top-0 left-2/10 w-0.5 h-20 bg-gradient-to-b from-transparent via-[#ff4f19]/11 to-transparent animate-diagonal-21"></div>
        <div className="absolute top-0 right-2/10 w-0.5 h-20 bg-gradient-to-b from-transparent via-[#ff4f19]/11 to-transparent animate-diagonal-22"></div>
        <div className="absolute top-0 left-3/10 w-0.5 h-18 bg-gradient-to-b from-transparent via-[#ff4f19]/9 to-transparent animate-diagonal-23"></div>
        <div className="absolute top-0 right-3/10 w-0.5 h-18 bg-gradient-to-b from-transparent via-[#ff4f19]/9 to-transparent animate-diagonal-24"></div>
        <div className="absolute top-0 left-4/10 w-0.5 h-22 bg-gradient-to-b from-transparent via-[#ff4f19]/13 to-transparent animate-diagonal-25"></div>
        <div className="absolute top-0 right-4/10 w-0.5 h-22 bg-gradient-to-b from-transparent via-[#ff4f19]/13 to-transparent animate-diagonal-26"></div>
        <div className="absolute top-0 left-5/10 w-0.5 h-19 bg-gradient-to-b from-transparent via-[#ff4f19]/10 to-transparent animate-diagonal-27"></div>
        <div className="absolute top-0 right-5/10 w-0.5 h-19 bg-gradient-to-b from-transparent via-[#ff4f19]/10 to-transparent animate-diagonal-28"></div>
        <div className="absolute top-0 left-6/10 w-0.5 h-21 bg-gradient-to-b from-transparent via-[#ff4f19]/12 to-transparent animate-diagonal-29"></div>
        <div className="absolute top-0 right-6/10 w-0.5 h-21 bg-gradient-to-b from-transparent via-[#ff4f19]/12 to-transparent animate-diagonal-30"></div>
        <div className="absolute top-0 left-7/10 w-0.5 h-17 bg-gradient-to-b from-transparent via-[#ff4f19]/9 to-transparent animate-diagonal-31"></div>
        <div className="absolute top-0 right-7/10 w-0.5 h-17 bg-gradient-to-b from-transparent via-[#ff4f19]/9 to-transparent animate-diagonal-32"></div>
        <div className="absolute top-0 left-8/10 w-0.5 h-23 bg-gradient-to-b from-transparent via-[#ff4f19]/14 to-transparent animate-diagonal-33"></div>
        <div className="absolute top-0 right-8/10 w-0.5 h-23 bg-gradient-to-b from-transparent via-[#ff4f19]/14 to-transparent animate-diagonal-34"></div>
        <div className="absolute top-0 left-9/10 w-0.5 h-15 bg-gradient-to-b from-transparent via-[#ff4f19]/7 to-transparent animate-diagonal-35"></div>
        <div className="absolute top-0 right-9/10 w-0.5 h-15 bg-gradient-to-b from-transparent via-[#ff4f19]/7 to-transparent animate-diagonal-36"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#ff4f19] rounded-full animate-float-1"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#ff6b3d] rounded-full animate-float-2"></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-[#ff4f19] rounded-full animate-float-3"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-[#ff6b3d] rounded-full animate-float-4"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-[#ff4f19] rounded-full animate-float-5"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#ff6b3d] rounded-full animate-float-6"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-[#ff4f19] rounded-full animate-float-7"></div>
        <div className="absolute top-1/4 left-1/6 w-1.5 h-1.5 bg-[#ff6b3d] rounded-full animate-float-8"></div>
        <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-[#ff4f19] rounded-full animate-float-9"></div>
        <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-[#ff6b3d] rounded-full animate-float-10"></div>
        <div className="absolute bottom-3/4 right-2/3 w-1.5 h-1.5 bg-[#ff4f19] rounded-full animate-float-11"></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-[#ff6b3d] rounded-full animate-float-12"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255, 79, 25, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 79, 25, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight hero-title font-heading-poppins">
          <div className="mb-4">
            <span className="bg-[#ff4f19] text-white px-6 py-4 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] inline-block transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
              BREW
            </span>
            <span className="bg-white dark:bg-gray-800 text-[#ff4f19] px-6 py-4 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] inline-block transition-all duration-300 relative overflow-hidden" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
              CODE
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff4f19] mb-8 hero-subtitle animate-subtitle-slide font-heading-poppins">
          Craft Beer Applications
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white mb-12 max-w-3xl mx-auto hero-description font-medium leading-relaxed font-body-roboto">
          Tworzymy aplikacje dla miłośników piwa kraftowego, browarów rzemieślniczych i pasjonatów domowego warzenia.
          <br />
          <span className="text-[#ff4f19] font-bold animate-text-glow">
            Odkryj nasze narzędzia, które łączą tradycję z nowoczesną technologią.
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center hero-buttons">
          <Link href="#apps">
            <Button variant="primary" size="lg" className="animate-button-glow">
              Zobacz Aplikacje
            </Button>
          </Link>
          <Link href="#newsletter">
            <Button variant="secondary" size="lg" className="animate-button-glow" style={{ animationDelay: '0.5s' }}>
              Dołącz do Newslettera
            </Button>
          </Link>
        </div>

        {/* Tech Stack */}
        {/* <div className="mt-16 flex justify-center items-center gap-8 tech-stack">
          {[
            { icon: '⚡', name: 'React', animation: 'animate-tech-1' },
            { icon: '🚀', name: 'Next.js', animation: 'animate-tech-2' },
            { icon: '🎨', name: 'Design', animation: 'animate-tech-3' },
            { icon: '💻', name: 'Code', animation: 'animate-tech-4' }
          ].map((item, i) => (
            <div
              key={item.name}
              className={`text-center hover:scale-110 transition-transform duration-300 relative ${item.animation}`}
              style={{ animationDelay: `${1.2 + i * 0.1}s` }}
            >
              <div className="text-2xl mb-2 relative">
                {item.icon}
                <div className="absolute inset-0 bg-[#ff4f19]/20 rounded-full blur-sm"></div>
              </div>
              <div className="text-sm font-bold text-[#ff4f19] font-heading-poppins">{item.name}</div>
            </div>
          ))}
        </div> */}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg) translateZ(0); }
          100% { transform: translateX(200%) skewX(-12deg) translateZ(0); }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
          will-change: transform;
        }







        @keyframes dot-bounce {
          0%, 80%, 100% {
            transform: translateY(0) translateZ(0);
          }
          40% {
            transform: translateY(-10px) translateZ(0);
          }
        }

        .animate-dot-bounce {
          animation: dot-bounce 1.4s ease-in-out infinite;
          will-change: transform;
        }

        /* Background animations */
        @keyframes slide-right {
          0% { transform: translateX(-100%) translateZ(0); }
          100% { transform: translateX(100vw) translateZ(0); }
        }

        @keyframes slide-left {
          0% { transform: translateX(100vw) translateZ(0); }
          100% { transform: translateX(-100%) translateZ(0); }
        }

        .animate-slide-right {
          animation: slide-right 8s linear infinite;
          will-change: transform;
        }

        .animate-slide-left {
          animation: slide-left 8s linear infinite;
          animation-delay: 4s;
          will-change: transform;
        }

        /* Vertical slide animations */
        @keyframes slide-down {
          0% { transform: translateY(-100%) translateZ(0); }
          100% { transform: translateY(100vh) translateZ(0); }
        }

        @keyframes slide-up {
          0% { transform: translateY(100vh) translateZ(0); }
          100% { transform: translateY(-100%) translateZ(0); }
        }

        .animate-slide-down {
          animation: slide-down 10s linear infinite;
          will-change: transform;
        }

        .animate-slide-up {
          animation: slide-up 10s linear infinite;
          will-change: transform;
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
          25% { transform: translateY(-20px) translateX(10px) translateZ(0); }
          50% { transform: translateY(-10px) translateX(20px) translateZ(0); }
          75% { transform: translateY(-30px) translateX(5px) translateZ(0); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
          25% { transform: translateY(-15px) translateX(-10px) translateZ(0); }
          50% { transform: translateY(-25px) translateX(-5px) translateZ(0); }
          75% { transform: translateY(-5px) translateX(-15px) translateZ(0); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
          25% { transform: translateY(-30px) translateX(15px) translateZ(0); }
          50% { transform: translateY(-15px) translateX(25px) translateZ(0); }
          75% { transform: translateY(-35px) translateX(10px) translateZ(0); }
        }

        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
          25% { transform: translateY(-10px) translateX(-20px) translateZ(0); }
          50% { transform: translateY(-20px) translateX(-10px) translateZ(0); }
          75% { transform: translateY(-5px) translateX(-25px) translateZ(0); }
        }

        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
          25% { transform: translateY(-25px) translateX(5px) translateZ(0); }
          50% { transform: translateY(-15px) translateX(15px) translateZ(0); }
          75% { transform: translateY(-30px) translateX(0px) translateZ(0); }
        }

        @keyframes float-6 {
          0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
          25% { transform: translateY(-18px) translateX(-8px) translateZ(0); }
          50% { transform: translateY(-22px) translateX(12px) translateZ(0); }
          75% { transform: translateY(-8px) translateX(-18px) translateZ(0); }
        }

        @keyframes float-7 {
          0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
          25% { transform: translateY(-12px) translateX(18px) translateZ(0); }
          50% { transform: translateY(-28px) translateX(-12px) translateZ(0); }
          75% { transform: translateY(-15px) translateX(22px) translateZ(0); }
        }

        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
          will-change: transform;
        }

        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
          animation-delay: 1s;
          will-change: transform;
        }

        .animate-float-3 {
          animation: float-3 12s ease-in-out infinite;
          animation-delay: 2s;
          will-change: transform;
        }

        .animate-float-4 {
          animation: float-4 9s ease-in-out infinite;
          animation-delay: 3s;
          will-change: transform;
        }

        .animate-float-5 {
          animation: float-5 11s ease-in-out infinite;
          animation-delay: 4s;
          will-change: transform;
        }

        .animate-float-6 {
          animation: float-6 13s ease-in-out infinite;
          animation-delay: 5s;
          will-change: transform;
        }

        .animate-float-7 {
          animation: float-7 14s ease-in-out infinite;
          animation-delay: 6s;
          will-change: transform;
        }

        @keyframes float-8 {
          0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
          25% { transform: translateY(-22px) translateX(-12px) translateZ(0); }
          50% { transform: translateY(-8px) translateX(18px) translateZ(0); }
          75% { transform: translateY(-28px) translateX(-8px) translateZ(0); }
        }

        @keyframes float-9 {
          0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
          25% { transform: translateY(-14px) translateX(16px) translateZ(0); }
          50% { transform: translateY(-24px) translateX(-14px) translateZ(0); }
          75% { transform: translateY(-6px) translateX(20px) translateZ(0); }
        }

        @keyframes float-10 {
          0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
          25% { transform: translateY(-26px) translateX(8px) translateZ(0); }
          50% { transform: translateY(-12px) translateX(-18px) translateZ(0); }
          75% { transform: translateY(-32px) translateX(12px) translateZ(0); }
        }

        @keyframes float-11 {
          0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
          25% { transform: translateY(-16px) translateX(-20px) translateZ(0); }
          50% { transform: translateY(-28px) translateX(6px) translateZ(0); }
          75% { transform: translateY(-8px) translateX(-24px) translateZ(0); }
        }

        @keyframes float-12 {
          0%, 100% { transform: translateY(0px) translateX(0px) translateZ(0); }
          25% { transform: translateY(-20px) translateX(14px) translateZ(0); }
          50% { transform: translateY(-10px) translateX(-16px) translateZ(0); }
          75% { transform: translateY(-30px) translateX(8px) translateZ(0); }
        }

        .animate-float-8 {
          animation: float-8 15s ease-in-out infinite;
          animation-delay: 7s;
          will-change: transform;
        }

        .animate-float-9 {
          animation: float-9 16s ease-in-out infinite;
          animation-delay: 8s;
          will-change: transform;
        }

        .animate-float-10 {
          animation: float-10 17s ease-in-out infinite;
          animation-delay: 9s;
          will-change: transform;
        }

        .animate-float-11 {
          animation: float-11 18s ease-in-out infinite;
          animation-delay: 10s;
          will-change: transform;
        }

        .animate-float-12 {
          animation: float-12 19s ease-in-out infinite;
          animation-delay: 11s;
          will-change: transform;
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0) translateZ(0); }
          100% { transform: translate(50px, 50px) translateZ(0); }
        }

        /* Tech stack animations */
        @keyframes tech-1 {
          0%, 100% { transform: translateY(0px) translateZ(0); }
          50% { transform: translateY(-8px) translateZ(0); }
        }

        @keyframes tech-2 {
          0%, 100% { transform: translateY(0px) translateZ(0); }
          50% { transform: translateY(-6px) translateZ(0); }
        }

        @keyframes tech-3 {
          0%, 100% { transform: translateY(0px) translateZ(0); }
          50% { transform: translateY(-10px) translateZ(0); }
        }

        @keyframes tech-4 {
          0%, 100% { transform: translateY(0px) translateZ(0); }
          50% { transform: translateY(-7px) translateZ(0); }
        }

        .animate-tech-1 {
          animation: tech-1 3s ease-in-out infinite;
          will-change: transform;
        }

        .animate-tech-2 {
          animation: tech-2 3s ease-in-out infinite;
          animation-delay: 0.5s;
          will-change: transform;
        }

        .animate-tech-3 {
          animation: tech-3 3s ease-in-out infinite;
          animation-delay: 1s;
          will-change: transform;
        }

        .animate-tech-4 {
          animation: tech-4 3s ease-in-out infinite;
          animation-delay: 1.5s;
          will-change: transform;
        }

        /* Title pulse animation */
        @keyframes title-pulse {
          0%, 100% { 
            transform: scale(1) translateZ(0);
            box-shadow: 6px 6px 0px 0px rgba(0,0,0,0.2);
          }
          50% { 
            transform: scale(1.02) translateZ(0);
            box-shadow: 8px 8px 0px 0px rgba(0,0,0,0.3);
          }
        }

        .animate-title-pulse {
          animation: title-pulse 4s ease-in-out infinite;
          will-change: transform, box-shadow;
        }

        /* Button glow animation */
        @keyframes button-glow {
          0%, 100% { 
            box-shadow: 6px 6px 0px 0px rgba(0,0,0,0.2);
          }
          50% { 
            box-shadow: 6px 6px 0px 0px rgba(255, 79, 25, 0.3);
          }
        }

        .animate-button-glow {
          animation: button-glow 3s ease-in-out infinite;
          will-change: box-shadow;
        }

        /* Text glow animation */
        @keyframes text-glow {
          0%, 100% { 
            text-shadow: 0 0 0px rgba(255, 79, 25, 0);
          }
          50% { 
            text-shadow: 0 0 10px rgba(255, 79, 25, 0.5);
          }
        }

        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
          will-change: text-shadow;
        }

        /* Subtitle slide animation */
        @keyframes subtitle-slide {
          0%, 100% { 
            transform: translateX(0px) translateZ(0);
          }
          50% { 
            transform: translateX(5px) translateZ(0);
          }
        }

        .animate-subtitle-slide {
          animation: subtitle-slide 4s ease-in-out infinite;
          will-change: transform;
        }

        /* Diagonal line animations */
        @keyframes diagonal-1 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(20px) translateZ(0);
            opacity: 0.6;
          }
        }

        @keyframes diagonal-2 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-20px) translateZ(0);
            opacity: 0.6;
          }
        }

        .animate-diagonal-1 {
          animation: diagonal-1 5s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .animate-diagonal-2 {
          animation: diagonal-2 5s ease-in-out infinite;
          animation-delay: 2.5s;
          will-change: transform, opacity;
        }

        @keyframes diagonal-3 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.15;
          }
          50% { 
            transform: translateY(15px) translateZ(0);
            opacity: 0.3;
          }
        }

        @keyframes diagonal-4 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.15;
          }
          50% { 
            transform: translateY(-15px) translateZ(0);
            opacity: 0.3;
          }
        }

        @keyframes diagonal-5 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.18;
          }
          50% { 
            transform: translateY(18px) translateZ(0);
            opacity: 0.35;
          }
        }

        @keyframes diagonal-6 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.18;
          }
          50% { 
            transform: translateY(-18px) translateZ(0);
            opacity: 0.35;
          }
        }

        .animate-diagonal-3 {
          animation: diagonal-3 6s ease-in-out infinite;
          animation-delay: 1s;
          will-change: transform, opacity;
        }

        .animate-diagonal-4 {
          animation: diagonal-4 6s ease-in-out infinite;
          animation-delay: 3.5s;
          will-change: transform, opacity;
        }

        .animate-diagonal-5 {
          animation: diagonal-5 7s ease-in-out infinite;
          animation-delay: 2s;
          will-change: transform, opacity;
        }

        .animate-diagonal-6 {
          animation: diagonal-6 7s ease-in-out infinite;
          animation-delay: 4.5s;
          will-change: transform, opacity;
        }

        @keyframes diagonal-7 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.12;
          }
          50% { 
            transform: translateY(12px) translateZ(0);
            opacity: 0.25;
          }
        }

        @keyframes diagonal-8 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.12;
          }
          50% { 
            transform: translateY(-12px) translateZ(0);
            opacity: 0.25;
          }
        }

        @keyframes diagonal-9 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.16;
          }
          50% { 
            transform: translateY(16px) translateZ(0);
            opacity: 0.32;
          }
        }

        @keyframes diagonal-10 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.16;
          }
          50% { 
            transform: translateY(-16px) translateZ(0);
            opacity: 0.32;
          }
        }

        .animate-diagonal-7 {
          animation: diagonal-7 8s ease-in-out infinite;
          animation-delay: 1.5s;
          will-change: transform, opacity;
        }

        .animate-diagonal-8 {
          animation: diagonal-8 8s ease-in-out infinite;
          animation-delay: 5.5s;
          will-change: transform, opacity;
        }

        .animate-diagonal-9 {
          animation: diagonal-9 9s ease-in-out infinite;
          animation-delay: 3s;
          will-change: transform, opacity;
        }

        .animate-diagonal-10 {
          animation: diagonal-10 9s ease-in-out infinite;
          animation-delay: 6.5s;
          will-change: transform, opacity;
        }

        @keyframes diagonal-11 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.1;
          }
          50% { 
            transform: translateY(10px) translateZ(0);
            opacity: 0.2;
          }
        }

        @keyframes diagonal-12 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.1;
          }
          50% { 
            transform: translateY(-10px) translateZ(0);
            opacity: 0.2;
          }
        }

        @keyframes diagonal-13 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.14;
          }
          50% { 
            transform: translateY(14px) translateZ(0);
            opacity: 0.28;
          }
        }

        @keyframes diagonal-14 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.14;
          }
          50% { 
            transform: translateY(-14px) translateZ(0);
            opacity: 0.28;
          }
        }

        @keyframes diagonal-15 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.13;
          }
          50% { 
            transform: translateY(13px) translateZ(0);
            opacity: 0.26;
          }
        }

        @keyframes diagonal-16 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.13;
          }
          50% { 
            transform: translateY(-13px) translateZ(0);
            opacity: 0.26;
          }
        }

        @keyframes diagonal-17 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.17;
          }
          50% { 
            transform: translateY(17px) translateZ(0);
            opacity: 0.34;
          }
        }

        @keyframes diagonal-18 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.17;
          }
          50% { 
            transform: translateY(-17px) translateZ(0);
            opacity: 0.34;
          }
        }

        .animate-diagonal-11 {
          animation: diagonal-11 10s ease-in-out infinite;
          animation-delay: 0.5s;
          will-change: transform, opacity;
        }

        .animate-diagonal-12 {
          animation: diagonal-12 10s ease-in-out infinite;
          animation-delay: 7.5s;
          will-change: transform, opacity;
        }

        .animate-diagonal-13 {
          animation: diagonal-13 11s ease-in-out infinite;
          animation-delay: 1.5s;
          will-change: transform, opacity;
        }

        .animate-diagonal-14 {
          animation: diagonal-14 11s ease-in-out infinite;
          animation-delay: 8.5s;
          will-change: transform, opacity;
        }

        .animate-diagonal-15 {
          animation: diagonal-15 12s ease-in-out infinite;
          animation-delay: 2.5s;
          will-change: transform, opacity;
        }

        .animate-diagonal-16 {
          animation: diagonal-16 12s ease-in-out infinite;
          animation-delay: 9.5s;
          will-change: transform, opacity;
        }

        .animate-diagonal-17 {
          animation: diagonal-17 13s ease-in-out infinite;
          animation-delay: 4s;
          will-change: transform, opacity;
        }

        .animate-diagonal-18 {
          animation: diagonal-18 13s ease-in-out infinite;
          animation-delay: 10.5s;
          will-change: transform, opacity;
        }

        @keyframes diagonal-19 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.08;
          }
          50% { 
            transform: translateY(8px) translateZ(0);
            opacity: 0.16;
          }
        }

        @keyframes diagonal-20 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.08;
          }
          50% { 
            transform: translateY(-8px) translateZ(0);
            opacity: 0.16;
          }
        }

        @keyframes diagonal-21 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.11;
          }
          50% { 
            transform: translateY(11px) translateZ(0);
            opacity: 0.22;
          }
        }

        @keyframes diagonal-22 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.11;
          }
          50% { 
            transform: translateY(-11px) translateZ(0);
            opacity: 0.22;
          }
        }

        @keyframes diagonal-23 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.09;
          }
          50% { 
            transform: translateY(9px) translateZ(0);
            opacity: 0.18;
          }
        }

        @keyframes diagonal-24 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.09;
          }
          50% { 
            transform: translateY(-9px) translateZ(0);
            opacity: 0.18;
          }
        }

        @keyframes diagonal-25 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.13;
          }
          50% { 
            transform: translateY(13px) translateZ(0);
            opacity: 0.26;
          }
        }

        @keyframes diagonal-26 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.13;
          }
          50% { 
            transform: translateY(-13px) translateZ(0);
            opacity: 0.26;
          }
        }

        @keyframes diagonal-27 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.1;
          }
          50% { 
            transform: translateY(10px) translateZ(0);
            opacity: 0.2;
          }
        }

        @keyframes diagonal-28 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.1;
          }
          50% { 
            transform: translateY(-10px) translateZ(0);
            opacity: 0.2;
          }
        }

        @keyframes diagonal-29 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.12;
          }
          50% { 
            transform: translateY(12px) translateZ(0);
            opacity: 0.24;
          }
        }

        @keyframes diagonal-30 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.12;
          }
          50% { 
            transform: translateY(-12px) translateZ(0);
            opacity: 0.24;
          }
        }

        @keyframes diagonal-31 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.09;
          }
          50% { 
            transform: translateY(9px) translateZ(0);
            opacity: 0.18;
          }
        }

        @keyframes diagonal-32 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.09;
          }
          50% { 
            transform: translateY(-9px) translateZ(0);
            opacity: 0.18;
          }
        }

        @keyframes diagonal-33 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.14;
          }
          50% { 
            transform: translateY(14px) translateZ(0);
            opacity: 0.28;
          }
        }

        @keyframes diagonal-34 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.14;
          }
          50% { 
            transform: translateY(-14px) translateZ(0);
            opacity: 0.28;
          }
        }

        @keyframes diagonal-35 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.07;
          }
          50% { 
            transform: translateY(7px) translateZ(0);
            opacity: 0.14;
          }
        }

        @keyframes diagonal-36 {
          0%, 100% { 
            transform: translateY(0px) translateZ(0);
            opacity: 0.07;
          }
          50% { 
            transform: translateY(-7px) translateZ(0);
            opacity: 0.14;
          }
        }

        .animate-diagonal-19 {
          animation: diagonal-19 14s ease-in-out infinite;
          animation-delay: 0.25s;
          will-change: transform, opacity;
        }

        .animate-diagonal-20 {
          animation: diagonal-20 14s ease-in-out infinite;
          animation-delay: 11.75s;
          will-change: transform, opacity;
        }

        .animate-diagonal-21 {
          animation: diagonal-21 15s ease-in-out infinite;
          animation-delay: 0.75s;
          will-change: transform, opacity;
        }

        .animate-diagonal-22 {
          animation: diagonal-22 15s ease-in-out infinite;
          animation-delay: 12.25s;
          will-change: transform, opacity;
        }

        .animate-diagonal-23 {
          animation: diagonal-23 16s ease-in-out infinite;
          animation-delay: 1.25s;
          will-change: transform, opacity;
        }

        .animate-diagonal-24 {
          animation: diagonal-24 16s ease-in-out infinite;
          animation-delay: 12.75s;
          will-change: transform, opacity;
        }

        .animate-diagonal-25 {
          animation: diagonal-25 17s ease-in-out infinite;
          animation-delay: 1.75s;
          will-change: transform, opacity;
        }

        .animate-diagonal-26 {
          animation: diagonal-26 17s ease-in-out infinite;
          animation-delay: 13.25s;
          will-change: transform, opacity;
        }

        .animate-diagonal-27 {
          animation: diagonal-27 18s ease-in-out infinite;
          animation-delay: 2.25s;
          will-change: transform, opacity;
        }

        .animate-diagonal-28 {
          animation: diagonal-28 18s ease-in-out infinite;
          animation-delay: 13.75s;
          will-change: transform, opacity;
        }

        .animate-diagonal-29 {
          animation: diagonal-29 19s ease-in-out infinite;
          animation-delay: 2.75s;
          will-change: transform, opacity;
        }

        .animate-diagonal-30 {
          animation: diagonal-30 19s ease-in-out infinite;
          animation-delay: 14.25s;
          will-change: transform, opacity;
        }

        .animate-diagonal-31 {
          animation: diagonal-31 20s ease-in-out infinite;
          animation-delay: 3.25s;
          will-change: transform, opacity;
        }

        .animate-diagonal-32 {
          animation: diagonal-32 20s ease-in-out infinite;
          animation-delay: 14.75s;
          will-change: transform, opacity;
        }

        .animate-diagonal-33 {
          animation: diagonal-33 21s ease-in-out infinite;
          animation-delay: 3.75s;
          will-change: transform, opacity;
        }

        .animate-diagonal-34 {
          animation: diagonal-34 21s ease-in-out infinite;
          animation-delay: 15.25s;
          will-change: transform, opacity;
        }

        .animate-diagonal-35 {
          animation: diagonal-35 22s ease-in-out infinite;
          animation-delay: 4.25s;
          will-change: transform, opacity;
        }

        .animate-diagonal-36 {
          animation: diagonal-36 22s ease-in-out infinite;
          animation-delay: 15.75s;
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
};

export default Hero; 