import { api, fileUpload } from '../utils/request';

export const getMyProfile = async () => {
    const res = await api({ endpoint: `/admin/myProfile`, method: 'GET' });
    return res;
}