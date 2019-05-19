<!--citylist-->
<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper" @click="handleSwitchCity($event.target.innerText)">
                        <div 
                            class="button"
                        >{{this.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div  
                        class="button-wrapper" 
                        v-for="hotCity in hotCities" :key="hotCity.id"
                        @click="handleSwitchCity(hotCity.name)"
                        >
                        <div class="button">{{hotCity.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" 
            v-for="(lists,key) of cities" 
            :key="key"
            :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div 
                    class="item border-bottom"  
                    v-for="list of lists" 
                    :key="list.id"
                    @click="handleSwitchCity(list.name)"
                    >{{list.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
    name:"CityList",
    props:['cities','hotCities','letter'],
    methods:{
        handleSwitchCity(city){
            //this.$store.commit('changeCity',city)
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    computed:{
        ...mapState(['city'])
    },
    watch:{
        letter(){
            if(this.letter){
                let element=this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper,{mouseWheel: true, click: true, tap: true})
        console.log(this.scroll);
    }
};
</script>
<style lang="stylus" scoped>
    .list
        overflow: hidden
        position:absolute
        left:0
        top:2.24rem
        right:0
        bottom:0
        .area
            .title
                line-height: .54rem
                background: #eee
                padding-left: .2rem
                color: #666
                font-size: .26rem
            .button-list
                overflow: hidden
                padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    margin: .1rem
                    padding: .1rem 0
                    text-align: center
                    border: .02rem solid #ccc
                    border-radius: .06rem
            .item-list
                .item
                    line-height: .76rem
                    padding-left: .2rem
</style>