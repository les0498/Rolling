import addIcon from '@/assets/images/addIcon.png';
import lineStyle from '@/components/PostNav/AuthorCount.module.scss';
import styles from '@/components/PostNav/EmojiAddButton.module.scss';
import useIsMobile from '@/hooks/useIsMobile';

function EmojiAddButton() {
  const isMobile = useIsMobile();

  return (
    <div className={styles.flexContainer}>
      <button className={styles.btn}>
        <img className={styles.icon} src={addIcon} alt='이모지추가아이콘' />
        {!isMobile && <span>추가</span>}
      </button>
      <div className={`${lineStyle.divider} ${lineStyle['dividerEmoji']}`} />
    </div>
  );
}

export default EmojiAddButton;
