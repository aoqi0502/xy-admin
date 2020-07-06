export default {
    state: {
        isCollapse: false,
        LANGUAGE: 'zh'
    },
    mutations:{
        setCollapse (state, isCollapse) {
            state.isCollapse = isCollapse
        },
        setLanguage (state, isCollapse) {
            state.LANGUAGE = lang
        }
    }
}
