import axios from 'axios';

export default {
  namespaced: true,
  strict: true,
  state: {
    cart: {
      carts: [],
    },
  },
  mutations: {
    CART(state, payload) {
      state.cart = payload;
    },
  },
  actions: {
    getCart(context) {
      // 取得購物車列表
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      context.commit('LOADING', true, { root: true });
      return new Promise(() => {
        axios.get(api).then((response) => {
          if (response.data.data.carts) {
            context.commit('CART', response.data.data);
            context.commit('LOADING', false, { root: true });
          } else {
            context.dispatch('alertModules/updateMeaasge', { message: `${response.data.message}` }, { root: true });
          }
        });
      });
    },
    addCart(context, { id, qty }) {
      // 加入購物車
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      return new Promise((resolve, reject) => {
        axios.post(api, { data: cart }).then((response) => {
          if (response.data.success) {
            context.dispatch('getCart');
            context.dispatch('alertModules/updateMeaasge', {
              message: `【${response.data.data.product.title}】${response.data.data.qty} ${response.data.data.product.unit} ${response.data.message}`,
              status: 'success',
            }, { root: true });
            resolve();
          } else {
            context.dispatch('alertModules/updateMessage', {
              message: `【${response.data.data.product.title}】${response.data.data.qty} ${response.data.data.product.unit}${response.data.message}`,
            }, { root: true });
            reject();
          }
        });
      });
    },
    removeCart(context, { id, prodName }) {
      // 刪除某一筆購物車
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart/${id}`;
      return new Promise((resolve, reject) => {
        axios.delete(api).then((response) => {
          if (response.data.success) {
            context.dispatch('alertModules/updateMeaasge', {
              message: `${response.data.message}【${prodName}】`,
              status: 'success',
            }, { root: true });
            context.dispatch('getCart');
            resolve();
          } else {
            context.dispatch('alertModules/updateMeaasge', {
              message: `${response.data.message}【${prodName}】`,
            }, { root: true });
            context.dispatch('getCart');
            reject();
          }
        });
      });
    },
  },
  getters: {
    cart(state) {
      return state.cart;
    },
  },
};
