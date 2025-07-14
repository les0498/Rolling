import { useRef, useState } from 'react';

import shareIcon from '@/assets/images/shareIcon.png';
import buttonStyles from '@/components/PostNav/EmojiAddButton.module.scss';
import styles from '@/components/PostNav/ShareButton.module.scss';
import ShareKakaoButton from '@/components/PostNav/ShareKakaoButton';
import ShareUrlButton from '@/components/PostNav/ShareUrlButton';
import Toast from '@/components/PostNav/Toast';
import useOutsideClick from '@/hooks/useOutsideClick';

function ShareBar() {
  //공유 박스
  const [isOpen, setIsOpen] = useState(false);
  //토스트
  const [isToast, setIsToast] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const onClose = () => setIsOpen(false);
  const buttonRef = useRef(null);

  useOutsideClick(buttonRef, () => {
    setIsOpen(false);
  });

  return (
    <div ref={buttonRef} className={styles.shareContainer}>
      <button onClick={toggleOpen} className={buttonStyles.btn}>
        <img className={buttonStyles.icon} src={shareIcon} alt='공유 아이콘' />
      </button>
      {isOpen && (
        <ol className={styles.shareBox}>
          <li>
            <ShareKakaoButton
              className={styles.shareBtn}
              setIsOpen={setIsOpen}
            />
          </li>
          <li>
            <ShareUrlButton
              className={styles.shareBtn}
              setIsToast={setIsToast}
              setIsOpen={setIsOpen}
            />
          </li>
        </ol>
      )}

      {isToast && <Toast message='URL이 복사되었습니다.' onClose={onClose} />}
    </div>
  );
}
export default ShareBar;
