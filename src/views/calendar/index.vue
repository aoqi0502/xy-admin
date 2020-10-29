<template>
    <div class="xy-container">
        <el-calendar v-model="time">
            <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
            <template
                    slot="dateCell"
                    slot-scope="{date, data}">
                <div @contextmenu.prevent="showMenu" class="calendar-item">
                    <p>
                        {{ data.day.split('-').slice(1).join('-') }}
                    </p>
                    <div v-for="(item, index) in calendarArr" :key="index">
                        <div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1">
                            <div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
                                <el-tooltip class="item" effect="dark" :content="item.things" placement="right">
                                    <div class="is-selected">{{item.things}}</div>
                                </el-tooltip>
                            </div>
                            <div v-else></div>
                        </div>
                        <div v-else></div>

                    </div>
                </div>
            </template>
        </el-calendar>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                time: '',
                calendarArr:[
                    { months: ['09', '11'],days: ['15'],things: '看电影' },
                    { months: ['10', '11'], days: ['02'],things: '去公园野炊' },
                    { months: ['11'], days: ['02'],things: '看星星' },
                    { months: ['11'], days: ['02'],things: '看月亮' }
                ], // 当月数据信息
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear()
            }
        },
        watch:{
            time(value) {
                this.month = value.getMonth() + 1;
                this.year = value.getFullYear() + 1
            }
        },
        methods:{
            showMenu(e) {
                var value =''
                if(e.target.tagName === 'P') {
                    value = e.target.innerText
                } else {
                    value = e.target.getElementsByTagName('P')[0].innerText
                }
                this.$prompt(`请输入${value}要添加的事宜`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ thing }) => {
                    this.$message({
                        type: 'success',
                        message: '你代办的事情是: ' + thing
                    });
                })
            }
        }
    }
</script>

<style>
    .is-selected {
        color: #1989FA;
    }
    .calendar-item{
        width: 100%;
        height: 100%;
        padding: 8px;
    }
    .el-calendar-table .el-calendar-day{
        padding: 0 !important;
    }
</style>
