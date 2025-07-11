import PaperCardStyle from '@/components/post/PaperCard.module.scss';

function PaperCard({ message }) {
  return (
    <div className={PaperCardStyle.cardBox}>
      <p>From. {message.from}</p>
      <p>{message.relationShip}</p>
      <p>{message.content}</p>
      <p>{message.createdAt}</p>
    </div>
  );
}

export default PaperCard;
