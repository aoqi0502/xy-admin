<template>
    <div class="xy-container">

        <
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
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
                    prop="name"
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
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                value1:'',
                tableData:[{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        methods:{
            handleSelectionChange() {

            },
            handleDelete(item) {
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
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
