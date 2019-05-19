<!--猜你喜欢-->
<template>
    <div class="like">
        <h3 class="like-title">
            <i class="iconfont icon-hongxin1 hongxin-icon"></i>猜你喜欢
        </h3>
        <ul class="like-items">
            <router-link 
            tag="li"
            class="border-bottom" 
            v-for="list in likelists" 
            :key="list.id"
            :to="'/detail/'+ list.id"
            >
                <a href="#">
                    <div class="like-preview">
                        <img :src="list.imgUrl" alt="">
                    </div>
                    <div class="info">
                        <h3 class="title">{{list.title}}</h3>
                        <div class="comment">
                            <p class="icon-star">
                                <i class="iconfont icon-wujiaoxing" v-for="i in 5" :key="i"></i>
                                <span class="actual" :style="list.star|star">
                                    <i class="iconfont icon-wujiaoxing"></i>
                                    <i class="iconfont icon-wujiaoxing"></i>
                                    <i class="iconfont icon-wujiaoxing"></i>
                                    <i class="iconfont icon-wujiaoxing"></i>
                                    <i class="iconfont icon-wujiaoxing"></i>
                                </span>
                            </p>
                            <span class="com-num">{{list.com}}条评论</span> 
                        </div>
                        <div class="other">
                            <p class="price">
                                <i>￥</i><span>{{list.price}}</span>起
                            </p>
                            <span class="location">{{list.location}}</span>
                        </div>
                    </div>
                </a>
            </router-link >
        </ul>
        <a href="#" class="view-all">
            查看所有产品
        </a>
    </div>
</template>

<script>
    export default {
        name:"GuessLike",
        props:['likelists'],
        filters:{
            star(star){
                return{
                    width:star*100/5+"%"
                }
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .border-bottom::before
        border-color:#ccc
    .like
        background-color:#fff
        margin-top:0.2rem
        .like-title
            font-size:0.32rem
            padding:0.3rem 0.2rem
            .hongxin-icon
                color:#ff5d55
        .like-items
            width:100%
            margin-left:0.24rem
            li
                width:100%
                padding:0.2rem 0
                a
                    display:flex
                    width:100%
                    height:100%
                    .like-preview
                        width:2rem
                        height:2rem
                        img
                            width:100%
                    .info
                        flex:1 1 auto
                        padding-left:0.22rem
                        .title
                            margin-top:0.26rem
                            color: #212121
                            font-size: .32rem
                        .comment
                            margin-top:0.22rem
                            display:flex
                            .icon-star
                                width:1.46rem
                                position:relative
                                i
                                    display:inline-block
                                    width:0.28rem
                                    font-size:0.35rem
                                    color:#ccc
                                .actual
                                    width:0%
                                    display:flex
                                    overflow:hidden
                                    position:absolute
                                    left:0
                                    top:0
                                    i
                                        width:0.28rem
                                        color:#ffb436
                            .com-num
                                color:#616161
                                font-size:0.24rem
                                line-height:0.32rem
                                margin-left:0.32rem
                        .other
                            width:92%
                            margin-top:0.22rem
                            display:flex
                            justify-content:space-between
                            .price
                                color:#616161
                                i
                                    color:#ff8033
                                span 
                                    color:#ff8033
                                    font-size:0.4rem
                            .location
                                display:block
                                color:#616161
                                font-size:0.24rem
                                line-height:0.4rem
        .view-all
            display:inline-block
            width:100%
            padding:0.2rem 0
            color: #00afc7
            font-size: .28rem
            line-height: .4rem
            text-align: center
</style>