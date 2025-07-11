import styles from '@/components/post/PaperCard.module.scss';


function AddMessageButton() {
  return (
    <div className={`${styles.cardBox} ${styles.addCardBox}`}>
      +
    </div>
  )
}

export default AddMessageButton;