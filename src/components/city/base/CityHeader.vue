<!--头部-->
<template>
    <div class="city-header">
        <div class="header">
            <router-link to="/">
                <i class="iconfont icon-jiantou1"></i>
            </router-link>
            城市选择 
        </div>
        <div class="territory">
            <ul>
                <li v-for="(list,index) in lists" :class="{active:index==currentIndex}" @click="toggleClass(index)"  :key="index">{{list}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentIndex:0,
                lists:["境内","境外-港澳台"]
            };
        },
        methods:{
            toggleClass(index){
                this.currentIndex=index
            }
        },
    }
</script>
<style lang="stylus" scoped>
    .header
        position: relative
        height: 0.68rem
        line-height: 0.68rem
        text-align: center
        color: #fff
        background-color: #00bcd4
        font-size: .32rem
        i
            position: absolute
            top: 0
            left: 0
            width: .64rem
            text-align: center
            font-size: .4rem
            color: #fff
    .territory
        background-color:#00bcd4
        padding:0.2rem 1rem
        ul
            display:flex
            border: 1px solid #fff
            border-radius: .03rem
            li
                width:50%
                text-align:center
                font-size:0.3rem
                line-height:0.4rem
            .active
                background-color: #fff
                color: #00bcd4
</style>