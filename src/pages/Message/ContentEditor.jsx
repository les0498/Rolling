import styles from './ContentEditor.module.scss';

function ContentEditor({ value, onChange }) {
  const maxLength = 500;

  return (
    <div className={styles.editorWrapper}>
      <label htmlFor='content' className={styles.label}>
        내용을 입력해 주세요
      </label>
      <textarea
        id='content'
        className={styles.textarea}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='메세지를 입력하세요.'
        maxLength={maxLength}
        rows={8}
      />
      {/* 글자수 표시 */}
      <div className={styles.counter}>
        {value.length} / {maxLength}
      </div>
    </div>
  );
}

export default ContentEditor;
