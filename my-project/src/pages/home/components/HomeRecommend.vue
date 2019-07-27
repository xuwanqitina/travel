<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <li class="item" v-for ="item of iconList" :key="item.id">
                <img class="imgs" :src="item.Imgsrc" alt="">
                <div class="info" border-bottom>
                    <p class="img_title">{{item.title}})</p>
                    <p class="desc">{{item.title}}</p>
                    <button class="info_btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    data (){
        return{
            iconList:[{
                id:'00001',
                Imgsrc:'https://dimg04.c-ctrip.com/images/300u12000000s03tn8E6F_C_300_200.jpg',
                title:'扬州+镇江+南京3日2晚跟团游(4钻)',
                Desc:'『一天一座城 』精选历史文化名城 扬州瘦西湖金陵民国风 牛首山金山寺祈福 高钻住宿 悠哉纯玩 含2早2正 特色淮扬菜 镇江锅盖面 车次自选 动车高铁游 '
            },{
                id:'00002',
                Imgsrc:'https://dimg03.c-ctrip.com/images/fd/tg/g2/M0A/88/47/CghzgVWwueeAD47DADZFmoNTjAw127_C_300_200.jpg',
                Desc:'7月15日超值特惠班【茶卡盐湖+翡翠湖】单人下单接受拼房 下单立减800元人 口碑产品 保证成团 销量和好评双优 1车1导纯玩 赠目的地接送机 航班可自选自营',
                title:'西宁+青海湖+德令哈+敦煌+嘉峪关+张掖+兰州10日9晚跟团游'
            },{
                id:'00003',
                Imgsrc:'https://dimg04.c-ctrip.com/images/300d0d0000006vwrl96D1_C_300_200.jpg',
                Desc:'『海天佛国』双飞·各星级酒店任选·祈福之旅&远离雾霾',
                title:'普陀山2-10日自由行'
            }]
        }
    },
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl';
    .title
        line-height  .6rem
        padding-left .1rem
        background-color $gray3
        margin-top .2rem
    .item
        display flex
        height 2rem
        overflow hidden
        padding 0.1rem
        .imgs
            width 3rem
            height 2rem   
        .info
            flex 1  
            min-width 0  
            padding .1rem
            .img_title
                ellipsis()
                line-height .54rem
                font-size .36rem
            .desc
                ellipsis()
                margin:.2rem 0
            .info_btn
                line-height .3rem
                background-color yellow
                border-radius .1rem
                padding .05rem
</style>


