<template>
    <div>
        <div class="header">
            <div class="header-left">
                <span class="iconfont left_iconfont">&#xe624;</span>
            </div>
            <div class="header-input">
                <span class="iconfont">&#xe632;</span>
                内容
            </div>
            <router-link to="/city">
                <div class="header-right">{{this.city}}
                    <span class="iconfont right_iconfont">&#xe658;</span>
                </div>
            </router-link>    
            
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomePage',
  computed:{
      ...mapState(['city'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header
        display :flex
        height:.86rem
        line-height: .86rem
        background-color :$bgColor
        color:#000
        font-size :0;
        .header-left
            width :.64rem
            float :left
            .left_iconfont
                text-align :center
                font-size:.4rem
        .header-input
            flex:1
            background-color :#fff
            border-radius:.1rem
            color:#ccc
            margin-top: .12rem
            height: .62rem
            line-height .62rem
            padding-left .4rem
            
            margin-left .02rem
        .header-right
            min-width :1.04rem
            padding 0 0.1rem
            float:right
            text-align :center
            font-size .28rem
            color #fff
            .right_iconfont
                font-size .28rem
</style>
