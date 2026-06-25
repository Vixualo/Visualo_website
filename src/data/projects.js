/**
 * Projects data — Single source of truth for the projects grid.
 * Each project defines its display variant (hero, tall, default, wide).
 */

export const projects = [
  {
    id: 'rebrand-colectiva',
    title: 'Palomín repelente de Aves',
    category: 'Branding · Identidad',
    video: 'https://res.cloudinary.com/aerhzjuo/video/upload/q_auto,f_auto/v1782352287/Palomin_pote_pattern_u2cqms.mp4',
    image: '/images/avatar-1.png',
    alt: 'Rebrand completo para Colectiva — identidad visual editorial',
    size: 'hero',
    description: `MG Limpieza incorpora a su portafolio de soluciones Palomín, un eficaz repelente de palomas.
    El objetivo es ejecutar un relanzamiento estratégico del producto, fundamentado en dos pilares clave:
    Rediseño de Identidad Visual: Se creará un nuevo logo con el objetivo de lograr un alto impacto y reconocimiento
    en el punto de venta.El diseño deberá comunicar de manera instantánea la función del producto,
    garantizando su visibilidad en la góndola. Comunicación Centrada en el Diferenciador Clave: Se mantendrá el color
    verde como eje cromático para reforzar nuestra principal propuesta de valor: Palomín es una solución segura y no tóxica.
    Este atributo será el foco de toda nuestra estrategia de comunicación para posicionar la marca como una alternativa efectiva
    y responsable. El plan culminará con el lanzamiento escalonado del producto en los distintos canales de venta, apalancado por
    su nueva y potente identidad.`,
    client: 'MG Limpieza',
    year: '2025',
    services: ['Estrategia de Marca', 'Diseño de Identidad', 'Dirección de Arte', 'Diseño Editorial']
  },
  {
    id: 'sistema-visual-urbano',
    title: 'Sistema Visual Urbano',
    category: 'Motion · Editorial',
    video: 'https://res.cloudinary.com/aerhzjuo/video/upload/q_auto,f_auto/v1782351899/BeGrowOne_bgkg6n.mp4',
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
    video: 'https://res.cloudinary.com/aerhzjuo/video/upload/q_auto,f_auto/v1782352502/Mall-logo-design_dnjflq.mp4',
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
    video: 'https://res.cloudinary.com/aerhzjuo/video/upload/q_auto,f_auto/v1782351899/BeGrowOne_bgkg6n.mp4',
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
    video: 'https://res.cloudinary.com/aerhzjuo/video/upload/q_auto,f_auto/v1782352287/Palomin_pote_pattern_u2cqms.mp4',
    alt: 'Proyecto de identidad visual para Mara Atelier',
    size: 'wide',
    description: 'Creación de la identidad visual de marca y la plataforma web de comercio electrónico para Mara Atelier. Nos enfocamos en una estética minimalista y lujosa, brindando una experiencia de usuario inmersiva.',
    client: 'Mara Atelier',
    year: '2024',
    services: ['Branding', 'Diseño UI/UX', 'Desarrollo Web']
  },
];
