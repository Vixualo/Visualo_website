/**
 * Projects data — Single source of truth for the projects grid.
 * Each project defines its display variant (hero, tall, default, wide).
 */

export const projects = [
  {
    id: 'rebrand-colectiva',
    title: 'Rebrand Colectiva',
    category: 'Branding · Identidad',
    image: '/images/project-hero.png',
    alt: 'Rebrand completo para Colectiva — identidad visual editorial',
    size: 'hero',
  },
  {
    id: 'sistema-visual-urbano',
    title: 'Sistema Visual Urbano',
    category: 'Motion · Editorial',
    image: '/images/project-tall.png',
    alt: 'Sistema visual y señalética para espacio urbano',
    size: 'tall',
  },
  {
    id: 'campana-lanza',
    title: 'Campaña Lanza',
    category: 'Motion Graphics',
    image: '/images/project-sm1.png',
    alt: 'Campaña de motion graphics para lanzamiento de producto',
    size: 'default',
  },
  {
    id: 'documental-norte',
    title: 'Documental Norte',
    category: 'Edición · Post',
    image: '/images/project-sm2.png',
    alt: 'Edición y post-producción de documental independiente',
    size: 'default',
  },
  {
    id: 'identidad-mara-atelier',
    title: 'Identidad Mara Atelier',
    category: 'Branding · Web',
    image: null,
    alt: 'Proyecto de identidad visual para Mara Atelier',
    size: 'wide',
  },
];
