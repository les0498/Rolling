import { useCallback, useState } from 'react';

import { BACKGROUND_COLOR, createRecipient } from '@/apis/recipients';
import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';
import useAsync from '@/hooks/useAsync';
import BackgroundSelect from '@/pages/PostCreate/BackgroundSelect';
import { BACKGROUND_OPTION } from '@/pages/PostCreate/constants';
import styles from '@/pages/PostCreate/PostCreateForm.module.scss';

export default function PostCreateForm() {
  const [submitLoading, submitError, createRecipientAsync] =
    useAsync(createRecipient);
  const [errors, setErrors] = useState({
    name: '',
    background: '',
  });
  const [values, setValues] = useState({
    name: '',
    option: BACKGROUND_OPTION.color,
    backgroundColor: BACKGROUND_COLOR.beige,
    backgroundImageURL: null,
  });
  const handleInputsChange = useCallback((newInputs) => {
    setValues((prev) => ({
      ...prev,
      ...newInputs,
    }));
  }, []);
  /* TODO: InputField를 객체 상태를 수정하는 코드로 변경한 이후, 이 함수도 변경  */
  const handleNameInputChange = (value) => {
    setValues((prev) => ({
      ...prev,
      name: value,
    }));
  };
  const handleNameInputBlur = () => {
    if (values.name.trim() === '') {
      setErrors((prev) => ({
        ...prev,
        name: '값을 입력해 주세요.',
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        name: '',
      }));
    }
  };
  const validateForm = () => {
    const errors = {
      name: '',
      background: '',
    };
    const hasBackgroundInput =
      values.backgroundColor || values.backgroundImageURL;
    const hasNameInput = values.name.trim() === '';

    if (!hasNameInput) errors.name = '값을 입력해 주세요.';
    if (!hasBackgroundInput) errors.background = '배경화면을 선택하세요';
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name.trim() === '') {
      setErrors((prev) => ({
        ...prev,
        name: '값을 입력해 주세요.',
      }));
      return;
    }
    const hasBackgroundInput =
      values.backgroundColor || values.backgroundImageURL;

    if (!hasBackgroundInput) {
      setErrors((prev) => ({
        ...prev,
        background: '배경화면을 선택하세요',
      }));
      return;
    }
    createRecipientAsync({
      name: values.name,
      backgroundColor: values.backgroundColor
        ? values.backgroundColor
        : BACKGROUND_COLOR.purple,
      backgroundImageURL: values.backgroundImageURL,
    });
  };
  const removeBackgroundError = () => {
    setErrors((prev) => ({
      ...prev,
      background: '',
    }));
  };

  if (submitLoading) return <p>loading...</p>;
  else
    return (
      <form className={styles.form}>
        <InputField
          id='to'
          label='To.'
          placeholder='이름을 입력해주세요'
          value={values.name}
          onChange={handleNameInputChange}
          onBlur={handleNameInputBlur}
          error={errors.name}
        />
        <div>
          <BackgroundSelect
            values={values}
            onChange={handleInputsChange}
            removeBackgroundError={removeBackgroundError}
          />
          {errors.background && (
            <p className={styles.errorMessage}>{errors.background}</p>
          )}
        </div>
        <Button onClick={handleSubmit}>생성하기</Button>
      </form>
    );
}
