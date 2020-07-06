<template>
  <div>
    <div :style="{'backgroundColor':color}" class="xy-card">
        <div>
          <p>{{title}}</p>
          <countTo :endVal="count"/>
        </div>
        <i :class="icon" style="font-size:20px"></i>
    </div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to';
  export default {
      name: "card",
      props:{
        title:{
          default: '访问人数'
        },
        count:{
          default: 500
        },
        icon:{
          default: 'iconfont icon-fangwentongji'
        },
        color:{
          default: '#73DDFF'
        },
      },
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
.xy-card{
  border-radius: 5px;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}

</style>