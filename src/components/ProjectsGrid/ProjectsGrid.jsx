'use client';

import { useScrollRevealMultiple } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { projects } from '@/data/projects';
import styles from './ProjectsGrid.module.css';

export default function ProjectsGrid() {
  const containerRef = useScrollRevealMultiple({ selector: '.reveal' });

  const projectCount = String(projects.length).padStart(2, '0');

  return (
    <section
      id="trabajos"
      className={`${styles.section} container`}
      aria-labelledby="trabajos-heading"
      ref={containerRef}
    >
      <SectionHeader
        id="trabajos-heading"
        title="Trabajos Seleccionados"
        count={`${projectCount} proyectos`}
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
