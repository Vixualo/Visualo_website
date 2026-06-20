'use client';

import { useScrollRevealMultiple } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import TeamMember from '@/components/TeamMember/TeamMember';
import { team } from '@/data/team';
import styles from './Team.module.css';

export default function Team() {
  const containerRef = useScrollRevealMultiple({ selector: '.reveal' });

  return (
    <section
      id="equipo"
      className={`${styles.section} container`}
      aria-labelledby="equipo-heading"
      ref={containerRef}
    >
      <SectionHeader
        id="equipo-heading"
        title="El Equipo"
        count={`${String(team.length).padStart(2, '0')} personas`}
      />

      <div className={styles.grid}>
        {team.map((member, index) => (
          <TeamMember
            key={member.id}
            {...member}
            delay={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
