import { useEffect, useState } from 'react';

import { getRecipientById } from '@/apis/recipients';
import useAsync from '@/hooks/useAsync';

function useRecipientId(id) {
  const [author, setAuthor] = useState(null);
  const [topMessage, setTopMessage] = useState([]);

  const [pending, error, fetchRecipient] = useAsync(getRecipientById);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      const recipientData = await fetchRecipient(id);

      if (recipientData) {
        setAuthor(recipientData);
        setTopMessage(recipientData.recentMessages || []);
      }
    }
    fetchData();
  }, [id, fetchRecipient]);

  return {
    author,
    topMessage,
    loading: pending,
    error,
  };
}

export default useRecipientId;
