<!--图片预览-->
<template>
    <div class="thum">
        <ul>
            <li @click="LookImg" v-for="(img,index) in imgs" :key="index">
                <img :src="img" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:["imgs"],
        data () {
            return {};
        },
        methods:{
            LookImg(){
                this.$emit("shows")
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .thum
        padding:0.2rem
        ul
            display:flex
            flex-wrap:wrap
            li:nth-child(odd)
                padding-right: .05rem
            li:nth-child(even)
                padding-left: .05rem
            li
                width:50%
                height:2.64rem
                margin-bottom: .1rem
                box-sizing: border-box
                img
                    width:100%
                    height:100%
</style>