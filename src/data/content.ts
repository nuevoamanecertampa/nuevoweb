import { GalleryImage, ServiceCard } from '../types';
import birthdayImage from '../assets/birthday.jpeg';
import christmasImage from '../assets/christmas.jpeg';
import dominosImage from '../assets/dominos.jpeg';
import eatingImage from '../assets/eating.jpeg';
import togetherImage from '../assets/together.jpeg';

export const FACILITY_INFO = {
  name: 'Nuevo Amanecer Tampa LLC',
  phone: '813-376-5822',
  phoneTel: 'tel:8133765822',
  email: 'nuevoamanecer.tampa.llc@gmail.com',
  address: '7405 Aripeka Dr, Tampa, FL 33619',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=7405+Aripeka+Dr,+Tampa,+FL+33619',
  hours: 'Monday – Sunday: 9:00 AM – 9:00 PM',
  hoursEs: 'Lunes a Domingo: 9:00 AM – 9:00 PM',
  ahcaLicenseTextEn: 'Licensed & Authorized by AHCA in Florida',
  ahcaLicenseTextEs: 'Licenciado y Autorizado por AHCA en Florida',
  ahcaFullEn: 'State Authorized Assisted Living Facility by the Florida Agency for Health Care Administration (AHCA)',
  ahcaFullEs: 'Instalación de Vida Asistida Autorizada por la Agencia para la Administración de Atención Médica de Florida (AHCA)',
};

