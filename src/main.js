// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 路由根据不同的网址返回不同的内容
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'swiper/dist/css/swiper.css'
import 'style/reset.css'
import 'style/border.css'
import 'style/iconfont.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper, /* { default global options } */);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //等价于router: router
  store,
  components: { App }, // 等价于components: { App: App}
  template: '<App/>' // 模板里面渲染的是App这个组件
});

// 注意在 ES2015+ 中，在对象中放一个类似 ComponentA 的变量名其实是 ComponentA: ComponentA 的缩写，
// 即这个变量名同时是：
// 用在模板中的自定义元素的名称
// 包含了这个组件选项的变量名
