<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities" ></city-search>
        <city-list 
            :cities="cities" 
            :hotCities="hotCities"
            :letter="letter"
        ></city-list>
        <city-alphabet
            :cities="cities" 
            @change="handelLetterChange"
        ></city-alphabet>
    </div>
</template>
<script>
    import axios from 'axios' 
    import CityHeader from "./components/header"
    import CitySearch from "./components/search"
    import CityList from "./components/list"
    import CityAlphabet from "./components/alphabet"
    export default {
        name:'city',
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet,
        },
        data (){
            return {
                cities:{},
                hotCities:[],
                letter:''
            }
        },
        mounted(){
            this.getCityData()
        },
        methods:{
            getCityData(){
                axios.get('/api/city.json')
                    .then(this.getCityDataSucc)
            },
            getCityDataSucc(res){   
                res = res.data
                if(res.ret && res.data){
                    const data = res.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            },
            handelLetterChange(letter){
                this.letter = letter
            }
        }
    }
</script>
<style lang="stylus" scoped>

</style>
