<template>
       <el-container style='height:100%'>
                <el-aside :width="asideWidth" style="overflow-y: auto;overflow-x: hidden">
                <div class="logo-box">
                    <img src="../assets/logo.png" class="logo-pic"/>
                    <h1>XY-Admin</h1>
                </div>
                <el-menu :collapse="isCollapse"
                         router
                         :default-active="$route.name"
                         text-color="#979797"
                         active-text-color="#fff"
                         background-color="#001529">
                    <el-menu-item index="home" route="/home">
                        <i class="iconfont icon-shouye xy-menu-icon"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="table" route="/table">
                        <i class="iconfont icon-table xy-menu-icon"></i>
                        <span slot="title">表格</span>
                    </el-menu-item>
                    <el-menu-item index="editor" route="/editor">
                        <i class="iconfont icon-bianji xy-menu-icon"></i>
                        <span slot="title">富文本编辑器</span>
                    </el-menu-item>
                    <el-menu-item index="axios" route="/axios">
                        <i class="iconfont icon-shuaxin xy-menu-icon"></i>
                        <span slot="title">axios</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header style="border-bottom: 1px solid #dcdfe6">
                    <el-row :gutter="10">
                        <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                            <div class="grid-content bg-purple">
                                <i class="iconfont icon-guanbi" @click="handleToggle"></i>
                            </div>
                        </el-col>
                        <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                            <div class="grid-content bg-purple-light">
                                <el-color-picker v-model="themeColor" style="margin-right: 20px" @change="handleChangeColor"></el-color-picker>

                                <i class="iconfont" :class="fullscreen ? 'icon-quxiaoquanping' : 'icon-quanping'" style="font-size: 20px;line-height: 60px;" @click="handleFullScreen"></i>
                                <el-dropdown @command="handleCommand" style="margin: 0 20px;">
                                  <span class="el-dropdown-link">
                                    <i class="iconfont icon-yuyanqiehuan" style="font-size: 17px;line-height: 60px;"></i>
                                    <i class="el-icon-caret-bottom el-icon--right"></i>
                                  </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item command="zh">中文</el-dropdown-item>
                                        <el-dropdown-item command="en">英文</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                                <el-dropdown style="vertical-align: middle">
                                  <div class="el-dropdown-link" style="cursor: pointer;height: 60px;display: flex;align-items: center">
                                    <img class="pic" src="http://p0.ifengimg.com/pmop/2017/0718/4B65DFB30700B94B6FCFA6EC792F7C3D7F453CEE_size1653_w365_h365.gif" alt="">
                                     <i class="el-icon-caret-bottom el-icon--right"></i>
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
                <el-main style="backgroundColor:#F5F5F5">
                    <router-view />
                </el-main>
                <el-footer style="lineHeight:60px;text-align: center;color: #9a9a9a">xy-admin</el-footer>
            </el-container>
        </el-container>
</template>

<script>
    import {isFull} from '@/util'
export default {
    data() {
        return {
            isCollapse: false,
            fullscreen: false,
            themeColor: '#409EFF'
        }
    },
    mounted() {

        window.addEventListener('resize', () => {
            if(!isFull()) {
                this.fullscreen = !this.fullscreen;
            }
        })

    },
    computed:{
        asideWidth() {
            return this.isCollapse ? '64px' : '200px'
        }
    },
    methods:{
        handleToggle() {
            this.isCollapse = !this.isCollapse
        },
        handleCommand(value) {
            window.sessionStorage.setItem('LANGUAGE', value);
            location.reload()
        },
        handleChangeColor(color) {
          console.log(color)
        },
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
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
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
