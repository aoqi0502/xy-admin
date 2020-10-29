<template>
    <div class="xy-container">
        <el-button type="primary" size="small" @click="$refs.addDialog.dialogVisible = true">新增</el-button>
        <el-button type="danger" size="small" :disabled="selection.length == 0" @click="handleClick">删除</el-button>
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    width="160"
                    label="日期">
                <template slot-scope="scope">{{ scope.row.creatDate}}</template>
            </el-table-column>
            <el-table-column
                    prop="userName"
                    width="160"
                    label="姓名">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    width="360"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    label="操作"
                    show-overflow-tooltip>
                <template slot-scope="scope">
                    <el-button type="text">
                        <i class="iconfont icon-xianshi"></i>
                        <span>预览</span>
                    </el-button>
                    <el-button type="text" @click="handleDelete(scope.row)">
                        <i class="iconfont icon-lajitong"></i>
                        <span>删除</span>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px;text-align: right">
            <el-pagination
                    background
                    :hide-on-single-page="true"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-sizes="[10, 20, 30, 50]"
                    :page-size="pageSize"
                    :total="total">
            </el-pagination>
        </div>
        <add-dialog ref="addDialog" @refresh="init()"></add-dialog>
    </div>
</template>

<script>
    import AddDialog from './dialog'
    import {getUserList, deleteUser} from '@/api/table'
    export default {
        name: "index",
        data() {
            return {
                value1:'',
                selection:[],
                tableData:[],
                pageSize:3,
                currentPage:1,
                total: 0
            }
        },
        components:{
            AddDialog
        },
        mounted() {
            this.init()
        },
        methods:{
            init() {
                getUserList(this.currentPage, this.pageSize).then(res => {
                    this.tableData = res.result.tableList;
                    this.total = res.result.total
                })
            },
            handleSelectionChange(selection) {
                this.selection = selection
            },
            handleClick() {
              // 批量删除
                var ids = []
                this.selection.forEach(value =>{
                    ids.push(value.id)
                })
                deleteUser(ids.toString()).then(res => {
                    if(res.isSuc) {
                        this.$message({
                            type: 'success',
                            message: res.msg
                        })
                        this.init();
                    }
                })
            },
            handleSizeChange(size) {
                this.pageSize = size;
                this.init()
            },
            handleCurrentChange(page) {
                this.currentPage = page;
                this.init()
            },
            handleDelete(item) {
                deleteUser(item.id).then(res => {
                    if(res.isSuc) {
                        this.$message({
                            type: 'success',
                            message: res.msg
                        })
                        this.init();
                    }
                })
            }
        }
    }
</script>

<style scoped>
.xy-container{
    background-color: white;
    height: 100%;
    padding: 10px;
    overflow: auto;
    box-sizing: border-box;
}
</style>
