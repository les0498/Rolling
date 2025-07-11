import styles from '@/components/post/PaperCard.module.scss';
 
function PaperCard() {
  return (
      <div className={styles.cardBox}>
        <button className={styles.addCardBox}> + </button>
      </div>
  );

}

export default PaperCard;