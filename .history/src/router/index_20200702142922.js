import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from "../views/layout";
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


const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            path:'/login',
            name: 'login',
            component: () => import ('../views/login'),
            meta: {
                title: "登录",
            },
        },
        {
            path: "/home",
            component: Layout,
            hidden: true,
            children: [
              {
                path: "/home",
                name: "home",
                component: () => import("@/views/home"),
                meta: {
                  title: "首页",
                },
              },
            ],
          },
        {
            path: "/table",
            component: Layout,
            hidden: true,
            children: [
                {
                    path: "/table",
                    name: "table",
                    component: () => import("@/views/table"),
                    meta: {
                        title: "表格",
                    },
                },
            ],
        },
        {
            path: "/editor",
            component: Layout,
            hidden: true,
            children: [
                {
                    path: "/editor",
                    name: "editor",
                    component: () => import("@/views/editor"),
                    meta: {
                        title: "富文本编辑器",
                    },
                },
            ],
        },
        {
            path: "/axios",
            component: Layout,
            hidden: true,
            children: [
                {
                    path: "/axios",
                    name: "axios",
                    component: () => import("@/views/axios"),
                    meta: {
                        title: "axios",
                    },
                },
            ],
        },
        {
            path:'/calendar',
            component: Layout,
            hidden: true,
            children: [
                {
                    path: "/calendar",
                    name: "calendar",
                    component: () => import("@/views/calendar"),
                    meta: {
                        title: "日历",
                    },
                },
            ],
        },
        {
            path:'/vuex',
            component: Layout,
            hidden: true,
            children: [
                {
                    path: "/vuex",
                    name: "vuex",
                    component: () => import("@/views/vuex"),
                    meta: {
                        title: "vuex",
                    },
                },
            ],
        },
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
