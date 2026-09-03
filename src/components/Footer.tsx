import React from 'react';
import { Sun, Phone, MapPin, Clock, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';
import { Language, NavPage } from '../types';
import { FACILITY_INFO, TRANSLATIONS } from '../data/content';

interface FooterProps {
  currentPage: NavPage;
  setCurrentPage: (page: NavPage) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentPage,
  lang,
  setLang,
}) => {
  const t = TRANSLATIONS[lang];

  const handleNavClick = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2C332D] text-[#EAE7E0] pt-16 pb-12 border-t border-[#3D4C40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3D4C40]">
          {/* Brand Identity & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4A5D4E] flex items-center justify-center text-white shadow-sm shrink-0">
                <span className="font-serif text-xl italic font-bold">N</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-white leading-tight">
                  Nuevo Amanecer
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                  Tampa LLC • Assisted Living Facility
                </span>
              </div>
            </div>

            <p className="text-sm text-[#D4D1C9] leading-relaxed max-w-md">
              {t.footer.about}
            </p>

            {/* AHCA Credential Ribbon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#242B25] border border-[#3D4C40] text-xs text-[#EAE7E0]">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>{lang === 'es' ? FACILITY_INFO.ahcaLicenseTextEs : FACILITY_INFO.ahcaLicenseTextEn}</span>
            </div>

            {/* Bilingual Friendly Note */}
            <div className="flex items-center gap-2 text-xs text-[#8C887F] pt-1">
              <Heart className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>
                {lang === 'es'
                  ? 'Opciones bilingües disponibles.'
                  : 'Bilingual options available.'}
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white font-sans">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  id="footer-nav-home"
                  className="text-[#D4D1C9] hover:text-white hover:translate-x-0.5 transition-all flex items-center gap-1.5"
                >
                  <span>{t.nav.home}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  id="footer-nav-about"
                  className="text-[#D4D1C9] hover:text-white hover:translate-x-0.5 transition-all flex items-center gap-1.5"
                >
                  <span>{t.nav.about}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  id="footer-nav-services"
                  className="text-[#D4D1C9] hover:text-white hover:translate-x-0.5 transition-all flex items-center gap-1.5"
                >
                  <span>{t.nav.services}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('life')}
                  id="footer-nav-life"
                  className="text-[#D4D1C9] hover:text-white hover:translate-x-0.5 transition-all flex items-center gap-1.5"
                >
                  <span>{t.nav.life}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  id="footer-nav-contact"
                  className="text-[#D4D1C9] hover:text-white hover:translate-x-0.5 transition-all flex items-center gap-1.5"
                >
                  <span>{t.nav.contact}</span>
                </button>
              </li>
            </ul>

            {/* Language Switch in Footer */}
            <div className="pt-3">
              <span className="text-xs text-[#8C887F] block mb-1.5">{t.nav.language}:</span>
              <div className="inline-flex rounded-lg border border-[#3D4C40] bg-[#242B25] p-1 text-xs">
                <button
                  onClick={() => setLang('en')}
                  id="footer-lang-en"
                  className={`px-3 py-1 rounded transition-colors ${
                    lang === 'en' ? 'bg-[#4A5D4E] text-white font-semibold' : 'text-[#8C887F] hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLang('es')}
                  id="footer-lang-es"
                  className={`px-3 py-1 rounded transition-colors ${
                    lang === 'es' ? 'bg-[#4A5D4E] text-white font-semibold' : 'text-[#8C887F] hover:text-white'
                  }`}
                >
                  Español
                </button>
              </div>
            </div>
          </div>

          {/* Contact Details & Direct Call */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white font-sans">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={FACILITY_INFO.phoneTel}
                id="footer-phone-link"
                className="flex items-center gap-3 text-white hover:text-[#C5A059] transition-colors p-3 rounded-xl bg-[#242B25] border border-[#3D4C40] hover:border-[#4A5D4E]"
              >
                <div className="w-8 h-8 rounded-lg bg-[#4A5D4E] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <span className="text-xs text-[#8C887F] block">
                    {lang === 'es' ? 'Llámenos:' : 'Call us:'}
                  </span>
                  <span className="font-semibold text-base tracking-wide text-white">
                    (813) 376-5822
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-[#D4D1C9] pt-1">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">{FACILITY_INFO.address}</p>
                  <a
                    href={FACILITY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="footer-maps-link"
                    className="inline-flex items-center gap-1 text-xs text-[#C5A059] hover:underline mt-0.5"
                  >
                    <span>{lang === 'es' ? 'Abrir en Google Maps' : 'Open in Google Maps'}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-[#D4D1C9]">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">{lang === 'es' ? FACILITY_INFO.hoursEs : FACILITY_INFO.hours}</p>
                  <span className="text-xs text-[#8C887F]">
                    {lang === 'es' ? 'Llamadas y visitas familiares coordinadas' : 'Direct calls & scheduled visits'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Regulatory Ribbon */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-medium uppercase tracking-wider text-[#8C887F]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4A5D4E]"></span>
            <span>© {new Date().getFullYear()} {FACILITY_INFO.name} • {t.footer.copyright}</span>
          </div>
          <p className="text-center sm:text-right text-[#8C887F] normal-case tracking-normal text-xs">
            {lang === 'es' ? FACILITY_INFO.ahcaFullEs : FACILITY_INFO.ahcaFullEn}
          </p>
        </div>
      </div>
    </footer>
  );
};
