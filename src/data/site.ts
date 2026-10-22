import type { NavigationLink } from '../types/content';

export const site = {
  name: 'Corinne',
  description:
    'Pasteles personalizados, brownies y cubiletes. Repostería artesanal para disfrutar y compartir.',
  logo: 'https://ik.imagekit.io/mmagnodev/Corinne%20Bakery/logo-corinne.svg?updatedAt=1792619691092',
  // Set the international number using digits only when the official contact is available.
  whatsappNumber: null as string | null,
  socialLinks: [] as { label: string; href: string }[],
  legalLinks: [] as { label: string; href: string }[],
};
export const navigation: NavigationLink[] = [
  { label: 'Nuestros favoritos', href: '/#favoritos' },
  { label: 'Nuestra historia', href: '/#historia' },
  { label: 'Tu pastel', href: '/#personalizados' },
];
export const whatsappHref = site.whatsappNumber
  ? `https://wa.me/${site.whatsappNumber.replace(/\D/g, '')}`
  : null;
