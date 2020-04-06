import shop from '../api/shop';

const state = {
    items: {},
    categories: [],
    current: ''
};

const actions = {
    async getProducts({commit, state}) {
        let data,
            parsedProducts = {};

        if (!Object.keys(state.items).length) {
            data = await shop.getProducts();

            for (const i in data.items) {
                const item = data.items[i];

                if (!parsedProducts[item.category]) parsedProducts[item.category] = [];
                parsedProducts[item.category].push(item);
            }

            commit('setCurrent', Object.keys(parsedProducts)[0]);
            commit('setItems', parsedProducts);
            commit('setCategories', Object.keys(parsedProducts))
        } else {
            data = state;
        }

        return parsedProducts;
    },
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
    setItems(state, items) {
        Object.keys(items).forEach((key) => {
            state.items[key] = items[key];
        })
    },
    setCategories(state, list) {
        state.categories = list;
    },
    setCurrent(state, name) {
        state.current = name;
    },
    setDrinks(state, drinks) {
        state.drinks = drinks;
    },
    setDrink(state, obj) {
        state.drinks.splice(obj.index, 1, obj.item);
    },
    setFoods(state, foods) {
        state.foods = foods;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}