<template>
    <div class="container">
    11111222
        <div class="login-box">
            <h1>XY-ADMIN</h1>
            <form action="" @submit.prevent="login">
                <div class="input-item">
                    <input type="text" required="11111" autofocus ref="userNameIput">
                    <label for="">Username</label>
                </div>
                <div class="input-item">
                    <input type="password" required="" ref="passwordIput">
                    <label for="">Password</label>
                </div>
                <input type="submit" value="login"/>
            </form>
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
    mounted() {
    },
    methods:{
        login() {
            console.log('提交')
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped lang="scss">
    .container{
        background:url('../assets/bg.jpg');
        background-size:100% 100%;  
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login-box{
        width: 400px;
        height: 300px;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 20px;
        padding: 20px;
        background-color: rgba(0,0,0,.5);
        h1{
            text-align: center;
        }
        .input-item {
            margin: 30px 0;
            position: relative;
            label {
                position: absolute;
                top: 10px;
                left: 0;
                transition: .5s;
            }
            input:-webkit-autofill ~ label {
                top: -10px;
                left: 0;
                color: #03a9f4;
                font-size: 12px;
            }
            input {
                border: none;
                border-bottom: 1px solid #fff;
                outline: none;
                background-color: transparent;
                color: white;
                height: 30px;
                line-height: 30px;
                display: block;
                width: 100%;
            }
            input:focus ~ label{
                top: -10px;
                left: 0;
                color: #03a9f4;
                font-size: 12px;
            }
             input:valid ~ label{
                top: -10px;
                left: 0;
                color: #03a9f4;
                font-size: 12px;
            }
        }
        input[type="submit"] {
            background-color: transparent;
            border:none;
            outline: none;
            color: #fff;
            background-color: #03a9f4;
            padding: 10px;
            width: 50%;
            border-radius: 5px;
            display: block;
            margin: 20px auto;
            cursor: pointer;
        }
    }
    
</style>
