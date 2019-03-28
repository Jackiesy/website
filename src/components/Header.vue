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
                            <el-input placeholder="找产品 | 找方案 | 找专家" class="search"/>
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


    </div>
</template>
<script>

    export default {
        name: 'Header',
        data() {
            return {
                num1: 1,
                width: document.body.offsetWidth,

            }
        }
    }

</script>
<style lang="scss">
    @import "../style/global";

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
                        color: #fff;
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
    }


</style>
