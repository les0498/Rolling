import closeIcon from '@/assets/images/closeIcon.png';
import completedIcon from '@/assets/images/completedIcon.png';
import styles from '@/pages/PostNav/Toast.module.scss';

function Toast({ message, onClose }) {
  return (
    <div className={styles.toast}>
      <div>
        <img
          className={styles['toastIcon']}
          src={completedIcon}
          alt='완료 아이콘'
        />
        <div className={styles['toastCopy']}>{message}</div>
      </div>
      <button className={styles.closeIcon} onClick={onClose}>
        <img src={closeIcon} alt='닫기' />
      </button>
    </div>
  );
}

export default Toast;
