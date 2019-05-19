<!--顶部图片区域-->
<template>
    <div>
        <div class="banner">
            <img class="banner-img" :src="bannerImg" alt="" @click="HandleSp">
            <div class="imgnum">
                <i class="iconfont icon-tupian1"></i> {{len}}
            </div>
            <h3 class="banner-title">{{sightName}}</h3>
        </div>
        <scenic-picture v-show="SpIsShow" :imgs="bannerImgs" @closeSp="closeSp"></scenic-picture>
    </div>
</template>
<script>
    import ScenicPicture from 'com/picture/ScenicPicture'
    export default {
        name:"DetailBanner",
        props:["sightName","bannerImg","bannerImgs"],
        data () {
            return {
                SpIsShow:false
            };
        },
        methods:{
            HandleSp(){
                this.SpIsShow=true
            },
            closeSp(){
                this.SpIsShow=false
            }
        },
        computed:{
            len(){
                return this.bannerImgs.length
            }
        },
        components:{
            ScenicPicture
        }
    }
</script>
<style lang="stylus" scoped>
    .banner
        position:relative
        .banner-img
            width:100%
        .imgnum
            position:absolute
            left:0.2rem
            bottom:0.86rem
            color:#fff
            width:1.2rem
            height:0.4rem
            background-color:rgba(0,0,0,0.5)
            border-radius:0.2rem
            text-align:center
            line-height:0.4rem
            font-size:0.24rem
            i
                font-size:0.1rem
        .banner-title
            position:absolute
            left:0.2rem
            bottom:0.36rem
            color:#fff
            font-size:0.36rem
            min-height:0.4rem
            text-shadow: 0 0.02rem 0.04rem rgba(0,0,0,0.7)
    .banner::after
            content:''
            display: block
            position: absolute
            bottom: 0
            left: 0
            width: 100%
            min-height: .6rem
            background:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
</style>