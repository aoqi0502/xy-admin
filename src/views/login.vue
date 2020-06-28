<template>
    <div>
        <div class="login-box">
            <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="login-form">
            <el-form-item label="账号" prop="name">
                <el-input v-model="loginForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="delivery">
                <el-input v-model="loginForm.passworld" type='passworld'></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">登  录</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                name:'',
                passworld:''
            },
            rules:[]        
        }
    },
    methods:{
        submitForm() {
            console.log('提交')
            this.$router.push('/home')
        },
        resetForm() {
            console.log('重置')
        }
    }
}
</script>

<style scoped>
.login-box{
    width: 500px;
}
</style>