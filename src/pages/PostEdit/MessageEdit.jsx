import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  getMessagesById,
  getOneMsgById,
  patchMessageById,
} from '@/apis/messages';
import useAsync from '@/hooks/useAsync';
import MessageForm from '@/pages/Message/MessageForm';

function MessageEdit({ messageId, setMessages, onClose = () => {} }) {
  const { id } = useParams();
  const [, , fetchMsg] = useAsync(getOneMsgById);

  const [message, setMessage] = useState(null);
  useEffect(() => {
    if (!messageId) return;

    const fetchData = async () => {
      const messageData = await getOneMsgById(messageId);

      if (messageData) {
        setMessage(messageData);
      }
    };

    fetchData();
  }, [messageId, fetchMsg]);

  const {
    sender = '',
    profileImageURL = '',
    relationship = '',
    content = '',
    font = 'Noto Sans',
  } = message || {};

  const editHandler = async ({
    from,
    imageFile,
    relationship,
    content,
    font,
  }) => {
    await patchMessageById({
      id: messageId,
      sender: from,
      profileImageURL: imageFile,
      relationship,
      content,
      font,
    });
    onClose();
    const update = await getMessagesById({ id });
    setMessages(update?.results || []);
  };

  return (
    <div>
      {message && (
        <MessageForm
          key={messageId}
          sender={sender}
          profileImageURL={profileImageURL}
          relationship={relationship}
          content={content}
          font={font}
          onSubmit={editHandler}
          onClose={onClose}
          submitLabel='보내기'
          backLabel='취소'
        />
      )}
    </div>
  );
}

export default MessageEdit;
