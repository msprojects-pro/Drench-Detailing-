export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  duration: string;
  recommendedFor: string;
  features: string[];
  startingPrice: string;
  image: string;
  isPopular?: boolean;
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  price: string;
  estTime: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'paint-correction' | 'ceramic' | 'valeting' | 'interior' | 'full-detail';
  vehicle: string;
  location: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  vehicleMakeModel: string;
  vehicleSize: 'hatchback' | 'saloon' | 'suv' | 'supercar';
  postcode: string;
  serviceType: string;
  additions: string[];
  preferredDate?: string;
  comments?: string;
}
