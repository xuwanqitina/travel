<template>
    <div class="icon">
        <swiper class="swipper_container">
            <swiper-slide v-for="(page,index) of pages " :key ="index">
                <div class="icon_item" 
                    v-for="item of page" 
                    :key="item.id"
                >
                    <div class="icon_img">
                        <img class='icon_img_content' :src="item.Imgsrc" alt="">
                    </div>
                    <span class="icon_desc">{{item.Desc}}</span>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeIcon',
    data (){
        return{
            iconList:[{
                id:'00001',
                Imgsrc:'//s.qunarzz.com/touch_home/imgs/flight.png',
                Desc:'特价机票特价机票特价机票'
            },{
                id:'00002',
                Imgsrc:'//s.qunarzz.com/touch_home/imgs/holiday.png',
                Desc:'热门景点'
            },{
                id:'00003',
                Imgsrc:'//s.qunarzz.com/touch_home/imgs/hotel.png',
                Desc:'特价酒店'
            },{
                id:'00004',
                Imgsrc:'//s.qunarzz.com/touch_home/imgs/flight.png',
                Desc:'特价机票特价机票特价机票'
            },{
                id:'00005',
                Imgsrc:'//s.qunarzz.com/touch_home/imgs/holiday.png',
                Desc:'热门景点'
            },{
                id:'00006',
                Imgsrc:'//s.qunarzz.com/touch_home/imgs/hotel.png',
                Desc:'特价酒店'
            },{
                id:'00007',
                Imgsrc:'//s.qunarzz.com/touch_home/imgs/flight.png',
                Desc:'1234'
            },]
        }
    },
    computed:{
        pages (){
            const pages = [];
            this.iconList.forEach((item,index)=>{
                const page =Math.floor(index/6)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item);
            })
            return pages
            
        }
    }
}
</script>
<style lang="stylus" scoped>
    .swipper_container
        height:0
        padding-bottom:50%
    .icon_item
        width 33.33%
        height 0
        padding-bottom 25%
        float left
        overflow hidden
        position relative
        .icon_img
            position absolute
            left 0
            top 0
            right 0
            bottom .4rem
            box-sizing border-box
            padding .1rem
            .icon_img_content
                height 100%
                display block
                margin 0 auto
        .icon_desc
            position absolute
            left 0
            right 0
            bottom 0
            height .4rem
            line-height .4rem
            color #666
            text-align center

</style>
