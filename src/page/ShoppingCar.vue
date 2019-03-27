<template>
    <div class="bg">
        <!--  <h1>home</h1>
        <p>{{msg}}</p>-->
        <div class="shopping" :style="{width:width+'px'}">
            <div class="shopping_header">
                <div class="shoppinp_content">
                    <div class="shopping_logo"><img src="../imgs/logo.png"/>
                        <div><p>社会化应急物资装备</p>
                            <p>大数据平台</p>
                        </div>
                    </div>
                    <div class="right_search">
                        <div>
                            <el-input placeholder="找产品 | 找方案 | 找专家" class="search"/>
                            <el-button slot="append" icon="el-icon-search" class="search_icon"></el-button>
                        </div>
                        <span class="span">或</span>
                        <el-select v-model="value" placeholder="免费发需求" class="select_header">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                            >
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </div>
        </div>
        <div class="car_content">
            <div :style="{width:width/3+'px'}">
                <el-steps :active="1" align-center>
                    <el-step title="1.我的购物车"></el-step>
                    <el-step title="2.核对订单信息"></el-step>
                    <el-step title="3.结算支付"></el-step>
                </el-steps>

            </div>
            <!-- <router-link to="/hello">hello</router-link>-->
            <div class="table_car">
                <el-table
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column
                            type="selection" label="全选"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            label="XXXXX公司"
                            width="300">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column
                            prop="totalPrice"
                            label="总价"
                           >
                    </el-table-column>
                    <el-table-column
                            prop="number"
                            label="数量"
                            show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                            prop="operation"
                            label="操作"
                            show-overflow-tooltip>
                    </el-table-column>
                </el-table>
            </div>
        </div>

    </div>
</template>
<script>

    export default {
        name: 'ShoppingCart',
        data() {
            return {
                width: document.body.offsetWidth,
                tableData: [{
                    totalPrice: '2016-05-03',
                    number: '王小虎',
                    operation: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: []
            }
        }
    }
</script>
<style lang="scss">
    $bg_color: #f08200;
    .bg {
        background: #f5f5f5;

        .shopping {
            height: 100%;

            .shopping_header {
                width: 100%;
                background: #fff;
                padding-bottom: 18px;
                border-bottom: 2px solid #eee;

                .shoppinp_content {
                    width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .shopping_logo {
                        display: flex;
                        align-items: center;

                        div {
                            text-align: left;

                            p {
                                margin: 2px 10px;
                                color: #000;
                                font-weight: 600;
                            }
                        }
                    }
                }

                .right_search {
                    display: flex;
                    align-items: center;

                    .search {
                        width: 450px;
                        border: 2px solid $bg_color;

                    }

                    .el-button {
                        background: $bg_color;
                        border: 2px solid $bg_color;
                        border-radius: 0;
                        height: 44px;
                    }

                    .span {
                        margin: 10px;
                    }

                    .select_header {
                        .el-input__inner {
                            border: 0;
                        }

                        .el-input--suffix .el-input__inner {
                            background: $bg_color;
                            height: 44px;
                            border-radius: 0;
                            width: 118px;
                            padding-right: 15px;
                        }
                    }
                }
            }
        }

        .car_content {
            width: 1200px;
            margin: 0 auto;
            text-align: -webkit-right;
            padding-top: 12px;
            .table_car {

            }

        }
    }

    .el-step__title.is-finish {
        color: $bg_color;
    }

    .el-step__main {
        text-align: center;
    }

    .el-step__head.is-finish {
        border-color: $bg_color;
        color: $bg_color;
    }


</style>
