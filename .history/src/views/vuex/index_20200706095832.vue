<template>
    <div class="xy-container">
        <h2>vuex</h2>
        <p>count: {{number}}</p>
        <el-input-number v-model="count" @change="handleChange" :min="1" :max="10"></el-input-number>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "vuex",
        data() {
            return {
                count: this.$store.state.demo.count
            }
        },
        computed:{
          ...mapState({
              number: state => state.demo.count
          })
        },
        methods:{
            handleChange(value) {
                this.$store.commit('setCount', value)
                console.log(this.$store.state.demo.count)
            }
        }
    }
</script>

<style scoped>

</style>
