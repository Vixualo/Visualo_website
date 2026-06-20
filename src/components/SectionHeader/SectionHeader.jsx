import styles from './SectionHeader.module.css';

export default function SectionHeader({ id, title, count }) {
  return (
    <div className={`${styles.header} reveal`}>
      <h2 id={id} className={styles.title}>{title}</h2>
      {count && <span className={styles.count}>{count}</span>}
    </div>
  );
}
