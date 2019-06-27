import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  VueAwesomeSwiper
}).$mount('#app');