export const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      life: 'Life at Nuevo Amanecer',
      contact: 'Contact',
      callUs: 'Call: (813) 376-5822',
      language: 'Language',
      textSize: 'Text Size',
    },
    hero: {
      headline: 'Where a new day begins',
      subheadline: 'Nuevo Amanecer Tampa LLC — Care and Wellness',
      supporting: 'A warm, welcoming home where older adults and individuals with disabilities receive compassionate, personalized care.',
      primaryCta: 'Call (813) 376-5822',
      secondaryCta: 'Learn More',
      badge: 'Licensed by AHCA in Florida',
      callNotice: 'Questions or tour inquiries? Call (813) 376-5822.',
    },
    welcome: {
      tagline: 'Welcome to Nuevo Amanecer Tampa',
      title: 'A True Home Where Loved Ones Blossom',
      paragraph:
        'At Nuevo Amanecer Tampa LLC, we believe exceptional care begins with feeling at home. Our welcoming Tampa facility provides compassionate, personalized support for older adults and individuals with disabilities, fostering dignity, comfort, independence, and meaningful connection—while giving families peace of mind.',
      locationTitle: 'Our Tampa Location',
      locationText: 'Located in a peaceful residential neighborhood at 7405 Aripeka Dr, Tampa, FL 33619.',
      btnLearnMore: 'Learn More About Us',
      btnGoogleMaps: 'Open in Google Maps',
    },
    mission: {
      tagline: 'Our Core Mission',
      title: 'Peace, Well-being, and Quality of Life',
      description:
        'Our philosophy centers on creating a gentle, uplifting daily environment rooted in genuine human warmth and attentive support.',
      goal1Title: 'Regaining Joy & Independence',
      goal1Desc:
        'Helping every resident preserve their dignity, rediscover daily joys, and maintain as much personal autonomy and routine as possible.',
      goal2Title: 'Family Peace of Mind',
      goal2Desc:
        'Giving adult children and family members complete tranquility knowing their loved one is in trustworthy, caring, and attentive hands.',
    },
    approach: {
      tagline: 'Our Approach to Care',
      title: 'Three Authorized Care Services',
      description:
        'We provide tailored personal support in a genuine home setting for individuals needing daily assistance, without the cold atmosphere of a medical hospital.',
      viewDetails: 'View Full Service Details',
    },
    servicesList: [
      {
        id: 'assisted-living',
        title: 'Assisted Living Facility',
        subtitle: 'Supportive Daily Living in a Peaceful Home',
        description:
          'Support and assistance with daily activities for older adults and individuals with disabilities in a safe, loving, and caring residential environment.',
        highlights: [
          'Assistance with personal grooming, dressing & hygiene',
          'Nutritious home-cooked meals & personalized snacks',
          'Medication assistance and routine reminders',
          'Comfortable living environment with gentle supervision',
          'Encouragement of personal autonomy and daily dignity',
        ],
        badge: 'Full-Time Care',
        iconName: 'Home',
      },
      {
        id: 'adult-daycare',
        title: 'Adult Day Care',
        subtitle: 'Daytime Social Engagement & Support',
        description:
          'Daytime care and supportive services for participants (excluding bathing), offering engaging companionship, balanced meals, and safe supervision.',
        highlights: [
          'Stimulating daytime social activities & board games',
          'Wholesome breakfast, lunch, and refreshing snacks',
          'Relaxed living room and garden patio relaxation',
          'Safe and welcoming environment for socialization',
          'Convenient daytime schedule for working families',
        ],
        badge: 'Day Program',
        iconName: 'Sun',
      },
      {
        id: 'respite-services',
        title: 'Respite Care',
        subtitle: 'Short-Term Relief for Family Caregivers',
        description:
          'Short-term care providing thoughtful relief to primary caregivers, allowing them time to rest, travel, attend to personal matters, or spend time with friends and family.',
        highlights: [
          'Flexible short-term stays tailored to family needs',
          'Complete continuity of daily routines and medication help',
          'Warm, immediate integration into our home family',
          'Restorative peace of mind for devoted caregivers',
          'Compassionate attention while family recharges',
        ],
        badge: 'Short-Term Relief',
        iconName: 'HeartHandshake',
      },
    ] as ServiceCard[],
    scopeNotice: {
      title: 'Our Scope of Care',
      text: 'Nuevo Amanecer Tampa LLC provides supportive assistance for older adults and individuals with disabilities who need help with daily activities but do not require 24-hour skilled hospital nursing care.',
    },
    bilingual: {
      tagline: 'Comfort & Community',
      title: 'A Warm, Supportive Homelike Setting',
      description:
        'Nuevo Amanecer Tampa provides a calm and secure residential setting where residents enjoy attentive care, home-style meals, and daily companionship. We offer bilingual options for residents and their families.',
      point1Title: 'Homelike Residential Care',
      point1Desc:
        'A peaceful single-story home environment focused on personal comfort, daily dignity, and respectful support.',
      point2Title: 'Bilingual Options Available',
      point2Desc:
        'We offer bilingual options in English and Spanish to ensure clear, seamless communication for every family.',
      cta: 'Call (813) 376-5822',
    },
    whyChooseUs: {
      headline: 'Care You Can Feel Good About',
      subheadline: 'Why families in Tampa trust Nuevo Amanecer with the people they love most.',
      points: [
        {
          title: 'Warm and Welcoming Environment',
          desc: 'A real home designed for comfort, not a sterile hospital or clinical institution.',
        },
        {
          title: 'Compassionate, Dependable Care',
          desc: 'Consistent, attentive daily assistance from dedicated caregivers who treat residents like family.',
        },
        {
          title: 'Personalized Attention',
          desc: 'Care plans respect each individual’s unique history, preferences, and personal routines.',
        },
        {
          title: 'Focus on Dignity and Independence',
          desc: 'We support our residents where they need help while honoring their choices and autonomy.',
        },
        {
          title: 'Bilingual Options Available',
          desc: 'We offer bilingual options in English and Spanish for comfortable, clear communication.',
        },
        {
          title: 'Family-Centered Approach',
          desc: 'Families are always welcomed partners, with regular updates and open communication.',
        },
        {
          title: 'Safe and Supportive Community',
          desc: 'A secure, peaceful home licensed and authorized by AHCA in Florida.',
        },
      ],
    },
    visitUs: {
      headline: 'Come See Nuevo Amanecer for Yourself',
      text: 'Choosing the right place for your loved one is an important decision. We invite you to visit our Tampa facility, meet our team, explore our environment, and learn how Nuevo Amanecer can support your family.',
      callPrompt: 'To schedule a tour or discuss your family’s needs, call (813) 376-5822.',
      button: 'Call (813) 376-5822',
      addressNotice: 'Visits welcomed at 7405 Aripeka Dr, Tampa, FL 33619.',
    },
    life: {
      tagline: 'Life at Nuevo Amanecer',
      title: 'Everyday Joy, Comfort, and True Community',
      intro:
        'Life at Nuevo Amanecer is crafted around warmth, companionship, and relaxed living. From morning coffee on the patio to afternoon dominoes and shared meals, our home feels vibrant yet soothing.',
      features: [
        {
          title: 'Welcoming Home-Like Atmosphere',
          desc: 'Spacious living spaces with comfortable seating, natural sunlight, and a cozy residential hearth.',
        },
        {
          title: 'Meaningful Daily Activities',
          desc: 'Music, dominoes, crafting, garden strolls, and gentle movement tailored to resident interests.',
        },
        {
          title: 'Social Connection & Friendship',
          desc: 'A close-knit community where residents build authentic bonds and never feel isolated.',
        },
        {
          title: 'Respect for Individual Routines',
          desc: 'Wake up, dine, and rest on your own schedule with caring assistance whenever needed.',
        },
        {
          title: 'Wholesome Home-Cooked Meals',
          desc: 'Fresh, flavorful meals prepared daily with love, accommodating dietary needs and familiar tastes.',
        },
        {
          title: 'Peaceful Outdoor Spaces',
          desc: 'Secure garden patio areas to enjoy Florida sunshine, fresh air, and birdsong.',
        },
      ],
    },
    gallery: {
      tagline: 'Photo Gallery',
      title: 'Explore Our Tampa Facility',
      filterAll: 'All Spaces',
      filterHome: 'Our Home',
      filterLiving: 'Living Spaces',
      filterCommon: 'Common Areas',
      filterDining: 'Dining Area',
      filterOutdoor: 'Outdoor Areas',
      filterActivities: 'Activities & Community',
      ownerNote:
        'Note: High-quality photographic representations of our facility spaces at 7405 Aripeka Dr, Tampa, FL.',
      closeLightbox: 'Close photo view',
    },
    contactPage: {
      headline: 'We’re Here to Help',
      subheadline:
        'Have questions about our services, availability, or how we can support your loved one? Call us at (813) 376-5822 or send us a message below. We offer bilingual options.',
      quickCallTitle: 'Direct Phone',
      quickCallDesc: 'Call us anytime between 9:00 AM and 9:00 PM for prompt, personal answers.',
      locationTitle: 'Facility Address',
      hoursTitle: 'Operating Hours',
      bilingualTitle: 'Bilingual Support',
      bilingualDesc: 'Bilingual options available for all families.',
      formTitle: 'Send Us a Message',
      formDesc:
        'Fill out the simple form below. We do not ask for confidential medical details—just the best way to reach you.',
      fieldName: 'Your Full Name',
      fieldPhone: 'Phone Number',
      fieldEmail: 'Email Address',
      fieldContactPref: 'Preferred Contact Method',
      prefPhone: 'Phone Call',
      prefText: 'Text Message',
      prefEmail: 'Email',
      fieldService: 'Service of Interest',
      serviceAssisted: 'Assisted Living Facility',
      serviceDaycare: 'Adult Day Care',
      serviceRespite: 'Respite Care',
      serviceGeneral: 'General Inquiry / Question',
      fieldMessage: 'How can we help your family?',
      fieldMessagePlaceholder:
        'Please let us know about your loved one’s daily living needs, timeline, or any questions you have...',
      submitBtn: 'Send Message',
      sendingBtn: 'Sending...',
      successTitle: 'Thank You for Reaching Out!',
      successDesc:
        'We have received your message and will get back to you promptly. If you prefer immediate answers, please call us directly at 813-376-5822.',
      callDirectBtn: 'Call 813-376-5822 Now',
      sendAnother: 'Send another message',
    },
    footer: {
      about:
        'A warm, licensed Assisted Living Facility in Tampa, FL dedicated to dignity, independence, and heartfelt care for older adults and individuals with disabilities.',
      quickLinks: 'Quick Links',
      services: 'Our Services',
      contactInfo: 'Contact Info',
      hours: 'Operating Hours: Mon–Sun 9:00 AM – 9:00 PM',
      copyright: 'All rights reserved. Nuevo Amanecer Tampa LLC.',
      ahcaNotice: 'Licensed and Authorized by AHCA in Florida.',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      services: 'Servicios',
      life: 'Vida en Nuevo Amanecer',
      contact: 'Contacto',
      callUs: 'Llamar: (813) 376-5822',
      language: 'Idioma',
      textSize: 'Tamaño de Texto',
    },
    hero: {
      headline: 'Tu nuevo amanecer comienza aquí',
      subheadline: 'Nuevo Amanecer Tampa LLC — Cuidado y Bienestar',
      supporting:
        'Un hogar cálido y acogedor donde los adultos mayores y personas con discapacidades reciben atención compasiva y personalizada.',
      primaryCta: 'Llámenos: (813) 376-5822',
      secondaryCta: 'Conozca Más',
      badge: 'Licenciado por AHCA en Florida',
      callNotice: '¿Preguntas o información sobre visitas? Llame al (813) 376-5822.',
    },
    welcome: {
      tagline: 'Bienvenidos a Nuevo Amanecer Tampa',
      title: 'Un Verdadero Hogar Donde Renace la Alegría',
      paragraph:
        'En Nuevo Amanecer Tampa LLC, creemos que el cuidado excepcional comienza sintiéndose como en casa. Nuestra acogedora instalación en Tampa brinda apoyo compasivo y personalizado para adultos mayores y personas con discapacidades, fomentando la dignidad, la comodidad, la independencia y la conexión significativa, al tiempo que brinda tranquilidad a las familias.',
      locationTitle: 'Nuestra Ubicación en Tampa',
      locationText: 'Ubicado en un tranquilo vecindario residencial en 7405 Aripeka Dr, Tampa, FL 33619.',
      btnLearnMore: 'Conozca Más Sobre Nosotros',
      btnGoogleMaps: 'Abrir en Google Maps',
    },
    mission: {
      tagline: 'Nuestra Misión Principal',
      title: 'Paz, Bienestar y Calidad de Vida',
      description:
        'Nuestra filosofía se centra en brindar un entorno cotidiano enriquecedor, lleno de calidez humana y cuidado atento.',
      goal1Title: 'Recuperar la Alegría y la Independencia',
      goal1Desc:
        'Ayudar a cada residente a preservar su dignidad, redescubrir alegrías diarias y mantener la mayor autonomía y rutina posible.',
      goal2Title: 'Tranquilidad Total para la Familia',
      goal2Desc:
        'Brindar a los hijos y familiares la serenidad de saber que su ser querido está en las mejores y más cariñosas manos posibles.',
    },
    approach: {
      tagline: 'Nuestra Atención',
      title: 'Tres Servicios Autorizados de Cuidado',
      description:
        'Ofrecemos apoyo personalizado en un auténtico entorno de hogar para quienes necesitan asistencia diaria, sin el frío ambiente de una clínica u hospital.',
      viewDetails: 'Ver Detalles de los Servicios',
    },
    servicesList: [
      {
        id: 'assisted-living',
        title: 'Vida Asistida (Assisted Living)',
        subtitle: 'Apoyo Diario en un Hogar Acogedor',
        description:
          'Apoyo y asistencia con las actividades de la vida diaria para adultos mayores y personas con discapacidades en un entorno residencial seguro y cariñoso.',
        highlights: [
          'Asistencia con aseo personal, vestimenta e higiene',
          'Comidas caseras nutritivas y meriendas saludables',
          'Asistencia y recordatorios con los medicamentos',
          'Ambiente cómodo con supervisión atenta y respetuosa',
          'Fomento de la autonomía personal y dignidad diaria',
        ],
        badge: 'Cuidado Completo',
        iconName: 'Home',
      },
      {
        id: 'adult-daycare',
        title: 'Cuidado Diurno para Adultos (Adult Day Care)',
        subtitle: 'Convivencia y Apoyo durante el Día',
        description:
          'Cuidado diurno y servicios de apoyo para participantes (excluyendo el baño), ofreciendo compañía amena, comidas balanceadas y supervisión en un entorno seguro.',
        highlights: [
          'Actividades sociales estimulantes y juegos de mesa',
          'Desayuno, almuerzo casero y meriendas reconfortantes',
          'Espacio de descanso en sala y patio con jardín',
          'Ambiente seguro y familiar para compartir con otros',
          'Horario conveniente para familias trabajadoras',
        ],
        badge: 'Programa Diurno',
        iconName: 'Sun',
      },
      {
        id: 'respite-services',
        title: 'Servicios de Respiro (Respite Care)',
        subtitle: 'Alivio Temporal para Cuidadores Familiares',
        description:
          'Cuidado a corto plazo que brinda alivio a los cuidadores principales, permitiéndoles descansar, viajar, atender asuntos personales o compartir con amigos y familia.',
        highlights: [
          'Estancias temporales flexibles adaptadas a la familia',
          'Continuidad en rutinas diarias y apoyo de medicamentos',
          'Integración cariñosa inmediata a nuestro hogar',
          'Verdadera paz mental para los cuidadores dedicados',
          'Atención esmerada mientras la familia se recupera',
        ],
        badge: 'Alivio Temporal',
        iconName: 'HeartHandshake',
      },
    ] as ServiceCard[],
    scopeNotice: {
      title: 'Alcance de Nuestros Servicios',
      text: 'Nuevo Amanecer Tampa LLC atiende a adultos mayores y personas con discapacidades que necesitan apoyo con las actividades de la vida diaria, pero que no requieren enfermería especializada de hospital las 24 horas.',
    },
    bilingual: {
      tagline: 'Comodidad y Comunidad',
      title: 'Un Entorno Residencial Cálido y Acogedor',
      description:
        'Nuevo Amanecer Tampa brinda un ambiente residencial seguro y tranquilo donde los residentes disfrutan de atención esmerada, ricas comidas caseras y compañía diaria. Ofrecemos opciones bilingües para residentes y sus familias.',
      point1Title: 'Cuidado en un Hogar Real',
      point1Desc:
        'Un entorno residencial tranquilo enfocado en el confort personal, la dignidad diaria y el apoyo respetuoso.',
      point2Title: 'Opciones Bilingües Disponibles',
      point2Desc:
        'Ofrecemos opciones bilingües en español e inglés para asegurar una comunicación clara con cada familia.',
      cta: 'Llamar al (813) 376-5822',
    },
    whyChooseUs: {
      headline: 'Un Cuidado que Brinda Tranquilidad',
      subheadline: 'Por qué las familias en Tampa eligen y confían en Nuevo Amanecer.',
      points: [
        {
          title: 'Ambiente Cálido y Acogedor',
          desc: 'Una casa real diseñada para el confort, no un hospital frío ni una clínica corporativa.',
        },
        {
          title: 'Cuidado Compasivo y Confiable',
          desc: 'Asistencia constante y atenta de cuidadores dedicados que tratan a los residentes como familia.',
        },
        {
          title: 'Atención Personalizada',
          desc: 'Respetamos las costumbres, historias personales y rutinas de cada ser querido.',
        },
        {
          title: 'Enfoque en Dignidad e Independencia',
          desc: 'Brindamos la ayuda que necesitan respetando siempre sus decisiones y autonomía.',
        },
        {
          title: 'Opciones Bilingües Disponibles',
          desc: 'Ofrecemos opciones bilingües en español e inglés para una comunicación clara y cómoda.',
        },
        {
          title: 'Enfoque Centrado en la Familia',
          desc: 'Las familias siempre son bienvenidas, con comunicación abierta y constante.',
        },
        {
          title: 'Comunidad Segura y Protegida',
          desc: 'Un hogar seguro, tranquilo y certificado por AHCA en el estado de Florida.',
        },
      ],
    },
    visitUs: {
      headline: 'Venga a Conocer Nuevo Amanecer en Persona',
      text: 'Elegir el lugar adecuado para su ser querido es una decisión muy importante. Le invitamos a visitar nuestra instalación en Tampa, conocer a nuestro equipo, recorrer nuestros espacios y descubrir cómo podemos apoyar a su familia.',
      callPrompt: 'Para coordinar una visita personalizada o conversar sobre las necesidades de su familia, llame al (813) 376-5822.',
      button: 'Llamar al (813) 376-5822',
      addressNotice: 'Visitas bienvenidas en 7405 Aripeka Dr, Tampa, FL 33619.',
    },
    life: {
      tagline: 'Vida en Nuevo Amanecer',
      title: 'Alegría Cotidiana, Comodidad y Verdadera Comunidad',
      intro:
        'El día a día en Nuevo Amanecer está lleno de calidez, buena compañía y serenidad. Desde el café en el patio por la mañana hasta partidas de dominó y comidas compartidas, nuestro hogar se siente vivo y apacible.',
      features: [
        {
          title: 'Ambiente Familiar como en Casa',
          desc: 'Espacios cómodos con iluminación natural, asientos confortables y la calidez de un hogar residencial.',
        },
        {
          title: 'Actividades Diarias Significativas',
          desc: 'Música, dominó, manualidades, paseos por el jardín y ejercicios suaves según sus gustos.',
        },
        {
          title: 'Conexión Social y Amistad',
          desc: 'Una comunidad pequeña y cercana donde los residentes comparten risas y nunca se sienten solos.',
        },
        {
          title: 'Respeto por las Rutinas Personales',
          desc: 'Despertar, comer y descansar a su propio ritmo con asistencia cariñosa en todo momento.',
        },
        {
          title: 'Comida Casera y Nutritiva',
          desc: 'Alimentos frescos preparados a diario con sazón hogareño, cuidando los requerimientos dietéticos.',
        },
        {
          title: 'Espacios al Aire Libre Agradables',
          desc: 'Patio y jardín protegidos para disfrutar del sol de Florida, aire fresco y momentos de paz.',
        },
      ],
    },
    gallery: {
      tagline: 'Galería de Fotos',
      title: 'Explore Nuestra Instalación en Tampa',
      filterAll: 'Todos los Espacios',
      filterHome: 'Nuestro Hogar',
      filterLiving: 'Habitaciones',
      filterCommon: 'Áreas Comunes',
      filterDining: 'Comedor',
      filterOutdoor: 'Áreas Exteriores',
      filterActivities: 'Actividades y Convivencia',
      ownerNote:
        'Nota: Representación visual de nuestros espacios en 7405 Aripeka Dr, Tampa, FL.',
      closeLightbox: 'Cerrar vista de foto',
    },
    contactPage: {
      headline: 'Estamos Aquí Para Ayudarle',
      subheadline:
        '¿Tiene preguntas sobre nuestros servicios, disponibilidad o cómo podemos apoyar a su ser querido? Llámenos al (813) 376-5822 o envíenos un mensaje. Ofrecemos opciones bilingües.',
      quickCallTitle: 'Teléfono Directo',
      quickCallDesc: 'Llámenos de 9:00 AM a 9:00 PM para una atención amable y directa.',
      locationTitle: 'Dirección de la Instalación',
      hoursTitle: 'Horario de Atención',
      bilingualTitle: 'Atención Bilingüe',
      bilingualDesc: 'Opciones bilingües disponibles para todas las familias.',
      formTitle: 'Envíenos un Mensaje',
      formDesc:
        'Complete este sencillo formulario. No solicitamos datos médicos confidenciales, solo la mejor manera de ponernos en contacto con usted.',
      fieldName: 'Nombre Completo',
      fieldPhone: 'Número de Teléfono',
      fieldEmail: 'Correo Electrónico',
      fieldContactPref: 'Método de Contacto Preferido',
      prefPhone: 'Llamada Telefónica',
      prefText: 'Mensaje de Texto',
      prefEmail: 'Correo Electrónico',
      fieldService: 'Servicio de Interés',
      serviceAssisted: 'Vida Asistida (Assisted Living)',
      serviceDaycare: 'Cuidado Diurno (Adult Day Care)',
      serviceRespite: 'Servicios de Respiro (Respite Care)',
      serviceGeneral: 'Consulta General / Otra Pregunta',
      fieldMessage: '¿Cómo podemos ayudar a su familia?',
      fieldMessagePlaceholder:
        'Cuéntenos sobre las necesidades de su ser querido, disponibilidad de fechas o cualquier duda que tenga...',
      submitBtn: 'Enviar Mensaje',
      sendingBtn: 'Enviando...',
      successTitle: '¡Muchas Gracias por Escribirnos!',
      successDesc:
        'Hemos recibido su mensaje y nos comunicaremos con usted muy pronto. Si desea una respuesta inmediata, por favor llámenos directamente al (813) 376-5822.',
      callDirectBtn: 'Llamar al (813) 376-5822',
      sendAnother: 'Enviar otro mensaje',
    },
    footer: {
      about:
        'Un hogar de vida asistida acogedor y autorizado en Tampa, FL dedicado a la dignidad, la independencia y el cuidado amoroso de adultos mayores y personas con discapacidades.',
      quickLinks: 'Enlaces Rápidos',
      services: 'Nuestros Servicios',
      contactInfo: 'Información de Contacto',
      hours: 'Horario de Atención: Lun–Dom 9:00 AM – 9:00 PM',
      copyright: 'Todos los derechos reservados. Nuevo Amanecer Tampa LLC.',
      ahcaNotice: 'Licenciado y Autorizado por AHCA en Florida.',
    },
  },
};

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'home-exterior',
    title: 'Tampa Facility Residential Home',
    description: 'Our quiet single-story residential home at 7405 Aripeka Dr, surrounded by Florida greenery.',
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    alt: 'Front exterior of Nuevo Amanecer Tampa residential assisted living home',
  },
  {
    id: 'living-room',
    title: 'Comfortable Living Room',
    description: 'Bright, welcoming living room with cozy armchairs for conversations and relaxation.',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bright, comfortable living room with soft armchairs and warm homelike atmosphere',
  },
  {
    id: 'bedroom-cozy',
    title: 'Private Resident Bedroom',
    description: 'Personalized, calm bedroom space with comfortable bedding and ample natural light.',
    imageUrl:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    alt: 'Spacious and serene resident bedroom with warm wooden accents and ample natural light',
  },
  {
    id: 'dining-area',
    title: 'Family-Style Dining Room',
    description: 'Where residents gather three times daily to enjoy nutritious, freshly prepared meals.',
    imageUrl:
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    alt: 'Inviting family dining table set for home-cooked meals in a bright dining area',
  },
  {
    id: 'outdoor-patio',
    title: 'Sunlit Patio & Garden Setting',
    description: 'Shaded outdoor seating to enjoy the morning breeze and Florida sunshine.',
    imageUrl:
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    alt: 'Shaded garden patio with potted plants and comfortable outdoor chairs for residents',
  },
  {
    id: 'kitchen-warm',
    title: 'Home Kitchen & Meal Prep',
    description: 'Clean, open kitchen where wholesome home-cooked meals and snacks are prepared daily.',
    imageUrl:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Clean, warm residential kitchen space where daily meals are prepared with care',
  },
  {
    id: 'activities-games',
    title: 'Games & Daily Companionship',
    description: 'Friendly conversations, puzzles, dominoes, and relaxing group activities.',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Caregiver and resident enjoying friendly conversation and social connection',
  },
  {
    id: 'caring-connection',
    title: 'Respectful, Compassionate Care',
    description: 'Gentle, supportive presence ensuring every resident feels secure and cherished.',
    imageUrl:
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    alt: 'Caregiver holding senior resident hand with warmth, dignity, and compassion',
  },
  {
    id: 'reading-nook',
    title: 'Quiet Reading & Rest Corner',
    description: 'Peaceful corner with soft natural light, perfect for afternoon reading or resting.',
    imageUrl:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cozy armchair near a sunny window in a quiet homelike corner',
  },
  {
    id: 'peaceful-morning',
    title: 'Morning Garden Walkway',
    description: 'Peaceful garden pathways and fresh air to start each day with calm energy.',
    imageUrl:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    alt: 'Peaceful garden sitting area bathed in soft morning sunlight',
  },
];
