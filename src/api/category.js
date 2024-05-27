import { api, fileUpload } from '../utils/request';

export const postCategory = async (data) => {
    const res = await api({ endpoint: `/amenitiesCategory`, method: 'POST',data });
    return res;
}
export const updateCategory = async (id,data) => {
    const res = await api({ endpoint: `/amenitiesCategory/${id}`, method: 'PUT',data });
    return res;
}
export const getCategory = async () => {
    const res = await api({ endpoint: `/amenitiesCategory`, method: 'GET' });
    return res;
}
export const getCategoryById = async (id) => {
    const res = await api({ endpoint: `/amenitiesCategory/${id}`, method: 'GET' });
    return res;
}