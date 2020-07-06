<template>
    <div class="xy-container">
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6"><div class="grid-content home-col">
                <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix">
                        <span class="card-title">词云图</span>
                    </div>
                    <div id="wordCloudEcharts" style="width:100%;height: 260px"></div>
                </el-card>
            </div></el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6"><div class="grid-content home-col">
                <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix">
                        <span class="card-title">漏斗图</span>
                    </div>
                    <div id="funnelEcharts" style="width:100%;height: 260px"></div>
                </el-card>
            </div></el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6"><div class="grid-content home-col">
                <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix">
                        <span class="card-title">饼图</span>
                    </div>
                    <div id="pieEcharts" style="width:100%;height: 260px"></div>
                </el-card>
            </div></el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6"><div class="grid-content home-col"></div></el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6"><div class="grid-content home-col">
                <el-card class="box-card" shadow="hover">
                    <div slot="header" class="clearfix">
                        <span class="card-title">柱状图</span>
                    </div>
                    <div id="barEcharts" style="width:100%;height: 260px"></div>
                </el-card>
            </div></el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6"><div class="grid-content home-col"></div></el-col>

        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myChart: '',
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
                    data: [{name: '微信', value: 3328}, {name: '南方+', value: 1045}, {
                        name: '东莞时间网',
                        value: 834
                    }, {name: 'i东莞', value: 804}, {name: '新浪微博', value: 532}, {name: '今日头条', value: 493}, {
                        name: '腾讯新闻', value: 479
                    }, {name: '东莞阳光网', value: 387}, {name: '东莞日报', value: 289}, {
                        name: '一点资讯',
                        value: 287
                    }, {name: '东方头条网', value: 233}, {name: '南方都市报', value: 228}, {name: '新粤网', value: 207},
                        {name: '南方plus', value: 206}, {name: '网易新闻', value: 201}, {name: '东方头条', value: 180}, {
                            name:
                                '趣头条', value: 178
                        }, {name: '羊城派', value: 151}, {name: '东莞时报', value: 143}, {
                            name: '莞讯网', value:
                                139
                        }, {name: '广州日报', value: 137}, {name: '东莞阳光台', value: 132}, {name: '搜狐新闻', value: 129}, {
                            name: '今日头条.APP', value: 116
                        }, {name: '东莞阳光平台', value: 108}, {name: '腾讯新闻.APP', value: 107}, {
                            name: '南方网', value: 103
                        }, {name: 'UC头条', value: 98}, {name: '凤凰新闻', value: 93}, {
                            name: '报告诉',
                            value: 77
                        }, {name: '网易新闻.APP', value: 74}, {name: '中国小康网', value: 64}, {name: '东莞万江', value: 63},
                        {name: '信息时报', value: 59}, {name: '中国文明网', value: 58}, {name: '东莞网', value: 57}, {
                            name:
                                '搜狐新闻（自媒体）', value: 54
                        }, {name: '南方日报', value: 54}, {name: '搜狐焦点', value: 53}, {
                            name: '阳光社区',
                            value: 52
                        }, {name: '南方plus.APP', value: 47}, {name: '阳光望牛墩', value: 46}, {
                            name: '中国报道', value: 43
                        }, {name: '新浪新闻', value: 43}, {name: '房掌柜', value: 39}, {name: '广州日报网', value: 38}, {
                            name:
                                'ZAKER', value: 38
                        }, {name: '一点资讯.APP', value: 35}, {name: '聚焦东莞', value: 35}, {
                            name: '广州新闻网',
                            value: 35
                        }, {name: '新浪', value: 31}, {name: '东莞服务热线12345', value: 31}, {name: '人民网', value: 29},
                        {name: '阳光热线问政平台', value: 26}, {name: '党报头条', value: 26}, {name: '羊城晚报地方版', value: 24}, {
                            name:
                                '网易房产', value: 23
                        }, {name: '中国网', value: 22}, {name: '金羊网', value: 21}, {
                            name: '东莞长安', value: 21
                        }, {name: '百家号', value: 21}, {name: '澎湃新闻', value: 20}, {name: '读特', value: 19}, {
                            name:
                                '东方头条.APP', value: 17
                        }, {name: '阳光石排', value: 16}, {name: '新浪乐居', value: 16}, {
                            name: '微信邦', value:
                                16
                        }, {name: '搜狐新闻.APP', value: 16}, {name: '人民日报', value: 16}, {name: '百度新闻', value: 16}, {
                            name:
                                '南方都市报.APP', value: 15
                        }, {name: '荔枝网', value: 15}, {name: '华人头条', value: 15}, {
                            name: '广东建设报',
                            value: 15
                        }, {name: '中国', value: 14}, {name: '阳光黄江', value: 14}, {name: '东方网', value: 14}, {
                            name:
                                '网易', value: 12
                        }, {name: '搜狐网', value: 12}, {name: '和讯', value: 12}, {name: '文化莞城', value: 11}, {
                            name: '聊聊网', value: 11
                        }, {name: '58同镇', value: 11}, {name: '凤凰网', value: 10}, {
                            name: '新浪网', value:
                                9
                        }, {name: '趣头条.APP', value: 9}, {name: '凤岗网', value: 9}, {name: '新快网_新快报', value: 8}, {
                            name:
                                '上游新闻', value: 8
                        }, {name: '东莞市城市综合管理局', value: 8}, {name: '大众网', value: 8}, {
                            name: '中国新闻网', value:
                                7
                        }, {name: '第一推', value: 7}, {name: '大洋网', value: 7}, {name: '新浪网', value: 6}, {
                            name: '新浪看点',
                            value: 6
                        }, {name: '手机和讯网', value: 6},]//name和value建议用小写，大写有时会出现兼容问题
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
                        data: [
                            {value: 100, name: '展现'},
                            {value: 80, name: '点击'},
                            {value: 60, name: '访问'},
                            {value: 21, name: '咨询'},
                            {value: 10, name: '订单'},

                        ]
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
                    data: [{
                        name: "二元",
                        value: "40000"
                    }, {
                        name: "大白",
                        value: "40000"
                    }, {
                        name: "长大",
                        value: "53000"
                    }, {
                        name: "杜洛克",
                        value: "40000"
                    }, {
                        name: "三元",
                        value: "60000"
                    }, {
                        name: "大长",
                        value: "10000"
                    }, {
                        name: "PIC",
                        value: "20000"
                    }]
                }]
            },
            barOption: {
                backgroundColor: '#0e2147',
                    grid: {
                        left: '25%',
                        top: '12%',
                        right: '25%',
                        bottom: '8%',
                        containLabel: true
                    },
                    xAxis: [{
                        show: false,
                    }],
                    yAxis: [{
                        axisTick: 'none',
                        axisLine: 'none',
                        offset: '27',
                        axisLabel: {
                            textStyle: {
                                color: '#ffffff',
                                fontSize: '16',
                            }
                        },
                        data: ['南坪', '工贸', '石桥铺', '沙坪坝', '嘉州路']
                    }, {
                        axisTick: 'none',
                        axisLine: 'none',
                        axisLabel: {
                            textStyle: {
                                color: '#ffffff',
                                fontSize: '0',
                            }
                        },
                        data:[10,9,8,7,6]
                    }, {
                        name: '工作地TOP 10',
                        nameGap: '30',
                        nameTextStyle: {
                            color: '#ffffff',
                            fontSize: '30',
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data: [],
                    }],
                    series: [{
                            name: '条',
                            type: 'bar',
                            yAxisIndex: 0,
                            data: [6647, 7473, 8190, 8488, 9491, 11726, 12745, 13170, 21319, 24934],
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    textStyle: {
                                        color: '#ffffff',
                                        fontSize: '16',
                                    }
                                }
                            },
                            barWidth: 12,
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        var num = 10;
                                        return ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'][params.dataIndex % num]
                                    },
                                }
                            },
                            z: 2
                        }, {
                            name: '白框',
                            type: 'bar',
                            yAxisIndex: 1,
                            barGap: '-100%',
                            data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
                            barWidth: 20,
                            itemStyle: {
                                normal: {
                                    color: '#0e2147',
                                    barBorderRadius: 5,
                                }
                            },
                            z: 1
                        }, {
                            name: '外框',
                            type: 'bar',
                            yAxisIndex: 2,
                            barGap: '-100%',
                            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                            barWidth: 24,
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        var num = 10;
                                        return ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'][params.dataIndex % num]
                                    },
                                    barBorderRadius: 5,
                                }
                            },
                            z: 0
                        },
                        {
                            name: '外圆',
                            type: 'scatter',
                            hoverAnimation: false,
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            yAxisIndex: 2,
                            symbolSize: 35,
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        var num = 10;
                                        return ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'][params.dataIndex % num]
                                    },
                                    opacity: 1,
                                }
                            },
                            z: 2
                        }
                    ]
            }
        }
    },
    mounted() {
        this.init();
        window.addEventListener('resize', () => {
            this.wordCloudEcharts.resize();
            this.funnelEcharts.resize();
            this.pieEcharts.resize();
        })

    },
    methods:{
        init() {
            this.wordCloudEcharts = this.$echarts.init(document.getElementById('wordCloudEcharts'));
            this.wordCloudEcharts.setOption(this.wordCloudOption);

            this.funnelEcharts = this.$echarts.init(document.getElementById('funnelEcharts'));
            this.funnelEcharts.setOption(this.funnelOption);

            this.pieEcharts = this.$echarts.init(document.getElementById('pieEcharts'));
            this.pieEcharts.setOption(this.pieOption);

            this.barEcharts = this.$echarts.init(document.getElementById('barEcharts'));
            this.barEcharts.setOption(this.barOption);
        }
    }
}
</script>

<style scoped>
    .clearfix{
        text-align: left;
    }
    .card-title{
        font-weight: 600;
        font-size: 16px;
    }
</style>
