import { api, fileUpload } from '../utils/request';

export const busBooking = async () => {
    const res = await api({ endpoint: `/busBooking`, method: 'GET' });
    return res;
}
export const flightBooking = async () => {
    const res = await api({ endpoint: `/flightBooking`, method: 'GET' });
    return res;
}
export const cabBooking = async () => {
    const res = await api({ endpoint: `/cabBooking`, method: 'GET' });
    return res;
}
export const cruiseBooking = async () => {
    const res = await api({ endpoint: `/cruiseBooking`, method: 'GET' });
    return res;
}
export const hotelBooking = async () => {
    const res = await api({ endpoint: `/hotelBooking`, method: 'GET' });
    return res;
}
export const packageBooking = async () => {
    const res = await api({ endpoint: `/packageBooking`, method: 'GET' });
    return res;
}
export const trainBooking = async () => {
    const res = await api({ endpoint: `/trainBooking`, method: 'GET' });
    return res;
}
export const visaBooking = async () => {
    const res = await api({ endpoint: `/visaBooking`, method: 'GET' });
    return res;
}