import styles from '@/components/ui/InputField.module.scss';

function InputField({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onBlur,
  error,
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`${styles.input} ${error ? styles.error : ''}`}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}

export default InputField;
