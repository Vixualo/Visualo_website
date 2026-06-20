import Image from 'next/image';
import styles from './ProjectCard.module.css';

const SIZE_CLASSES = {
  hero: styles.hero,
  tall: styles.tall,
  default: styles.default,
  wide: styles.wide,
};

export default function ProjectCard({ title, category, image, alt, size = 'default', delay = 0 }) {
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.default;
  const delayClass = delay > 0 ? `reveal--delay-${delay}` : '';

  return (
    <article
      className={`${styles.card} ${sizeClass} reveal ${delayClass}`}
      tabIndex={0}
      role="button"
      aria-label={`Ver proyecto: ${title}`}
    >
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes={
            size === 'hero' || size === 'wide'
              ? '(max-width: 640px) 100vw, 1200px'
              : '(max-width: 640px) 100vw, 600px'
          }
          className={styles.image}
          priority={size === 'hero'}
        />
      ) : (
        <div className={styles.placeholder}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="8" y="8" width="32" height="32" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="8" y1="24" x2="40" y2="24" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="24" y1="8" x2="24" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="24" cy="24" r="6" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          </svg>
        </div>
      )}

      <div className={styles.overlay} aria-hidden="true">
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </article>
  );
}
