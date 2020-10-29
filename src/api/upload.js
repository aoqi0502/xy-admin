import axios from './index';

export const upload = (formData) => {
    return axios({
        url: '/api/upload',
        method: 'post',
        headers: {
            "Content-Type": "multipart/form-data"
        },
        data:formData,
        onUploadProgress: progressEvent => {
            console.log(progressEvent)
            let complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
            // self.uploadMessage = '上传 ' + complete
            console.log(complete, '-------')
        }
    })
}
