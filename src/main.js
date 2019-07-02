import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import Header from './components/Header'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    // { path: '/foo', component: Header }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App),
  VueAwesomeSwiper
}).$mount('#app');
