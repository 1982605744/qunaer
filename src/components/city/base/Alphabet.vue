<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetter"
      @touchstart.prevent="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: ['cities'],
    computed: {
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data () {
        return {
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    updated(){
        this.startY=this.$refs['A'][0].offsetTop
    },
    methods: {
        handleLetter (e) {
            this.$emit('change', e.target.innerText)
        },
        touchStart(){
            this.touchStatus=true
        },
        touchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer=setTimeout(()=>{
                    let startY=this.startY,
                    touchY=e.touches[0].clientY-76
                    let index=~~((touchY-startY)/20)
                    if(index>=0 && index<=this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                },16)
            }
        },
        touchEnd(){
            this.touchStatus=false
        }
    }
}
</script>

<style lang="stylus" scoped>
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 3.5rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: #00bcd4
</style>
