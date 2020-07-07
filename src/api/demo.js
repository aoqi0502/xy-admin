import axios from './index';

export const testLogin = (email, password) => {
    return axios({
        url: '/api/login',
        method: 'get',
        params: {
          email,
          password
        }
    })
}
