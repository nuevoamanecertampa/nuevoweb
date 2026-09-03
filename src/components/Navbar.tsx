import React, { useState } from 'react';
import { Phone, Menu, X, Globe, Sun, Type } from 'lucide-react';
import { Language, NavPage, FontScale } from '../types';
import { FACILITY_INFO, TRANSLATIONS } from '../data/content';
import logo from '../assets/logo.png';

interface NavbarProps {
  currentPage: NavPage;
  setCurrentPage: (page: NavPage) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  fontScale: FontScale;
  setFontScale: (scale: FontScale) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  lang,
  setLang,
  fontScale,
  setFontScale,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const navLinks: { id: NavPage; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'life', label: t.nav.life },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (page: NavPage) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cycleFontScale = () => {
    const scales: FontScale[] = ['md', 'lg', 'xl'];
    const currentIndex = scales.indexOf(fontScale);
    const nextIndex = (currentIndex + 1) % scales.length;
    setFontScale(scales[nextIndex]);
  };

  const getFontScaleLabel = () => {
    if (fontScale === 'md') return 'A';
    if (fontScale === 'lg') return 'A+';
    return 'A++';
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#EAE7E0] shadow-xs transition-all">
      {/* Top Utility Ribbon for Direct Communication & Hours */}
      <div className="bg-[#2C332D] text-[#EAE7E0] text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-[#EAE7E0]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C5A059]"></span>
            <span>{FACILITY_INFO.address}</span>
            <span className="hidden md:inline text-[#8C887F]">•</span>
            <span className="hidden md:inline text-[#D4D1C9]">{lang === 'es' ? FACILITY_INFO.hoursEs : FACILITY_INFO.hours}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#8C887F] text-xs font-medium hidden sm:inline">
              {lang === 'es' ? 'Opciones bilingües disponibles' : 'Bilingual options available'}
            </span>
            <a
              href={FACILITY_INFO.phoneTel}
              id="top-ribbon-phone"
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#C5A059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>(813) 376-5822</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Facility Identity */}
          <button
            onClick={() => handleNavClick('home')}
            id="brand-logo-btn"
            className="flex items-center gap-2 sm:gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/30 rounded-lg p-1 transition-transform min-w-0"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
  <img
   src={logo}
    alt="Nuevo Amanecer Tampa LLC"
    className="w-full h-full object-contain"
  />
</div>
            <div className="flex flex-col min-w-0">
              <span className="block font-serif text-[15px] sm:text-lg md:text-xl font-bold tracking-tight text-[#4A5D4E] group-hover:text-[#3D4C40] transition-colors leading-tight whitespace-nowrap">
                Nuevo Amanecer
              </span>
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-[0.2em] text-[#8C887F] font-bold whitespace-nowrap">
                <span className="sm:hidden">Tampa LLC</span>
                <span className="hidden sm:inline">Tampa LLC • Assisted Living</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm transition-all duration-150 rounded-md ${
                    isActive
                      ? 'text-[#4A5D4E] font-bold border-b-2 border-[#4A5D4E] rounded-b-none'
                      : 'text-[#5C5850] hover:text-[#4A5D4E] hover:bg-[#F5F4F0] font-medium'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Language Toggle, Text Scaler, Call Button */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            {/* Font Size Accessibility Scaler */}
            <button
              onClick={cycleFontScale}
              id="font-scale-toggle-btn"
              aria-label={t.nav.textSize}
              title={`${t.nav.textSize} (${getFontScaleLabel()})`}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#EAE7E0] bg-[#F5F4F0] text-[#5C5850] hover:bg-[#EAE7E0] hover:text-[#2C332D] transition-colors text-xs font-semibold"
            >
              <Type className="w-3.5 h-3.5 text-[#4A5D4E]" />
              <span className="font-bold">{getFontScaleLabel()}</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center rounded-lg border border-[#EAE7E0] bg-[#F5F4F0] p-0.5 text-xs font-medium">
              <button
                onClick={() => setLang('en')}
                id="lang-btn-en"
                className={`px-2.5 py-1 rounded-md transition-all ${
                  lang === 'en'
                    ? 'bg-[#4A5D4E] text-white shadow-xs font-semibold'
                    : 'text-[#8C887F] hover:text-[#2C332D]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('es')}
                id="lang-btn-es"
                className={`px-2.5 py-1 rounded-md transition-all ${
                  lang === 'es'
                    ? 'bg-[#4A5D4E] text-white shadow-xs font-semibold'
                    : 'text-[#8C887F] hover:text-[#2C332D]'
                }`}
              >
                ES
              </button>
            </div>

            {/* Direct Call Button */}
            <a
              href={FACILITY_INFO.phoneTel}
              id="header-call-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4A5D4E] hover:bg-[#3D4C40] text-white text-sm font-semibold shadow-sm shadow-[#4A5D4E]/20 transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>{t.nav.callUs}</span>
            </a>
          </div>

          {/* Mobile Menu & Quick Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Font Scaler for mobile */}
            <button
              onClick={cycleFontScale}
              id="mobile-font-scale-btn"
              aria-label={t.nav.textSize}
              className="p-2 rounded-lg border border-[#EAE7E0] bg-[#F5F4F0] text-[#5C5850] text-xs font-bold"
            >
              {getFontScaleLabel()}
            </button>

            {/* Language Toggle for mobile */}
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              id="mobile-lang-toggle-btn"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#EAE7E0] bg-[#F5F4F0] text-xs font-semibold text-[#4A5D4E]"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'ES' : 'EN'}</span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle Navigation Menu"
              className="p-2.5 rounded-xl border border-[#EAE7E0] bg-[#F5F4F0] text-[#2C332D] hover:bg-[#EAE7E0]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAE7E0] bg-[#FDFCF9] px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm sm:text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#4A5D4E] text-white font-semibold'
                    : 'text-[#5C5850] hover:bg-[#F5F4F0] hover:text-[#2C332D]'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#EAE7E0] mt-3 space-y-3">
            <div className="flex items-center justify-between px-2 text-xs text-[#8C887F]">
              <span>{t.nav.textSize}:</span>
              <div className="flex gap-2">
                {(['md', 'lg', 'xl'] as FontScale[]).map((scale) => (
                  <button
                    key={scale}
                    onClick={() => setFontScale(scale)}
                    className={`px-3 py-1 rounded border text-xs font-semibold ${
                      fontScale === scale
                        ? 'bg-[#4A5D4E] text-white border-[#4A5D4E]'
                        : 'bg-white text-[#5C5850] border-[#EAE7E0]'
                    }`}
                  >
                    {scale === 'md' ? 'Default' : scale === 'lg' ? 'Large' : 'X-Large'}
                  </button>
                ))}
              </div>
            </div>

            <a
              href={FACILITY_INFO.phoneTel}
              id="mobile-drawer-call-btn"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-[#4A5D4E] text-white font-semibold text-base shadow-sm hover:bg-[#3D4C40]"
            >
              <Phone className="w-5 h-5 text-[#C5A059]" />
              <span>{t.nav.callUs}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
