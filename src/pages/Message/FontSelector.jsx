import styles from '@/pages/Message/FontSelector.module.scss';

function FontSelector({ value, onChange }) {
  const FONT_OPTIONS = [
    { label: 'Noto Sans', value: 'Noto Sans' },
    { label: 'Pretendard', value: 'Pretendard' },
    { label: '나눔명조', value: '나눔명조' },
    { label: '나눔손글씨 손편지체', value: '나눔손글씨 손편지체' },
  ];

  return (
    <div className={styles.wrapper}>
      <label htmlFor='font' className={styles.label}>
        폰트 선택
      </label>
      <select
        id='font'
        className={styles.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {FONT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FontSelector;
