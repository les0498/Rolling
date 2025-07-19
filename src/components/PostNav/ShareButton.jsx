import { useRef, useState } from 'react';

import shareIcon from '@/assets/images/shareIcon.png';
import buttonStyles from '@/components/PostNav/EmojiAddButton.module.scss';
import styles from '@/components/PostNav/ShareButton.module.scss';
import ShareKakaoButton from '@/components/PostNav/ShareKakaoButton';
import ShareUrlButton from '@/components/PostNav/ShareUrlButton';
import Toast from '@/components/ui/Toast';
import useOutsideClick from '@/hooks/useOutsideClick';

function ShareBar() {
  //공유 박스
  const [isOpen, setIsOpen] = useState(false);
  //토스트
  const [isToast, setIsToast] = useState(false);

  // 버튼 클릭했을 때 닫힘
  const toggleOpen = () => setIsOpen((prev) => !prev);
  // 토스트 close버튼
  const onClose = () => setIsToast(false);
  // 내부 영역
  const buttonRef = useRef(null);

  //외부클릭했을 때 닫힘
  useOutsideClick(buttonRef, () => {
    setIsOpen(false);
    setIsToast(false);
  });

  return (
    <div ref={buttonRef} className={styles.shareContainer}>
      <button onClick={toggleOpen} className={buttonStyles.btn}>
        <img className={buttonStyles.icon} src={shareIcon} alt='공유 아이콘' />
      </button>
      {isOpen && (
        <ol className={styles.shareBox}>
          {/* 카카오 공유 */}
          <li>
            <ShareKakaoButton
              className={styles.shareBtn}
              setIsOpen={setIsOpen}
            />
          </li>
          {/* URL복사 */}
          <li>
            <ShareUrlButton
              className={styles.shareBtn}
              setIsToast={setIsToast}
              setIsOpen={setIsOpen}
            />
          </li>
        </ol>
      )}

      {isToast && (
        <Toast
          isValid={isToast}
          text='URL이 복사되었습니다.'
          onCloseClick={onClose}
        />
      )}
    </div>
  );
}
export default ShareBar;
