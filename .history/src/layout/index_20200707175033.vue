<template>
       <el-container style='height:100%'>
                <el-aside :width="asideWidth" class="xy-aside">
                    <asider/>
                </el-aside>
            <el-container>
                <el-header style="border-bottom: 1px solid #dcdfe6">
                    
                </el-header>
                <el-main style="backgroundColor:#F5F5F5; overflow:auto" class="wraper">
                    <router-view />
                    <el-backtop target=".wraper" :bottom="70"></el-backtop>
                </el-main>
                <el-footer style="lineHeight:60px;text-align: center;color: #9a9a9a">xy-admin</el-footer>
            </el-container>
        </el-container>
</template>

<script>
import {asider} from './components/'
    import {isFull, Message} from '@/util';
export default {
    data() {
        return {
            fullscreen: false,
        }
    },
    components:{
        asider
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
        },
        language() {
            return this.$store.state.common.LANGUAGE
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
        handLeUser(type) {
            if(type === 'layout') {
                this.$router.push('/')
            } else {
                this.$router.push('/user')
            }
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
    

@media screen and (max-width: 470px) {
    .hidden-xs{
        display: none;
    }
}

</style>
