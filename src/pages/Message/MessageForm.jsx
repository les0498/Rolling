import { useState } from 'react';

import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';
import ContentEditor from '@/pages/Message/ContentEditor';
import FontSelector from '@/pages/Message/FontSelector';
import styles from '@/pages/message/MessageForm.module.scss';
import ProfileUploader from '@/pages/Message/ProfileUploader';
import RelationshipSelect from '@/pages/Message/RelationshipSelect';

function MessageForm() {
  const [from, setFrom] = useState('');
  const [fromError, setFromError] = useState('');
  const [relationship, setRelationship] = useState('지인');
  const [content, setContent] = useState('');
  const [font, setFont] = useState('noto-sans');
  const [imageFile, setImageFile] = useState(null);

  //입력 칸에서 포커스 빠질 때 실행
  const handleFromBlur = () => {
    if (from.trim() === '') {
      setFromError('값을 입력해 주세요.');
    } else {
      setFromError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지

    if (from.trim() === '') {
      setFromError('값을 입력해 주세요.');
      return;
    }

    const messageData = {
      from,
      relationship,
      content,
      font,
      imageFile,
    };

    console.log('폼 제출됨:', messageData);
    // TODO: 여기서 실제 메시지 전송 API 호출
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
      <Button onClick={handleSubmit}>생성하기</Button>
    </form>
  );
}

export default MessageForm;
