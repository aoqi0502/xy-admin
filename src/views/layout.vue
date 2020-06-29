<template>
       <el-container style='height:100%'>
           <transition name="fade">
                <el-aside :width="asideWidth">
                <div class="logo-box">
                    <img src="../assets/logo.png" class="logo-pic"/>
                    <h1>XY-Admin</h1>
                </div>
                <el-menu :default-openeds="['1', '3']"
                         :collapse="isCollapse"
                         text-color="#979797"
                         active-text-color="#fff"
                         background-color="#001529">
                    <el-menu-item index="0-1">
                        <i class="iconfont icon-shouye xy-menu-icon"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message" style="margin-right: 20px"></i>导航一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu" style="margin-right: 20px"></i>导航二</template>
                    <el-menu-item-group>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting" style="margin-right: 20px"></i>导航三</template>
                    <el-menu-item-group>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item index="3-3">选项3</el-menu-item>
                    <el-submenu index="3-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                </el-menu>
            </el-aside>
           </transition>
            <el-container>
                <el-header style="border-bottom: 1px solid #dcdfe6">
                    <el-row :gutter="10">
                        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <div class="grid-content bg-purple">
                                <i class="iconfont icon-guanbi" @click="handleToggle"></i>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <div class="grid-content bg-purple-light">
                                <i class="iconfont icon-shuaxin1" style="font-size: 17px;line-height: 60px;"></i>
                                <i class="iconfont icon-quanping" style="font-size: 20px;line-height: 60px;margin: 0 20px;"></i>
                                <el-dropdown style="vertical-align: middle">
                                  <div class="el-dropdown-link" style="cursor: pointer;height: 60px;display: flex;align-items: center">
                                    <img class="pic" src="http://p0.ifengimg.com/pmop/2017/0718/4B65DFB30700B94B6FCFA6EC792F7C3D7F453CEE_size1653_w365_h365.gif" alt="">
                                     <i class="el-icon-arrow-down el-icon--right"></i>
                                  </div>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>个人中心</el-dropdown-item>
                                        <el-dropdown-item>退出登录</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main style="backgroundColor:#F5F5F5;padding:20px">
                    <router-view />
                </el-main>
                <el-footer style="lineHeight:60px;text-align: center">xy-admin</el-footer>
            </el-container>
        </el-container>
</template>

<script>
export default {
    data() {
        return {
            isCollapse:false
        }
    },
    computed:{
        asideWidth() {
            return this.isCollapse ? '64px' : '200px'
        }
    },
    methods:{
        handleToggle() {
            this.isCollapse = !this.isCollapse
        }
    }
}
</script>

<style lang="scss">
.el-aside{
    background-color: #001529
}
.logo-box{
    color: white;
    font-weight: 600;
    height: 60px;
    font-size: 18px;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 0 10px;
}
.grid-content{
    line-height: 60px;
}
.el-menu-item.is-active {
    background-color: #409eff !important;
}
.el-submenu__title:hover{
    background-color: #409eff !important;
    color: white !important;
    i{
        color: white !important;
    }
}
.el-menu-item:hover{
    background-color: #409eff !important;
    color: white !important;
    i{
        color: white !important;
    }
}
.el-menu{
 border-right: none !important;
}
.bg-purple-light{
    text-align: right;
    height: 60px;
}
.pic{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.logo-pic{
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
    .isCollapse{
        width: 64px;
    }
    .notCollapse {
        width: 200px;
    }
    .xy-menu-icon{
        font-size: 18px;
        display: inline-block;
        width: 24px;
        text-align: center;
        padding-right: 20px;
    }
</style>
