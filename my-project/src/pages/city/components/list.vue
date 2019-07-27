<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button_list">
                    <div class="button_wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button_list">
                    <div class="button_wrapper" 
                        v-for="item of hotCities"
                        :key="item.id"
                        @click="handleChangeCity(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div 
                class="area"
                v-for="(item,key) of cities"
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div 
                    class="item_list"
                    v-for="inneritem of item"
                    :key="inneritem.id"
                    @click="handleChangeCity(inneritem.name)"
                >
                    <div class="item border-bottom">{{inneritem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
import BScroll from 'better-scroll'
export default {
    name:'cityList',
    props:{
        cities:Object,
        hotCities:Array ,
        letter:String
    },
    computed:{
        ...mapState({currentCity : 'city'})
    },
    methods:{
        handleChangeCity(city){
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch:{
        letter(){
            if(this.letter){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .border-topbottom
        &:after
            border-color #ccc
        &:before
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc

    .list
        position absolute
        left 0
        right 0
        top 1.52rem
        bottom 0
        overflow hidden
        .title
            line-height .54rem
            background-color #eee
            padding-left .2rem
            color #666
            font-size .26rem
        .button_list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button_wrapper
                float left
                width 33.33%
                .button
                    margin .1rem
                    padding .1rem 0
                    text-align center
                    border .02rem solid #ccc
                    border-radius 0.06rem
        .item_list
            .item
                line-height .76rem
                padding-left .2rem

</style>
