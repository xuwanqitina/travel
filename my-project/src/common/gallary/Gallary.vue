<template>
    <div 
        class="gallary"
        @click="handleGallaryClick"
        >
       <div class="wrapper">
            <swiper :options="swiperOption" >
                <swiper-slide 
                    v-for="(item,index) in imgs"
                    :key = "index"
                    >
                    <img :src="item"
                        class="swiper_img"
                        >
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div> 
    </div>
</template>
<script>
export default {
    name:'CommonGallary',
    props:{
        imgs:Array
    },
    data (){
        return{
            swiperOption:{
                pagination : '.swiper-pagination',
                paginationType : 'fraction',
                observeParents:true,
                observer:true
            }
        }
    },
    methods:{
        handleGallaryClick (){
            this.$emit('close')
        }
    }
}
</script>
<style lang="stylus" scoped>
    .wrapper >>>.swiper-container
        overflow inherit
    .gallary
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        background-color #000
        z-index 999
        display flex
        flex-direction column
        justify-content center
        .wrapper
            width 100%
            height 0
            padding-bottom 66%
            .swiper_img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem
</style>
