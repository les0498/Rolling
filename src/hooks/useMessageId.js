import { useEffect, useState } from 'react';

import { getMessagesById } from '@/apis/messages';
import useAsync from '@/hooks/useAsync';

function useMessageId(id) {
  const [recentMessages, setRecentMessages] = useState(null);
  const [pending, error, fetchMessage] = useAsync(getMessagesById);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      const MessageData = await fetchMessage({ id });

      if (MessageData) {
        setRecentMessages(MessageData);
      }
    }
    fetchData();
  }, [id, fetchMessage]);

  return {
    recentMessages,
    loading: pending,
    error,
  };
}

export default useMessageId;
