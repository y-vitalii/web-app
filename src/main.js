import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const r = new VueRouter(router);

new Vue({
  router: r,
  store,
  render: h => h(App),
  VueAwesomeSwiper
}).$mount('#app');
