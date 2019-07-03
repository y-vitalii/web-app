const state = {
    items: []
};

const getters = {
    getCartProducts: (state, getters, rootState) => {
        // return state.items.map(({ id, quantity }) => {
        //     const product = rootState.products.all.find(product => product.id === id);
        //
        //     return {
        //         title: product.title,
        //         price: product.price,
        //         quantity
        //     }
        // })
    },
    getTotalQuantity: (state, getters) => {
        return state.items.reduce((total, product) => {
            return total + product.quantity
        }, 0);
    },
    getTotalPrice: (state, getters) => {
        return state.items.reduce((total, product) => {
            return total + product.cost * product.quantity
        }, 0);
    }
};

const actions = {
    addProductToCart: function ({commit}, product) {
        commit('pushProductToCart', product)
    },
    sendCardProducts: function () {

    }
};

const mutations = {
    pushProductToCart(state, product) {
        product.quantity = 1;
        state.items.push(product)
    },
    changeQuantity(state, payload) {
        const item = state.items[payload.index];

        if (payload.isUp) item.quantity += 1;
        else if (!payload.isUp && item.quantity !== 0) item.quantity -= 1;

        state.items.splice(payload.index, 1, item)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}