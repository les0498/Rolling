import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { createMessageById } from '@/apis/messages';
import { uploads } from '@/apis/uploads.js';
import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';
import ContentEditor from '@/pages/Message/ContentEditor';
import FontSelector from '@/pages/Message/FontSelector';
import styles from '@/pages/message/MessageForm.module.scss';
import ProfileUploader from '@/pages/Message/ProfileUploader';
import RelationshipSelect from '@/pages/Message/RelationshipSelect';

function MessageForm() {
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [fromError, setFromError] = useState('');
  const [relationship, setRelationship] = useState('지인');
  const [content, setContent] = useState('<p></p>');
  const [font, setFont] = useState('Noto Sans');
  const [imageFile, setImageFile] = useState(null);

  const { id } = useParams();
  const isDisabled = from.trim() === '' || content.trim() === '<p></p>';

  //입력 칸에서 포커스 빠질 때 실행
  const handleFromBlur = () => {
    if (from.trim() === '') {
      setFromError('값을 입력해 주세요.');
    } else {
      setFromError('');
    }
  };

  const handleSubmit = async (e) => {
    console.log('imageFile 타입:', typeof imageFile);
    console.log('imageFile instanceof File:', imageFile instanceof File);
    console.log('imageFile 값:', imageFile);

    e.preventDefault(); // 폼 제출 시 새로고침 방지

    if (from.trim() === '') {
      setFromError('값을 입력해 주세요.');
      return;
    }

    try {
      let profileImageURL = '';

      if (imageFile instanceof File) {
        profileImageURL = await uploads(imageFile);
      } else if (typeof imageFile === 'string') {
        profileImageURL = imageFile;
      }

      await createMessageById({
        id,
        sender: from,
        profileImageURL,
        relationship,
        content,
        font,
      });
      navigate(`/post/${id}`);
    } catch (error) {
      console.error('생성 실패: ', error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <form className={styles.form}>
      <InputField
        id='from'
        label='From.'
        placeholder='이름을 입력해주세요'
        value={from}
        onChange={setFrom}
        onBlur={handleFromBlur}
        error={fromError}
      />
      <ProfileUploader imageFile={imageFile} setImageFile={setImageFile} />
      <RelationshipSelect value={relationship} onChange={setRelationship} />
      <ContentEditor value={content} onChange={setContent} />
      <FontSelector value={font} onChange={setFont} />
      <div className={styles.buttonGroup}>
        <Button
          type='submit'
          variant='primary'
          size='big'
          disabled={isDisabled}
          onClick={handleSubmit}
        >
          생성하기
        </Button>
        <Button
          type='button'
          variant='secondary'
          size='big'
          onClick={handleBack}
        >
          뒤로
        </Button>
      </div>
    </form>
  );
}

export default MessageForm;
