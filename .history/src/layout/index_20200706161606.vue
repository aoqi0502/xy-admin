<template>
       <el-container style='height:100%'>
                <el-aside :width="asideWidth" class="xy-aside">
                <div class="logo-box">
                    <img src="../assets/logo.png" class="logo-pic"/>
                    <transition name="el-zoom-in-center">
                      <h1 v-show="!isCollapse">XY-Admin</h1>
                    </transition>
                </div>
                    <MenuSun :menuList="menuList" :hierarchy="0" :isCollapse="isCollapse"/>
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
                                <i class="iconfont hidden-xs" :class="fullscreen ? 'icon-quxiaoquanping' : 'icon-quanping'" style="font-size: 20px;line-height: 60px;" @click="handleFullScreen"></i>
                                <i class="iconfont icon-tongzhihuotixing hidden-xs" style="margin-left: 20px;font-size: 20px" @click="handleMessage()"></i>
                                <el-dropdown @command="handleCommand" style="margin: 0 20px;" class="hidden-xs">
                                  <span class="el-dropdown-link">
                                    <i class="iconfont icon-yuyanqiehuan" style="font-size: 17px;line-height: 60px;"></i>
                                    <i class="el-icon-caret-bottom el-icon--right"></i>
                                  </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item command="zh">{{$t('language.chinese')}}</el-dropdown-item>
                                        <el-dropdown-item command="en">{{$t('language.english')}}</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                                <el-dropdown style="vertical-align: middle" @command="handLeUser">
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
                    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
                </el-main>
                <el-footer style="lineHeight:60px;text-align: center;color: #9a9a9a">xy-admin</el-footer>
            </el-container>
        </el-container>
</template>

<script>
    import MenuSun from '@/components/menu/menuList'
    import {isFull, Message} from '@/util';
    import {menuList} from "../config/menu";
export default {
    data() {
        return {
            fullscreen: false,
            menuList: menuList
        }
    },
    components:{
        MenuSun
    },
    mounted() {
        window.addEventListener('resize', () => {
            if(!isFull()) {
                this.fullscreen = !this.fullscreen;
            }

            //  获取浏览器宽度
            let width = document.body.clientWidth;
            if(width < 470) {
                this.$store.commit('setCollapse', true)
            }
        })

    },
    computed:{
        asideWidth() {
            return this.isCollapse ? '64px' : '200px'
        },
        isCollapse() {
            return this.$store.state.common.isCollapse
        }
    },
    methods:{
        handleToggle() {
            this.$store.commit('setCollapse', !this.isCollapse)
        },
        handleCommand(value) {
            this.$store.commit('setLanguage', value);
            location.reload()
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
        },
        handleMessage() {
            Message();
        },
        handLeUser() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.el-aside{
    background-color: #001529
}
.xy-aside{
    overflow-y: auto !important;
    overflow-x: hidden !important;
    transition: all 0.6s ease;
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
    }

@media screen and (max-width: 470px) {
    .hidden-xs{
        display: none;
    }
}

</style>
