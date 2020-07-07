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

export const menuRouter = [
    {
        path: "/home",
        component: Layout,
        children: [
          {
            path: "/home",
            name: "home",
            component: () => import("@/views/home"),
            meta: {
              title: "home",
              icon: 'iconfont icon-shouye'
            },
          },
        ],
      },
    {
        path: "/table",
        component: Layout,
        children: [
            {
                path: "/table",
                name: "table",
                component: () => import("@/views/table/index.vue"),
                meta: {
                    title: "表格",
                    icon: "iconfont icon-table"
                },
            },
        ],
    },
    {
        path: "/editor",
        component: Layout,
        children: [
            {
                path: "/editor",
                name: "editor",
                component: () => import("@/views/editor/index.vue"),
                meta: {
                    title: "富文本编辑器",
                    icon: 'iconfont icon-bianji'
                },
            },
        ],
    },
    {
        path: "/axios",
        component: Layout,
        children: [
            {
                path: "/axios",
                name: "axios",
                component: () => import("@/views/axios/index.vue"),
                meta: {
                    title: "axios",
                    icon: 'iconfont icon-shuaxin'
                },
            },
        ],
    },
    {
        path:'/calendar',
        component: Layout,
        children: [
            {
                path: "/calendar",
                name: "calendar",
                component: () => import("@/views/calendar/index.vue"),
                meta: {
                    title: "日历",
                    icon: 'iconfont icon-riqi'
                },
            },
        ],
    },
    {
        path:'/vuex',
        component: Layout,
        children: [
            {
                path: "/vuex",
                name: "vuex",
                component: () => import("@/views/vuex/index.vue"),
                meta: {
                    title: "vuex",
                    icon: 'iconfont icon-huancun'
                },
            },
        ],
    },
    {
        path:'/menu',
        component: Layout,
        alwaysShow: true,
        children: [
            {
                path: "/menu1",
                name: "menu1",
                component: () => import("@/views/menu/menu1.vue"),
                meta: {
                    title: "menu1",
                    icon: 'iconfont icon-caidan'
                },
            },
        ],
    }
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
        ...menuRouter,
        ...mainRouter,
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
