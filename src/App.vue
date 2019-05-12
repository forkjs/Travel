<!--单文件组件,由三部分组成-->
<!--组件的模板-->
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--router-view显示的是当前路由地址(http://localhost:8080/#/)所对应的内容-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<!--组件的逻辑-->
<script>
  export default {
    name: 'App'
  }
</script>

<!--组件的样式-->
<style>

</style>
