<!--Vue中使用router-link做标签跳转-->
<!--<router-link to="/list" class="home">List页面</router-link>-->

<template>
  <!--template下只能有一个根标签-->
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  export default {
    name: "Home",
    components: { HomeHeader }
  }
</script>

<style scoped>

</style>
