import styles from '@/components/ui/EmojiBadge.module.scss';

export default function EmojiBadge({ emoji = '😊', count = 0 }) {
  return (
    <span className={styles.badge}>
      <span className={styles.emoji}>{emoji}</span>
      <span className={styles.count}>{count}</span>
    </span>
  );
}
