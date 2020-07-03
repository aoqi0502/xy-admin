export const menuList = [
    {
        label: '首页',
        path: '/home',
        icon: 'iconfont icon-shouye',
        name: 'home'
    },
    {
        label: '表格',
        path: '/table',
        icon: 'iconfont icon-table',
        name: 'table'
    },
    {
        label: '富文本编辑器',
        path: '/editor',
        icon: 'iconfont icon-bianji',
        name: 'editor'
    },
    {
        label: 'axios',
        path: '/axios',
        icon: 'iconfont icon-shuaxin',
        name: 'axios'
    },
    {
        label: '日历',
        path: '/calendar',
        icon: 'iconfont icon-riqi',
        name: 'calendar'
    },
    {
        label: 'vuex',
        path: '/vuex',
        icon: 'iconfont icon-huancun',
        name: 'vuex'
    },
    {
        label: '多层级菜单',
        icon: 'iconfont icon-caidan',
        name: 'menu',
        child:[
            {
                label: '菜单1',
                name: 'menu1',
                path: '/menu1'
            }
        ]
    }
]
