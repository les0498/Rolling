import { PUBLIC_API_URL } from '@/apis/constants';
import { customFetch } from '@/apis/customFetch';

export const getBackgroundImages = async () => {
  return await customFetch(`${PUBLIC_API_URL}background-images/`);
};
export const getProfileImages = async () => {
  return await customFetch(`${PUBLIC_API_URL}profile-images/`);
};
