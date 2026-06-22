import styles from './SectionHeader.module.css';

export default function SectionHeader({ id, title, count, hasBorder = true }) {
  return (
    <div className={`${styles.header} ${!hasBorder ? styles.noBorder : ''} reveal`}>
      <h2 id={id} className={styles.title}>{title}</h2>
      {count && <span className={styles.count}>{count}</span>}
    </div>
  );
}
