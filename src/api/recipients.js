import { BASE_API_URL } from '@/api/constants';
import { customFetch } from '@/api/customFetch';

//대상 (Recipient): 게시판에 등록하는 롤링 페이퍼 대상 데이터를 저장합니다.

const DEFAULT_RECIPIENT = {
  id: 0,
  name: '',
  backgroundColor: '',
  backgroundImageURL: null,
  createdAt: '',
  messageCount: 0,
  recentMessages: [],
};
const BACKGROUND_COLOR = {
  beige: 'beige',
  purple: 'purple',
  blue: 'blue',
  green: 'green',
};

const getRecipients = async (limit, offset, sort) => {
  return await customFetch(
    `${BASE_API_URL}recipients/?limit=${limit}&offset=${offset}&sort=${sort}/`
  );
};
const getRecipientById = async (id) => {
  return await customFetch(`${BASE_API_URL}recipients/${id}/`);
};
const createRecipient = async (name, backgroundColor) => {
  return await customFetch(`${BASE_API_URL}recipients/`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      backgroundColor,
    }),
  });
};
const deleteRecipientById = async (id) => {
  return await customFetch(`${BASE_API_URL}recipients/${id}/`, {
    method: 'DELETE',
  });
};

export {
  DEFAULT_RECIPIENT,
  BACKGROUND_COLOR,
  getRecipients,
  getRecipientById,
  createRecipient,
  deleteRecipientById,
};
