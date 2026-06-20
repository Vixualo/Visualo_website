import styles from './Footer.module.css';

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#contacto', label: 'Contacto' },
];

const SOCIAL_LINKS = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://behance.net', label: 'Behance' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
];

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contacto" className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.top}>

          {/* Brand column */}
          <div className={styles.brand}>
            <span className={styles.logo}>Visualo</span>
            <p className={styles.tagline}>
              Diseño gráfico, branding y tecnología para marcas que tienen algo que decir.
            </p>
          </div>

          {/* Navigation column */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Navegación</h3>
            <ul className={styles.navList}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contacto</h3>
            <div className={styles.contactItem}>
              <EmailIcon />
              <a href="mailto:hola@visualo.studio" aria-label="Enviar email a Visualo">
                hola@visualo.studio
              </a>
            </div>
            <div className={styles.contactItem}>
              <PhoneIcon />
              <a href="tel:+5491100000000" aria-label="Llamar a Visualo">
                +54 9 11 0000-0000
              </a>
            </div>
          </div>

        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} Visualo Studio. Todos los derechos reservados.
          </span>
          <div className={styles.social}>
            {SOCIAL_LINKS.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} de Visualo (abre en nueva pestaña)`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
