'use client';

import { useState, useEffect, useCallback } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#contacto', label: 'Contacto' },
];

const SECTION_IDS = ['servicios', 'trabajos', 'equipo', 'contacto'];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleSmoothScroll = useCallback((e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navbarEl = document.getElementById('navbar');
      const navbarHeight = navbarEl ? navbarEl.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <header
        id="navbar"
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        role="banner"
      >
        <a
          href="#hero"
          className={styles.logo}
          aria-label="Visualo — Volver al inicio"
          onClick={(e) => handleSmoothScroll(e, '#hero')}
        >
          Visualo
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.links} aria-label="Navegación principal">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={activeSection === href.slice(1) ? styles.active : ''}
              onClick={(e) => handleSmoothScroll(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
        aria-label="Menú móvil"
        aria-hidden={!isMenuOpen}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleSmoothScroll(e, href)}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
