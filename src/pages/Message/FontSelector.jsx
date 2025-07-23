import Select from 'react-select';

import styles from '@/pages/Message/FontSelector.module.scss';

const FONT_OPTIONS = [
  { label: 'Noto Sans', value: 'Noto Sans' },
  { label: 'Pretendard', value: 'Pretendard' },
  { label: '나눔명조', value: '나눔명조' },
  { label: '나눔손글씨 손편지체', value: '나눔손글씨 손편지체' },
];

function FontSelector({ value, onChange }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor='font' className={styles.label}>
        폰트 선택
      </label>
      <Select
        inputId='font'
        options={FONT_OPTIONS}
        value={FONT_OPTIONS.find((option) => option.value === value)}
        onChange={(option) => onChange(option.value)}
        isSearchable={false}
        classNamePrefix='font'
      />
    </div>
  );
}

export default FontSelector;
