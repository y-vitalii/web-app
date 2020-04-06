const state = {
    items: [],
    promoPrice: 0,
    promocode: '',
    deliveryPrice: 50
};

const getters = {
    getTotalQuantity: (state) => {
        return state.items.reduce((total, product) => {
            return total + product.quantity
        }, 0);
    },
    getTotalPrice: (state) => {
        return state.items.reduce((total, product) => {
            return total + (product.discount_price ? product.discount_price :  product.price) * product.quantity
        }, 0);
    },
    getPromoPrice: (state) => {
        return state.promoPrice
    },
    getPromoCode: (state) => {
        return state.promocode
    },
    getDeliveryPrice: (state) => {
        return state.deliveryPrice;
    }
};

const actions = {
    addProductToCart: function ({commit}, item, quantity) {
        commit('pushProductToCart', item, quantity)
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
        state.items[index].quantity = 0;
        state.items.splice(index, 1);

        addToLocalStorage();
    },
    removeAll(state) {
        state.items = [];
        state.promocode = '';
        state.promoPrice = 0;
    },
    remove(state, index) {
        state.items[index].quantity = 1;
        state.items.splice(index, 1);

        addToLocalStorage();
    },
    setItems(state, items) {
        if (!state.items.length) state.items.push.apply(state.items, items)
    },
    setPromo(state, obj) {
        state.promoPrice = obj.val;
        state.promocode = obj.promo || '';
    },
    updateDeliveryPrice(state) {
        const total = state.items.reduce((total, product) => {
            return total + (product.discount_price ? product.discount_price : product.price) * product.quantity
        }, 0);

        if (total >= 500) state.deliveryPrice = 0;
        else if (!state.deliveryPrice) state.deliveryPrice = 50;
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