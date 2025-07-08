'use client';

import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Proszę wprowadzić poprawny adres email.');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically make an API call to your backend
      // await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });

      setStatus('success');
      setMessage('Dziękujemy za zapisanie się do newslettera!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Wystąpił błąd. Spróbuj ponownie później.');
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-international-orange-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#FFF2E6] dark:bg-gray-900 border-2 border-international-orange-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] p-8 md:p-12">
          <div className="w-16 h-16 bg-international-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-4">
            Bądź na bieżąco
          </h2>
          
          <p className="text-xl text-black dark:text-gray-300 mb-8 max-w-2xl mx-auto font-medium">
            Zapisz się do naszego newslettera i otrzymuj najnowsze informacje o aktualizacjach, 
            nowych funkcjach i najlepszych praktykach w branży.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Twój adres email"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-international-orange-500 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-international-orange-500/20 transition-all duration-300 font-medium"
                  disabled={status === 'loading'}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-international-orange-500 text-white px-6 py-3 border-2 border-international-orange-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:scale-105 hover:rotate-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:rotate-0"
              >
                {status === 'loading' ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Zapisuję...
                  </div>
                ) : (
                  'Zapisz się'
                )}
              </button>
            </div>

            {/* Status Message */}
            {status !== 'idle' && (
              <div className={`mt-4 p-3 border-2 rounded-lg flex items-center justify-center font-bold ${
                status === 'success' 
                  ? 'bg-green-500/10 border-green-500 text-green-700 dark:text-green-300' 
                  : 'bg-red-500/10 border-red-500 text-red-700 dark:text-red-300'
              }`}>
                {status === 'success' ? (
                  <CheckCircle className="w-5 h-5 mr-2" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2" />
                )}
                {message}
              </div>
            )}
          </form>

          <p className="text-sm text-black dark:text-gray-400 mt-6 font-medium">
            Możesz zrezygnować z subskrypcji w każdej chwili. 
            <br />
            Szanujemy Twoją prywatność i nie będziemy spamować.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 