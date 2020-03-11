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
            return total + product.price * product.quantity
        }, 0);
    }
};

const actions = {
    addProductToCart: function ({commit}, item, quantity) {
        commit('pushProductToCart', item, quantity)
    },
    sendCardProducts: function () {

    }
};

const mutations = {
    pushProductToCart(state, item) {
        const index = state.items.findIndex(product => product.id === item.id);

        if (index === -1) state.items.push(item);
        else state.items.splice(index, 1, item);

        addToLocalStorage();
    },
    changeQuantity(state, payload) {
        const item = state.items[payload.index];

        if (payload.isUp) item.quantity += 1;
        else if (!payload.isUp && item.quantity !== 0) item.quantity -= 1;

        state.items.splice(payload.index, 1, item);

        addToLocalStorage();
    },
    addOne(state, id) {
        const index = state.items.findIndex(product => product.id === id),
            item = state.items[index];

        state.items[index].quantity += 1;
        state.items.splice(index, 1, item);

        addToLocalStorage();
    },
    removeOne(state, id) {
        const index = state.items.findIndex(product => product.id === id),
            item = state.items[index];

        if (state.items[index].quantity !== 1) {
            state.items[index].quantity -= 1;
            state.items.splice(index, 1, item);
        }

        addToLocalStorage();
    },
    removeByKey(state, id) {
        const index = state.items.findIndex(product => product.id === id);
        state.items[index].quantity = 1;
        state.items.splice(index, 1);

        addToLocalStorage();
    },
    removeAll(state) {
        state.items = [];
    },
    remove(state, index) {
        state.items[index].quantity = 1;
        state.items.splice(index, 1);

        addToLocalStorage();
    },
    setItems(state, items) {
        state.items.push.apply(state.items, items)
    }
};

function addToLocalStorage() {
    localStorage.setItem('after_22_cart', JSON.stringify(state.items));
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}