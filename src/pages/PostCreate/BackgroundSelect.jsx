import { useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'motion/react';

import styles from '@/pages/PostCreate/BackgroundSelect.module.scss';

export default function BackgroundSelect() {
  const [background, setBackground] = useState('컬러');
  const cx = classNames.bind(styles);
  const onClickOption = (e) => {
    e.preventDefault();
    setBackground(e.target.name);
  };
  const isColorBackground = background === '컬러';
  return (
    <section>
      <h2 className={cx('label')}>배경화면을 선택해 주세요.</h2>
      <p className={cx('caption')}>
        컬러를 선택하거나, 이미지를 선택할 수 있습니다.
      </p>
      <motion.div className={cx('options-container')}>
        <motion.div
          className={cx('option-indicator')}
          layout
          style={{
            left: isColorBackground ? '3px' : 'revert',
          }}
        />
        <button
          name='컬러'
          onClick={onClickOption}
          className={cx('option', 'option-color', {
            'option-selected': isColorBackground,
            'option-left': !isColorBackground,
          })}
        >
          컬러
        </button>
        <button
          name='이미지'
          onClick={onClickOption}
          className={cx('option', {
            'option-selected': !isColorBackground,
            'option-right': isColorBackground,
          })}
        >
          이미지
        </button>
      </motion.div>
      <div>
        <div>컬러</div>
        <div>이미지</div>
      </div>
    </section>
  );
}
