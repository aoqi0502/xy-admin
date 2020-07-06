<template>
    <div>
      222
    </div>
</template>

<script>
    import countTo from 'vue-count-to';
    export default {
        name: "404",
        components:{
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

<style scoped lang="scss">
    .not-found{
        background-color: #93b9ce;
        height: 100%;
        text-align: center;
        padding-top: 20px;
        .count-up{
            color: #fff;
            display: block;
            font-size: 40px;
        }
    }
</style>
