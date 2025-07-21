import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'motion/react';

import { getBackgroundImages } from '@/apis/images';
import { BACKGROUND_COLOR } from '@/apis/recipients';
import useAsync from '@/hooks/useAsync';
import styles from '@/pages/PostCreate/BackgroundSelect.module.scss';
import ColorBox from '@/pages/PostCreate/ColorBox';
import { BACKGROUND_OPTION } from '@/pages/PostCreate/constants';
import ImageBox from '@/pages/PostCreate/ImageBox';

export default function BackgroundSelect({
  values,
  onChange,
  removeBackgroundError,
}) {
  const [backgroundImages, setBackgroundImages] = useState([]);
  console.log(values);
  const [loading, error, getBackgroundImagesAsync] =
    useAsync(getBackgroundImages);

  const cx = classNames.bind(styles);
  const isImageOptionSelected = values.option === BACKGROUND_OPTION.image;
  const isColorOptionSelected = values.option === BACKGROUND_OPTION.color;
  const backgroundColorList = Object.keys(BACKGROUND_COLOR).slice(1);
  const handleOptionSelect = (e) => {
    e.preventDefault();
    onChange({
      option: e.target.name,
      backgroundColor: BACKGROUND_COLOR.default, // option과 관계없이 항상 beige 기본값
      backgroundImageURL: isImageOptionSelected ? backgroundImages[0] : null, // image option일때 첫번째 이미지 선택
    });
  };
  const handleBackgroundSelect = (e) => {
    e.preventDefault();
    if (isColorOptionSelected) {
      onChange({ backgroundColor: e.target.name, backgroundImageURL: null });
    }
    if (isImageOptionSelected) {
      onChange({
        backgroundColor: BACKGROUND_COLOR.default,
        backgroundImageURL: e.target.name,
      });
    }
    removeBackgroundError();
  };

  useEffect(() => {
    (async function fetchData() {
      const { imageUrls } = await getBackgroundImagesAsync();
      if (error) {
        console.log(error);
        return;
      }
      if (imageUrls) {
        setBackgroundImages(imageUrls);
        onChange({
          backgroundImageURL: isImageOptionSelected ? imageUrls[0] : null,
        });
      }
    })();
  }, [getBackgroundImagesAsync, isImageOptionSelected, error, onChange]);

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
          transition={{
            type: 'spring',
            visualDuration: 0.2,
            bounce: 0.2,
          }}
          style={{
            left: isColorOptionSelected ? '3px' : 'revert',
          }}
        />
        <button
          name={BACKGROUND_OPTION.color}
          onClick={handleOptionSelect}
          className={cx('option', 'option-color', {
            'option-selected': isColorOptionSelected,
            'option-left': !isColorOptionSelected,
          })}
        >
          컬러
        </button>
        <button
          name={BACKGROUND_OPTION.image}
          onClick={handleOptionSelect}
          className={cx('option', {
            'option-selected': !isColorOptionSelected,
            'option-right': isColorOptionSelected,
          })}
        >
          이미지
        </button>
      </div>
      <div className={cx('boxes-wrapper')}>
        {isColorOptionSelected ? (
          <>
            {backgroundColorList.map((color, i) => (
              <ColorBox
                key={i}
                onClick={handleBackgroundSelect}
                color={color}
                isSelected={values.backgroundColor === color}
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
                  isSelected={values.backgroundImageURL === url}
                />
              ))
            )}
          </>
        )}
      </div>
    </section>
  );
}
