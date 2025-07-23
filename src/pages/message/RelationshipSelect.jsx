import Select from 'react-select';

import styles from '@/pages/Message/RelationshipSelect.module.scss';

const RELATIONSHIP_OPTIONS = [
  { label: '친구', value: '친구' },
  { label: '지인', value: '지인' },
  { label: '동료', value: '동료' },
  { label: '가족', value: '가족' },
];

function RelationshipSelect({ value, onChange }) {
  return (
    <div className={styles.selectWrapper}>
      <label htmlFor='relationship' className={styles.label}>
        상대와의 관계
      </label>
      <Select
        inputId='relationship'
        options={RELATIONSHIP_OPTIONS}
        value={RELATIONSHIP_OPTIONS.find((opt) => opt.value === value)}
        onChange={(selected) => onChange(selected.value)}
        classNamePrefix='relationship'
        isSearchable={false}
      />
    </div>
  );
}

export default RelationshipSelect;
