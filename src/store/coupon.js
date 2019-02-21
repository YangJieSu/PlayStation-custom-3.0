import axios from 'axios';

export default {
  namespaced: true,
  strict: true,
  state: {},
  mutations: {},
  actions: {
    addCoupon(context, coupon) {
      // 套用優惠券
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/coupon`;
      return new Promise((resolve, reject) => {
        axios.post(api, { data: coupon }).then((response) => {
          if (response.data.success) {
            context.dispatch('alertModules/updateMeaasge', {
              message: `${response.data.message}`,
              status: 'success',
            }, { root: true });
            context.dispatch('cartModules/getCart', null, { root: true });
            resolve();
          } else {
            context.dispatch('alertModules/updateMeaasge', {
              message: `${response.data.message}`,
            }, { root: true });
            reject();
          }
        });
      });
    },
  },
  getters: {},
};
