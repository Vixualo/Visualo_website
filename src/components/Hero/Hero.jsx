'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      requestAnimationFrame(() => {
        setTimeout(() => el.classList.add(styles.visible), 150);
      });
    }
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={`${styles.hero} container`}
      aria-labelledby="hero-heading"
    >
      <h1 id="hero-heading" className={styles.tagline}>
        Damos vida a marcas con<br />
        historias y experiencias a través<br />
        del diseño y la tecnología.
      </h1>
      <div className={styles.meta}>
        <span className={styles.year}>Studio — Est. 2024</span>
        <span className={styles.scrollHint} aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          Scroll
        </span>
      </div>
    </section>
  );
}
