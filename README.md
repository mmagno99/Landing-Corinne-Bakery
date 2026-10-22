# Corinne

Frontend de repostería artesanal sobre el proyecto existente de Astro 7, React, TypeScript y Tailwind 4. Se conservan astro.config.mjs, las integraciones y los tokens originales de @theme.

## Ejecutar y validar

Usa Node compatible con package.json y las dependencias instaladas.

```sh
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
npm run check
npm run format:check
npm run build
npm run preview
```

Astro imprime el puerto disponible al iniciar. El build genera el sitio estático en dist/.

## Archivos principales

```text
src/
  assets/photography/       Fotografía provisional en WebP
  components/
    Navbar.astro           Píldora flotante y menú móvil nativo
    ProductCard.astro      Producto editorial reutilizable
    CakeConfigurator.tsx   Única isla React, hidratada al entrar en pantalla
    Footer.astro           Marca, enlaces y año de compilación
    Reveal.astro           Apariciones con IntersectionObserver
  data/
    site.ts                Logotipo, navegación y contactos pendientes
    products.ts            Productos, categorías y campaña de muestra
    configurator.ts        Porciones y sabores de ejemplo
  layouts/BaseLayout.astro Metadatos, fuentes locales y enlace de salto
  pages/
    index.astro            Landing
    catalogo/index.astro   Catálogo de muestra
    catalogo/[slug].astro  Fichas estáticas con getStaticPaths
  styles/global.css        Tokens conservados y estilos responsive
  types/content.ts         Tipos de contenido
```

## Diseño e interacción

Dirección Soft Editorial Boutique: blanco dominante, Fraunces y DM Sans locales, composición asimétrica y fotografía amplia. La portada tiene un solo encuadre arqueado; los controles son píldoras y las demás fotografías tienen esquinas discretas. El modo claro responde al brief de blanco dominante.

El menú usa details y summary, por lo que abre sin JavaScript. Con JavaScript también cierra con Escape, al seleccionar un enlace, al pulsar fuera y al pasar a escritorio. El configurador usa radios nativos, estado local y un resumen con anuncio accesible. Su diálogo nativo contiene el foco, cierra con Escape y devuelve el foco al botón de apertura. No persiste ni transmite datos.

Las apariciones usan IntersectionObserver, desplazamientos de 12-18 px y transiciones de 400-800 ms. Los estados de selección tienen transiciones más breves. El contenido permanece visible sin JavaScript y el movimiento reducido desactiva las animaciones. La imagen principal es prioritaria y las secundarias cargan de forma diferida. Astro genera tamaños responsive. Los iconos Tabler de los componentes Astro se renderizan como HTML estático.

Se añadió --color-on-primary para que los párrafos sobre el verde oficial alcancen contraste AA (4.53:1). Los títulos grandes en blanco alcanzan 3.79:1. El texto restante usa el verde oscuro original: 8.32:1 sobre blanco.

## Sustituir los datos provisionales

- **Productos:** editar src/data/products.ts. price: null muestra “Precio por confirmar”; no se calculan cotizaciones.
- **Campaña:** seasonalCampaign.active = false oculta la campaña, la categoría y sus fichas en el siguiente build. productSlugs identifica sus productos.
- **Opciones del pastel:** editar src/data/configurator.ts. El tamaño y el sabor cambian el resumen; la fotografía es una referencia y no simula el pastel elegido.
- **WhatsApp:** asignar el número oficial en formato internacional, solo dígitos, en src/data/site.ts. Hasta entonces el botón está deshabilitado y explica su disponibilidad.
- **Redes y legales:** completar socialLinks y legalLinks en el mismo archivo. Solo se renderizan enlaces existentes.
- **Historia:** sustituir el texto editorial provisional en src/pages/index.astro por la historia aprobada.
- **Fotografía:** reemplazar los WebP de src/assets/photography/ y ajustar los textos alternativos. Procedencia y prompts en docs/photography.md.

El logotipo en navegación y footer apunta al SVG original de ImageKit. public/logo-corinne.svg es una copia sin modificaciones para el favicon.

No se implementan backend, MongoDB, autenticación, administración, carrito, pedidos ni personalización completa. El diálogo del configurador explica los límites de la vista previa. Las futuras APIs podrán sustituir los datos tipados sin cambiar los componentes de presentación.

El copyright toma el año del build: se actualiza al volver a compilar el sitio estático.

Los resultados y límites de la revisión están en [docs/verification.md](docs/verification.md).
