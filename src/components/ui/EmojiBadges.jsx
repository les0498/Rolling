import styles from '@/components/ui/EmojiBadges.module.scss';

export default function EmojiBadges({ topReactions, limit = 3, ...rest }) {
  const limitReaction = topReactions.slice(0, limit);

  return (
    <>
      {limitReaction.map((icon) => {
        return (
          <span key={icon.id} className={styles.badge} {...rest}>
            <span className={styles.emoji}>{icon.emoji}</span>
            <span className={styles.count}>{icon.count}</span>
          </span>
        );
      })}
    </>
  );
}
