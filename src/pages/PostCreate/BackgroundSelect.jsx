import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'motion/react';

import { getBackgroundImages } from '@/apis/images';
import { BACKGROUND_COLOR } from '@/apis/recipients';
import useAsync from '@/hooks/useAsync';
import styles from '@/pages/PostCreate/BackgroundSelect.module.scss';
import ColorBoxes from '@/pages/PostCreate/ColorBoxes';
import { BACKGROUND_OPTION } from '@/pages/PostCreate/constants';
import ImageBoxes from '@/pages/PostCreate/ImageBoxes';

export default function BackgroundSelect({ values, onChange }) {
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [loading, error, getBackgroundImagesAsync] =
    useAsync(getBackgroundImages);

  const cx = classNames.bind(styles);
  const isImageOptionSelected = values.option === BACKGROUND_OPTION.image;
  const isColorOptionSelected = values.option === BACKGROUND_OPTION.color;
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
      onChange({
        backgroundColor: e.currentTarget.name,
        backgroundImageURL: null,
      });
    }
    if (isImageOptionSelected) {
      const imageUrl = e.currentTarget.dataset.url;
      onChange({
        backgroundColor: BACKGROUND_COLOR.default,
        backgroundImageURL: imageUrl,
      });
    }
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
            <ColorBoxes
              onClick={handleBackgroundSelect}
              selectedColor={values.backgroundColor}
            />
          </>
        ) : (
          <ImageBoxes
            backgroundImages={backgroundImages}
            onClick={handleBackgroundSelect}
            selectedImage={values.backgroundImageURL}
          />
        )}
      </div>
    </section>
  );
}
