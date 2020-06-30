import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from "../views/layout";
Vue.use(VueRouter);

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
    console.log(to.meta, from.meta)
    document.title = to.meta.title ? to.meta.title : 'XY-Admin'
    next()
})


export default router;
