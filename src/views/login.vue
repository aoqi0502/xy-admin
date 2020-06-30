<template>
    <div class="container">
        <div class="login-box">
            <h1>LOGIN</h1>
            <div style="display: flex;flex-direction:column">
                <input :placeholder="$t('login.name')" class="text" v-model="loginForm.name"/>
                <input :placeholder="$t('login.password')" type="password" v-model="loginForm.password" class="text"/>
                <input type="button" :value="$t('login.submit')" class="btn" @click="submitForm"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                name:'',
                password:''
            },
            rules:[]
        }
    },
    methods:{
        submitForm() {
            console.log('提交')
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped>
    .container{
        background-color: #2c3e50;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login-box{
        width: 400px;
        height: 500px;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 20px;
        padding: 20px;
    }
    .text{
        background-color: transparent;
        outline:none;
        border: none;
        border-bottom: 1px solid gray;
        color: white;
        height: 30px;
        margin: 15px 0;
    }
    .text::placeholder{
        color: white;
    }
    .btn{
        margin-top: 40px;
        height: 40px;
        cursor: pointer;
    }
</style>
