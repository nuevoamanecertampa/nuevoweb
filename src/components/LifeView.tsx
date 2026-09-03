import React, { useState } from 'react';
import {
  Sun,
  Heart,
  Smile,
  Users,
  Coffee,
  Sparkles,
  X,
  Phone,
  Maximize2,
  Info,
} from 'lucide-react';
import { Language, NavPage, GalleryImage } from '../types';
import { FACILITY_INFO, TRANSLATIONS, GALLERY_ITEMS } from '../data/content';

interface LifeViewProps {
  setCurrentPage: (page: NavPage) => void;
  lang: Language;
}

export const LifeView: React.FC<LifeViewProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EFEB] border border-[#EAE7E0] text-xs font-semibold text-[#5C5850]">
          <Sun className="w-4 h-4 text-[#C5A059]" />
          <span>{t.life.tagline}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C332D] max-w-3xl mx-auto leading-tight">
          {t.life.title}
        </h1>

        <p className="text-base sm:text-lg text-[#5C5850] max-w-2xl mx-auto leading-relaxed">
          {t.life.intro}
        </p>
      </section>

      {/* Daily Life Principles / Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.life.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#EAE7E0] shadow-xs hover:border-[#4A5D4E]/40 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F5F4F0] text-[#4A5D4E] flex items-center justify-center">
                {idx === 0 && <Sun className="w-5 h-5" />}
                {idx === 1 && <Smile className="w-5 h-5" />}
                {idx === 2 && <Users className="w-5 h-5" />}
                {idx === 3 && <Heart className="w-5 h-5" />}
                {idx === 4 && <Coffee className="w-5 h-5" />}
                {idx === 5 && <Sparkles className="w-5 h-5" />}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2C332D]">
                {feature.title}
              </h3>
              <p className="text-sm text-[#5C5850] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GENERAL PHOTO GALLERY SECTION (No category/space tabs, no external links) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4A5D4E]">
            {t.gallery.tagline}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C332D]">
            {t.gallery.title}
          </h2>
          <p className="text-sm text-[#5C5850]">
            {lang === 'es'
              ? 'Conozca los espacios tranquilos, cómodos y luminosos de nuestro hogar en Tampa.'
              : 'Take a look inside the calm, comfortable, and sunlit spaces of our Tampa home.'}
          </p>
        </div>

        {/* General Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((image) => (
            <div
              key={image.id}
              id={`gallery-item-${image.id}`}
              onClick={() => setLightboxImage(image)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#EAE7E0] shadow-xs hover:shadow-md hover:border-[#4A5D4E]/40 transition-all duration-200"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F4F0]">
                <img
                  src={image.imageUrl}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#2C332D]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/95 text-[#2C332D] shadow-md">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="font-serif text-base font-bold text-[#2C332D]">
                  {image.title}
                </h3>
                {image.description && (
                  <p className="text-xs text-[#5C5850] line-clamp-2">
                    {image.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Subtle photo notice */}
        <div className="p-4 rounded-xl bg-[#F5F4F0] border border-[#EAE7E0] text-xs text-[#5C5850] flex items-start gap-2.5 max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-[#4A5D4E] shrink-0 mt-0.5" />
          <span>{t.gallery.ownerNote}</span>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-label={t.gallery.closeLightbox}
          className="fixed inset-0 z-50 bg-[#2C332D]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full border border-[#EAE7E0] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              aria-label={t.gallery.closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#2C332D]/70 text-white hover:bg-[#2C332D] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.alt}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            <div className="p-6 bg-white space-y-1">
              <h3 className="font-serif text-xl font-bold text-[#2C332D]">
                {lightboxImage.title}
              </h3>
              <p className="text-sm text-[#5C5850]">
                {lightboxImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Direct Call to Visit and Meet */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#F5F4F0] border border-[#EAE7E0] rounded-3xl p-8 sm:p-10 space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#2C332D]">
            {lang === 'es' ? 'Venga a Conocer el Ambiente en Persona' : 'Come Experience Our Warm Home in Person'}
          </h3>
          <p className="text-sm text-[#5C5850] leading-relaxed">
            {lang === 'es'
              ? 'Le invitamos a llamarnos al (813) 376-5822 para coordinar una visita y conocer nuestras instalaciones.'
              : 'We warmly invite you to call (813) 376-5822 to schedule a personal visit and tour our home.'}
          </p>
          <div className="pt-2">
            <a
              href={FACILITY_INFO.phoneTel}
              id="life-call-btn"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#4A5D4E] hover:bg-[#3D4C40] text-white font-bold text-base shadow-sm shadow-[#4A5D4E]/20 transition-all"
            >
              <Phone className="w-5 h-5 text-[#C5A059]" />
              <span>(813) 376-5822</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
