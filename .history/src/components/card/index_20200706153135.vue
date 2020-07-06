<template>
  <div>
    <div style="background:blue">
        <p>访问人数</p>
        <span>500</span>
        <i class="iconfont icon-fangwentongji"></i>
    </div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to';
  export default {
      name: "card",
      props:['title', 'count', 'icon', '']
      components: {
          countTo
      },
      data() {
          return {
              endVal: 404,
              startVal: 0
          }
      }
  }
</script>

<style lang="scss" scoped>

</style>