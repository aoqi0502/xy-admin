<template>
    <div style="height:3000px">
        <el-row :gutter="10">
            <el-col :xs="24" :sm="8" :md="6" :lg="6" :xl="4" v-for="(item, index) in cardList" :key="index">
                <card :title="$t('card.' + item.type)" :count="item.count" :icon="item.icon" :color="item.color"/>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6"><div class="home-col">
                <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix">
                        <span class="card-title">{{$t('card.wordCloud')}}</span>
                    </div>
                    <div id="wordCloudEcharts" style="width:100%;height: 260px"></div>
                </el-card>
            </div></el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6"><div class="home-col">
                <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix">
                        <span class="card-title">{{$t('card.funnel')}}</span>
                    </div>
                    <div id="funnelEcharts" style="width:100%;height: 260px"></div>
                </el-card>
            </div></el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6"><div class="home-col">
                <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix">
                        <span class="card-title">{{$t('card.pie')}}</span>
                    </div>
                    <div id="pieEcharts" style="width:100%;height: 260px"></div>
                </el-card>
            </div></el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6"><div class="home-col">
                <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix">
                        <span class="card-title">{{$t('card.line')}}</span>
                    </div>
                    <div id="cateEcharts" style="width:100%;height: 260px"></div>
                </el-card>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
require('echarts-wordcloud');
import card from '@/components/card';
import {getDashboard} from '@/api/home'
export default {
    data() {
        return {
            cardList: [],
            wordCloudData:[],
            funnelData:[],
            pieData:[],
            lineData:[],
            lineTitleData:[],
            wordCloudOption: {
                backgroundColor: '#fff',
                tooltip: {
                    show: true
                },
                series: [{
                    name: '热点分析',//数据提示窗标题
                    type: 'wordCloud',
                    sizeRange: [6, 66],//画布范围，如果设置太大会出现少词（溢出屏幕）
                    rotationRange: [-45, 90],//数据翻转范围
                    //shape: 'circle',
                    textPadding: 0,
                    autoSize: {
                        enable: true,
                        minSize: 6
                    },
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: this.wordCloudData//name和value建议用小写，大写有时会出现兼容问题
                }]
            },
            funnelOption: {
                backgroundColor: "#ffffff",
                color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C",],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}%"
                },
                calculable: true,
                series: [
                    {
                        name: '漏斗图',
                        type: 'funnel',
                        left: '10%',
                        top: 60,
                        bottom: 60,
                        width: '80%',

                        min: 0,
                        max: 100,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'descending',
                        gap: 2,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                            },
                            emphasis: {
                                textStyle: {
                                    fontSize: 20
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                length: 10,
                                lineStyle: {
                                    width: 1,
                                    type: 'solid'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 1
                            }
                        },
                        data: this.funnelData
                    }
                ]
            },
            pieOption: {
                backgroundColor: '#fff',
                tooltip: {
                    trigger: 'item',
                    borderColor: 'rgba(255,255,255,.3)',
                    backgroundColor: 'rgba(13,5,30,.6)',
                    borderWidth: 1,
                    padding: 5,
                    formatter: function (parms) {
                        var str = parms.marker + "" + parms.data.name + "</br>" +
                            "数量：" + parms.data.value + "</br>" +
                            "占比：" + parms.percent + "%";
                        return str;
                    }
                },
                series: [{
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: ['25%', '45%'],
                    clockwise: true,
                    avoidLabelOverlap: true,
                    hoverOffset: 15,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                return ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF'][params.dataIndex]
                            }
                        }
                    },
                    data: this.pieData
                }]
            },
            cateOption:  {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:this.lineTitleData
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一','周二','周三','周四','周五','周六','周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: this.lineData
            },
            funnelEcharts:''
        }
    },
    components:{
        card
    },
    mounted() {
        this.init();
        window.addEventListener('resize', () => {
            this.wordCloudEcharts.resize();
            this.funnelEcharts.resize();
            this.pieEcharts.resize();
            this.cateEcharts.resize();
        })
    },
    methods:{
        initEcharts() {
            // this.wordCloudEcharts = this.$echarts.init(document.getElementById('wordCloudEcharts'));
            // this.wordCloudEcharts.setOption(this.wordCloudOption);

            this.funnelEcharts = this.$echarts.init(document.getElementById('funnelEcharts'));
            console.log(this.funnelOption, '--------')
            this.funnelEcharts.setOption(this.funnelOption);
            //
            // this.pieEcharts = this.$echarts.init(document.getElementById('pieEcharts'));
            // this.pieEcharts.setOption(this.pieOption);
            //
            // this.cateEcharts = this.$echarts.init(document.getElementById('cateEcharts'));
            // this.cateEcharts.setOption(this.cateOption);
        },
        init() {
            getDashboard().then(res => {
                this.cardList = res.result.cards;
                this.wordCloudData = res.result.chart.wordCloud;
                this.funnelData = res.result.chart.funnel;
                this.pieData = res.result.chart.pie;
                res.result.chart.line.forEach(item => {
                    this.lineTitleData.push(item.name)
                    this.lineData.push({
                        name: item.name,
                        type:'line',
                        stack: '总量',
                        data:item.value.split(',')
                    })
                })
                this.$nextTick(() => {
                    this.initEcharts()
                })
            })
        }
    }
}
</script>

<style scoped>
    .clearfix{
        text-align: left;
    }
    .home-col{
        margin-bottom: 20px;
    }
    .card-title{
        font-weight: 600;
        font-size: 16px;
        line-height: 60px;
    }
</style>
