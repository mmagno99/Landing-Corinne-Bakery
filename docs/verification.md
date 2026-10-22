# Verificación de Corinne

Revisión del 21 de octubre de 2026 sobre el proyecto local y su compilación estática de producción.

## Código y rutas

- `npm run check`: 15 archivos, cero errores, advertencias e hints.
- `npm run format:check`: correcto.
- `npm run build`: seis páginas estáticas generadas correctamente.
- Verificación de los 126 enlaces internos y sus fragmentos en el HTML generado: ningún destino faltante.
- Prueba real con `seasonalCampaign.active = false`: desaparecen sección, categoría y ficha de temporada del build. Se restauró la campaña activa y se recompiló.
- HTML generado: configurador renderizado en servidor y explicación `noscript` presentes; cinco imágenes locales en WebP.

Los informes y las capturas están en `artifacts/qa/`, carpeta excluida del control de versiones.

## Navegador

Se revisó la landing en anchos de 320, 390, 768, 1024, 1280 y 1440 px. Se corrigió una colisión con la clase container de Tailwind y un desbordamiento en el ancho mínimo. Los anchos comprobados ya no presentan desbordamiento horizontal.

Se probaron selección de porciones y sabores, resumen dinámico, navegación por flechas en los radios, apertura del diálogo, Tab y Shift+Tab entre sus controles, cierre con Escape y retorno del foco. Se verificaron apertura del menú móvil, cierre con Escape y al elegir un enlace, así como navegación al catálogo y a la ficha de brownies. La consola revisada no registró errores ni advertencias.

Las preferencias de movimiento reducido se contemplan en CSS y en IntersectionObserver. No se emuló manualmente esa preferencia en el navegador. La ausencia de JavaScript se revisó en el HTML generado; no se desactivó JavaScript en la sesión de navegador.

## Lighthouse

Auditoría sobre producción con Edge sin ventana, usando los perfiles móvil y escritorio de Lighthouse:

| Métrica | Escritorio | Móvil |
| --- | ---: | ---: |
| Rendimiento | 99 | 80 |
| Accesibilidad | 100 | 100 |
| SEO | 100 | 100 |
| Buenas prácticas | 81 | 81 |
| LCP | 1.0 s | 4.7 s |
| CLS | 0 | 0 |
| TBT | 0 ms | 0 ms |

Los informes detectan un script HTTP de Kaspersky inyectado por el entorno local, de unos 212 KB, que bloquea el render y produce la advertencia de HTTP. Esto limita la representatividad de las métricas, especialmente en el perfil móvil. El objetivo móvil de LCP inferior a 2.5 segundos queda pendiente de validación en el entorno de publicación. INP y datos reales de usuarios no se midieron.

Tras la auditoría se ajustaron únicamente el espaciado de los destinos de ancla y el recorrido de foco del diálogo; ambos se comprobaron en navegador y se repitieron las verificaciones de código y compilación.

## Referencias

Se consultaron las guías oficiales de [componentes Astro](https://docs.astro.build/en/basics/astro-components/), [componentes de frameworks e hidratación](https://docs.astro.build/en/guides/framework-components/), [estilos y Tailwind](https://docs.astro.build/en/guides/styling/) y [rutas estáticas](https://docs.astro.build/en/guides/routing/).
