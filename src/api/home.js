import axios from './index';

export const getDashboard = () => {
    return axios({
        url: '/api/dashboard',
        method: 'get'
    })
}
