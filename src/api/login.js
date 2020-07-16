import axios from './index';

export const login = (username, password) => {
    return axios({
        url: '/api/login',
        method: 'post',
        data: {
            username,
            password
        }
    })
}
