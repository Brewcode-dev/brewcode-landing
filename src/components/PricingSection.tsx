'use client';

import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import Button from './ui/Button';
import { useFadeInUp, useStaggerAnimation } from '../hooks/useScrollAnimation';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Idealny dla małych browarów i pubów',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Do 5 użytkowników',
        'Podstawowe funkcje',
        'Wsparcie email',
        'Aktualizacje',
        'Backup danych'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Dla średnich i dużych biznesów',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'Do 20 użytkowników',
        'Wszystkie funkcje',
        'Wsparcie telefoniczne',
        'Integracje API',
        'Szkolenia online',
        'Dedykowany opiekun'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Rozwiązania dla dużych organizacji',
      monthlyPrice: 399,
      yearlyPrice: 3990,
      features: [
        'Nielimitowani użytkownicy',
        'Wszystkie funkcje',
        'Wsparcie 24/7',
        'Integracje custom',
        'Szkolenia na miejscu',
        'Dedykowany zespół',
        'SLA gwarancja'
      ],
      popular: false
    }
  ];

  // Animation refs
  const headerRef = useFadeInUp(0, 0.2);
  const toggleRef = useFadeInUp(0.2, 0.3);
  const plansRef = useStaggerAnimation(0.2);

  return (
    <section id="pricing" className="py-20 bg-theme-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-theme-primary">
            Cennik <span className="text-[#ff4f19]">usług</span>
          </h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
            Wybierz plan, który najlepiej pasuje do Twoich potrzeb. 
            Wszystkie plany obejmują 30-dniowy okres próbny.
          </p>
        </div>

        {/* Billing Toggle */}
        <div ref={toggleRef} className="flex items-center justify-center space-x-4 mb-8">
          <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-theme-primary' : 'text-theme-secondary'}`}>
            Miesięcznie
          </span>
          <div 
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="relative inline-flex h-6 w-11 items-center bg-theme-surface border-2 border-[#ff4f19] rounded-full cursor-pointer"
          >
            <div
              className={`inline-block h-4 w-4 transform bg-white transition-transform border-2 border-[#ff4f19] rounded-full ${
                billingCycle === 'yearly' ? 'translate-x-5' : 'translate-x-1'
              }`}
            />
          </div>
          <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-theme-primary' : 'text-theme-secondary'}`}>
            Rocznie
            <span className="ml-1 text-[#ff4f19]">(-17%)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div ref={plansRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-theme-surface p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] hover:shadow-[8px_8px_0px_0px_var(--theme-shadow)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] ${
                plan.popular ? 'ring-4 ring-[#ff4f19]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#ff4f19] text-white px-4 py-2 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] border-2 border-[#ff4f19]">
                    <Star className="w-4 h-4 inline mr-1" />
                    Najpopularniejszy
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-theme-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-theme-secondary mb-6">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-black text-[#ff4f19]">
                    {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-theme-secondary"> zł</span>
                  <span className="text-theme-secondary text-sm">
                    /{billingCycle === 'monthly' ? 'miesiąc' : 'rok'}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-[#ff4f19] mr-3 flex-shrink-0" />
                    <span className="text-theme-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                size="lg"
                className="w-full"
              >
                Wybierz plan
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-theme-surface p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_var(--theme-shadow)]">
            <h3 className="text-2xl font-black text-theme-primary mb-4">
              Potrzebujesz czegoś więcej?
            </h3>
            <p className="text-theme-secondary mb-6">
              Skontaktuj się z nami, aby omówić indywidualne rozwiązania dla Twojego biznesu.
            </p>
            <Button variant="primary" size="md">
              Skontaktuj się
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 