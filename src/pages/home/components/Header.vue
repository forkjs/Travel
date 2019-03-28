<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/游玩/景点/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default {
    name: "HomeHeader",
    computed: {
      ...mapState(['city']),
      // ...mapGetters(['doubleCity'])
    }
  }
</script>

<!--scoped限制样式只对当前组件生效-->
<style lang="stylus" scoped>
  // 样式中引入样式import要加@前缀
  // 且引用的内容路径别名前要加~(如@: ~@; style: ~style)
  @import "~style/varibles.styl"
  // stylus语法不用写{}
  // 1rem = html font-size = 50px
  .header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      background #fff
      border-radius .1rem
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      color #ccc
    .header-right
      min-width 1.04rem
      padding .1rem
      float right
      text-align center
      color #fff
      .arrow-icon
        font-size .24rem
        margin-left -.04rem
</style>
