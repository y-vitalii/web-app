import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import r from './router'
import VueI18n from 'vue-i18n'
import i from './locale'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueI18n);

const router = new VueRouter(r);
const i18n = new VueI18n(i);

new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount('#app');
