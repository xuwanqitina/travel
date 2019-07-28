<template>
    <div>
        <div 
        class="banner"
        @click="handleBannerClick"
        >
            <img 
            class="banner_img"
            src="https://img1.qunarzz.com/vs_ceph_vs_tts/0ab2cdca-d109-4de6-9739-9e1455c4f14d.jpg_r_1280x840x90_dd1c2fbe.jpg" alt="">
            <div class="banner_info">
                <div class="info">产品编号:1740454790</div>
                <div class="pic">
                    <span class="iconfont right_iconfont">&#xe633;</span>
                    32
                </div>
            </div>
        </div>
        <common-gallary 
            :imgs="imgs"
            v-show="showGallary"
            @close="handleGalaryClose"
            ></common-gallary>
    </div>
    
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:'DetailBanner',
    components:{
        CommonGallary
    },
    data (){
        return{
            showGallary:false,
            imgs:[
                "https://img1.qunarzz.com/vs_ceph_vs_tts/0ab2cdca-d109-4de6-9739-9e1455c4f14d.jpg_r_1280x840x90_dd1c2fbe.jpg",
                "https://img1.qunarzz.com/p/tts0/1702/75/9e5155697967db02.jpg_r_1280x840x90_cce97697.jpg",
                "https://img1.qunarzz.com/p/tts9/1705/9b/21f4c71d2ddf8802.jpg_r_1280x840x90_5d7719da.jpg"
            ]
        }
    },
    methods:{
        handleBannerClick(){
            this.showGallary = true
        },
        handleGalaryClose(){
            this.showGallary = false
        }
    }
}
</script>
<style lang="stylus" scoped>
    .banner
        height 0
        width 100%
        padding-bottom 66%
        overflow hidden
        position relative
        .banner_img
            width 100%
        .banner_info
            position absolute
            display flex
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            font-size .28rem
            background-image linear-gradient(top,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .info
                flex 1
                padding 0 .2rem
            .pic
                height .32rem
                line-height .32rem
                margin-top .14rem
                padding 0 .4rem
</style>
