import axios from 'axios';
import router from '../router';

export default {
  namespaced: true,
  strict: true,
  state: {
    order: {
      user: {},
    },
  },
  mutations: {
    ORDER(state, payload) {
      state.order = payload;
    },
  },
  actions: {
    getOrder(context, orderId) {
      // 取得訂單
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/order/${orderId}`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        if (response.data.success) {
          context.commit('ORDER', response.data.order);
          context.commit('LOADING', false, { root: true });
        } else {
          context.commit('LOADING', false, { root: true });
          context.dispatch('alertModules/updateMeaasge', {
            message: '糟糕...沒有這筆訂單喔！',
          }, { root: true });
          router.push('/products');
        }
      });
    },
    createdOrder(context, form) {
      // 建立訂單
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/order`;
      context.commit('LOADING', true, { root: true });
      axios.post(api, { data: form }).then((response) => {
        if (response.data.success) {
          context.commit('LOADING', false, { root: true });
          context.dispatch('alertModules/updateMeaasge', {
            message: `${response.data.message}`,
            status: 'success',
          }, { root: true });
          router.push(`/order_checkout/${response.data.orderId}`);
        }
      });
    },
    payOrder(context, orderId) {
      // 付款
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/pay/${orderId}`;
      context.commit('LOADING', true, { root: true });
      axios.post(api).then((response) => {
        if (response.data.success) {
          context.dispatch('alertModules/updateMeaasge', {
            message: `${response.data.message}`,
            status: 'success',
          }, { root: true });
        } else {
          context.dispatch('alertModules/updateMeaasge', {
            message: '付款失敗 :( ',
          }, { root: true });
        }
        context.commit('LOADING', false, { root: true });
        context.dispatch('getOrder', orderId);
        context.dispatch('cartModules/getCart', null, { root: true });
      });
    },
  },
  getters: {
    order(state) {
      return state.order;
    },
  },
};
