<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <swiper-slide v-for="item of swiperList" :key = "item.id">
                <img :src="item.imgUrl" class="swiper_img">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    
</template>
<script>
    export default {
        name:'HomeSwiper',
        props:{
            swiperList:""
        },
        data(){
            return{
                swiperOption:{
                    pagination:'.swiper-pagination',
                    loop:true,
                    autoplay:true,
                    speed:2000
                }
            }
        }
    }
</script>
<style lang='stylus' scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background:#fff
    .wrapper
        overflow :hidden
        width:100%
        height :0
        padding-bottom:31.25%
        background:#ccc
        .swiper_img
            width:100%
</style>


