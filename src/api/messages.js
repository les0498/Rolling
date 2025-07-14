import { BASE_API_URL } from '@/api/constants';
import { customFetch } from '@/api/customFetch';

const MESSAGE_RELATIONSHIP = {
  친구: '친구',
  지인: '지인',
  동료: '동료',
  가족: '가족',
};
const MESSAGE_FONT = {
  'Noto Sans': 'Noto Sans',
  Pretendard: 'Pretendard',
  나눔명조: '나눔명조',
  '나눔손글씨 손편지체': '나눔손글씨 손편지체',
};
const getMessagesById = async ({ id = '', limit = 8, offset = 0 }) => {
  return await customFetch(
    `${BASE_API_URL}recipients/${id}/messages/?limit=${limit}&offset=${offset}`
  );
};

const createMessageById = async ({
  id = '',
  sender = '',
  profileImageURL = '',
  relationship = MESSAGE_RELATIONSHIP.지인,
  content = '',
  font = MESSAGE_FONT['Noto Sans'],
}) => {
  return await customFetch(`${BASE_API_URL}recipients/${id}/messages/`, {
    method: 'POST',
    body: JSON.stringify({
      sender,
      profileImageURL,
      relationship,
      content,
      font,
    }),
  });
};
const deleteMessageById = async (id = '') => {
  return await customFetch(`${BASE_API_URL}messages/${id}/`, {
    method: 'DELETE',
  });
};

export {
  MESSAGE_RELATIONSHIP,
  MESSAGE_FONT,
  getMessagesById,
  createMessageById,
  deleteMessageById,
};
