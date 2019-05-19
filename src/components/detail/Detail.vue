<!--详情页-->
<template>
    <div class="detail">
        <detail-banner 
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header :sightName="sightName"></detail-header>
        <attrac-infor></attrac-infor>
        <detail-announce></detail-announce>
        <detail-recom></detail-recom>
    </div>
</template>
<script>
    import DetailBanner from './base/DetailBanner'
    import AttracInfor from './base/AttracInfor'
    import DetailHeader from './base/DetailHeader'
    import DetailRecom from './base/DetailRecom'
    import DetailAnnounce from './base/DetailAnnounce'
    export default {
        name:"Detail",
        data () {
            return {
                sightName:"",
                bannerImg:"",
                gallaryImgs:[]
            };
        },
        components:{
            DetailBanner,
            DetailHeader,
            AttracInfor,
            DetailAnnounce,
            DetailRecom
        },
        mounted(){
            this.$axios.get("http://localhost:8080/static/mock/detail.json",{
                params:{
                    id:this.$route.params.id
                }
            }).then(res=>{
                //console.log(res)
                let data=res.data.data
                this.sightName=data.sightName
                this.bannerImg=data.bannerImg
                this.gallaryImgs=data.gallaryImgs
                //this.List=data.categoryList
            })
        }
    }
</script>
<style lang="stylus" scoped>
    .detail
        background-color:#f5f5f5
</style>