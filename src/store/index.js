import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import demo from "./modules/demo";
import common from "./modules/common";
import getters from "./getter";

const store = new Vuex.Store({
    modules:{
        demo,
        common
    },
    getters,
    plugins:[createPersistedState({ storage: window.sessionStorage })]
})
export default store
