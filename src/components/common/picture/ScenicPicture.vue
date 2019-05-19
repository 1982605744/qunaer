<!--景区图片-->
<template>
    <div>
        <div class="sce-pic">
            <sp-header @closeSp="closeSp"></sp-header>
            <sp-thum @shows="fn1" :imgs="imgs"></sp-thum>
        </div>
        <fade-animation>
            <sp-gallery v-show="SpgIsShow" @closeSpg="fn2" :imgs="imgs"></sp-gallery>
        </fade-animation>
    </div>
</template>
<script>
    import SpHeader from './base/SpHeader'
    import SpThum from './base/SpThum'
    import SpGallery from './base/SpGallery'
    import FadeAnimation from 'com/fade/FadeAnimation'
    export default {
        name:"ScenicPicture",
        props:["imgs"],
        data () {
            return {
                SpgIsShow:false
            };
        },
        components:{
            SpHeader,
            SpThum,
            SpGallery,
            FadeAnimation
        },
        methods:{
            fn1(data){
                this.SpgIsShow=true
            },
            fn2(){
                this.SpgIsShow=false
            },
            closeSp(){
                this.$emit("closeSp")
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .sce-pic
        width:100%
        position:absolute
        left:0
        top:0
        z-index:5
        background-color:#f5f5f5
</style>