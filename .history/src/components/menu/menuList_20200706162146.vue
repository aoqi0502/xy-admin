<template>
    <div>
        <el-menu :collapse="isCollapse"
                 router
                 :default-active="$route.name"
                 text-color="#979797"
                 active-text-color="#fff"
                 background-color="#001529">
            <template v-for="(item) in menuList">
                <el-submenu v-if="item.child&&item.child.length>0" :index="item.name">
                    <template slot="title">
                        <i :class="item.icon" class="xy-menu-icon" :style="{marginRight: hierarchy * 10 + 'px'}"></i>
                        {{item.label}}
                    </template>
                    <menu-sun :menuList="item.child" :hierarchy="hierarchy + 1"/>
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
        props:['menuList', 'hierarchy', 'isCollapse']
    }
</script>

<style scoped>

</style>
