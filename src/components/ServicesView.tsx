import React from 'react';
import {
  Users,
  Sun,
  HeartHandshake,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Utensils,
  Pill,
  Sparkles,
  Heart,
  Home as HomeIcon,
  Activity,
  Smile,
} from 'lucide-react';
import { Language, NavPage } from '../types';
import { FACILITY_INFO, TRANSLATIONS } from '../data/content';

interface ServicesViewProps {
  setCurrentPage: (page: NavPage) => void;
  lang: Language;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ setCurrentPage, lang }) => {
  const t = TRANSLATIONS[lang];

  const dailyLivingSupport = [
    {
      titleEn: 'Activities of Daily Living (ADLs)',
      titleEs: 'Actividades de la Vida Diaria (AVD)',
      descEn:
        'Respectful, patient assistance with everyday routines to help each resident maintain dignity, safety, and confidence.',
      descEs:
        'Asistencia paciente y respetuosa con las rutinas cotidianas para ayudar a cada residente a mantener su dignidad, seguridad y confianza.',
      icon: Smile,
    },
    {
      titleEn: 'Personal Care Assistance',
      titleEs: 'Asistencia en el Cuidado Personal',
      descEn:
        'Gentle support with grooming, dressing, personal hygiene, and feeling comfortable and refreshed every morning and evening.',
      descEs:
        'Apoyo delicado con el aseo, arreglo personal, vestimenta e higiene para que se sientan frescos y cómodos a diario.',
      icon: Heart,
    },
    {
      titleEn: 'Medication Assistance',
      titleEs: 'Asistencia con Medicamentos',
      descEn:
        'Timely routine reminders and assistance ensuring prescribed medication schedules are strictly followed without stress.',
      descEs:
        'Recordatorios oportunos y asistencia cuidadosa para asegurar el cumplimiento exacto de sus horarios de medicamentos sin estrés.',
      icon: Pill,
    },
    {
      titleEn: 'Mobility & Transfer Assistance',
      titleEs: 'Asistencia de Movilidad y Traslado',
      descEn:
        'Support with walking, sitting, standing, and moving safely throughout our single-story, accessible residential home.',
      descEs:
        'Apoyo seguro para caminar, sentarse, levantarse y desplazarse cómodamente dentro de nuestro hogar accesible.',
      icon: Activity,
    },
    {
      titleEn: 'Nutritious Meal Support',
      titleEs: 'Alimentación Nutritiva y Casera',
      descEn:
        'Delicious, balanced breakfast, lunch, dinner, and wholesome snacks prepared fresh daily with familiar home-style flavors.',
      descEs:
        'Deliciosos desayunos, almuerzos, cenas y meriendas frescas preparadas a diario con el auténtico sabor y sazón casero.',
      icon: Utensils,
    },
    {
      titleEn: 'Social Engagement & Activities',
      titleEs: 'Convivencia y Actividades Sociales',
      descEn:
        'Daily social interactions, dominoes, music, mental exercises, and pleasant conversation that foster friendship and joy.',
      descEs:
        'Convivencia diaria, partidas de dominó, música, pasatiempos y conversaciones agradables que alegran el espíritu.',
      icon: Users,
    },
    {
      titleEn: 'Housekeeping & Comfortable Living',
      titleEs: 'Mantenimiento del Hogar y Limpieza',
      descEn:
        'Daily room tidying, fresh linens, laundry care, and a spotless, welcoming residential environment.',
      descEs:
        'Limpieza diaria, cambio de ropa de cama, lavado y un ambiente residencial siempre impecable y acogedor.',
      icon: HomeIcon,
    },
    {
      titleEn: 'Personalized Resident Support',
      titleEs: 'Atención Individualizada al Residente',
      descEn:
        'Care plans tailored to each individual’s personal rhythms, food preferences, wake-up times, and cultural traditions.',
      descEs:
        'Planes de cuidado adaptados a los horarios, gustos culinarios, hábitos de descanso y tradiciones de cada residente.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EFEB] border border-[#EAE7E0] text-xs font-semibold text-[#5C5850]">
          <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
          <span>{lang === 'es' ? 'Servicios Autorizados' : 'Authorized Services'}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C332D] max-w-3xl mx-auto leading-tight">
          {lang === 'es'
            ? 'Cuidado Compasivo Diseñado Para Sentirse en Casa'
            : 'Compassionate Care Designed to Feel Like Home'}
        </h1>

        <p className="text-base sm:text-lg text-[#5C5850] max-w-2xl mx-auto leading-relaxed">
          {lang === 'es'
            ? 'Brindamos tres programas de apoyo esenciales en Tampa, FL, enfocados en la dignidad, la comodidad y la tranquilidad familiar.'
            : 'Providing three essential supportive care programs in Tampa, FL, focused on dignity, comfort, and family peace of mind.'}
        </p>

        {/* Regulatory Scope Statement */}
        <div className="mt-4 bg-[#F5F4F0] border border-[#EAE7E0] p-4 rounded-2xl max-w-2xl mx-auto text-xs sm:text-sm text-[#5C5850]">
          <strong className="text-[#2C332D]">{t.scopeNotice.title}:</strong> {t.scopeNotice.text}
        </div>
      </section>

      {/* 3 Strict Services Detailed Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {t.servicesList.map((service) => (
            <div
              key={service.id}
              id={`service-detail-${service.id}`}
              className="bg-white rounded-3xl border border-[#EAE7E0] p-8 sm:p-10 shadow-xs hover:border-[#4A5D4E]/40 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F4F0] text-[#4A5D4E] flex items-center justify-center">
                    {service.id === 'assisted-living' && <Users className="w-7 h-7" />}
                    {service.id === 'adult-daycare' && <Sun className="w-7 h-7" />}
                    {service.id === 'respite-services' && <HeartHandshake className="w-7 h-7" />}
                  </div>

                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-[#F1EFEB] text-[#5C5850] border border-[#EAE7E0] mb-2">
                      {service.badge}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C332D]">
                      {service.title}
                    </h2>
                    <p className="text-xs font-semibold text-[#4A5D4E] mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <a
                    href={FACILITY_INFO.phoneTel}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#4A5D4E] hover:bg-[#3D4C40] text-white text-xs font-bold transition-all shadow-sm shadow-[#4A5D4E]/20"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{lang === 'es' ? 'Consultar sobre este servicio' : 'Inquire About This Service'}</span>
                  </a>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-base text-[#5C5850] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="bg-[#F5F4F0] p-6 rounded-2xl border border-[#EAE7E0] space-y-3">
                    <h4 className="font-serif text-sm font-bold text-[#2C332D] uppercase tracking-wider">
                      {lang === 'es' ? 'Lo que incluye este servicio:' : 'What This Service Includes:'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C5850]">
                          <CheckCircle2 className="w-4 h-4 text-[#4A5D4E] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Living Support & Comfort Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4A5D4E]">
            {lang === 'es' ? 'Apoyo Integral en el Hogar' : 'Comprehensive Daily Support'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C332D]">
            {lang === 'es' ? 'Cómo Apoyamos a Cada Residente' : 'How We Support Every Resident'}
          </h2>
          <p className="text-base text-[#5C5850] leading-relaxed">
            {lang === 'es'
              ? 'Atención cálida, respetuosa y constante para todas las necesidades de la vida diaria en Tampa, Florida.'
              : 'Warm, respectful, and attentive care for all activities of daily living in Tampa, Florida.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dailyLivingSupport.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#EAE7E0] shadow-xs hover:border-[#4A5D4E]/40 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F4F0] text-[#4A5D4E] flex items-center justify-center">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#2C332D]">
                  {lang === 'es' ? item.titleEs : item.titleEn}
                </h3>
                <p className="text-xs text-[#5C5850] leading-relaxed">
                  {lang === 'es' ? item.descEs : item.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Direct Call to Discuss Individual Needs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#F5F4F0] border border-[#EAE7E0] rounded-3xl p-8 sm:p-10 space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#2C332D]">
            {lang === 'es'
              ? '¿Tiene preguntas sobre la atención que necesita su familiar?'
              : 'Have Questions About the Specific Care Your Loved One Needs?'}
          </h3>
          <p className="text-sm text-[#5C5850] max-w-xl mx-auto leading-relaxed">
            {lang === 'es'
              ? 'Cada persona es única. Llámenos al (813) 376-5822 para conversar sobre cómo podemos asistir a su familia.'
              : 'Every individual is unique. Call us at (813) 376-5822 to discuss how we can assist your family.'}
          </p>
          <div className="pt-2">
            <a
              href={FACILITY_INFO.phoneTel}
              id="services-call-btn"
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
