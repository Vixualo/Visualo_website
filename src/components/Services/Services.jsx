'use client';

import { useScrollRevealMultiple } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import ServiceTag from '@/components/ServiceTag/ServiceTag';
import { services } from '@/data/services';
import styles from './Services.module.css';

export default function Services() {
  const containerRef = useScrollRevealMultiple({ selector: '.reveal' });

  return (
    <section
      id="servicios"
      className={`${styles.section} container`}
      aria-labelledby="servicios-heading"
      ref={containerRef}
    >
      <SectionHeader
        id="servicios-heading"
        title="Servicios"
        count={`${String(services.length).padStart(2, '0')} disciplinas`}
      />

      <p className={`${styles.intro} reveal reveal--delay-1`}>
        Construimos desde el concepto hasta la ejecución. Cada proyecto es una
        colaboración — nunca una producción en línea.
      </p>

      <div className={styles.tags}>
        {services.map((service, index) => (
          <ServiceTag
            key={service.id}
            label={service.label}
            delay={(index % 6) + 1}
          />
        ))}
      </div>
    </section>
  );
}
