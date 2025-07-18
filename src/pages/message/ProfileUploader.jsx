import { useEffect, useRef, useState } from 'react';

import Img1 from '@/assets/images/profile1.png';
import Img2 from '@/assets/images/profile2.png';
import ProfileIcon from '@/components/ui/ProfileIcon';
import styles from '@/pages/Message/ProfileUploader.module.scss';

function ProfileUploader({ imageFile, setImageFile }) {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);
  const selectImages = [...Array(5)].flatMap(() => [Img1, Img2]);

  //imageFile 바뀔 때마다 실행
  useEffect(() => {
    if (!imageFile) {
      setPreview(null);
      return;
    }

    //파일 URL로 preview에 저장
    const objectUrl = URL.createObjectURL(imageFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
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
                  setImageFile(null);
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
