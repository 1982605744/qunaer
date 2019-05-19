<!--热门榜单-->
<template>
    <div class="poplist">
        <div class="title">
            <h3>
                <i class="iconfont icon-huo"></i> 
                <span>本周热门榜单</span> 
            </h3>
            <a href="#">
                全部榜单
                <i class="iconfont icon-jiantouyou"></i>
            </a>
        </div>
        <ul class="poplist-items">
            <li v-for="topitem in topitems" :key="topitem.id">
                <a href="#" class="poplist-item">
                    <div class="top">
                        <img :src="topitem.tpsrc" alt="">
                    </div>
                    <div class="preview">
                        <img :src="topitem.pisrc" alt="">  
                    </div>
                    <div class="piname">{{topitem.piname}}</div>
                    <div class="piprice">
                        <span>￥{{topitem.piprice}}</span>起
                    </div>
                </a>
            </li>
            <li v-for="lastitem in lastitems" :key="lastitem.id">
                <a href="#" class="poplist-item">
                    <div class="preview">
                        <img :src="lastitem.pisrc" alt="">
                    </div>
                    <div class="piname">{{lastitem.piname}}</div>
                    <div class="piprice">
                        <span>￥{{lastitem.piprice}}</span>起
                    </div>    
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['popitems'],
        data () {
            return {};
        },
        computed:{
            topitems(){
                let topitems=[]
                topitems=this.popitems.slice(0,3)
                return topitems
            },
            lastitems(){
                let lastitems=[]
                lastitems=this.popitems.slice(3)
                return lastitems
            }
        }
    }
</script>
<style scoped lang="stylus">
    .poplist
        margin-top:0.2rem
        background: #fff;
        .title
            padding: .24rem 0 .26rem;
            display:flex
            justify-content:space-between
            h3
                margin-left:0.2rem
                i
                    color:#ff7b46
                span
                    height: .44rem
                    color: #212121
                    font-size: .32rem
                    line-height: .35rem
            a
                color:#616161
                margin-right:0.2rem
                font-size:0.24rem
        .poplist-items
            padding:0 0.24rem
            display:flex
            overflow-x: scroll
            li:not(:first-child)
                margin-left:0.12rem 
            li
                width:2rem
                padding:0.06rem 0 0.2rem
                position:relative
                a
                    width:100%
                    display:inline-block
                    .top
                        position:absolute
                        left:0
                        top:0
                        z-index: 1
                        width: 0.84rem
                        height: 0.4rem
                        img
                            width:100%
                    .preview
                        width:2rem
                        img
                            width:100%
                    .piname
                        text-align:center
                        overflow:hidden
                        text-overflow:ellipsis
                        white-space:nowrap
                        margin-top:0.12rem  
                        color:#212121
                        font-size:0.24rem
                    .piprice
                        text-align:center
                        overflow:hidden
                        margin-top:0.1rem
                        color: #616161
                        font-size: .24rem
                        span
                            color: #ff8300
                            font-size:0.28rem
</style>