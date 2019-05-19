<!-- header基础组件 -->
<template>
    <div class="header">
        <i class="iconfont icon-jiantou1 header-back"></i>
        <div class="header-search">
            <i class="iconfont icon-sousuo search-icon"></i>
            <input type="text" placeholder="输入城市/景点/游玩主题">
        </div>
        <router-link to='/city'>
            <div class="city">
                <span>{{this.city}}</span>
                <i class="iconfont icon-jiantouarrow486"></i>
            </div>
        </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'HomeHeader',
    computed:{
        ...mapState(['city'])
    }
};
</script>
<style lang="stylus" scoped>
    .header 
        width:100%
        height:0.88rem
        display:flex
        background-color: #00bcd4
        color: #fff
        .header-back
            width:0.88rem
            float:left
            text-align: center
            line-height: 0.88rem
        .header-search
            flex:1
            margin:0.12rem 0
            position:relative
            height:0.64rem
            padding-left: 0.3rem
            box-sizing:content-box
            background-color:#fff
            border-radius:0.32rem
            .search-icon
                color:#ccc
                vertical-align:middle
            input 
                width:80%
                height:0.64rem
                line-height 0.64rem
                font-size:0.28rem
            input::-webkit-input-placeholder
                color:#ccc
        .city
            min-width:0.88rem
            padding:0 0.1rem
            height:100%
            float:right
            text-align:center
            line-height 0.88rem
            color:#fff
            span 
                vertical-align:top
            .icon-jiantou
                font-size:0.24rem
                vertical-align:top
</style>