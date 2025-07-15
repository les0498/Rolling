import { BASE_API_URL } from '@/apis/constants';
import { customFetch } from '@/apis/customFetch';

const REACTION_TYPE = {
  increase: 'increase',
  decrease: 'decrease',
};
const getReactionsById = async ({ id = '', limit = 8, offset = 0 }) => {
  return await customFetch(
    `${BASE_API_URL}recipients/${id}/reactions/?limit=${limit}&offset=${offset}`
  );
};

const createReactionById = async ({
  id = '',
  emoji = '',
  type = REACTION_TYPE.increase,
}) => {
  return await customFetch(`${BASE_API_URL}recipients/${id}/reactions/`, {
    method: 'POST',
    body: JSON.stringify({
      emoji,
      type,
    }),
  });
};

export { REACTION_TYPE, getReactionsById, createReactionById };
