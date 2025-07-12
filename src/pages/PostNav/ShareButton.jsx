import { useRef, useState } from 'react';

import shareIcon from '@/assets/images/shareIcon.png';
import useOutsideClick from '@/hooks/useOutsideClick';
import styles from '@/pages/PostNav/EmojiShareButton.module.scss';

function ShareBar() {
  //공유 박스
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);
  const buttonRef = useRef(null);

  useOutsideClick(buttonRef, () => setIsOpen(false));

  return (
    <div ref={buttonRef} className={styles.shareContainer}>
      <button onClick={toggleOpen} className={styles.btn}>
        <img className={styles.icon} src={shareIcon} alt='공유 아이콘' />
      </button>
      {isOpen ? (
        <ol className={styles.shareBox}>
          <li>
            <a href='https://www.kakao.com'>카카오톡 공유</a>
          </li>
          <li>
            <a href='https://www.kakao.com'>URL 공유</a>
          </li>
        </ol>
      ) : (
        <></>
      )}
    </div>
  );
}
export default ShareBar;
