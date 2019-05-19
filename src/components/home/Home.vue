<!-- home 页面级组件 -->
<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper :slides="slides"></home-swiper>
        <home-nav :navclasses="navclasses"></home-nav>
        <home-poplist :popitems="popitems"></home-poplist>
        <guess-like :likelists="likelists"></guess-like>
        <weekend :weekendlists="weekendlists"></weekend>
    </div>
</template>

<script>
import HomeHeader from './base/Header'
import HomeSwiper from './base/Swiper'
import HomeNav from './base/Nav'
import HomePoplist from './base/HomePoplist'
import GuessLike from './base/GuessLike'
import Weekend from './base/Weekend'
import {mapState} from 'vuex'
export default {
    name:'Home',
    data () {
        return {
            slides:[],
            popitems:[],
            navclasses:[],
            likelists:[],
            weekendlists:[],
            lastCity:""
        };
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeNav,
        HomePoplist,
        GuessLike,
        Weekend
    },
    methods:{
        getCityInfo(){
            this.$axios.get('http://localhost:8080/static/mock/index.json?city='+this.city)
            .then(data=>{
                //console.log(data)
                let {data:{data:{slides},data:{popitems},data:{navclasses},data:{likelists},data:{weekendlists}}}=data
                this.slides=slides
                this.popitems=popitems
                this.navclasses=navclasses
                this.likelists=likelists
                this.weekendlists=weekendlists
            })
        }
    },
    computed:{
        ...mapState(['city'])
    },
    mounted(){
        this.getCityInfo()
        this.lastCity=this.city  //临时缓冲变量
    },
    activated(){ //keepalive当组件被加载后，不会再重新加载组件，而是直接从缓存中提取组件内容，新增生命周期函数，当组件重新显示时候执行
        if(this.lastCity!==this.city){
            this.lastCity=this.city
            this.getCityInfo()
        }
    }
}
</script>
<style scoped lang="stylus">
    .home
        background-color:#f5f5f5
</style>