<!-- city -->
<template>
    <div class="city">
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list 
        :cities="cities"
        :hotCities="hotCities"
        :letter="letter"
        ></city-list>
        <alphabet 
        :cities="cities"
        @change="switchCity"
        ></alphabet>
    </div>
</template>

<script>
    import CityHeader from './base/CityHeader'
    import CityList from './base/CityList'
    import Alphabet from './base/Alphabet'
    import CitySearch from './base/Search'
    export default {
        name:"city",
        data () {
            return {
                cities:[],
                hotCities:[],
                letter: ''
            };
        },
        components:{
            CityHeader,
            CityList,
            Alphabet,
            CitySearch
        },
        methods:{
            switchCity(letter){
                this.letter=letter
            }
        },
        mounted(){
            this.$axios.get('http://localhost:8080/static/mock/city.json')
            .then(res=>{
                //console.log(res)
                res=res.data.data
                this.cities=res.cities
                this.hotCities=res.hotCities
            })
        }
    }
</script>
<style scoped>

</style>