import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';
import { Language, ContactFormData } from '../types';
import { FACILITY_INFO, TRANSLATIONS } from '../data/content';

interface ContactViewProps {
  lang: Language;
}

export const ContactView: React.FC<ContactViewProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    preferredContact: 'phone',
    serviceInterest: 'assisted_living',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission and save state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        const existingInquiries = JSON.parse(
          localStorage.getItem('nuevo_amanecer_inquiries') || '[]'
        );
        existingInquiries.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem(
          'nuevo_amanecer_inquiries',
          JSON.stringify(existingInquiries)
        );
      } catch {
        // Safe fallback
      }
    }, 600);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EFEB] border border-[#EAE7E0] text-xs font-semibold text-[#5C5850]">
          <MessageSquare className="w-4 h-4 text-[#C5A059]" />
          <span>{lang === 'es' ? 'Comuníquese con Nosotros' : 'Get In Touch'}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C332D] max-w-3xl mx-auto leading-tight">
          {t.contactPage.headline}
        </h1>

        <p className="text-base sm:text-lg text-[#5C5850] max-w-2xl mx-auto leading-relaxed">
          {t.contactPage.subheadline}
        </p>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Call Box */}
            <div className="bg-[#2C332D] text-white p-7 rounded-3xl border border-[#3D4C40] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#4A5D4E] flex items-center justify-center text-white">
                  <Phone className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C5A059] font-bold block">
                    {t.contactPage.quickCallTitle}
                  </span>
                  <a
                    href={FACILITY_INFO.phoneTel}
                    id="contact-page-phone-link"
                    className="text-2xl font-bold text-white hover:text-[#C5A059] transition-colors"
                  >
                    (813) 376-5822
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#D4D1C9] leading-relaxed">
                {t.contactPage.quickCallDesc}
              </p>

              <div className="pt-2 border-t border-[#3D4C40] text-xs text-[#C5A059] flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#4A5D4E]"></span>
                <span>{t.contactPage.bilingualDesc}</span>
              </div>
            </div>

            {/* Address & Hours Info Card */}
            <div className="bg-white p-7 rounded-3xl border border-[#EAE7E0] shadow-xs space-y-5">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#4A5D4E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#2C332D] uppercase tracking-wider">
                      {t.contactPage.locationTitle}
                    </h3>
                    <p className="text-sm text-[#5C5850] mt-0.5">
                      {FACILITY_INFO.address}
                    </p>
                    <a
                      href={FACILITY_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="contact-page-maps-btn"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A5D4E] hover:underline mt-1.5"
                    >
                      <span>{lang === 'es' ? 'Ver ruta en Google Maps' : 'Get directions in Google Maps'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#EAE7E0]">
                  <Clock className="w-5 h-5 text-[#4A5D4E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#2C332D] uppercase tracking-wider">
                      {t.contactPage.hoursTitle}
                    </h3>
                    <p className="text-sm text-[#5C5850] mt-0.5">
                      {lang === 'es' ? FACILITY_INFO.hoursEs : FACILITY_INFO.hours}
                    </p>
                    <p className="text-xs text-[#8C887F]">
                      {lang === 'es' ? 'Abierto todos los días' : 'Open 7 days a week for care & calls'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#EAE7E0]">
                  <Mail className="w-5 h-5 text-[#4A5D4E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#2C332D] uppercase tracking-wider">
                      Email
                    </h3>
                    <a
                      href={`mailto:${FACILITY_INFO.email}`}
                      className="text-sm text-[#5C5850] hover:text-[#4A5D4E] mt-0.5 block"
                    >
                      {FACILITY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* AHCA Status Note */}
              <div className="p-3.5 rounded-xl bg-[#F5F4F0] border border-[#EAE7E0] text-xs text-[#5C5850] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4A5D4E] shrink-0" />
                <span>{lang === 'es' ? FACILITY_INFO.ahcaLicenseTextEs : FACILITY_INFO.ahcaLicenseTextEn}</span>
              </div>
            </div>

            {/* Embedded Google Maps / Location Preview */}
            <div className="rounded-3xl overflow-hidden border border-[#EAE7E0] shadow-xs bg-[#F5F4F0]">
              <div className="p-3.5 bg-[#F5F4F0] border-b border-[#EAE7E0] flex items-center justify-between text-xs">
                <span className="font-bold text-[#2C332D]">{FACILITY_INFO.name}</span>
                <span className="text-[#8C887F]">Tampa, FL 33619</span>
              </div>
              <iframe
                title="Google Maps Location of Nuevo Amanecer Tampa LLC"
                src="https://maps.google.com/maps?q=7405+Aripeka+Dr,+Tampa,+FL+33619&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE7E0] shadow-xs space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2C332D]">
                  {t.contactPage.formTitle}
                </h2>
                <p className="text-sm text-[#5C5850] mt-1">
                  {t.contactPage.formDesc}
                </p>
              </div>

              {submitted ? (
                <div
                  id="contact-form-success"
                  className="bg-[#F5F4F0] border border-[#EAE7E0] p-8 rounded-2xl text-center space-y-4 animate-fadeIn"
                >
                  <div className="w-14 h-14 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2C332D]">
                    {t.contactPage.successTitle}
                  </h3>
                  <p className="text-sm text-[#5C5850] max-w-md mx-auto leading-relaxed">
                    {t.contactPage.successDesc}
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={FACILITY_INFO.phoneTel}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4A5D4E] hover:bg-[#3D4C40] text-white font-bold text-sm shadow-sm shadow-[#4A5D4E]/20 transition-all"
                    >
                      <Phone className="w-4 h-4 text-[#C5A059]" />
                      <span>{t.contactPage.callDirectBtn}</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          preferredContact: 'phone',
                          serviceInterest: 'assisted_living',
                          message: '',
                        });
                      }}
                      className="px-4 py-3 rounded-xl border border-[#EAE7E0] text-[#5C5850] hover:bg-[#F5F4F0] text-xs font-semibold"
                    >
                      {t.contactPage.sendAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="facility-contact-form" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label
                        htmlFor="form-name"
                        className="block text-xs font-bold uppercase tracking-wider text-[#2C332D]"
                      >
                        {t.contactPage.fieldName} *
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'es' ? 'Ej. María Pérez' : 'e.g. Maria Perez'}
                        className="w-full px-4 py-3 rounded-xl border border-[#EAE7E0] bg-[#F5F4F0] text-[#2C332D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/30 text-sm"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label
                        htmlFor="form-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#2C332D]"
                      >
                        {t.contactPage.fieldPhone} *
                      </label>
                      <input
                        type="tel"
                        id="form-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(813) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-[#EAE7E0] bg-[#F5F4F0] text-[#2C332D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/30 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1">
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#2C332D]"
                      >
                        {t.contactPage.fieldEmail} *
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#EAE7E0] bg-[#F5F4F0] text-[#2C332D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/30 text-sm"
                      />
                    </div>

                    {/* Preferred Contact Method */}
                    <div className="space-y-1">
                      <label
                        htmlFor="form-pref"
                        className="block text-xs font-bold uppercase tracking-wider text-[#2C332D]"
                      >
                        {t.contactPage.fieldContactPref}
                      </label>
                      <select
                        id="form-pref"
                        value={formData.preferredContact}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredContact: e.target.value as ContactFormData['preferredContact'],
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[#EAE7E0] bg-[#F5F4F0] text-[#2C332D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/30 text-sm"
                      >
                        <option value="phone">{t.contactPage.prefPhone}</option>
                        <option value="text">{t.contactPage.prefText}</option>
                        <option value="email">{t.contactPage.prefEmail}</option>
                      </select>
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div className="space-y-1">
                    <label
                      htmlFor="form-service"
                      className="block text-xs font-bold uppercase tracking-wider text-[#2C332D]"
                    >
                      {t.contactPage.fieldService}
                    </label>
                    <select
                      id="form-service"
                      value={formData.serviceInterest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          serviceInterest: e.target.value as ContactFormData['serviceInterest'],
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-[#EAE7E0] bg-[#F5F4F0] text-[#2C332D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/30 text-sm"
                    >
                      <option value="assisted_living">{t.contactPage.serviceAssisted}</option>
                      <option value="adult_day_care">{t.contactPage.serviceDaycare}</option>
                      <option value="respite_care">{t.contactPage.serviceRespite}</option>
                      <option value="general">{t.contactPage.serviceGeneral}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label
                      htmlFor="form-message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#2C332D]"
                    >
                      {t.contactPage.fieldMessage}
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contactPage.fieldMessagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-[#EAE7E0] bg-[#F5F4F0] text-[#2C332D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/30 text-sm resize-none"
                    ></textarea>
                  </div>

                  <p className="text-xs text-[#8C887F]">
                    {lang === 'es'
                      ? '🔒 No solicitamos datos médicos confidenciales a través de este formulario.'
                      : '🔒 We do not request confidential medical information through this form.'}
                  </p>

                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#4A5D4E] hover:bg-[#3D4C40] text-white font-bold text-base shadow-sm shadow-[#4A5D4E]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t.contactPage.sendingBtn : t.contactPage.submitBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
