'use client';

import { useScrollRevealMultiple } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { projects } from '@/data/projects';
import styles from './ProjectsGrid.module.css';

export default function ProjectsGrid() {
  const containerRef = useScrollRevealMultiple({ selector: '.reveal' });


  return (
    <section
      id="trabajos"
      className={`${styles.section} container`}
      aria-labelledby="trabajos-heading"
      ref={containerRef}
    >
      <SectionHeader
        id="trabajos-heading"
        title=""
        hasBorder={false}
      />

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            delay={Math.min(index, 6)}
          />
        ))}
      </div>
    </section>
  );
}
