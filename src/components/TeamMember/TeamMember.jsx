import Image from 'next/image';
import styles from './TeamMember.module.css';

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function PlaceholderAvatar() {
  return (
    <div className={styles.avatarPlaceholder}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
          fill="rgba(255,255,255,0.25)"
        />
      </svg>
    </div>
  );
}

export default function TeamMember({ name, role, avatar, linkedin, delay = 0 }) {
  const delayClass = delay > 0 ? `reveal--delay-${delay}` : '';

  return (
    <div className={`${styles.member} reveal ${delayClass}`}>
      <div className={styles.avatar}>
        {avatar ? (
          <Image
            src={avatar}
            alt={`Foto de ${name}, ${role}`}
            width={72}
            height={72}
            className={styles.avatarImage}
          />
        ) : (
          <PlaceholderAvatar />
        )}
      </div>

      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.role}>{role}</span>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`LinkedIn de ${name} (abre en nueva pestaña)`}
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
