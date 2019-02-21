import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '*',
      redirect: '/index',
    },
    {
      path: '/',
      name: 'custom',
      redirect: '/index',
      component: () => import('./components/Home.vue'),
      children: [
        {
          path: 'index',
          name: 'Index',
          component: () => import('./views/Index.vue'),
        },
        {
          path: 'gamehost',
          // name: 'Gamehost',
          component: () => import('./components/Gamehost.vue'),
          children: [
            {
              path: '/',
              name: '主機介紹',
              component: () => import('./views/GamehostMenu.vue'),
            },
            {
              path: 'switch',
              name: '主機介紹-Switch',
              component: () => import('./views/Switch.vue'),
            },
            {
              path: 'ps4',
              name: '主機介紹-PS4',
              component: () => import('./views/Ps4.vue'),
            },
            {
              path: 'n3ds',
              name: '主機介紹-N3DS',
              component: () => import('./views/N3ds.vue'),
            },
          ],
        },
        {
          path: 'products',
          name: 'AllProducts',
          component: () => import('./views/AllProducts.vue'),
        },
        {
          path: 'productDetail/:productId',
          name: 'ProductDetail',
          component: () => import('./views/ProductDetail.vue'),
        },
        {
          path: 'create_order',
          name: 'CreateOrder',
          component: () => import('./views/CreateOrder.vue'),
        },
        {
          path: 'order_checkout/:orderId',
          name: 'OrderCheckout',
          component: () => import('./views/OrderCheckout.vue'),
        },
      ],
    },
  ],
});
