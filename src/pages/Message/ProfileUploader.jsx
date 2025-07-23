import { useEffect, useRef, useState } from 'react';

import ProfileIcon from '@/components/ui/ProfileIcon';
import styles from '@/pages/Message/ProfileUploader.module.scss';

function ProfileUploader({ imageFile, setImageFile }) {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);
  const selectImages = [
    'https://res.cloudinary.com/dxyy6jpne/image/upload/v1753151381/profile1_hg4kxj.png',
    'https://res.cloudinary.com/dxyy6jpne/image/upload/v1753151381/profile2_euveob.png',
    'https://res.cloudinary.com/dxyy6jpne/image/upload/v1753242755/profile3_st70wb.jpg',
    'https://res.cloudinary.com/dxyy6jpne/image/upload/v1753241802/profile4_ibbaya.jpg',
    'https://res.cloudinary.com/dxyy6jpne/image/upload/v1753242879/profile5_nnlml0.png',
    'https://res.cloudinary.com/dxyy6jpne/image/upload/v1753241941/profile6_txuykb.jpg',
    'https://res.cloudinary.com/dxyy6jpne/image/upload/v1753241941/profile7_fzf2mz.jpg',
    'https://res.cloudinary.com/dxyy6jpne/image/upload/v1753241943/profile8_lggp14.jpg',
    'https://res.cloudinary.com/dxyy6jpne/image/upload/v1753241997/profile9_k9slww.jpg',
    'https://res.cloudinary.com/dxyy6jpne/image/upload/v1753241998/profile10_pqgjo6.jpg',
  ];

  //imageFile 바뀔 때마다 실행
  useEffect(() => {
    if (!imageFile) return setPreview(null);

    if (typeof imageFile === 'string') {
      setPreview(imageFile);
    } else {
      const objectUrl = URL.createObjectURL(imageFile);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [imageFile]);

  //file 클릭 유도
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  //첫 번째 이미지 파일 setImageFile로 전달
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor='profile-uploader' className={styles.label}>
        프로필 이미지
      </label>

      <div className={styles.previewRow}>
        {/* 왼쪽: 미리보기 */}
        <div
          onClick={handleClick}
          role='button'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleClick();
          }}
        >
          <ProfileIcon src={preview || ''} size='big' stroke />
        </div>

        {/* 오른쪽: 텍스트 + 썸네일 */}
        <div className={styles.rightBox}>
          <p className={styles.caption}>프로필 이미지를 선택해주세요!</p>
          <div className={styles.thumbnailRow}>
            {selectImages.map((img, i) => (
              <div
                key={i}
                className={styles.thumbnail}
                onClick={() => {
                  setImageFile(img);
                  setPreview(img);
                }}
                onKeyDown={(e) => {
                  {
                    /* enter나 space 눌렀을 때 실행 */
                  }
                  if (e.key === 'Enter' || e.key === ' ') {
                    setImageFile(null);
                    setPreview(img);
                  }
                }}
                role='button'
                tabIndex={0}
              >
                <ProfileIcon src={img} size='big' />
              </div>
            ))}
          </div>
        </div>
      </div>

      <input
        id='profile-uploader'
        type='file'
        accept='image/*'
        ref={inputRef}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default ProfileUploader;
