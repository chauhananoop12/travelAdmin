import { api, fileUpload } from '../utils/request';

export const postPackages = async (data) => {
    const res = await api({ endpoint: `/package`, method: 'POST',data });
    return res;
}
export const updatePackages = async (id,data) => {
    const res = await api({ endpoint: `/package/${id}`, method: 'PUT',data });
    return res;
}
export const getPackages = async () => {
    const res = await api({ endpoint: `/package`, method: 'GET' });
    return res;
}
export const getPackagesById = async (id) => {
    const res = await api({ endpoint: `/package/${id}`, method: 'GET' });
    return res;
}