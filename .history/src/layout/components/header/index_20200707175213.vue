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
            
            <el-dropdown style="vertical-align: middle" @command="handLeUser">
              <div class="el-dropdown-link" style="cursor: pointer;height: 60px;display: flex;align-items: center">
                <img class="pic" src="http://p0.ifengimg.com/pmop/2017/0718/4B65DFB30700B94B6FCFA6EC792F7C3D7F453CEE_size1653_w365_h365.gif" alt="">
                  <i class="el-icon-caret-bottom el-icon--right"></i>
              </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="user">{{$t('avatar.profile')}}</el-dropdown-item>
                    <el-dropdown-item command="layout">{{$t('avatar.logout')}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  
</style>