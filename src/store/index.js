import Vue from 'vue';
import Vuex from 'vuex';
import alertModules from './alert';
import cartModules from './cart';
import productsModules from './products';
import couponModules from './coupon';
import orderModules from './order';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
  },
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
  modules: {
    alertModules,
    cartModules,
    productsModules,
    couponModules,
    orderModules,
  },
});
