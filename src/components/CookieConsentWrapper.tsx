'use client';

import React from 'react';
import CookieConsent from './CookieConsent';

const CookieConsentWrapper = () => {
  const handlePreferencesChange = (preferences: any) => {
    console.log('Preferencje cookie zostały zmienione:', preferences);
    // Tutaj możesz dodać logikę do obsługi preferencji cookie
    // np. włączenie/wyłączenie Google Analytics, reklam, etc.
  };

  return <CookieConsent onPreferencesChange={handlePreferencesChange} />;
};

export default CookieConsentWrapper; 