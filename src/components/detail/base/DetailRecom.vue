<!--去哪儿推荐-->
<template>
    <div class="recommend">
        <h3><i class="iconfont icon-zan"></i> 去哪儿推荐</h3>
        <ul class="recommend-ticket">
            <li class="border-top">
                <div class="left">
                    <p class="title">西溪湿地成人门车船联票（龙舌嘴主入口）</p>
                    <span class="date"><i class="iconfont icon-zhongbiao"></i>可订5月21日</span>
                    <ul class="tags">
                        <li class="border">
                            <img src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png" alt="">自营
                        </li>
                        <li class="border">条件退</li>
                    </ul>
                </div>
                <div class="right">
                    <a href="#">
                        <p class="price"><span>￥</span>108</p>
                        <div class="book">预定</div>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:"DetailRecom",
        data () {
            return {};
        },
    }
</script>
<style lang="stylus" scoped>
    .recommend
        margin-top:0.2rem
        background-color:#fff
        padding-left:0.2rem
        h3
            overflow: hidden;
            position: relative;
            margin-bottom: -.02rem;
            height: .88rem;
            color: #333;
            font-size: .32rem;
            line-height: .88rem;
            .icon-zan
                color:#ff6e6e
                font-size:0.35rem
        .recommend-ticket
            .border-top::before
                border-color:#ccc
            .border-top
                padding: .2rem .2rem .24rem 0
                display:flex
                box-sizing: border-box
                .left
                    flex:2.92
                    .title
                        line-height:0.52rem
                        font-size:0.3rem
                        color:#616161
                    .date
                        display:inline-block
                        font-size:0.24rem
                        color:#616161
                        height:0.32rem
                        line-height:0.32rem
                        .icon-zhongbiao
                            display:inline-block
                            color:#00bcd4
                            font-size:0.1rem
                            margin-right:0.04rem
                    .tags
                        display:flex
                        .border::before
                            border-color: #a5e4ec
                            border-radius: .08rem
                        li
                            display: inline-block
                            margin-right: .1rem
                            margin-top: .08rem
                            padding: 0 .04rem
                            height: .32rem
                            color: #00afc7
                            font-size: .2rem
                            line-height: .32rem
                            img
                                display: inline-block
                                width: .2rem;
                                margin-right: .04rem
                .right
                    flex:1
                    display:flex
                    padding-left:0.2rem
                    align-items:center
                    a
                        display:block
                        width:100%
                        .price
                            text-align:center
                            height:0.4rem
                            color:#ff9800
                            font-size: .4rem
                            line-height: .4rem
                            span
                                font-size:0.24rem
                        .book
                            height: .6rem
                            color: #fff
                            font-size: .28rem
                            line-height: .6rem
                            text-align: center
                            border-radius: .08rem
                            background: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%);
</style>