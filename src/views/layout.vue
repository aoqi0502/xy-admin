<template>
       <el-container style='height:100%'> 
            <el-aside width="200px">
                <div class="logo-box">
                    XY-Admin
                </div>
                <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>导航一</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="3-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="3-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header style="borderBottom: 1px solid #f6f6f6">
                    <el-row :gutter="10">
                        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <div class="grid-content bg-purple">
                                1111
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <div class="grid-content bg-purple-light">
                                <i></i>
                                <i class="iconfont icon-quanping"></i>
                                <i></i>
                                <i></i>
                                <div>
                                
                                
                                    <img class="pic" src="http://p0.ifengimg.com/pmop/2017/0718/4B65DFB30700B94B6FCFA6EC792F7C3D7F453CEE_size1653_w365_h365.gif" alt="">
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main style="backgroundColor:#f6f8f9;padding:10px">
                    <router-view />
                </el-main>
                <el-footer style="lineHeight:60px">xy-admin</el-footer>
            </el-container>
        </el-container>
</template>

<script>
export default {
    data() {
        return { 
        }
    }
}
</script>

<style scoped>
.el-aside{
    background-color: #001529;
}
.logo-box{
    color: white;
    font-weight: 600;
    font-size: 18px;
    line-height: 60px;
}
.el-menu{
    border-right: 0px;
    background-color: #001529;
}
.el-submenu{
    background-color: #001529;
}
.el-menu-item-group{
    background-color: #001529;
}
.grid-content{
    line-height: 60px;
}
.bg-purple-light{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
}
.pic{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>