<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="text" placeholder="输入城市名或拼音" class="input_search">
        </div>
        <div 
            class="search_content"
            ref="search"
            v-show="keyword"
        >
            <ul>
                <li
                v-for='item in list'
                :key="item.id"
                @click="handleChangeCity(item.name)"
                >{{item.name}}</li>
            </ul>
        </div>
    </div>
    
</template>
<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    name:'citySearch',
    props:{
        cities : Object
    },
    data(){
        return {
            keyword:'',
            timer:null,
            list:[]
        }
    },
    methods:{
        handleChangeCity(city){
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
            this.timer = setTimeout(() => {
                const result = []
                for(let i in this.cities){
                    this.cities[i].forEach((value)=>{
                        if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                            result.push(value)
                        }
                    })
                }
                this.list = result
            },100)
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .search
        height .72rem
        padding 0.1rem
        background-color $bgColor
        .input_search
            box-sizing border-box
            width 100%
            height .62rem
            line-height .62rem
            text-align center
            border-radius 0.06rem
            padding 0 0.1rem
    .search_content
        position:absolute
        top 1.5rem
        left 0
        bottom 0
        right 0
        background-color #eee
        z-index 1   
        overflow hidden    

</style>
