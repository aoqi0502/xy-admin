<template>
  <div>
    <div class="logo-box">
        <img src="../assets/logo.png" class="logo-pic"/>
        <transition name="el-zoom-in-center">
          <h1 v-show="!isCollapse">XY-Admin</h1>
        </transition>
    </div>
    <menu-sun :menuList="menuList" :hierarchy="0" :isCollapse="isCollapse"/>
  </div>
</template>

<script>
import { menuRouter } from '@/router'
import MenuSun from '@/components/menu/menuList'

export default {
  data() {
    return {
      menuList: menuRouter
    }
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
  components:{
    MenuSun
  }
}
</script>

<style lang="scss" scoped>
  
</style>