<!--头部-->
<template>
    <div class="detail-header">
        <router-link to="/" v-show="showBack">
            <i class="iconfont icon-jiantou1 icon-back"></i>
        </router-link>
        <div 
        class="header-fixed"
        :style="opacityStyle"
        >
            <router-link tag="i" to="/" class="iconfont icon-jiantou1 icon-fixed-back"></router-link>
            {{sightName}}
        </div>
    </div>
</template>
<script>
    export default {
        props:["sightName"],
        data () {
            return {
                showBack:true,
                opacityStyle:{
                    opacity:0
                }
            };
        },
        methods:{
            handleScroll(){
                let top=document.documentElement.scrollTop
                if(top>0){
                    let opacity=top/140
                    opacity=opacity>1?1:opacity
                    this.opacityStyle={opacity}
                    this.showBack=false
                }else{
                    this.showBack=true
                }
            }
        },
        activated(){  //只要有keepalive，页面一被展示 该钩子就执行
            window.addEventListener('scroll',this.handleScroll)
        },
        deactivated(){ //当页面被隐藏后或者被替换成新的页面时执行
            window.removeEventListener("scroll",this.handleScroll)
        }
    }
</script>
<style lang="stylus" scoped>
    .detail-header
        position:fixed
        left:0
        top:0
        z-index:1
        width:100%
        .icon-back
            position:absolute
            left:0.1rem
            top:0.1rem
            width:0.72rem
            height: 0.72rem
            border-radius:50%
            background-color:rgba(0,0,0,0.5)
            color:#fff
            font-size:0.45rem
            text-align:center
            line-height:0.72rem
        .header-fixed
            position: relative
            width:100%
            height: 0.88rem
            line-height: 0.88rem
            text-align: center
            color: #fff
            background-color: #00bcd4
            font-size: .32rem
            .icon-fixed-back
                position:absolute
                left:0
                top:0
                width:0.88rem
                height: 0.88rem
                color:#fff
                font-size:0.45rem
                line-height:0.88rem
</style>