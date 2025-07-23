import styles from '@/pages/List/CardSliderSkeleton.module.scss';

export default function CardeSliderSkeleton() {
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.card} />
      <div className={styles.card} />
      <div className={styles.card} />
      <div className={styles.card} />
    </div>
  );
}
