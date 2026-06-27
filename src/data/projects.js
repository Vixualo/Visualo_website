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
    image: '/images/palomin_header.webp',
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
    detailImage: '/images/palomin_01.webp',
    client: 'MG Limpieza',
    year: '2025',
    services: ['Diseño de Identidad']
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
    title: 'Mall Ecommerce',
    category: 'Branding · UI · Motion Graphics',
    video: 'https://res.cloudinary.com/aerhzjuo/video/upload/q_auto,f_auto/v1782352502/Mall-logo-design_dnjflq.mp4',
    image: '/images/mall_header.webp',
    alt: 'Brandig y UI',
    size: 'default',
    description: `Mall es una aplicación web dedicada al comercio de indumentaria sumado al concepto de red social, ya que los usuarios pueden seguirse, compartir sus compras, subir reels de productos etc. La aplicación muestra productos de indumentaria de diversos comercios. Los productos que se presentan están adaptados a las preferencias y filtros del usuario. Estos perfiles podrán ser cargados y modificados según las necesidades individuales o del grupo familiar.
    `,
    copy: `Objetivo: Ser el e-commerce de indumentaria multimarca de referencia con fuerte influencia de los usuarios en compartir contenido relacionado a lo que venden y compran.`,
    copy2: `Target: Apasionados de la moda de todas las edades que disfrutan coleccionando y usando prendas, sin importar su ubicación.`,
    subTitle: 'Usuario',
    detailImage: '/images/user_mall.webp',
    subTitle2: 'Card sorting',
    detailImage2: '/images/card_sorting_mall.webp',
    subTitle3: 'Mapa de sitio',
    detailImage3: '/images/sitemap_mall.webp',
    subTitle4: 'Flujo de usuario',
    detailImage4: '/images/user_flow.webp',
    subTitle5: 'Prototipo',
    detailImage5: '/images/prototype_mall.webp',
    subTitle6: 'Diseño visual',
    detailImage6: '/images/visual_design_mall.webp',
    subTitle7: 'Tipografía',
    detailImage7: '/images/typography_mall.webp',
    subTitle8: 'Paleta de colores',
    detailImage8: '/images/color_palette_mall.webp',
    subTitle9: 'Diseño de interfaz',
    detailImage9: '/images/interface_mall.webp',
    client: 'Mall',
    year: '2024',
    services: ['Diseño de Identidad', 'Motion Graphics']
  },
  {
    id: 'be-grow-one-web',
    title: 'Landing Page para Be Grow One',
    category: 'Design · Web',
    video: 'https://res.cloudinary.com/aerhzjuo/video/upload/v1782597761/Reel_BeGrow_4-3_dfgzjx.mp4',
    alt: 'Landing Page BeGrow One',
    size: 'default',
    description: 'Edición y post-producción de color de "Norte", un documental independiente que explora las tradiciones del norte geográfico. Trabajamos en estrecha colaboración con la dirección para lograr una estética cruda y emotiva.',
    client: 'Productora Independiente',
    year: '2023',
    services: ['Branding', 'Diseño UI/UX', 'Desarrollo Web']
  },
  // {
  //   id: 'identidad-mara-atelier',
  //   title: 'Identidad Mara Atelier',
  //   category: 'Branding · Web',
  //   video: 'https://res.cloudinary.com/aerhzjuo/video/upload/q_auto,f_auto/v1782352287/Palomin_pote_pattern_u2cqms.mp4',
  //   alt: 'Proyecto de identidad visual para Mara Atelier',
  //   size: 'wide',
  //   description: 'Creación de la identidad visual de marca y la plataforma web de comercio electrónico para Mara Atelier. Nos enfocamos en una estética minimalista y lujosa, brindando una experiencia de usuario inmersiva.',
  //   client: 'Mara Atelier',
  //   year: '2024',
  //   services: ['Branding', 'Diseño UI/UX', 'Desarrollo Web']
  // },
  // {
  //   id: 'be-grow-one-web',
  //   title: 'Landing Page',
  //   category: 'Design · Web',
  //   video: 'https://res.cloudinary.com/aerhzjuo/video/upload/v1782597761/Reel_BeGrow_4-3_dfgzjx.mp4',
  //   alt: 'Landing Page BeGrow One',
  //   size: 'wide',
  //   description: 'Creación de la identidad visual de marca y la plataforma web de comercio electrónico para Mara Atelier. Nos enfocamos en una estética minimalista y lujosa, brindando una experiencia de usuario inmersiva.',
  //   client: 'Mara Atelier',
  //   year: '2025',
  //   services: ['Branding', 'Diseño UI/UX', 'Desarrollo Web']
  // },
];
