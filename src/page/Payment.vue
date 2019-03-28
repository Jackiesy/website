<template>
    <div class="pay"  >
        <Header/>
        <div class="step">
        <div :style="{width:width/3+'px'}">
            <el-steps :active="3" align-center>
                <el-step title="1.我的购物车"></el-step>
                <el-step title="2.核对订单信息"></el-step>
                <el-step title="3.结算支付"></el-step>
            </el-steps>
        </div></div>
        <div class="payment">
            <p class="pay_title">订单提交成功,请尽快付款！ 订单号：1654761364</p>
            <p>请您在24小时内完成支付，否则订单会被自动取消</p>
            <div class="pay_flex">
                <div>
                    <div class="pay_select">
                        <el-button>微信支付</el-button>
                        <el-button>支付宝</el-button>
                        <el-button>银联支付</el-button>
                    </div>
                    <img src="../assets/phone.png">
                </div>
                <div class="qrcord">
                    <img src="../assets/qrcode.png">
                    <p><el-button type="danger"  class="dele_btn">请用微信扫描二维码支付</el-button></p>
                    <p>距离二维码过期还剩<span>59</span>秒，过期后请刷新页面重新获取二维码。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header'
    export default {
        name: 'Payment',
        components: {Header},
        props: {
            msg: String,

        },
        data() {
            return {
                width: document.body.offsetWidth,
            }
        }
    }
</script>


<style lang="scss" scoped>
    @import "../style/global";
    .step{
        width: 1200px;
        margin: 0 auto;
        text-align: right;
        text-align: -webkit-right;
        padding: 12px 0;
    }
.pay{
    width: 100%;
    margin: 0 auto;
    .payment{
        background: #fff;
        width: 1200px;
        margin: 0 auto;
        border: 1px solid #eee;
        p{
            text-align: left;
            margin-left: 72px;
            color: #484848;
            font-size: 16px;
        }
        .pay_title{
            font-size: 20px;
            font-weight: 600;
        }
    }
    .pay_flex{
        display: flex;
        justify-content: space-around;
        margin: 20px 0;
        .pay_select{
            margin: 0px 0 10px 0;
        }
    }
    .qrcord{
        text-align: center;
        img{
            width: 368px;
            height: 368px;

        }

        p{
            margin: 10px 0;
            width: 458px;
            text-align: center;
        }
        .dele_btn{
            width: 368px;
            height: 60px;
            background: $btn_color ;
            font-size: 20px;
        }
        span{
            color:$btn_color ;
        }
    }
    .el-button:active,.el-button:focus, .el-button:hover {

        color: $bg_color;
        border-color: $bg_color;
        background-color: transparent;
    }
}
</style>
