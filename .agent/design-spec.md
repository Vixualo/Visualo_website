# VISUALO — Design Specification
**Version:** 1.0  
**Fecha:** Junio 2026  
**Tipo de proyecto:** Portfolio / Studio Website  
**Alcance:** Frontend only (sin backend por ahora)

---

## 1. Dirección Visual

**Estilo:** Editorial minimalista. Sin florituras. La identidad la lleva la tipografía y el espacio negativo, no el color.

**Tono:** Studio creativo maduro — no busca sorprender con efectos, sino con criterio. Limpio, directo, con peso visual en el contenido (proyectos, equipo).

**Referencia visual extraída del diseño:**
- Fondo blanco puro como base.
- Tipografía negra de peso variable como único elemento decorativo.
- Grid de proyectos asimétrico y denso — los bloques hablan solos.
- Footer en negro con texto blanco, creando el único contraste fuerte.
- Bordes redondeados en todas las tarjetas de proyecto (~12–16px).
- Sin imágenes de decoración — solo contenido.

**Lo que lo hace memorable:** La galería de proyectos. El layout quebrado (una pieza grande arriba, luego columnas asimétricas debajo) no sigue un grid uniforme — genera tensión visual sin esfuerzo adicional.

---

## 2. Color Tokens

```css
:root {
  /* Fondos */
  --color-bg:         #FFFFFF;   /* Página base */
  --color-surface:    #F5F5F3;   /* Superficies secundarias (hover states, inputs) */
  --color-footer-bg:  #121212;   /* Footer */
  --color-card-bg:    #111111;   /* Placeholders de imágenes / proyectos sin imagen */

  /* Texto */
  --color-text-primary:    #0A0A0A;   /* Títulos, cuerpo principal */
  --color-text-secondary:  #6B6B6B;   /* Subtítulos, metadata, roles */
  --color-text-on-dark:    #FFFFFF;   /* Texto sobre footer oscuro */
  --color-text-muted-dark: #9B9B9B;   /* Texto secundario sobre footer */

  /* Acentos */
  --color-accent:      #0A0A0A;   /* Links activos, hover states (mismo negro — sin color extra) */
  --color-border:      #E8E8E8;   /* Divisores sutiles */
  --color-tag-bg:      #EDEDED;   /* Fondo de tags de servicios */
  --color-tag-text:    #0A0A0A;   /* Texto de tags */

  /* Interacción */
  --color-link-hover:  #555555;   /* Hover sobre navegación */
}
```

> **Decisión:** Sin color de acento "brand". El diseño no lo muestra y agregar uno arbitrariamente traicionaría la estética. Si en el futuro se quiere un acento, puede ser un tono cálido muy suave (no brillante).

---

## 3. Tipografía

### Decisiones

| Rol          | Fuente                   | Peso(s)          | Uso |
|--------------|--------------------------|------------------|-----|
| Display      | **Neue Haas Grotesk** o fallback `DM Sans` | 400, 500 | Hero headline, nombre del estudio |
| Body         | **DM Sans**              | 400, 500         | Cuerpo general, nav, labels |
| Utility      | **DM Mono** (opcional)   | 400              | Metadatos, roles, copyright |

