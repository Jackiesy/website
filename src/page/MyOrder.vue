<template>
    <div>
        <Header/>
        <div class="my_order">
            <div class="my_order_menu">
                <el-menu
                        default-active="1-1"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                >
                    <el-submenu index="1">
                        <template slot="title">

                            <span>订单管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">我的订单</el-menu-item>
                            <el-menu-item index="1-2">我的收藏</el-menu-item>
                        </el-menu-item-group>

                    </el-submenu>

                </el-menu>
            </div>
            <div class="tabs">

                <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                    <el-tab-pane label="所有订单" name="first">所有订单</el-tab-pane>
                    <el-tab-pane label="待付款" name="second">待付款</el-tab-pane>
                    <el-tab-pane label="待发货" name="third">待发货</el-tab-pane>
                </el-tabs>
                <div class="search_order">
                    <el-input placeholder="商品名称/订单号"/>
                    <el-button slot="append" icon="el-icon-search" class="search_icon"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Header from '../components/Header';

    export default {
        name: 'MyOrder',
        components: {Header},
        data() {
            return {
                activeName2: 'first'
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
        }

    }
</script>
<style lang="scss">
    @import "../style/global";

    .my_order {
        display: flex;
        margin: 0 auto;
        width: 1200px;
        margin-top: 30px;

        .my_order_menu {
            margin-right: 14px;
        }

        .tabs {
            background: #fff;
            width: 100%;
            position: relative;
            padding: 14px;
            .search_order {
                display: flex;
                width: 200px;
                height: 34px;
                border: 1px solid $bg_color;
                position: absolute;
                top: 13px;
                right: 14px;
                border-right: 0;

                .el-input__inner {
                    border: 0;
                    height: 34px;
                }

                .el-button {
                    border: 0;
                    padding: 0px 14px;
                    background: $bg_color;
                    border-radius: 0px;
                    height: 34px;
                    color: #fff;
                }
            }

        }
        .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
            background: $bg_color;
            color: #fff;
            border: 0;
        }

        .el-tabs__nav-wrap {
            border-bottom: 1px solid $bg_color;
        }

        .el-menu-item.is-active {
            background: $bg_color;
            color: #fff;
        }
    }

</style>