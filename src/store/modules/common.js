export default {
    state: {
        isCollapse: false,
        LANGUAGE: 'zh',
        TOKEN: '',
        fileMd5: ''
    },
    mutations:{
        setCollapse (state, isCollapse) {
            state.isCollapse = isCollapse
        },
        setLanguage (state, language) {
            state.LANGUAGE = language
        },
        setToken (state, token) {
            state.TOKEN = token
        },
        setMd5 (state, md5) {
            state.fileMd5 = md5
        }
    }
}
