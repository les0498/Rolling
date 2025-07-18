import styles from '@/pages/List/SlideButton.module.scss';

function SlideButton({ direction, onClick }) {
  // 화살표 방향 결정
  const isLeft = direction === 'left';
  const arrow = isLeft ? '<' : '>';

  // 왼쪽 방향이면 styles.left 추가
  return (
    <button
      className={`${styles.button} ${isLeft ? styles.left : styles.right}`}
      onClick={onClick}
    >
      {arrow}
    </button>
  );
}

export default SlideButton;
