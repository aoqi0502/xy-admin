<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    console.log('%cVue%cXY-Admin','color:#41b883;padding:3px;background-color:#35495e;border-top-left-radius:3px;border-bottom-left-radius:3px','color:#35495e;padding:3px;background-color:#41b883;border-top-right-radius:3px;border-bottom-right-radius:3px')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
