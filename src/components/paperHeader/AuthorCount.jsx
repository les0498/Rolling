import AuthorImage from '@/components/paperHeader/AuthorImage';

function AuthorCount({ toUserName = '', count = 0, hiddenCount = 0 }) {
  return (
    <div>
      <span>To.{toUserName}</span>
      <ul>
        <li>
          <AuthorImage src='' alt='' />
        </li>
        <li>
          <AuthorImage src='' alt='' />
        </li>
        <li>
          <AuthorImage src='' alt='' />
        </li>
        <li>
          <span>+{hiddenCount}</span>
        </li>
        <span>{count}명이 작성했어요!</span>
      </ul>
    </div>
  );
}
export default AuthorCount;
