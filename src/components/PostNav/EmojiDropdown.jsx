import addIcon from '@/assets/images/addIcon.png';
import lineStyle from '@/components/PostNav/AuthorCount.module.scss';
import styles from '@/components/PostNav/EmojiShare.module.scss';

function EmojiDropdown() {
  return (
    <div>
      <button className={styles.buttonBorder}>
        <img src={addIcon} alt='이모지추가아이콘' />
        추가
      </button>
      <div className={lineStyle.divider} />
    </div>
  );
}

export default EmojiDropdown;
