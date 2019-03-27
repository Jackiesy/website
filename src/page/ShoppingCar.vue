<template>
    <div>
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
                    <div>
                        <el-button slot="append" icon="el-icon-search" placeholder="找产品|找方案|找专家"></el-button>
                        <span>或</span>
                        <el-select v-model="value" placeholder="免费发需求">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </div>
        </div>
        <el-steps>
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>


        <el-button style="margin-top: 12px;">下一步</el-button>
        <router-link to="/hello">hello</router-link>
    </div>
</template>
<script>

    export default {
        name: 'ShoppingCart',
        data() {
            return {
                msg: "我是home 组件",
                width: document.body.offsetWidth
            }
        }
    }
</script>
<style lang="scss" scoped>
    .shopping {
        height: 100%;

        .shopping_header {
            width: 100%;
            background: #fff;

            .shoppinp_content {
                width: 1200px;
                margin: 0 auto;
                display: flex;
                justify-content: space-around;
                .shopping_logo{
                    display: flex;
                    div{
                        text-align: left;
                    }
                }
            }
        }

    }
</style>
