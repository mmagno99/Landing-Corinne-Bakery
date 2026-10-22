import type { ImageMetadata } from 'astro';

export type CategoryId = 'pasteles' | 'brownies' | 'cubiletes' | 'temporada';
export interface Category {
  id: CategoryId;
  name: string;
}
export interface Product {
  slug: string;
  name: string;
  category: CategoryId;
  description: string;
  detail: string;
  image: ImageMetadata;
  imageAlt: string;
  featured: boolean;
  // null until official prices are supplied. Never derive a quote in the UI.
  price: number | null;
}
export interface SeasonalCampaign {
  active: boolean;
  eyebrow: string;
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  productSlugs: string[];
}
export interface NavigationLink {
  label: string;
  href: string;
}
