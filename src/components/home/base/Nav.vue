<!--导航菜单-->
<template>
    <div class="nav">
        <div class="swiper">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="(page,index) of pages" :key="index">
                    <ul class="nav-item">
                        <li v-for="item in page" :key="item.id">
                            <a href="#">
                                <img :src="item.nsrc" alt="" class="navclass-img">
                                <span>{{item.cname}}</span>
                            </a>
                        </li>
                    </ul>
                </swiper-slide>
                <!-- Optional controls -->
                <!-- 分页器 -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <ul class="listitem-con">
            <li class="dingwei">
                <a href="#">
                    <i class="iconfont icon-dingwei"></i>
                    定位失败
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="iconfont icon-diqiu"></i>
                    必游榜单
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'HomeNav',
        props:['navclasses'],
        data () {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            };
        },
        computed:{
            pages (){
                let pages=[]
                this.navclasses.forEach((item,index)=>{
                    let page= ~~(index/8)
                    if(!pages[page]){
                        pages[page]=[]
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .swiper-container
        height:3.7rem
    .swiper >>> .swiper-pagination-bullets
        bottom:0.1rem
    .swiper >>> .swiper-wrapper
        height:3.2rem
    .nav
        padding-top:0.1rem
        background-color #fff
        .nav-item
            width:100%
            height:100%
            display:flex
            flex-wrap:wrap
            li
                width:25%
                height:1.5rem
                padding-top: .1rem;
                a
                    width:100%
                    height:100%
                    display:flex
                    flex-direction:column
                    align-items:center
                    .navclass-img
                        width:1.1rem
                    span 
                        margin-top:0.1rem
                        color:#000
        .listitem-con
            border-top:0.01rem solid #f3f3f3
            display:flex;
            li
                width:50%
                height:0.98rem
                text-align:center
                line-height:0.98rem
                a
                    color:#000
            .dingwei
                border-right:1px solid #f3f3f3    
</style>