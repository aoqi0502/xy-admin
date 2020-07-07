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
  components:{
    MenuSun
  }
}
</script>

<style lang="scss" scoped>
  
</style>