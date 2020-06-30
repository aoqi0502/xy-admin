<template>
    <div>
        网络请求
        <el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="loginForm.email" type="email"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
                <el-input v-model="loginForm.password" type="password"></el-input>
            </el-form-item>
        </el-form>
        <el-button @click="submit"> 测试登录</el-button>
    </div>
</template>

<script>
    import {testLogin} from '@/api/demo'
    export default {
        name: "ajax",
        data() {
            return {
                loginForm:{
                    email:'',
                    password:''
                }
            }
        },
        methods:{
            submit() {
                testLogin(this.loginForm).then(res => {
                    console.log(res)
                    if(res.data.code === 200) {
                        this.$message({
                            message:'登录成功',
                            type:'success'
                        })
                    } else {
                        this.$message({
                            message: res.data.msg,
                            type:'error'
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
