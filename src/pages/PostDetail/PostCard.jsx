import CardDetail from '@/pages/PostDetail/CardDetail';

function PostCard({ message, onClick }) {
  return (
    <div onClick={onClick}>
      <CardDetail message={message} variant='card' />
    </div>
  );
}
export default PostCard;
