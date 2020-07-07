import Vue from 'vue'
import 
import VueI18n from 'vue-i18n'
import zh from './zh'
import en from './en'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'
Vue.use(VueI18n);

const language = {
    en: Object.assign(en, enLocale),
    zh: Object.assign(zh, zhLocale)
}

const i18n = new VueI18n({
    locale: window.sessionStorage.getItem('LANGUAGE') ? window.sessionStorage.getItem('LANGUAGE') : 'zh',
    messages: language
})

ElementLocale.i18n((key, value) => i18n.t(key, value))
export default i18n;
