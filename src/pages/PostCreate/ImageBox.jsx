import classNames from 'classnames/bind';

import ClickedIcon from '@/assets/icons/enabled.svg';
import styles from '@/pages/PostCreate/Box.module.scss';

export default function ImageBox({ onClick, url, isSelected }) {
  const cx = classNames.bind(styles);
  return (
    <button
      onClick={onClick}
      style={{ backgroundImage: `url(${url})` }}
      className={cx('box', 'box-image')}
      name={url}
    >
      {isSelected && <ClickedIcon />}
    </button>
  );
}
