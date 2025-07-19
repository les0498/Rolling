import { motion } from 'motion/react';

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
    <motion.div
      className={styles.container}
      initial={toastMotion.initial}
      animate={toastMotion.animate}
      transition={toastMotion.transition}
    >
      <div className={styles['text-wrapper']}>
        {isValid ? <GreenCheck /> : <ErrorCheck />}
        <span>{text}</span>
      </div>
      <button className={styles['button-close']} onClick={onCloseClick}>
        <Close />
      </button>
    </motion.div>
  );
}

const toastMotion = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.4,
    scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
  },
};
