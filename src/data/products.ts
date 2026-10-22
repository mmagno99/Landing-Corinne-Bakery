import cake from '../assets/photography/hero-cake.webp';
import brownies from '../assets/photography/brownies.webp';
import cubiletes from '../assets/photography/cubiletes.webp';
import seasonal from '../assets/photography/seasonal-cake.webp';
import type { Category, Product, SeasonalCampaign } from '../types/content';

export const categories: Category[] = [
  { id: 'pasteles', name: 'Pasteles personalizados' },
  { id: 'brownies', name: 'Brownies' },
  { id: 'cubiletes', name: 'Cubiletes' },
  { id: 'temporada', name: 'De temporada' },
];
// Illustrative content: replace with the official selection before launch.
export const products: Product[] = [
  {
    slug: 'pastel-de-vainilla',
    name: 'Pastel de vainilla',
    category: 'pasteles',
    description: 'Suave, delicado y listo para celebrar.',
    detail:
      'Una inspiración de vainilla con crema y frutos rojos. El tamaño, el sabor y los detalles de tu pastel se podrán personalizar.',
    image: cake,
    imageAlt:
      'Pastel de crema con frambuesas y pequeñas flores blancas sobre una base de cerámica.',
    featured: true,
    price: null,
  },
  {
    slug: 'brownies-de-chocolate',
    name: 'Brownies de chocolate',
    category: 'brownies',
    description: 'Una costra fina. Un centro de chocolate.',
    detail:
      'Chocolate intenso y un interior suave, para una sobremesa o un pequeño regalo. Presentaciones y disponibilidad por confirmar.',
    image: brownies,
    imageAlt:
      'Tres brownies de chocolate apilados sobre papel y un plato de cerámica.',
    featured: true,
    price: null,
  },
  {
    slug: 'cubiletes-de-queso',
    name: 'Cubiletes de queso',
    category: 'cubiletes',
    description: 'Doraditos por fuera, suaves por dentro.',
    detail:
      'Pequeños cubiletes con relleno de queso y una cubierta dorada. Una idea para acompañar el café y compartir la tarde.',
    image: cubiletes,
    imageAlt:
      'Cubiletes dorados de queso, uno abierto para mostrar el relleno cremoso.',
    featured: true,
    price: null,
  },
  {
    slug: 'pastel-de-pera-y-especias',
    name: 'Pera y especias',
    category: 'temporada',
    description: 'Una inspiración para los días de otoño.',
    detail:
      'Pera, crema y un toque de especias en una propuesta de temporada. Esta colección es una muestra editorial; su disponibilidad está por confirmar.',
    image: seasonal,
    imageAlt:
      'Pastel con peras y canela sobre una base de cerámica, acompañado de una rebanada.',
    featured: false,
    price: null,
  },
];
export const seasonalCampaign: SeasonalCampaign = {
  active: true,
  eyebrow: 'Inspiración de temporada',
  title: 'El otoño también se saborea.',
  description:
    'Pera, especias y una pausa para compartir. Una propuesta para disfrutar la temporada con calma.',
  image: seasonal,
  imageAlt: 'Pastel artesanal de pera y especias en una mesa con lino blanco.',
  productSlugs: ['pastel-de-pera-y-especias'],
};
export const visibleProducts = products.filter(
  (product) =>
    product.category !== 'temporada' ||
    (seasonalCampaign.active &&
      seasonalCampaign.productSlugs.includes(product.slug)),
);
