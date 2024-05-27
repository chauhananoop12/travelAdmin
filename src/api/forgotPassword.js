import { api, fileUpload } from '../utils/request';

export const forgotPassword = async (data) => {
    const resp = await api({
        endpoint: `/admin/forgotPassword`, method: 'POST', data
    })
    return resp
}

export const changePassword = async (data) => {
    const resp = await api({
        endpoint: `/admin/changePassword`, method: 'PUT', data
    })
    return resp
}

export const generateOtp = async (data) => {
    const resp = await api({
        endpoint: `/otp/generateOtp`, method: 'POST', data
    })
}
