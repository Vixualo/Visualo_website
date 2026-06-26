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
            {[
              { img: project.detailImage, title: project.subTitle },
              { img: project.detailImage2, title: project.subTitle2 },
              { img: project.detailImage3, title: project.subTitle3 },
              { img: project.detailImage4, title: project.subTitle4 },
              { img: project.detailImage5, title: project.subTitle5 },
              { img: project.detailImage6, title: project.subTitle6 },
              { img: project.detailImage7, title: project.subTitle7 },
              { img: project.detailImage8, title: project.subTitle8 },
              { img: project.detailImage9, title: project.subTitle9 },
            ]
              .filter((item) => item.img)
              .map((item, idx) => (
                <div key={idx} className={styles.detailBlock}>
                  {item.title && <h3 className={styles.detailTitle}>{item.title}</h3>}
                  <div className={styles.detailImageWrapper}>
                    <img
                      src={item.img}
                      alt={item.title || project.alt || project.title}
                      className={styles.detailImage}
                    />
                  </div>
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
