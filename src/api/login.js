import { api, fileUpload } from '../utils/request';

export const login = async (data) => {
  const res = await api({ endpoint: `/admin/login`, method: 'POST', data });
  return res;
};
export const register = async (data) => {
  const res = await api({ endpoint: `/admin/register`, method: 'POST', data });
  return res;
};