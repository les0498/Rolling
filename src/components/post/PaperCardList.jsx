import PaperCard from "@/components/post/PaperCard"; 
import styles from '@/components/post/PaperCardList.module.scss';

function PaperCardList() {

  return(
    <div className={styles.background}>
      <div className={styles.cardListContainer}>
        <PaperCard /> 
      </div>
    </div>
  );
}

export default PaperCardList;