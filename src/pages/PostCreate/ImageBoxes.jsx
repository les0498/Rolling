import classNames from 'classnames/bind';

import ClickedIcon from '@/assets/icons/enabled.svg';
import { useImageLoader } from '@/hooks/useImageLoader';
import styles from '@/pages/PostCreate/Box.module.scss';

export default function ImageBoxes({
  backgroundImages = [],
  onClick,
  selectedImage,
}) {
  return (
    <>
      {backgroundImages.map((url, i) => (
        <ImageBox
          key={i}
          url={url}
          onClick={onClick}
          isSelected={selectedImage === url}
        />
      ))}
    </>
  );
}

function ImageBox({ onClick, url, isSelected }) {
  const cx = classNames.bind(styles);
  const { isLoading, onLoad, onError } = useImageLoader('');

  return (
    <button name={url} onClick={onClick} className={cx('box-wrapper')}>
      {isLoading && <SkeletonBox />}
      <img
        className={cx('box', 'box-image')}
        src={url}
        alt={'배경 이미지'}
        onLoad={onLoad}
        onError={onError}
      />

      {isSelected && !isLoading && (
        <span className={cx('icon-wrapper')}>
          <ClickedIcon />
        </span>
      )}
    </button>
  );
}
function SkeletonBox() {
  const cx = classNames.bind(styles);
  return <div className={cx('box', 'flicker')} />;
}
