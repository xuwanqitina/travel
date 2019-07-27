<template>
    <div>
        <div class="header">城市选择
            <router-link to="/#">
                <div class="iconfong right_iconfont">&#xe612;</div>
            </router-link>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'cityheader'
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header
        height .68rem
        line-height  .68rem
        background-color $bgColor
        text-align center
        color #fff
        font-size .32rem
        position relative
        .right_iconfont
            width .64rem
            text-align: center
            position absolute
            font-size .4rem
            top 0
            left 0
            color #fff
            


</style>
