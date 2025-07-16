import Close from '@/assets/icons/close.svg';
import ErrorCheck from '@/assets/icons/error.check.svg';
import GreenCheck from '@/assets/icons/green_check.svg';
import styles from '@/components/ui/Toast.module.scss';

export default function Toast({
  isValid = true,
  text = '',
  onCloseClick = () => {},
}) {
  return (
    <div className={styles.container}>
      <div className={styles['text-wrapper']}>
        {isValid ? <GreenCheck /> : <ErrorCheck />}
        <span>{text}</span>
      </div>
      <button className={styles['button-close']} onClick={onCloseClick}>
        <Close />
      </button>
    </div>
  );
}
