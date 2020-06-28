import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from "../views/layout";
Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/login',
            name: 'login',
            component: () => import ('../views/login')
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
          }
    ]
})

export default router;