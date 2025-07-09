'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-orange-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] p-8 md:p-12">
          <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-[#ff4f19]">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-4">
              Bądź na bieżąco!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Zapisz się do naszego newslettera i otrzymuj najnowsze informacje o naszych aplikacjach, 
              porady dla browarów i ekskluzywne oferty.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="twoj@email.com"
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-[#ff4f19] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 font-medium"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-[#ff4f19] text-white px-6 py-3 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 font-bold disabled:opacity-50 hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Zapisz się
                    <Send className="w-4 h-4 ml-2 inline" />
                  </>
                )}
              </button>
            </div>

            {status === 'success' && (
              <div className="mt-4 p-3 bg-green-500/10 border-2 border-green-500 text-green-700 dark:text-green-300 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Dziękujemy za zapisanie się!
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 p-3 bg-red-500/10 border-2 border-red-500 text-red-700 dark:text-red-300 rounded-lg text-center">
                Wystąpił błąd. Spróbuj ponownie.
              </div>
            )}
          </form>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-6">
            Możesz zrezygnować z subskrypcji w każdej chwili. Szanujemy Twoją prywatność.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 