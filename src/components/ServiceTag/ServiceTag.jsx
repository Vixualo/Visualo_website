import styles from './ServiceTag.module.css';

export default function ServiceTag({ label, delay = 0 }) {
  const delayClass = delay > 0 ? `reveal--delay-${delay}` : '';

  return (
    <span className={`${styles.tag} reveal ${delayClass}`}>
      <span className={styles.dot} aria-hidden="true" />
      {label}
    </span>
  );
}
