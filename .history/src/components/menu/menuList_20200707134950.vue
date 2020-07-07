<template>
    <div>
        <el-menu :collapse="isCollapse"
                 router
                 :default-active="$route.name"
                 text-color="#979797"
                 active-text-color="#fff"
                 background-color="#001529">
            <template v-for="(item) in menuList">
                <el-submenu v-if="item.alwaysShow" :index="item.name">
                    <template slot="title">
                        <i :class="item.meta.icon" class="xy-menu-icon" :style="{marginRight:hierarchy * 10 + 'px'}"></i>
                        <span>{{item.meta.title}}</span>
                    </template>
                    <menu-sun :menuList="item.children" :hierarchy="hierarchy + 1"/>
                </el-submenu>

                <el-menu-item v-else :index="item.name" :route="item.path">
                    <i :class="item.icon" class="xy-menu-icon" :style="{marginRight: hierarchy * 10 + 'px'}"></i>
                    <span slot="title">{{item.label}}</span>
                </el-menu-item>



            </template>
        </el-menu>
    </div>
</template>

<script>
    import MenuSun from '@/components/menu/menuList'
    export default {
        name: "MenuSun",
        components: {
            MenuSun
        },
        props:['menuList', 'hierarchy', 'isCollapse'],
        mounted() {
            console.log(this.menuList, 'xx')
        },
        methods: {
            resolvePath(item) {

            },
            resolveIcon() {

            },
            resolveName() {

            }
        }
    }
</script>

<style scoped>

</style>
