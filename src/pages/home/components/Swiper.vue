<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="item in swiperList"
        :key="item.id"
      >
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList: [
          {
            id: '001',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/278a88f18f1523eec8c52f650522be68.jpg_750x200_bc365244.jpg'
          },
          {
            id: '002',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/2df3ba0f23801d7ed5607f4767a18482.jpg_750x200_b4d6aa93.jpg'
          },
        ]
      }
    },
  }
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 27%
    background #eee
    .swiper-img
      width 100%
</style>
