import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './ProjectPage.module.css';

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <section className={styles.hero}>
          {project.image && (
            <img
              src={project.image}
              alt={project.alt || project.title}
              className={styles.videoBackground}
            />
          )}
          <div className={styles.overlay} aria-hidden="true" />
          <div className={styles.heroContent}>
            <span className={styles.category}>{project.category}</span>
            <h1 className={styles.title}>{project.title}</h1>
          </div>
        </section>

        <section className={styles.mainContent}>
          <div className={styles.descriptionSection}>
            <Link href="/#trabajos" className={styles.backButton}>
              ← Volver al inicio
            </Link>
            <h2>Sobre el proyecto</h2>
            <p className={styles.description}>{project.description}</p><br></br>
            <p className={styles.copy}>{project.copy}</p><br></br>
            <p className={styles.copy2}>{project.copy2}</p><br></br>
            {['detailImage', 'detailImage2', 'detailImage3', 'detailImage4']
              .map((key) => project[key])
              .filter(Boolean)
              .map((src, idx) => (
                <div key={idx} className={styles.detailImageWrapper}>
                  <img
                    src={src}
                    alt={project.alt || project.title}
                    className={styles.detailImage}
                  />
                </div>
              ))}

          </div>

          <aside className={styles.metaSection}>
            {project.client && (
              <div className={styles.metaItem}>
                <h3>Cliente</h3>
                <p>{project.client}</p>
              </div>
            )}
            {project.year && (
              <div className={styles.metaItem}>
                <h3>Año</h3>
                <p>{project.year}</p>
              </div>
            )}
            {project.services && project.services.length > 0 && (
              <div className={styles.metaItem}>
                <h3>Servicios</h3>
                <ul>
                  {project.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: 'Proyecto no encontrado' };

  return {
    title: `${project.title} — Visualo`,
    description: project.description,
  };
}
