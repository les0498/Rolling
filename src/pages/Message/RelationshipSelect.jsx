import styles from '@/pages/Message/RelationshipSelect.module.scss';

function RelationshipSelect({ value, onChange }) {
  const RELATIONSHIPS = ['친구', '지인', '동료', '가족'];

  return (
    <div className={styles.selectWrapper}>
      <label htmlFor='relationship' className={styles.label}>
        상대와의 관계
      </label>
      <select
        id='relationship'
        value={value}
        //선택한 option의 value를 부모로 올려보냄
        onChange={(e) => onChange(e.target.value)}
        className={styles.select}
      >
        {RELATIONSHIPS.map((rel) => (
          <option key={rel} value={rel}>
            {rel}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RelationshipSelect;
