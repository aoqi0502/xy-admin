import axios from './index';

export const getUserList = () => {
    return axios({
        url: '/api/userlist',
        method: 'get'
    })
}

export const deleteUser = (id) => {
    return axios({
        url: '/api/userList/delete',
        method: 'post',
        data: {
            id
        }
    })
}

export const addUser = (data) => {
    return axios({
        url: '/api/userList/add',
        method: 'post',
        data
    })
}
