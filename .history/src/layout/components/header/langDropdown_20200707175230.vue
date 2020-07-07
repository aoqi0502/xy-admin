<template>
  <el-dropdown @command="handleCommand" style="margin: 0 20px;" class="hidden-xs">
              <span class="el-dropdown-link">
                <i class="iconfont icon-yuyanqiehuan" style="font-size: 17px;line-height: 60px;"></i>
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="zh" :disabled="language == 'zh'">{{$t('language.chinese')}}</el-dropdown-item>
                    <el-dropdown-item command="en" :disabled="language == 'en'">{{$t('language.english')}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  
</style>