import PaperCard from '@/components/post/PaperCard';
import PaperCardListStyle from '@/components/post/PaperCardList.module.scss';
import AddMessageButton from '@/components/post/AddMessageButton';
import PaperCardStyle from '@/components/post/PaperCard.module.scss';

function PaperCardList({ messages }) {
  return (
    <div className={PaperCardListStyle.background}>
      <div className={PaperCardListStyle.cardListContainer}>
        {/* +버튼 카드(항상 첫 번째) */}
        <div className={PaperCardStyle.cardBox}>
          <AddMessageButton />
        </div>
        {/* 메시지 카드들 */}
        {messages.map((msg) => (
          <PaperCard key={msg.id} message={msg} />
        ))}
      </div>
    </div>
  );
}

export default PaperCardList;
