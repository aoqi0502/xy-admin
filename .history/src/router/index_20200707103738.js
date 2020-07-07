import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from "@/layout";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
Vue.use(VueRouter);

NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})

const menuRouter = [

]

const mainRouter = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        name: 'login',
        component: () => import ('@/views/login'),
        meta: {
            title: "登录",
        },
    }
]

const router = new VueRouter({
    routes:[
        {
            path:'*',
            name:'404',
            component: () => import('@/views/404'),
            meta: {
                title: "404",
            },
        }
    ]
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    document.title = to.meta.title ? to.meta.title : 'XY-Admin'
    next()
})

router.afterEach(() => {
    NProgress.done();
})

export default router;
