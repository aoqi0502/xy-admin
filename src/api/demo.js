import instance from './index';

export const testLogin = (form) => {
    return instance({
        url: '/api/login',
        method: 'get',
        params: form
    })
}
