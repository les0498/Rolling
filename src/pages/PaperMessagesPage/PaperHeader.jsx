import AuthorCount from '@/components/paperHeader/AuthorCount';
import EmojiBar from '@/components/paperHeader/EmojiBar';
import EmojiDropdown from '@/components/paperHeader/EmojiDropdown';
import ShareBar from '@/components/paperHeader/ShareBar';

function PaperHeader() {
  return (
    <div>
      <AuthorCount />
      <EmojiBar />
      <EmojiDropdown />
      <ShareBar />
    </div>
  );
}

export default PaperHeader;
