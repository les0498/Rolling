import { BASE_API_URL } from '@/api/constants';
import { customFetch } from '@/api/customFetch';

const BACKGROUND_COLOR = {
  beige: 'beige',
  purple: 'purple',
  blue: 'blue',
  green: 'green',
};

const getRecipients = async ({ limit = 8, offset = 0, sort = '' }) => {
  return await customFetch(
    `${BASE_API_URL}recipients/?limit=${limit}&offset=${offset}&sort=${sort}`
  );
};
const getRecipientById = async (id) => {
  return await customFetch(`${BASE_API_URL}recipients/${id}/`);
};
const createRecipient = async ({ name, backgroundColor }) => {
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
  BACKGROUND_COLOR,
  getRecipients,
  getRecipientById,
  createRecipient,
  deleteRecipientById,
};
