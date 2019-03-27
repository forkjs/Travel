<template>
  <!--Component template should contain exactly one root element.-->
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  import axios from 'axios'

  export default {
    name: "City",
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet,
    },
    data () {
      return {
        cities: {},
        hotCities: [],
        // 接受到子组件传递过来的值以属性的形式传递给另一个子组件
        letter: '',
      }
    },
    mounted () {
      this.getCityInfo()
    },
    methods: {
      getCityInfo () {
        axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc (res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities
        }
      },
      handleLetterChange (letter) {
        // console.log(letter)
        this.letter = letter
      },
    },
  }
</script>

<style scoped lang="stylus">

</style>
