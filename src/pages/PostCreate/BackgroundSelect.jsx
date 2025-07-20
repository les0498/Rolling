import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'motion/react';

import { getBackgroundImages } from '@/apis/images';
import { BACKGROUND_COLOR } from '@/apis/recipients';
import useAsync from '@/hooks/useAsync';
import styles from '@/pages/PostCreate/BackgroundSelect.module.scss';
import ColorBox from '@/pages/PostCreate/ColorBox';
import ImageBox from '@/pages/PostCreate/ImageBox';

const _BACKGROUND_OPTION = {
  color: '컬러',
  image: '이미지',
};

export default function BackgroundSelect() {
  const [backgroundOption, setBackgroundOption] = useState(
    _BACKGROUND_OPTION.color
  );
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [select, setSelect] = useState('');

  const [loading, error, getBackgroundImagesAsync] =
    useAsync(getBackgroundImages);

  const handleOptionSelect = (e) => {
    e.preventDefault();
    setBackgroundOption(e.target.name);
  };
  const handleBackgroundSelect = (e) => {
    e.preventDefault();
    setSelect(e.target.name);
  };
  const cx = classNames.bind(styles);
  const isColorBackgroundOption = backgroundOption === _BACKGROUND_OPTION.color;
  const backgroundColorList = [...Object.keys(BACKGROUND_COLOR)];

  useEffect(() => {
    (async function fetchData() {
      const { imageUrls } = await getBackgroundImagesAsync();
      if (error) {
        console.log(error);
        return;
      }
      if (imageUrls) {
        setBackgroundImages(imageUrls);
      }
    })();
  }, [getBackgroundImagesAsync, error]);

  return (
    <section className={cx('container')}>
      <div className={cx('label-wrapepr')}>
        <h2 className={cx('label')}>배경화면을 선택해 주세요.</h2>
        <p className={cx('caption')}>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </p>
      </div>
      <div className={cx('options-wrapper')}>
        <motion.div
          className={cx('option-indicator')}
          layout
          style={{
            left: isColorBackgroundOption ? '3px' : 'revert',
          }}
        />
        <button
          name={_BACKGROUND_OPTION.color}
          onClick={handleOptionSelect}
          className={cx('option', 'option-color', {
            'option-selected': isColorBackgroundOption,
            'option-left': !isColorBackgroundOption,
          })}
        >
          컬러
        </button>
        <button
          name={_BACKGROUND_OPTION.image}
          onClick={handleOptionSelect}
          className={cx('option', {
            'option-selected': !isColorBackgroundOption,
            'option-right': isColorBackgroundOption,
          })}
        >
          이미지
        </button>
      </div>
      <div className={cx('boxes-wrapper')}>
        {isColorBackgroundOption ? (
          <>
            {backgroundColorList.map((color, i) => (
              <ColorBox
                key={i}
                onClick={handleBackgroundSelect}
                color={color}
                isSelected={select === color}
                name={color}
              />
            ))}
          </>
        ) : (
          <>
            {loading ? (
              <span>loading...</span>
            ) : (
              backgroundImages.map((url, i) => (
                <ImageBox
                  key={i}
                  url={url}
                  onClick={handleBackgroundSelect}
                  isSelected={select === url}
                />
              ))
            )}
          </>
        )}
      </div>
    </section>
  );
}
