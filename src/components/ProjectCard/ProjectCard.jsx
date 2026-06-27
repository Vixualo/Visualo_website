'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

const SIZE_CLASSES = {
  hero: styles.hero,
  tall: styles.tall,
  default: styles.default,
  wide: styles.wide,
};

export default function ProjectCard({ id, title, category, video, alt, size = 'default', delay = 0 }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.default;
  const delayClass = delay > 0 ? `reveal--delay-${delay}` : '';

  return (
    <Link
      href={`/trabajos/${id}`}
      className={`${styles.card} ${sizeClass} reveal ${delayClass}`}
      aria-label={`Ver proyecto: ${title}`}
    >
      <div className={styles.mediaWrapper}>
        {video ? (
          <>
            {!isVideoLoaded && (
              <div className={styles.loaderContainer}>
                <div className={styles.loader}></div>
              </div>
            )}
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              aria-label={alt}
              className={`${styles.video} ${isVideoLoaded ? styles.loaded : ''}`}
              preload='metadata'
              onLoadedData={() => setIsVideoLoaded(true)}
            />
          </>
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
      </div>
    </Link>
  );
}
