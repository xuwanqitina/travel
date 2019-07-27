<template>
    <div>
        <ul class="list">
            <li class="item"
                v-for="item of letters"
                :key="item"
                :ref='item'
                @click="handleLetterClick"
                @touchstart="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchuend="handleTouchEnd"
            >{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'cityAlphabet',
    props:{
        cities:Object
    },
    computed:{
        letters(){
            const letters = [];
            for(let i in this.cities){
                letters.push(i);
            }
            return letters
        }
    },
    updated(){
        this.aTop = this.$refs['A'][0].offsetTop
    },
    data(){
        return{
            touchStatus:false,
            aTop:0,
            timer:null
        }
    },
    methods:{
        handleLetterClick(e){
            this.$emit('change' , e.target.innerHTML)
        },
        handleTouchStart(){
            this.touchStatus = true
        },
        handleTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const touchTop = e.touches[0].clientY - 80;
                    const index = Math.floor((touchTop - this.aTop)/20);
                    if(index >=0 && index < this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                },16)
                
            }
        },
        handleTouchEnd(){
            this.touchStatus = flase
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center 
        position absolute 
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            line-height: .4rem
            text-align: center
            color: $bgColor   

</style>