> **Fallback stack:** `'DM Sans', 'Helvetica Neue', Arial, sans-serif`  
> **Fuente alternativa libre sin costo:** [DM Sans en Google Fonts](https://fonts.google.com/specimen/DM+Sans)

### Escala tipográfica

```css
:root {
  /* Type scale — base 16px */
  --text-xs:   0.75rem;    /* 12px — copyright, metadata */
  --text-sm:   0.875rem;   /* 14px — labels, roles, nav links */
  --text-base: 1rem;       /* 16px — body copy */
  --text-lg:   1.125rem;   /* 18px — subtítulos de sección */
  --text-xl:   1.375rem;   /* 22px — headings de sección (Servicios, Equipo) */
  --text-2xl:  2rem;       /* 32px — headlines secundarios */
  --text-3xl:  2.75rem;    /* 44px — hero headline mobile */
  --text-4xl:  4rem;       /* 64px — hero headline desktop */

  /* Line heights */
  --leading-tight:  1.15;
  --leading-normal: 1.5;
  --leading-relaxed: 1.7;

  /* Letter spacing */
  --tracking-tight: -0.02em;  /* Titulos grandes */
  --tracking-normal: 0;
  --tracking-wide: 0.04em;    /* Labels en caps si se usan */
}
```

---

## 4. Espaciado

Sistema basado en múltiplos de **8px**.

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;

  /* Padding horizontal de página */
  --page-padding-mobile:  var(--space-5);    /* 20px */
  --page-padding-tablet:  var(--space-8);    /* 32px */
  --page-padding-desktop: var(--space-16);   /* 64px */

  /* Max width del contenedor */
  --container-max: 1200px;
}
```

---

## 5. Bordes y Radios

```css
:root {
  --radius-sm:   6px;    /* Tags, badges */
  --radius-md:   12px;   /* Tarjetas pequeñas */
  --radius-lg:   16px;   /* Tarjetas grandes de proyecto */
  --radius-xl:   24px;   /* Contenedores especiales si se usan */
  --radius-full: 9999px; /* Avatares del equipo */

  /* Bordes */
  --border-default: 1px solid var(--color-border);
  --border-tag:     1px solid #D4D4D4;
}
```

---

## 6. Grid de Proyectos

El layout del diseño muestra un **grid editorial asimétrico**. No es un grid uniforme de columnas iguales — tiene jerarquía visual:

### Layout (mobile-first)

```
┌──────────────────────────┐
│  Proyecto HERO           │  ← Ocupa 100% del ancho
│  (tall card)             │
└──────────────────────────┘

┌─────────────┐ ┌──────────┐
│  Proyecto 2 │ │ Proyecto │
│  (tall)     │ │    3     │
│             │ ├──────────┤
│             │ │ Proyecto │
│             │ │    4     │
└─────────────┘ └──────────┘

┌─────────────┐
│  Proyecto 5 │
│  (ancho)    │
└─────────────┘
```

### Implementación recomendada: CSS Grid

```css
.projects-grid {
  display: grid;
  gap: var(--space-4);
}

/* Mobile: columna única */
.projects-grid { grid-template-columns: 1fr; }

/* Tablet y desktop */
@media (min-width: 640px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .project-card--hero {
    grid-column: 1 / -1;   /* Ocupa todo el ancho */
    aspect-ratio: 16 / 7;
  }
  .project-card--tall {
    grid-row: span 2;
    aspect-ratio: unset;
  }
  .project-card {
    aspect-ratio: 4 / 3;
  }
}
```

---

## 7. Componentes

### 7.1 Navbar

```
[VISUALO]                           [≡]
```

- Logo a la izquierda en `--text-sm`, `font-weight: 500`, uppercase.
- Hamburger a la derecha (mobile). En desktop: links de navegación inline.
- Sin background — flota sobre el contenido o sticky con blur mínimo.
- Links: Servicios / Trabajos / Sobre mí / Contacto

**Estados:**
- Default: `color: var(--color-text-primary)`
- Hover: `color: var(--color-link-hover)` con transición 200ms
- Active (página actual): underline sutil o punto indicador

---

### 7.2 Hero / Header

```
Damos vida a marcas con
historias y experiencias a través
del diseño y la tecnología.
```

- Tipografía display: `--text-3xl` (mobile) → `--text-4xl` (desktop)
- `font-weight: 400` (no bold — el peso lo da el tamaño)
- `letter-spacing: var(--tracking-tight)`
- `line-height: var(--leading-tight)`
- Sin imagen de fondo, sin subheadline. Solo el tagline.
- Padding top: `var(--space-12)` mínimo sobre mobile.

---

### 7.3 ProjectCard

Cada tarjeta de proyecto:

```
┌────────────────────────────┐
│                            │
│    [imagen / placeholder]  │
│                            │
└────────────────────────────┘
```

- `border-radius: var(--radius-lg)` (16px)
- `overflow: hidden`
- `background: var(--color-card-bg)` cuando no hay imagen
- Hover: `transform: scale(1.01)` con `transition: 200ms ease`
- Sin texto visible sobre la tarjeta (opción: overlay suave con título al hover)
- Cursor: pointer

**Props esperados:**
- `image`: URL o null
- `title`: string
- `category`: string (opcional)
- `size`: `'hero' | 'tall' | 'default'`

---

### 7.4 ServiceTag

Tags de servicios: `Edición de videos`, `Motion Graphics`, etc.

```css
.service-tag {
  display: inline-flex;
  align-items: center;
  padding: var(--space-2) var(--space-4);
  background: transparent;
  border: var(--border-tag);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  white-space: nowrap;
}
```

---

### 7.5 TeamMember

```
   ●
  ○ ○     ← Avatar circular (foto o placeholder negro)
 
