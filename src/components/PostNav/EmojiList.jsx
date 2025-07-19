import styles from '@/components/PostNav/EmojiBar.module.scss';

function EmojiList({ topReactions, limit }) {
  const limitReaction = topReactions.slice(0, limit);
  return (
    <>
      {limitReaction.map((icon) => {
        return (
          <li key={icon.id} className={styles.icon}>
            <div>{icon.emoji}</div>
            <div>{icon.count}</div>
          </li>
        );
      })}
    </>
  );
}

export default EmojiList;
