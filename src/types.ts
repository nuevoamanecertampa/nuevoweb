export type Language = 'en' | 'es';

export type NavPage = 'home' | 'about' | 'services' | 'life' | 'contact';

export type FontScale = 'sm' | 'md' | 'lg' | 'xl';

export interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  badge?: string;
  iconName: string;
}

export interface GalleryImage {
  id: string;
  category?: string;
  title: string;
  description?: string;
  imageUrl: string;
  alt: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  preferredContact: 'phone' | 'text' | 'email';
  serviceInterest: 'assisted_living' | 'adult_day_care' | 'respite_care' | 'general';
  message: string;
}
