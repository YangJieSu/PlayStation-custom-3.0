import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VeeValidate from 'vee-validate';
import zh_TW from 'vee-validate/dist/locale/zh_TW';

Vue.use(VueAxios, axios);
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW', zh_TW); 

Vue.component('Loading', Loading);
Vue.component('Pagination', Pagination);
Vue.component('AlertMessage', AlertMessage);
Vue.filter('currency', currencyFilter);
Vue.filter('prodCategory', prodCategory);

import App from './App.vue';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import prodCategory from './filters/prodCategory';
import Pagination from './components/Pagination.vue';
import AlertMessage from './components/AlertMessage.vue';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')