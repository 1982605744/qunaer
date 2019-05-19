<!--景区公告-->
<template>
    <div>
        <div class="announcement" @click="openAnnounce">
            <i class="iconfont icon-laba"></i>
            洪园春季游园会--3月至5月：梅花飘落，桃花绽放，柳树抽芽，春天的记忆再次被勾起。春季游洪园，不仅可赏花，还可体验雅俗共赏的民俗风情。您可在活动中携手扎稻草人，在油菜花迷宫捉迷藏，在芦苇间摇橹品茗，在春风中浪漫双人骑游……悠悠徜徉于都市中的世外桃源。
            <i class="iconfont icon-jiantouyou"></i>
        </div>
        <div class="content" v-show="conIsShow">
            <div class="content-title">
                <i class="iconfont icon-laba1"></i>
                景区公告
            </div>
            <div class="announce-detail">
                洪园春季游园会--3月至5月：梅花飘落，桃花绽放，柳树抽芽，春天的记忆再次被勾起。春季游洪园，不仅可赏花，还可体验雅俗共赏的民俗风情。您可在活动中携手扎稻草人，在油菜花迷宫捉迷藏，在芦苇间摇橹品茗，在春风中浪漫双人骑游……悠悠徜徉于都市中的世外桃源。
            </div>
            <i class="iconfont icon-guanbi" @click="closeAnnounce"></i>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                conIsShow:false
            };
        },
        methods:{
            openAnnounce(){
                this.conIsShow=true
            },
            closeAnnounce(){
                this.conIsShow=false
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .announcement
        margin-top:0.1rem
        background-color: #fff5e5
        color: #ff8300
        height: .88rem
        line-height: .88rem
        padding-left: .23rem
        position:relative
        padding:0 0.48rem
        overflow:hidden
        text-overflow:ellipsis
        white-space:nowrap
        .icon-laba
            position:absolute
            left:0.1rem
            top:0
        .icon-jiantouyou
            position:absolute
            top:0
            right:0.2rem
            color: gray
            font-size:0.45rem
    .content
        background:rgba(255,255,255,0.9)
        position: fixed
        z-index: 9
        top: 0
        left: 0
        width: 100%
        height: 100%
        .content-title
            position:absolute
            top:2rem
            width:100%
            text-align:center
            color: #f67353
            font-size: .4rem
            .icon-laba1
                font-size:0.5rem
        .announce-detail
            position:absolute
            top:3.4rem
            line-height: .46rem
            color: #333
            padding: 0 .35rem
            word-wrap: break-word
        .icon-guanbi
            display:inline-block
            width:0.4rem
            height:0.4rem
            text-align:center
            line-height:0.4rem
            font-size:0.4rem
            position:absolute
            left:calc(50% - 0.2rem)
            bottom:0.8rem
</style>