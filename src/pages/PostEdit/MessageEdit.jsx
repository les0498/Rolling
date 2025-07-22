import { useParams } from 'react-router-dom';

import { getMessagesById, patchMessageById } from '@/apis/messages';
import Button from '@/components/ui/Button';
import { BUTTON_VARIANT } from '@/components/ui/constants';
import MessageForm from '@/pages/Message/MessageForm';

function MessageEdit({ editMsg, messageId, setMessages, onClose = () => {} }) {
  const { id } = useParams();

  const editHandler = async () => {
    patchMessageById(messageId);
    onClose();
    const update = await getMessagesById({ id });
    setMessages(update?.results || []);
  };

  return (
    <div>
      <MessageForm
        editMsg={editMsg}
        onSubmit={editHandler}
        submitLabel='보내기'
      />

      <Button variant={BUTTON_VARIANT.secondary} onClick={onClose}>
        취소
      </Button>
    </div>
  );
}

export default MessageEdit;
