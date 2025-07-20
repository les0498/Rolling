import { useState } from 'react';

import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';
import BackgroundSelect from '@/pages/PostCreate/BackgroundSelect';
import { BACKGROUND_OPTION } from '@/pages/PostCreate/constants';
import styles from '@/pages/PostCreate/PostCreateForm.module.scss';

export default function PostCreateForm() {
  const [inputErrors, setInputErrors] = useState({
    name: '',
    background: '',
  });
  const [inputs, setInputs] = useState({
    name: '',
    option: BACKGROUND_OPTION.color,
    backgroundColor: '',
    backgroundImageURL: null,
  });
  const handleInputsChange = (newInputs) => {
    setInputs((prev) => ({
      ...prev,
      ...newInputs,
    }));
  };
  /* TODO: InputField를 객체 상태를 수정하는 코드로 변경한 이후, 이 함수도 변경  */
  const handleNameInputChange = (value) => {
    setInputs((prev) => ({
      ...prev,
      name: value,
    }));
  };
  const handleNameInputBlur = () => {
    if (inputs.name.trim() === '') {
      setInputErrors((prev) => ({
        ...prev,
        name: '값을 입력해 주세요.',
      }));
    } else {
      setInputErrors((prev) => ({
        ...prev,
        name: '',
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.name.trim() === '') {
      setInputErrors((prev) => ({
        ...prev,
        name: '값을 입력해 주세요.',
      }));
      return;
    }
    const hasBackgroundInput =
      inputs.backgroundColor || inputs.backgroundImageURL;

    if (!hasBackgroundInput) {
      setInputErrors((prev) => ({
        ...prev,
        background: '배경화면을 선택하세요',
      }));
      return;
    }
    const messageData = {
      inputs,
    };

    console.log('폼 제출됨:', messageData);
    // TODO: 여기서 실제 메시지 전송 API 호출
  };
  const removeBackgroundError = () => {
    setInputErrors((prev) => ({
      ...prev,
      background: '',
    }));
  };
  return (
    <form className={styles.form}>
      <InputField
        id='to'
        label='To.'
        placeholder='이름을 입력해주세요'
        value={inputs.name}
        onChange={handleNameInputChange}
        onBlur={handleNameInputBlur}
        error={inputErrors.name}
      />
      <BackgroundSelect
        inputs={inputs}
        onChange={handleInputsChange}
        removeBackgroundError={removeBackgroundError}
      />
      {inputErrors.background && (
        <p className={styles.errorMessage}>{inputErrors.background}</p>
      )}
      <Button onClick={handleSubmit}>생성하기</Button>
    </form>
  );
}
