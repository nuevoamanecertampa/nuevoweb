import React from 'react';
import {
  Heart,
  ShieldCheck,
  CheckCircle,
  Phone,
  Clock,
  MapPin,
  Smile,
  ExternalLink,
} from 'lucide-react';
import { Language, NavPage } from '../types';
import { FACILITY_INFO, TRANSLATIONS } from '../data/content';

interface AboutViewProps {
  setCurrentPage: (page: NavPage) => void;
  lang: Language;
}

export const AboutView: React.FC<AboutViewProps> = ({ setCurrentPage, lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EFEB] border border-[#EAE7E0] text-xs font-semibold text-[#5C5850]">
          <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
          <span>{lang === 'es' ? 'Sobre Nuevo Amanecer Tampa' : 'About Nuevo Amanecer Tampa'}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C332D] max-w-3xl mx-auto leading-tight">
          {lang === 'es'
            ? 'Un Hogar Donde el Cuidado y la Calidez se Sienten Como Familia'
            : 'A Real Home Where Care and Warmth Feel Like Family'}
        </h1>

        <p className="text-base sm:text-lg text-[#5C5850] max-w-2xl mx-auto leading-relaxed">
          {lang === 'es'
            ? 'Dedicados a brindar tranquilidad a las familias y bienestar diario a los adultos mayores y personas con discapacidades en Tampa, Florida.'
            : 'Dedicated to bringing peace of mind to families and daily well-being to older adults and individuals with disabilities in Tampa, Florida.'}
        </p>
      </section>

      {/* Story & Home Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#EAE7E0] p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4A5D4E]">
                {lang === 'es' ? 'Nuestra Filosofía' : 'Our Philosophy'}
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C332D] leading-snug">
                {t.welcome.title}
              </h2>

              <p className="text-base text-[#5C5850] leading-relaxed">
                {t.welcome.paragraph}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-[#5C5850]">
                  <div className="w-6 h-6 rounded-full bg-[#EAE7E0] text-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#2C332D] block">
                      {lang === 'es' ? 'Ambiente de Hogar, No Clínico' : 'Homelike Atmosphere, Not Clinical'}
                    </strong>
                    <span>
                      {lang === 'es'
                        ? 'Diseñado específicamente para que los residentes se sientan en su propio hogar con atención cercana, respetuosa y constante.'
                        : 'Designed so residents feel completely at home with warm, respectful, and attentive personal assistance.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#5C5850]">
                  <div className="w-6 h-6 rounded-full bg-[#EAE7E0] text-[#4A5D4E] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#2C332D] block">
                      {lang === 'es' ? 'Opciones Bilingües Disponibles' : 'Bilingual Options Available'}
                    </strong>
                    <span>
                      {lang === 'es'
                        ? 'Ofrecemos opciones bilingües en español e inglés para la comodidad y tranquilidad de cada familia.'
                        : 'We offer bilingual options in English and Spanish for comfortable, clear communication.'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Location pill */}
              <div className="p-4 rounded-xl bg-[#F5F4F0] border border-[#EAE7E0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5C5850]">
                  <MapPin className="w-4 h-4 text-[#4A5D4E] shrink-0" />
                  <span className="font-semibold text-[#2C332D]">{FACILITY_INFO.address}</span>
                </div>
                <a
                  href={FACILITY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-maps-link"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#4A5D4E] hover:underline"
                >
                  <span>{lang === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[28px] overflow-hidden border-[8px] border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Living spaces at Nuevo Amanecer Tampa"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Main Goals & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F4F0] rounded-3xl border border-[#EAE7E0] p-8 sm:p-12 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A5D4E]">
              {t.mission.tagline}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C332D]">
              {t.mission.title}
            </h2>
            <p className="text-sm text-[#5C5850]">
              {t.mission.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE7E0] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F5F4F0] text-[#4A5D4E] flex items-center justify-center">
                <Smile className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                {lang === 'es' ? 'Meta Principal 1' : 'Core Goal 1'}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C332D]">
                {t.mission.goal1Title}
              </h3>
              <p className="text-sm text-[#5C5850] leading-relaxed">
                {t.mission.goal1Desc}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE7E0] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F5F4F0] text-[#4A5D4E] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                {lang === 'es' ? 'Meta Principal 2' : 'Core Goal 2'}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C332D]">
                {t.mission.goal2Title}
              </h3>
              <p className="text-sm text-[#5C5850] leading-relaxed">
                {t.mission.goal2Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FAMILIES CHOOSE US (EXACT REQUESTED SECTION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4A5D4E]">
            {lang === 'es' ? 'Confianza y Compromiso' : 'Trust & Commitment'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C332D]">
            {t.whyChooseUs.headline}
          </h2>
          <p className="text-base text-[#5C5850] leading-relaxed">
            {t.whyChooseUs.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyChooseUs.points.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-[#EAE7E0] shadow-xs hover:border-[#4A5D4E]/40 transition-colors space-y-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F5F4F0] text-[#4A5D4E] flex items-center justify-center font-bold text-xs">
                0{index + 1}
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#2C332D]">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5850] leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Facility Operations & Direct Call Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2C332D] text-white rounded-3xl p-8 sm:p-10 shadow-lg border border-[#3D4C40]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                {lang === 'es' ? 'Información y Licencia' : 'Facility & Licensing'}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Nuevo Amanecer Tampa LLC
              </h3>
              <p className="text-xs sm:text-sm text-[#D4D1C9] leading-relaxed">
                {lang === 'es' ? FACILITY_INFO.ahcaFullEs : FACILITY_INFO.ahcaFullEn}
              </p>
              <div className="flex items-center gap-2 text-xs text-[#D4D1C9]">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>{lang === 'es' ? FACILITY_INFO.hoursEs : FACILITY_INFO.hours}</span>
              </div>
            </div>

            <div className="bg-[#242B25] p-6 rounded-2xl border border-[#3D4C40] text-center space-y-4">
              <p className="text-xs text-[#D4D1C9]">
                {lang === 'es'
                  ? '¿Desea conversar sobre la atención para su ser querido?'
                  : 'Have questions about care for your loved one?'}
              </p>
              <a
                href={FACILITY_INFO.phoneTel}
                id="about-call-btn"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#4A5D4E] hover:bg-[#3D4C40] text-white font-bold text-base transition-colors shadow-sm"
              >
                <Phone className="w-5 h-5 text-[#C5A059]" />
                <span>(813) 376-5822</span>
              </a>
              <p className="text-xs text-[#8C887F]">
                {lang === 'es'
                  ? 'Atención telefónica de 9:00 AM a 9:00 PM.'
                  : 'Phone inquiries daily from 9:00 AM to 9:00 PM.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
