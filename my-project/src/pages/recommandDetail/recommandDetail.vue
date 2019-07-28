<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="container"></div>
    </div>
</template>
<script>
import DetailBanner from './recommandDetail/DetailBanner'
import DetailHeader from './recommandDetail/DetailHeader'
export default {
    name:'recommandDetail',
    components:{
        DetailBanner,
        DetailHeader
    }
}
</script>
<style lang="stylus" scoped>
    .container
        height 50rem
</style>
