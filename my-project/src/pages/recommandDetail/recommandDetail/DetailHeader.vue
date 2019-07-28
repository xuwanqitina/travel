<template>
    <div>
        <router-link
            class="back"
            tag="div"
            to="/"
            v-show = "showBack"
            >
            <span 
                class="iconfont back_iconfont"
               
            >
            &#xe624;</span>
        </router-link>
        <div 
            class="fixed"
            v-show="!showBack"
            :style='opacityStyle'
        >景点详情
             <router-link to="/">
                <div class="iconfont back_fixed_iconfont">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name:'DetaileHeader',
        data (){
            return{
                showBack:true,
                opacityStyle:{
                    opacity:0
                }
            }
        },
        methods:{
            handleScroll(){
                console.log('122')
                const top = document.documentElement.scrollTop
                if(top > 60){
                    let opacity = top /140
                    opacity > 1 ? 1 : opacity
                    this.opacityStyle = {opacity}
                    this.showBack = false
                }else{
                    this.showBack = true
                }
                
                
            }
        },
        mounted (){
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeDestroy(){
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .back
        position absolute
        top .2rem
        left .2rem
        width .8rem
        height .8rem
        line-height .8rem
        border-radius .4rem
        background-color rgba(0,0,0,.8)
        text-align center
        .back_iconfont
            color #fff
            font-size .40rem
    .fixed
        height $headerHeight
        line-height  $headerHeight
        background-color $bgColor
        text-align center
        color #fff
        font-size .32rem
        position fixed
        top 0
        left 0
        right 0
        .back_fixed_iconfont
            width .64rem
            text-align: center
            position absolute
            font-size .4rem
            top 0
            left 0
            color #fff
</style>
