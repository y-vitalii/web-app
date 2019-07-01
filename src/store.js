import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentSection: 'drinks'
    },
    mutations: {
        setActive(state, val) {
            state.currentSection = val;
        }
    },
    actions: {},
    modules: {
        products,
        cart
    }
})
