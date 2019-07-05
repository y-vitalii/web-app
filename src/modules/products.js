import shop from '../api/shop';

const state = {
    drinks: [],
    foods: []
};

const getters = {};

const actions = {
    async getDrinks({commit, state}) {
        let data;

        if (!state.drinks.length) {
            data = await shop.getDrinks();
            commit('setDrinks', data);
        } else {
            data = state.drinks;
        }

        return data;
    },
    async getFoods({commit, state}) {
        let data;

        if (!state.foods.length) {
            data = await shop.getFoods();
            commit('setFoods', data);
        } else {
            data = state.foods;
        }

        return data;
    }
};

const mutations = {
    setDrinks(state, drinks) {
        state.drinks = drinks;
    },
    setDrink(state, obj) {
        debugger
        state.drinks.splice(obj.index, 1, obj.item);
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