Adrian Fernandez   ← font-weight: 500
Rol                ← color: --color-text-secondary
LinkedIn           ← link pequeño
```

- Avatar: `width: 72px; height: 72px; border-radius: var(--radius-full)`
- Layout: CSS grid de 3 columnas (mobile: 1 o 2)
- Spacing entre avatar y texto: `var(--space-3)`

---

### 7.6 Footer

Fondo oscuro `--color-footer-bg: #121212`.

```
VISUALO                    ← font-weight: 500, blanco
Diseño Gráfico y Branding  ← text-muted-dark

Navegación     Contacto
──────────     ──────────
Servicios      email
Trabajos       teléfono
Sobre mí
Contacto

© 2026 Tina Studio. Todos los derechos reservados.
```

- Dos o tres columnas en desktop, stack en mobile
- `color: var(--color-text-on-dark)` para headings del footer
- `color: var(--color-text-muted-dark)` para links y datos de contacto
- Links sin underline por defecto, underline en hover

---

## 8. Animaciones y Transiciones

Estrategia: **mínimo movimiento, máximo impacto**. El diseño es quieto — no queremos distracciones.

```css
:root {
  --transition-fast:   150ms ease;
  --transition-base:   200ms ease;
  --transition-slow:   350ms ease;
  --transition-reveal: 500ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Interacciones planeadas

| Elemento          | Animación |
|-------------------|-----------|
| Nav links         | `color` transition 200ms |
| Project cards     | `transform: scale(1.01)` + shadow suave en hover |
| Service tags      | `background-color` → `--color-surface` en hover |
| Team avatars      | `filter: grayscale(0)` → color en hover (si hay foto) |
| Scroll reveal     | Fade + translateY(16px) → 0 con `IntersectionObserver` |
| Page load         | Fade in del hero (500ms delay mínimo) |

### Principio de reduced motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Responsividad

| Breakpoint | Token        | Ancho   | Comportamiento |
|------------|--------------|---------|----------------|
| Mobile     | `--bp-sm`    | < 640px | Stack vertical, 1 col, hamburger |
| Tablet     | `--bp-md`    | 640px+  | Grid 2 col, nav expandida o hamburger |
| Desktop    | `--bp-lg`    | 1024px+ | Grid completo, nav inline |
| Wide       | `--bp-xl`    | 1280px+ | Container max-width activo |

---

## 10. Accesibilidad (baseline)

- Contraste mínimo texto/fondo: **4.5:1** (WCAG AA)
- Todos los elementos interactivos deben tener `:focus-visible` visible
- Imágenes con `alt` descriptivo siempre
- `aria-label` en hamburger menu, links de redes sociales, botones sin texto
- Semántica correcta: `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>–<h3>`
- Un solo `<h1>` por página

---

## 11. Estructura de Secciones (Home)

```
1. <header>      → Navbar
2. <section>     → Hero (tagline)
3. <section>     → Galería de proyectos (grid asimétrico)
4. <section>     → Servicios (tags)
5. <section>     → Equipo (avatares + roles)
6. <footer>      → Logo, navegación, contacto, copyright
```

---

## 12. Notas para el Desarrollo con Antigravity

### Contexto compartido entre modelos
Cada modelo que trabaje en un componente debe recibir:
1. Este Design Spec (secciones 2–9 como mínimo)
2. El nombre del componente que va a generar
3. Los props esperados del componente
4. El stack elegido (definir antes de ejecutar)

### Contratos entre componentes
- Colores: siempre variables CSS, nunca valores hardcodeados
- Espaciado: siempre variables CSS del sistema de espaciado
- Tipografía: siempre variables CSS de la escala tipográfica
- Los componentes no definen su propio layout externo (margin, position) — eso lo maneja el contenedor padre

### Decisión de stack pendiente
Antes de ejecutar, elegir entre:
- **Next.js + Tailwind** (si el portfolio va a escalar o integrar features de IA con edge functions)
- **HTML/CSS/JS vanilla** (si la prioridad es velocidad de build y control total)
- **Astro** (recomendado para portfolios estáticos con islas de interactividad para la IA)

---

*Fin del documento. Versión 1.0 lista para development handoff.*
