<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>
// 【注】：事件名称(如touchstart、touchmove、touchend)不能包含大写字母

<script>
  export default {
    name: "CityAlphabet",
    props: {
      cities: Object,
    },
    data () {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated () {
      this.startY = this.$refs['A'][0].offsetTop
    },
    computed: {
      letters () {
        const letters = [];
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    methods: {
      handleLetterClick (e) {
        // console.log(e);
        // console.log(e.target.innerText)
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart () {
        this.touchStatus = true;
      },
      handleTouchMove (e) {
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79;
            const indexY = Math.floor((touchY - this.startY) / 20);
            if (indexY >= 0 && indexY < this.letters.length) {
              this.$emit('change', this.letters[indexY])
            }
          }, 16);
        }
      },
      handleTouchEnd () {
        this.touchStatus = false
      },
    },
  }
</script>

<style scoped lang="stylus">
  @import "~style/varibles.styl"
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
      text-align center
      line-height .4rem
      color $bgColor
</style>
