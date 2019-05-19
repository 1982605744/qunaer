<template>
    <div class="searchcity">
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
        </div>
        <div 
        class="search-content" 
        ref="search"
        v-show="keyword"
        >
            <ul>
                <li 
                class="search-item border-bottom"
                v-for="item in list"
                :key="item.id"
                @click="handleSwitchCity(item.name)"
                >{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name: 'CitySearch',
    props:['cities'],
    data () {
        return {
            keyword:'',
            list:[],
            timer:null
        }
    },
    computed: {
        hasData(){
            return !this.list.length
        }
    },
    methods:{
        handleSwitchCity(city){
            //this.$store.commit('changeCity',city)
            this.keyword=""
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[]
            }
            this.timer=setTimeout(()=>{
                let result=[]
                for(let i in this.cities){
                    this.cities[i].forEach(value => {
                        if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
                            result.push(value)
                        }
                    });
                }  
                this.list=result
            },100)
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search,{mouseWheel: true, click: true, tap: true})
    }
}
</script>
<style lang="stylus" scoped>
    .searchcity
        position:relative
        .search
            height: .72rem
            padding: 0 .1rem
            background-color: #00bcd4
            .search-input
                box-sizing: border-box
                width: 100%
                height: .62rem
                padding: 0 .1rem
                line-height: .62rem
                text-align: center
                border-radius: .06rem
                color: #666
        .search-content
            width:100%
            height:5000%
            position:absolute
            z-index: 1
            overflow: hidden
            background: #eee
            .search-item
                line-height: .62rem
                padding-left: .2rem
                background: #fff
                color: #666
</style>
