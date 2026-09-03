/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Language, NavPage, FontScale } from './types';
import { FACILITY_INFO } from './data/content';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { LifeView } from './components/LifeView';
import { ContactView } from './components/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('nuevo_amanecer_lang');
    if (saved === 'en' || saved === 'es') return saved;
    // Default to Spanish to honor the owners' primary communication & Tampa Hispanic community, with instant English switch
    return 'es';
  });

  const [fontScale, setFontScale] = useState<FontScale>(() => {
    const saved = localStorage.getItem('nuevo_amanecer_font_scale');
    if (saved === 'sm' || saved === 'md' || saved === 'lg' || saved === 'xl') return saved;
    return 'md';
  });

  // Persist language
  useEffect(() => {
    localStorage.setItem('nuevo_amanecer_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Apply and persist accessible font scale
  useEffect(() => {
    localStorage.setItem('nuevo_amanecer_font_scale', fontScale);
    document.documentElement.classList.remove('font-scale-sm', 'font-scale-md', 'font-scale-lg', 'font-scale-xl');
    document.documentElement.classList.add(`font-scale-${fontScale}`);
  }, [fontScale]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCF9] text-[#2C332D] font-sans antialiased selection:bg-[#4A5D4E]/15 selection:text-[#2C332D]">
      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lang={lang}
        setLang={setLang}
        fontScale={fontScale}
        setFontScale={setFontScale}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView setCurrentPage={setCurrentPage} lang={lang} />
        )}
        {currentPage === 'about' && (
          <AboutView setCurrentPage={setCurrentPage} lang={lang} />
        )}
        {currentPage === 'services' && (
          <ServicesView setCurrentPage={setCurrentPage} lang={lang} />
        )}
        {currentPage === 'life' && (
          <LifeView setCurrentPage={setCurrentPage} lang={lang} />
        )}
        {currentPage === 'contact' && (
          <ContactView lang={lang} />
        )}
      </main>

      {/* Floating Direct Call Button for Mobile/Tablet */}
      <div className="sm:hidden fixed bottom-4 right-4 z-40">
        <a
          href={FACILITY_INFO.phoneTel}
          id="mobile-floating-call-btn"
          aria-label={lang === 'es' ? 'Llamar al (813) 376-5822' : 'Call (813) 376-5822'}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#4A5D4E] text-white shadow-xl shadow-[#4A5D4E]/30 font-bold text-sm border-2 border-white hover:bg-[#3D4C40] active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5 text-[#C5A059] animate-pulse" />
          <span>(813) 376-5822</span>
        </a>
      </div>

      {/* Footer */}
      <Footer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lang={lang}
        setLang={setLang}
      />
    </div>
  );
}
