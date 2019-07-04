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
            debugger
            return total + product.cost * product.quantity
        }, 0);
    }
};

const actions = {
    addProductToCart: function ({commit}, item) {
        commit('pushProductToCart', item)
    },
    sendCardProducts: function () {

    }
};

const mutations = {
    pushProductToCart(state, item) {
        // if (!item.isAdded) {
        //     item.isAdded = true;
        //     item.quantity = 1;
        //
        //     state.items.push(item)
        // } else {
        // debugger
        const index = state.items.findIndex(product => product.key === item.key);

        if (index === -1) {
            item.quantity = 1;
            state.items.push(item);
        } else state.items.splice(index, 1);
        // debugger
        // item.isAdded = false;
        // state.items.splice(index, 1)
        // }
    },
    changeQuantity(state, payload) {
        const item = state.items[payload.index];

        if (payload.isUp) item.quantity += 1;
        else if (!payload.isUp && item.quantity !== 0) item.quantity -= 1;

        state.items.splice(payload.index, 1, item)
    },
    remove(state, index) {
        state.items.splice(index, 1);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}