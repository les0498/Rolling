import styles from '@/pages/List/CardSliderSkeleton.module.scss';

export default function CardSliderSkeleton() {
  return (
    <div className={styles.slider}>
      <div className={styles['card-skeleton']} />
      <div className={styles['card-skeleton']} />
      <div className={styles['card-skeleton']} />
      <div className={styles['card-skeleton']} />
    </div>
  );
}
