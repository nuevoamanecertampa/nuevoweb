import React from 'react';
import {
  Phone,
  MapPin,
  Heart,
  ShieldCheck,
  Sun,
  Smile,
  ArrowRight,
  ExternalLink,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { Language, NavPage } from '../types';
import { FACILITY_INFO, TRANSLATIONS } from '../data/content';
import heroImage from '../assets/hero image.png';
import careImage from '../assets/care image.jpg';

interface HomeViewProps {
  setCurrentPage: (page: NavPage) => void;
  lang: Language;
}

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentPage, lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Subtle AHCA accreditation badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EFEB] border border-[#EAE7E0] text-xs font-semibold text-[#5C5850]">
                <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
                <span className="text-[11px] uppercase tracking-wider text-[#8C887F] font-bold">
                  {t.hero.badge}
                </span>
              </div>

              {/* Exact Requested Headlines with Professional Polish typography */}
              <div className="space-y-3">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#2C332D] leading-[1.15]">
                  {lang === 'es' ? (
                    <>
                      Tu nuevo amanecer comienza{' '}
                      <span className="italic text-[#4A5D4E]">aquí</span>
                    </>
                  ) : (
                    <>
                      Where a new day{' '}
                      <span className="italic text-[#4A5D4E]">begins</span>
                    </>
                  )}
                </h1>
                <p className="text-base sm:text-lg font-semibold text-[#4A5D4E] tracking-wide">
                  {t.hero.subheadline}
                </p>
              </div>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-[#5C5850] leading-relaxed max-w-2xl">
                {t.hero.supporting}
              </p>

              {/* Bullet Points from Professional Polish spec */}
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#EAE7E0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A5D4E]" />
                  </div>
                  <p className="text-sm text-[#5C5850]">
                    <strong className="font-bold text-[#2C332D]">
                      {lang === 'es' ? 'Atención Personalizada: ' : 'Personalized Attention: '}
                    </strong>
                    {lang === 'es'
                      ? 'Centrada en la dignidad, la independencia y el bienestar diario.'
                      : 'Focused on dignity, personal independence, and continuous care.'}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#EAE7E0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A5D4E]" />
                  </div>
                  <p className="text-sm text-[#5C5850]">
                    <strong className="font-bold text-[#2C332D]">
                      {lang === 'es' ? 'Opciones Bilingües: ' : 'Bilingual Options: '}
                    </strong>
                    {lang === 'es'
                      ? 'Atención disponible en español e inglés.'
                      : 'Assistance available in both English and Spanish.'}
                  </p>
                </div>
              </div>

              {/* Call-to-action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={FACILITY_INFO.phoneTel}
                  id="hero-primary-call-btn"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#4A5D4E] hover:bg-[#3D4C40] text-white font-bold text-base shadow-lg shadow-[#4A5D4E]/20 transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="w-5 h-5 text-[#C5A059]" />
                  <span>{t.hero.primaryCta}</span>
                </a>

                <button
                  onClick={() => {
                    setCurrentPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  id="hero-secondary-learn-btn"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F5F4F0] text-[#5C5850] hover:text-[#2C332D] border-2 border-[#EAE7E0] font-bold text-base transition-colors shadow-xs"
                >
                  <span>{t.hero.secondaryCta}</span>
                  <ArrowRight className="w-4 h-4 text-[#4A5D4E]" />
                </button>
              </div>

              {/* Reassuring note for families */}
              <p className="text-xs text-[#8C887F] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4A5D4E]"></span>
                <span>{t.hero.callNotice}</span>
              </p>
            </div>

            {/* Right Hero Image Column - Clear view of the ALF Facility */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative rounded-[36px] sm:rounded-[40px] overflow-hidden shadow-2xl border-[8px] sm:border-[12px] border-white bg-[#EAE7E0]">
                  <img
  src={heroImage}
  alt={
    lang === 'es'
                        ? 'Instalación de Vida Asistida Nuevo Amanecer Tampa en 7405 Aripeka Dr'
                        : 'Nuevo Amanecer Tampa Assisted Living Facility residential home at 7405 Aripeka Dr'
                    }
                    className="w-full h-[380px] sm:h-[460px] object-cover"
                  />
                  {/* Subtle, elegant facility caption strip at bottom */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2C332D]/90 via-[#2C332D]/40 to-transparent pt-8 pb-4 px-5 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span className="font-semibold">{FACILITY_INFO.address}, Tampa, FL</span>
                    </div>
                    <span className="text-[11px] text-[#C5A059] font-medium hidden sm:inline">AHCA Licensed</span>
                  </div>
                </div>

                {/* Decorative soft backdrop element */}
                <div className="absolute -bottom-4 -left-4 -z-10 w-full h-full rounded-[40px] bg-[#EAE7E0] -rotate-1 hidden sm:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE PROFESSIONAL POLISH SERVICES BANNER STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4A5D4E] rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-[#4A5D4E]/15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
            {/* Service 1: Assisted Living */}
            <div className="lg:col-span-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-serif text-lg mb-1 italic font-bold">
                  {lang === 'es' ? 'Vida Asistida' : 'Assisted Living'}
                </h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  {lang === 'es'
                    ? 'Apoyo diario con actividades cotidianas en un entorno seguro y hogareño adaptado a cada residente.'
                    : 'Support with daily activities in a safe, caring residential environment tailored to individual needs.'}
                </p>
              </div>
              <button
                onClick={() => {
                  setCurrentPage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-xs font-bold text-[#C5A059] mt-3 hover:underline inline-flex items-center gap-1"
              >
                <span>{lang === 'es' ? 'Conocer más' : 'Learn more'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Service 2: Adult Day Care */}
            <div className="lg:col-span-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-serif text-lg mb-1 italic font-bold">
                  {lang === 'es' ? 'Cuidado Diurno' : 'Adult Day Care'}
                </h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  {lang === 'es'
                    ? 'Actividades diurnas estimulantes y servicios de cuidado enfocados en el bienestar y la socialización.'
                    : 'Engaging daytime activities and care services for participants, focusing on social well-being.'}
                </p>
              </div>
              <button
                onClick={() => {
                  setCurrentPage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-xs font-bold text-[#C5A059] mt-3 hover:underline inline-flex items-center gap-1"
              >
                <span>{lang === 'es' ? 'Conocer más' : 'Learn more'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Service 3: Respite Care */}
            <div className="lg:col-span-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-serif text-lg mb-1 italic font-bold">
                  {lang === 'es' ? 'Cuidado de Relevo' : 'Respite Care'}
                </h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  {lang === 'es'
                    ? 'Alivio temporal para cuidadores familiares, con la certeza de que su ser querido está en las mejores manos.'
                    : 'Short-term relief for family caregivers, ensuring your loved one is in the best, most caring hands.'}
                </p>
              </div>
              <button
                onClick={() => {
                  setCurrentPage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-xs font-bold text-[#C5A059] mt-3 hover:underline inline-flex items-center gap-1"
              >
                <span>{lang === 'es' ? 'Conocer más' : 'Learn more'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Facility Location block */}
            <div className="lg:col-span-3 flex flex-col justify-center lg:pl-6 lg:border-l border-white/15">
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] mb-1.5">
                {lang === 'es' ? 'Ubicación' : 'Location'}
              </p>
              <p className="text-white text-sm leading-snug font-medium">
                7405 Aripeka Dr<br />
                Tampa, FL 33619
              </p>
              <a
                href={FACILITY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A059] text-xs font-bold mt-2.5 hover:underline inline-flex items-center gap-1"
              >
                <span>{lang === 'es' ? 'Abrir en Google Maps →' : 'Open in Google Maps →'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT / WELCOME SECTION */}
      <section className="bg-[#F5F4F0] py-14 sm:py-20 border-y border-[#EAE7E0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE7E0] text-xs font-bold uppercase tracking-wider text-[#5C5850]">
            <Sun className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{t.welcome.tagline}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C332D] max-w-3xl mx-auto leading-snug">
            {t.welcome.title}
          </h2>

          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#EAE7E0] shadow-xs max-w-4xl mx-auto text-left space-y-6">
            <p className="text-base sm:text-lg text-[#5C5850] leading-relaxed">
              {t.welcome.paragraph}
            </p>

            <div className="pt-4 border-t border-[#EAE7E0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-[#5C5850] text-sm">
                <MapPin className="w-5 h-5 text-[#4A5D4E] shrink-0" />
                <span className="font-semibold text-[#2C332D]">{FACILITY_INFO.address}</span>
              </div>

              {/* Two Requested Buttons: Learn More and Google Maps */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    setCurrentPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  id="welcome-learn-more-btn"
                  className="px-5 py-2.5 rounded-xl bg-[#4A5D4E] hover:bg-[#3D4C40] text-white text-sm font-semibold transition-colors shadow-xs"
                >
                  {t.welcome.btnLearnMore}
                </button>

                <a
                  href={FACILITY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="welcome-google-maps-btn"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F5F4F0] hover:bg-[#EAE7E0] text-[#2C332D] border border-[#EAE7E0] text-sm font-semibold transition-colors"
                >
                  <span>{t.welcome.btnGoogleMaps}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#4A5D4E]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE MISSION & TWO MAIN GOALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4A5D4E]">
            {t.mission.tagline}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C332D]">
            {t.mission.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5C5850] leading-relaxed">
            {t.mission.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Goal 1 */}
          <div className="bg-white p-8 rounded-2xl border border-[#EAE7E0] shadow-xs hover:border-[#4A5D4E]/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F4F0] text-[#4A5D4E] flex items-center justify-center">
                <Smile className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-bold tracking-wider uppercase text-[#C5A059]">
                  {lang === 'es' ? 'Meta Principal 1' : 'Core Goal 1'}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#2C332D]">
                  {t.mission.goal1Title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#5C5850] leading-relaxed">
                {t.mission.goal1Desc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EAE7E0] text-xs font-semibold text-[#4A5D4E] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#4A5D4E] shrink-0" />
              <span>{lang === 'es' ? 'Dignidad diaria y autonomía' : 'Daily dignity and personal autonomy'}</span>
            </div>
          </div>

          {/* Goal 2 */}
          <div className="bg-white p-8 rounded-2xl border border-[#EAE7E0] shadow-xs hover:border-[#4A5D4E]/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5F4F0] text-[#4A5D4E] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-bold tracking-wider uppercase text-[#C5A059]">
                  {lang === 'es' ? 'Meta Principal 2' : 'Core Goal 2'}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#2C332D]">
                  {t.mission.goal2Title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#5C5850] leading-relaxed">
                {t.mission.goal2Desc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EAE7E0] text-xs font-semibold text-[#4A5D4E] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#4A5D4E] shrink-0" />
              <span>{lang === 'es' ? 'Confianza absoluta para los hijos' : 'Confidence and serenity for families'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH TO CARE (THREE AUTHORIZED CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4A5D4E]">
            {t.approach.tagline}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C332D]">
            {t.approach.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5C5850] leading-relaxed">
            {t.approach.description}
          </p>
        </div>

        {/* 3 Strict Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.servicesList.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl border border-[#EAE7E0] p-6 lg:p-7 shadow-xs hover:shadow-md hover:border-[#4A5D4E]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F4F0] text-[#4A5D4E] flex items-center justify-center">
                    {service.id === 'assisted-living' && <Users className="w-6 h-6" />}
                    {service.id === 'adult-daycare' && <Sun className="w-6 h-6" />}
                    {service.id === 'respite-services' && <Heart className="w-6 h-6" />}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#F1EFEB] text-[#5C5850] border border-[#EAE7E0]">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C332D] leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#4A5D4E] mt-1">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#5C5850] leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-3 border-t border-[#EAE7E0] space-y-2">
                  {service.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#5C5850]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4A5D4E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4">
                <button
                  onClick={() => {
                    setCurrentPage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 rounded-xl border-2 border-[#EAE7E0] hover:bg-[#F5F4F0] text-[#5C5850] hover:text-[#2C332D] text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{t.approach.viewDetails}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#4A5D4E]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Scope Notice */}
        <div className="mt-8 bg-[#F5F4F0] border border-[#EAE7E0] p-4 sm:p-5 rounded-2xl flex items-start sm:items-center gap-3.5 max-w-3xl mx-auto">
          <ShieldCheck className="w-5 h-5 text-[#4A5D4E] shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm text-[#5C5850]">
            <strong className="text-[#2C332D]">{t.scopeNotice.title}:</strong> {t.scopeNotice.text}
          </p>
        </div>
      </section>

      {/* 5. BILINGUAL CARE SECTION */}
      <section className="bg-gradient-to-br from-[#FDFCF9] to-[#F5F4F0] py-14 sm:py-18 border-y border-[#EAE7E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4A5D4E]">
                {t.bilingual.tagline}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C332D] leading-snug">
                {t.bilingual.title}
              </h2>
              <p className="text-base text-[#5C5850] leading-relaxed">
                {t.bilingual.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-xl border border-[#EAE7E0] shadow-xs">
                  <h4 className="font-semibold text-sm text-[#2C332D] mb-1">
                    {t.bilingual.point1Title}
                  </h4>
                  <p className="text-xs text-[#5C5850] leading-relaxed">
                    {t.bilingual.point1Desc}
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-[#EAE7E0] shadow-xs">
                  <h4 className="font-semibold text-sm text-[#2C332D] mb-1">
                    {t.bilingual.point2Title}
                  </h4>
                  <p className="text-xs text-[#5C5850] leading-relaxed">
                    {t.bilingual.point2Desc}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={FACILITY_INFO.phoneTel}
                  id="bilingual-call-btn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4A5D4E] hover:bg-[#3D4C40] text-white text-sm font-bold transition-all shadow-md shadow-[#4A5D4E]/20"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>{t.bilingual.cta}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[28px] overflow-hidden border-[8px] border-white shadow-xl">
                <img
                  src={careImage}
                  alt={
                    lang === 'es'
                      ? 'Ambiente cálido y respetuoso en Nuevo Amanecer Tampa'
                      : 'Warm, supportive homelike environment at Nuevo Amanecer Tampa'
                  }
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LIFE AT NUEVO AMANECER PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#EAE7E0] p-8 sm:p-12 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#EAE7E0]">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4A5D4E]">
                {t.life.tagline}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C332D]">
                {t.life.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5C5850] leading-relaxed">
                {t.life.intro}
              </p>
            </div>

            <button
              onClick={() => {
                setCurrentPage('life');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              id="home-life-view-all-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4A5D4E] hover:bg-[#3D4C40] text-white text-sm font-semibold shrink-0 transition-colors shadow-xs"
            >
              <span>{lang === 'es' ? 'Ver Vida y Galería Completa' : 'View Life & Photo Gallery'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {t.life.features.slice(0, 3).map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#F5F4F0] border border-[#EAE7E0] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#4A5D4E]/10 text-[#4A5D4E] flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="font-serif text-base font-bold text-[#2C332D]">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5C5850] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VISIT US / DIRECT CALL PROMPT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#4A5D4E] text-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-[#4A5D4E]/20 space-y-6 relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#C5A059] uppercase tracking-widest">
              {lang === 'es' ? 'Visitas y Consultas' : 'Visits & Inquiries'}
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
              {t.visitUs.headline}
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {t.visitUs.text}
            </p>

            <p className="text-xs sm:text-sm text-[#C5A059] font-medium">
              {t.visitUs.callPrompt}
            </p>

            <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
              <a
                href={FACILITY_INFO.phoneTel}
                id="visit-us-call-btn"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F5F4F0] text-[#4A5D4E] font-bold text-base shadow-sm transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5 text-[#4A5D4E]" />
                <span>{t.visitUs.button}</span>
              </a>

              <a
                href={FACILITY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="visit-us-map-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>7405 Aripeka Dr, Tampa</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
