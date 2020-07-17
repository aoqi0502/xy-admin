<template>
    <el-dialog
            title="新增"
            :visible.sync="dialogVisible"
            width="350px"
            center
            :before-close="handleClose">
        <el-form :model="form" :rules="rules" ref="form" label-width="50px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="userName">
                <el-input v-model="form.userName"  style="width: 220px"></el-input>
            </el-form-item>
            <el-form-item label="日期" prop="createDate">
                <el-date-picker
                        v-model="form.creatDate"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="地址" prop="address">
                <el-input v-model="form.address" style="width: 220px"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
          </span>
    </el-dialog>
</template>

<script>
    import {addUser} from '@/api/table';
    import {resultAlert} from '@/util'
    export default {
        name: "index",
        data() {
            return {
                dialogVisible: false,
                form:{
                    userName: '',
                    creatDate:'',
                    address: ''
                },
                rules:{
                    userName:[
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            handleClose() {
                this.dialogVisible = false;
                this.$refs.form.resetFields();
            },
            submit() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        addUser(this.form).then(res => {
                            resultAlert(res)
                            this.dialogVisible = false;
                            this.$emit('refresh')
                        })
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
