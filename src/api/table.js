import axios from './index';

export const getUserList = (currentPage, pageSize) => {
    return axios({
        url: '/api/userlist',
        method: 'get',
        params:{
            currentPage,
            pageSize
        }
    })
}

export const deleteUser = (ids) => {
    return axios({
        url: '/api/userList/delete',
        method: 'post',
        data: {
            ids
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
