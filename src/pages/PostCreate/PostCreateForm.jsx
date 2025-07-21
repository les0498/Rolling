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
  });
  const [values, setValues] = useState({
    name: '',
    option: BACKGROUND_OPTION.color,
    backgroundColor: BACKGROUND_COLOR.beige,
    backgroundImageURL: null,
  });
  const handleValuesChange = useCallback((newInputs) => {
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
  const validateForm = () => {
    const errors = {
      name: '',
    };
    const hasNameInput = values.name.trim() !== '';
    if (!hasNameInput) errors.name = '값을 입력해 주세요.';
    else errors.name = '';
    return errors;
  };
  const handleInputErrors = () => {
    const errors = validateForm();
    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    setErrors(errors);
    if (Object.values(errors).some((v) => v)) return;

    createRecipientAsync(values);
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
          onBlur={handleInputErrors}
          error={errors.name}
        />
        <div>
          <BackgroundSelect values={values} onChange={handleValuesChange} />
        </div>
        <Button onClick={handleSubmit}>생성하기</Button>
      </form>
    );
}
