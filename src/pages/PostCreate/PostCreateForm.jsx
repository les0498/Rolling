import { useState } from 'react';

import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';
import BackgroundSelect from '@/pages/PostCreate/BackgroundSelect';
import styles from '@/pages/PostCreate/PostCreateForm.module.scss';

export default function PostCreateForm() {
  const [to, setTo] = useState('');
  const [toError, setToError] = useState('');

  //입력 칸에서 포커스 빠질 때 실행
  const handleToBlur = () => {
    if (to.trim() === '') {
      setToError('값을 입력해 주세요.');
    } else {
      setToError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지
    if (to.trim() === '') {
      setToError('값을 입력해 주세요.');
      return;
    }

    const messageData = {
      to,
    };

    console.log('폼 제출됨:', messageData);
    // TODO: 여기서 실제 메시지 전송 API 호출
  };

  return (
    <form className={styles.form}>
      <InputField
        id='to'
        label='To.'
        placeholder='이름을 입력해주세요'
        value={to}
        onChange={setTo}
        onBlur={handleToBlur}
        error={toError}
      />
      <BackgroundSelect />
      <Button onClick={handleSubmit}>생성하기</Button>
    </form>
  );
}
