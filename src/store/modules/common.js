export default {
    state: {
        isCollapse: false,
        LANGUAGE: 'zh',
        TOKEN: ''
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
    }
}
