import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VeeValidate from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';

import App from './App.vue';
import router from './router';
import store from './store';
import './bus';
import currencyFilter from './filters/currency';
import prodCategory from './filters/prodCategory';
import Pagination from './components/Pagination.vue';
import AlertMessage from './components/AlertMessage.vue';

Vue.use(VueAxios, axios);
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW', zhTWValidate);

Vue.component('Loading', Loading);
Vue.component('Pagination', Pagination);
Vue.component('AlertMessage', AlertMessage);
Vue.filter('currency', currencyFilter);
Vue.filter('prodCategory', prodCategory);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
