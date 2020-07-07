<template>
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
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  
</style>