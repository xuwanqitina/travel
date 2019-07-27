<template>
  <div>
     <home-header ></home-header>
     <home-swiper :swiperList ="swiperList"></home-swiper>
     <home-icon></home-icon>
     <home-recommend></home-recommend>
     <home-weekend></home-weekend>
  </div>
   
</template>

<script>
import HomeHeader from'./components/HomeHeader'
import HomeSwiper from'./components/HomeSwiper'
import HomeIcon from'./components/HomeIcon'
import HomeRecommend from'./components/HomeRecommend'
import HomeWeekend from'./components/weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList:'',
      lastCity:''
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
        this.lastCity = this.city
    },
    getHomeInfoSucc(res){
      if(res.data.ret && res.data.data){
        this.swiperList = res.data.data.swiperList
      }
    }
  },
  mounted(){
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated(){
    if(this.lastCity !== this.city){
      this.getHomeInfo()
      this.lastCity = this.city
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
