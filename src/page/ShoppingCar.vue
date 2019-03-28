<template>
    <div class="bg">
        <!--  <h1>home</h1>
        <p>{{msg}}</p>-->
        <div class="shopping" :style="{width:width+'px'}">
            <div class="shopping_header">
                <div class="shoppinp_content">
                    <div class="shopping_logo"><img src="../assets/logo.png"/>
                        <div><p>社会化应急物资装备</p>
                            <p>大数据平台</p>
                        </div>
                    </div>
                    <div class="right_search">
                        <div>
                            <el-input placeholder="找产品 | 找方案 | 找专家" class="search" v-model="xxx"/>
                            <el-button slot="append" icon="el-icon-search" class="search_icon"></el-button>
                        </div>
                        <span class="span">或</span>
                        <!--<el-select v-model="value" placeholder="免费发需求" class="select_header">-->
                            <!--<el-option-->
                                    <!--v-for="item in options"-->
                                    <!--:key="item.value"-->
                                    <!--:label="item.label"-->
                                    <!--:value="item.value"-->
                            <!--&gt;-->
                            <!--</el-option>-->
                        <!--</el-select>-->
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
                            @selectable="fn($event)"
                            label="XXXXX公司"
                            width="600">
                        <template slot-scope="scope">
                            <div class="table_flex"><img src="../assets/proudct.png"/>
                                <div class="table_flex_p"><p>气象雷达</p>
                                    <div class="table_carp">
                                        <div class="table_p"><p>种类：架管</p>
                                            <p>规格：10*200</p>
                                            <p>硬度：4.8级</p>
                                        </div>
                                        <div class="table_p"><p>材料：低碳钢</p>
                                            <p>核心参数：实验室/通用型</p><p>表面等级：蓝白锌</p></div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="totalPrice"
                            label="总价" width="120"
                    >
                        <template slot-scope="scope">￥{{ scope.row.totalPrice }}</template>
                    </el-table-column>
                    <el-table-column
                            prop="number"
                            label="数量"
                            show-overflow-tooltip>
                        <el-input-number v-model="num1" @change="handleChange" :min="1"
                                         :max="9999999" ></el-input-number>
                    </el-table-column>
                    <el-table-column
                            prop="operation"
                            label="操作"
                            show-overflow-tooltip>
                        <template slot-scope="scope"><p @click="showStar"><i v-if="starton" class="el-icon-star-off"/><i
                                v-if="show" class="el-icon-star-on"/>收藏</p>
                            <p><i class="el-icon-delete"/>删除</p>
                        </template>
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
                num1: 1,
                show: false,
                starton: true,
                width: document.body.offsetWidth,
                tableData: [{
                    totalPrice: '10000000',
                    number: '王小虎',
                    operation: '上海市普陀区金沙江路 1518 弄'
                },{
                    totalPrice: '10000000',
                    number: '王虎',
                    operation: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: [],
                xxx: ""
            }
        },
        methods: {
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        console.log(row,'123')
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                console.log(val,'aaaa')
                this.multipleSelection = val;
            },
            handleChange(value) {
                console.log(value);
            },
            showStar() {
                this.show = !this.show
                this.starton = !this.starton
            },

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
                margin-top: 10px;
            }
        }

        .table_flex {
            display: flex;

            img {
                height: 126px;
                margin-right: 15px;
            }

            .table_flex_p {
                p {
                    color: #484848;
                    font-size: 16px;
                    font-weight: 600;
                }
            }
            .table_carp {
                display: flex;
                .table_p {
                    p {
                        margin: 0;
                        width: 180px;
                        font-size: 14px;
                    }
                }
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

    .el-table__footer-wrapper, .el-table__header-wrapper {
        border-top: 2px solid $bg_color;
    }

</style>
