<!--头部-->
<template>
    <div class="sp-header">
        <i class="iconfont icon-jiantou1" @click="closeSp"></i>
        景区图片
    </div>
</template>

<script>
    export default {
        name:"SpHeader",
        methods:{
            closeSp(){
                this.$emit("closeSp")
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .sp-header
        background-color:#fff
        padding:0 0.8rem
        height:0.88rem
        text-align:center
        line-height:0.88rem
        font-size:0.32rem
        i
            position:absolute
            left:0
            top:0
            width:0.8rem
            height:0.88rem
            font-size:0.5rem
</style>