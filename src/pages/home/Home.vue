<!--Vue中使用router-link做标签跳转-->
<!--<router-link to="/list" class="home">List页面</router-link>-->

<template>
  <!--template下只能有一个根标签-->
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'

  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
    }
  }
</script>

<style scoped>

</style>
