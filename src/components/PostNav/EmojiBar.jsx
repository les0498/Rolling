import { useState } from 'react';

import styles from '@/components/PostNav/EmojiBar.module.scss';

function EmojiBar({ iconCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className='iconContainer'>
      <ol>
        <li className={styles.icon}>{iconCount}</li>
        <li className={styles.icon}>{iconCount}</li>
        <li className={styles.icon}>{iconCount}</li>
      </ol>
      <button
        onClick={toggleOpen}
        className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`}
      />
    </div>
  );
}

export default EmojiBar;
