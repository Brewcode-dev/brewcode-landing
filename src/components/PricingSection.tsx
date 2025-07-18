'use client';

import React, { useState } from 'react';
import { Check, X, Star, Zap, Crown, Users } from 'lucide-react';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Dla małych browarów i domowych warzelników',
      price: billingCycle === 'monthly' ? 99 : 990,
      originalPrice: billingCycle === 'monthly' ? 129 : 1290,
      features: [
        'Do 3 użytkowników',
        'Podstawowe receptury',
        'Kalkulatory warzenia',
        'Email support',
        'Aktualizacje',
        'Mobilna aplikacja'
      ],
      notIncluded: [
        'Zaawansowana analityka',
        'Integracje API',
        'Dedykowany support',
        'Szkolenia'
      ],
      icon: Users,
      popular: false
    },
    {
      name: 'Professional',
      description: 'Dla średnich browarów i pubów',
      price: billingCycle === 'monthly' ? 299 : 2990,
      originalPrice: billingCycle === 'monthly' ? 399 : 3990,
      features: [
        'Do 10 użytkowników',
        'Zaawansowane receptury',
        'Analityka w czasie rzeczywistym',
        'Integracje z systemami',
        'Priority support',
        'Szkolenia online',
        'API dostęp',
        'Raporty customowe'
      ],
      notIncluded: [
        'Dedykowany manager',
        'Szkolenia na miejscu'
      ],
      icon: Zap,
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Dla dużych browarów i sieci pubów',
      price: billingCycle === 'monthly' ? 799 : 7990,
      originalPrice: billingCycle === 'monthly' ? 999 : 9990,
      features: [
        'Nielimitowani użytkownicy',
        'Wszystkie funkcje',
        'Dedykowany manager',
        'Szkolenia na miejscu',
        'Custom integracje',
        '24/7 support',
        'SLA gwarancja',
        'White-label opcje'
      ],
      notIncluded: [],
      icon: Crown,
      popular: false
    }
  ];

  const savings = billingCycle === 'yearly' ? 'Oszczędź 20%' : '';

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            Wybierz swój <span className="text-[#ff4f19]">plan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Elastyczne plany dostosowane do Twoich potrzeb. Rozpocznij za darmo przez 30 dni.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-gray-800 dark:text-white' : 'text-gray-500'}`}>
              Miesięcznie
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4f19] focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-gray-800 dark:text-white' : 'text-gray-500'}`}>
              Rocznie
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-[#ff4f19] text-white px-3 py-1 text-xs font-bold">
                {savings}
              </span>
            )}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative pricing-card bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] ${
                  plan.popular ? 'ring-4 ring-[#ff4f19] ring-opacity-50' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#ff4f19] text-white px-6 py-2 text-sm font-bold shadow-lg">
                      Najpopularniejszy
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[#ff4f19] flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-[#ff4f19]">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-black text-gray-800 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      zł/{billingCycle === 'monthly' ? 'miesiąc' : 'rok'}
                    </span>
                  </div>
                  {plan.originalPrice > plan.price && (
                    <div className="text-gray-500 line-through text-sm">
                      {plan.originalPrice} zł
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-black text-gray-800 dark:text-white mb-4">
                    Zawiera:
                  </h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Not Included */}
                {plan.notIncluded.length > 0 && (
                  <div className="space-y-4 mb-8">
                    <h4 className="font-black text-gray-800 dark:text-white mb-4">
                      Nie zawiera:
                    </h4>
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 font-bold border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-1px] hover:translate-y-[-1px] ${
                  plan.popular
                    ? 'bg-[#ff4f19] text-white'
                    : 'bg-white dark:bg-gray-800 text-[#ff4f19]'
                }`}>
                  {plan.popular ? 'Rozpocznij trial' : 'Wybierz plan'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-4">
              Potrzebujesz customowego rozwiązania?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Skontaktuj się z nami, aby omówić indywidualne potrzeby Twojego biznesu.
            </p>
            <button className="bg-[#ff4f19] text-white font-bold py-4 px-8 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-x-[-1px] hover:translate-y-[-1px]">
              Skontaktuj się
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-8 text-center">
            Często zadawane pytania
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <h4 className="font-black text-gray-800 dark:text-white mb-2">
                Czy mogę zmienić plan w trakcie?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Tak, możesz zmienić plan w dowolnym momencie. Różnica w cenie zostanie rozliczona proporcjonalnie.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <h4 className="font-black text-gray-800 dark:text-white mb-2">
                Jak wygląda darmowy trial?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Przez 30 dni masz pełny dostęp do wszystkich funkcji. Nie wymagamy karty kredytowej.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <h4 className="font-black text-gray-800 dark:text-white mb-2">
                Czy dane są bezpieczne?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Tak, używamy najwyższych standardów bezpieczeństwa i szyfrowania danych.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <h4 className="font-black text-gray-800 dark:text-white mb-2">
                Jakie są metody płatności?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Akceptujemy karty kredytowe, przelewy bankowe i płatności online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 