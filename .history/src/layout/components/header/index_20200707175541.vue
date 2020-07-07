<template>
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
            
            
        </div>
    </el-col>
  </el-row>
</template>

<script>
import {langDropdown} from './langDropdown'
import {profileDropdown} from './profileDropdown'

export default {
  data() {
    return{

    }
  },
  components:{
langDropdown,

  }
  
}
</script>

<style lang="scss" scoped>
  
</style>