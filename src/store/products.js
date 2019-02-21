import axios from 'axios';

export default {
  namespaced: true,
  strict: true,
  state: {
    products: [],
    product: {},
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    PRODUCT(state, payload) {
      state.product = payload;
    },
  },
  actions: {
    getProducts(context) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/products/all`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('PRODUCTS', response.data.products);
        context.commit('LOADING', false, { root: true });
      });
    },
    getProduct(context, id) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/product/${id}`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        context.commit('PRODUCT', response.data.product);
        context.commit('LOADING', false, { root: true });
      });
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    product(state) {
      return state.product;
    },
  },
};
