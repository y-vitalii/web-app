import shop from '../api/shop';

const state = {
    drinks: [],
    foods: []
};

const getters = {

};

const actions = {
    async getDrinks({commit}) {
        commit('setDrinks', await shop.getDrinks());
    },
    async getFoods({commit}) {
        commit('setFoods', await shop.getFoods());
    }
};

const mutations = {
    setDrinks(state, drinks) {
        state.drinks = drinks;
    },
    setFoods(state, foods) {
        state.foods = foods;
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}