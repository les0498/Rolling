import styles from '@/pages/PostNav/EmojiBar.module.scss';

function EmojiList({ topReactions, limit }) {
  const visibleReactions = limit ? topReactions.slice(0, limit) : topReactions;
  return (
    <>
      {visibleReactions.map((icon, index) => {
        return (
          <li key={index} className={styles.icon}>
            <div>{icon.emoji}</div>
            <div>{icon.count}</div>
          </li>
        );
      })}
    </>
  );
}

export default EmojiList;
