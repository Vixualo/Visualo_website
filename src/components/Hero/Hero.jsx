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
        Damos vida a marcas con historias y experiencias a través
        del diseño y la tecnología.
      </h1>

      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          src="/images/Reel_principal.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
}
