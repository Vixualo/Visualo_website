/**
 * Projects data — Single source of truth for the projects grid.
 * Each project defines its display variant (hero, tall, default, wide).
 */

export const projects = [
  {
    id: 'rebrand-colectiva',
    title: 'Rebrand Colectiva',
    category: 'Branding · Identidad',
    video: '/images/BeGrowOne.mp4',
    alt: 'Rebrand completo para Colectiva — identidad visual editorial',
    size: 'hero',
    description: 'Un rediseño integral de la identidad visual de Colectiva, enfocado en transmitir modernidad y sofisticación editorial. El proyecto incluyó la creación de un nuevo sistema de diseño, tipografía personalizada y una paleta de colores vibrante pero elegante que destaca en el mundo digital y físico.',
    client: 'Colectiva Magazine',
    year: '2024',
    services: ['Estrategia de Marca', 'Diseño de Identidad', 'Dirección de Arte', 'Diseño Editorial']
  },
  {
    id: 'sistema-visual-urbano',
    title: 'Sistema Visual Urbano',
    category: 'Motion · Editorial',
    video: '/images/BeGrowOne.mp4',
    alt: 'Sistema visual y señalética para espacio urbano',
    size: 'tall',
    description: 'Desarrollo de un sistema de señalética dinámica y visuales en movimiento para un espacio urbano de alto tránsito. Se priorizó la legibilidad y la interacción fluida, combinando técnicas de motion graphics con principios de diseño editorial clásico.',
    client: 'MetroCity',
    year: '2023',
    services: ['Motion Graphics', 'Wayfinding', 'Diseño Editorial']
  },
  {
    id: 'campana-lanza',
    title: 'Campaña Lanza',
    category: 'Motion Graphics',
    video: '/images/Palomin_pote_pattern.mp4',
    alt: 'Campaña de motion graphics para lanzamiento de producto',
    size: 'default',
    description: 'Campaña audiovisual completa para el lanzamiento global de Lanza. A través de piezas animadas de alto impacto, comunicamos la innovación del producto, adaptando el formato para múltiples plataformas digitales.',
    client: 'Lanza Tech',
    year: '2024',
    services: ['Animación 3D', 'Motion Graphics', 'Post-producción']
  },
  {
    id: 'documental-norte',
    title: 'Documental Norte',
    category: 'Edición · Post',
    video: '/images/BeGrowOne.mp4',
    alt: 'Edición y post-producción de documental independiente',
    size: 'default',
    description: 'Edición y post-producción de color de "Norte", un documental independiente que explora las tradiciones del norte geográfico. Trabajamos en estrecha colaboración con la dirección para lograr una estética cruda y emotiva.',
    client: 'Productora Independiente',
    year: '2023',
    services: ['Edición de Video', 'Color Grading', 'Post-producción']
  },
  {
    id: 'identidad-mara-atelier',
    title: 'Identidad Mara Atelier',
    category: 'Branding · Web',
    video: '/images/BeGrowOne.mp4',
    alt: 'Proyecto de identidad visual para Mara Atelier',
    size: 'wide',
    description: 'Creación de la identidad visual de marca y la plataforma web de comercio electrónico para Mara Atelier. Nos enfocamos en una estética minimalista y lujosa, brindando una experiencia de usuario inmersiva.',
    client: 'Mara Atelier',
    year: '2024',
    services: ['Branding', 'Diseño UI/UX', 'Desarrollo Web']
  },
];
