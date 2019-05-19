<!--轮播图-->
<template>
    <div class="swiper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="slide in slides" :key="slide.id">
                <img class='swiper-img' :src="slide.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <!-- 分页器 -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name: "HomeSwiper",
    props:['slides'],
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        };
    }
};
</script>
<style lang="stylus" scoped>
    .swiper >>> .swiper-pagination-bullet
        background-color:#fff
    .swiper
        width:100%
        .swiper-container
            img
                width:100%
</style>