<template>
  <div>
    <div :style="{'backgroundColor':color}" class="xy-card">
        <div>
          <p>{{title}}</p>
          <countTo :endVal="count"/>
        </div>
        <i :class="icon"></i>
    </div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to';
  export default {
      name: "card",
      props:{
        title:{
          default: '访问数'
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
  margin-bottom: 20px;
  cursor: pointer;
  height: 40px;
  transition: all 0.3s ease;
}
.iconfont{
  font-size: 20px;
}
.xy-card:hover{
  box-shadow: 5px -5px 5px gray;
  font-size: 19px;
  .iconfont{
    font-size: 26px;
  }
}

</style>