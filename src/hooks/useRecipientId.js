import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getRecipientById } from '@/apis/recipients';
import useAsync from '@/hooks/useAsync';

function useRecipientId() {
  const { id } = useParams();

  const [author, setAuthor] = useState(null);
  const [recentMessages, setRecentMessages] = useState([]);

  const [pending, error, fetchRecipient] = useAsync(getRecipientById);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      const recipientData = await fetchRecipient(id);

      if (recipientData) {
        setAuthor(recipientData);
        setRecentMessages(recipientData.recentMessages || []);
      }
    }
    fetchData();
  }, [id, fetchRecipient]);

  return {
    author,
    recentMessages,
    loading: pending,
    error,
  };
}

export default useRecipientId;
