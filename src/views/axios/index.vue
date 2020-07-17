<template>
    <div class="xy-container">
        <h2 class="title">163邮箱登陆</h2>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px">
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="loginForm.email" type="email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password" type="password" auto-complete="new-password"></el-input>
            </el-form-item>
        </el-form>
        <div style="text-align: center">
            <el-button @click="submit" type="primary"> 测试登录</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ajax",
        data() {
            return {
                loginForm:{
                    email:'',
                    password:''
                },
                rules:{
                    email:[
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { type:'email', message: '请输入正确邮箱号', trigger: 'blur' },
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ]
                }
            }
        },
        methods:{
            submit() {
                alert('暂无axios接入')
            }
        }
    }
</script>

<style scoped>
.title{
    margin-bottom: 20px;
    font-weight: 600;
    text-align: center;
}
</style>
