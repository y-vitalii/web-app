const state = {
    items: []
};

const getters = {};

const actions = {
    addProductToCart: function ({commit}, product) {
        commit('pushProductToCart', {id: product.name})
    }
};

const mutations = {
    pushProductToCart(state, {id}) {
        state.items.push({
            id,
            quantity: 1
        })
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}