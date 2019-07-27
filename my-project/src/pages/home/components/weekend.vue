<template>
    <div>
        <div class="title">周末推荐</div>
        <ul>
            <li class="item" v-for ="item of iconList" :key="item.id">
                <div class="img_wrapper">
                    <img class="imgs" :src="item.Imgsrc" alt="">
                </div>
                <div class="info border-bottom" >
                    <p class="img_title">{{item.title}})</p>
                    <p class="desc">{{item.Desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeWeekend',
    data (){
        return{
            iconList:[{
                id:'00001',
                Imgsrc:'https://youimg1.c-ctrip.com/target//fd/tg/g5/M0B/47/90/CggYr1bXWEyACEBVAAH175vvCuI190_C_300_200_Q90.jpg',
                title:'在长滩岛你不知道的N种亲子玩法',
                Desc:'助攻你的亲子时光'
            },{
                id:'00002',
                Imgsrc:'https://youimg1.c-ctrip.com/target//10080l000000d82zn0C48_C_300_200_Q90.jpg',
                Desc:'为了水灯节，你绝对值得飞一次清迈',
                title:'11月的泰国之夜，竟把我美哭游'
            },{
                id:'00003',
                Imgsrc:'https://youimg1.c-ctrip.com/target//100s0b0000005a6y78E43_C_300_200_Q90.jpg',
                Desc:'呼伦比尔必玩之地',
                title:'内蒙古东北部的呼伦贝尔，面积辽阔，包括海拉尔、满洲里和额尔古纳等地。这里有广阔的草原、成群的骏马、茂密的原始森林，还有浓郁淳朴的民族风情。'
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
    
    .img_wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 46%
        
        .imgs
            width 100% 
    .info
        min-width 0  
        padding .1rem
        margin-bottom .1rem
        .img_title
            ellipsis()
            line-height .54rem
            font-size .36rem
        .desc
            ellipsis()
            margin:.2rem 0
            color #ccc
</style>


