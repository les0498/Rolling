import PaperCardList from '@/components/post/PaperCardList';
import { postMockData } from '@/pages/PostDetail/mock';

function PaperMessagesPage() {
  return (
    <main>
      {/* <PaperHeader /> */}
      <PaperCardList messages={postMockData.messages} />
    </main>
  );
}

export default PaperMessagesPage;
