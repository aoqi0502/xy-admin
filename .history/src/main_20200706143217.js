import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import store from "./store";
import ElementUI from 'element-ui';
import i18n from '../src/language'
import echarts from 'echarts';
require('echarts-wordcloud');
import 'element-ui/lib/theme-chalk/index.css';
import './style/element.reset.scss'
import './style/index.css'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
