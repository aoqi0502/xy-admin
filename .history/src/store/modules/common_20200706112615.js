export default {
    state: {
        isCollapse: false,
        
    },
    mutations:{
        setCollapse (state, isCollapse) {
            state.isCollapse = isCollapse
        }
    }
}
