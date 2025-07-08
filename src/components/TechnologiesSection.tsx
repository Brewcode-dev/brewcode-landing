'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechnologiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "⚛️", level: 95 },
        { name: "Next.js", icon: "⚡", level: 90 },
        { name: "TypeScript", icon: "📘", level: 85 },
        { name: "Tailwind CSS", icon: "🎨", level: 90 },
        { name: "Vue.js", icon: "💚", level: 80 }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "🟢", level: 90 },
        { name: "Python", icon: "🐍", level: 85 },
        { name: "PostgreSQL", icon: "🐘", level: 80 },
        { name: "MongoDB", icon: "🍃", level: 75 },
        { name: "Redis", icon: "🔴", level: 70 }
      ]
    },
    {
      category: "DevOps & Tools",
      technologies: [
        { name: "Docker", icon: "🐳", level: 85 },
        { name: "AWS", icon: "☁️", level: 80 },
        { name: "Git", icon: "📝", level: 95 },
        { name: "CI/CD", icon: "🔄", level: 85 },
        { name: "Kubernetes", icon: "⚓", level: 70 }
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".tech-card", 
        { 
          y: 50, 
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate skill bars
      gsap.fromTo(".skill-bar", 
        { width: 0 },
        {
          width: "100%",
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#FFF2E6] dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6">
            Nasze <span className="text-international-orange-500">Technologie</span>
          </h2>
          <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Używamy najnowszych technologii i narzędzi, aby tworzyć szybkie, skalowalne i bezpieczne aplikacje.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="tech-card bg-[#FFF2E6] dark:bg-gray-900 p-8 border-2 border-international-orange-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300"
            >
                              <h3 className="text-2xl font-black text-black dark:text-white mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-bold text-black dark:text-white">{tech.name}</span>
                      </div>
                      <span className="text-sm font-bold text-international-orange-500">{tech.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 border-2 border-gray-300 dark:border-gray-600">
                      <div 
                        className="skill-bar bg-international-orange-500 h-full"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-[#FFF2E6] dark:bg-gray-900 p-8 border-2 border-international-orange-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
                          <h3 className="text-2xl font-black text-black dark:text-white mb-4">
              Ciągle się rozwijamy
            </h3>
            <p className="text-lg text-black dark:text-gray-300 font-medium mb-6">
              Śledzimy najnowsze trendy w technologii i stale poszerzamy nasze umiejętności. 
              Każdy projekt to okazja do nauki czegoś nowego.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Machine Learning", "Blockchain", "IoT", "AR/VR", 
                "Serverless", "Microservices", "GraphQL", "Web3"
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-international-orange-500/10 border-2 border-international-orange-500 text-international-orange-500 font-bold text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection; 