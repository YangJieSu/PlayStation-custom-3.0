<template>
  <div>
    <loading :active.sync="isLoading">
      <img src="../assets/images/loading.gif" alt width="200">
    </loading>
    <AlertMessage></AlertMessage>
    <Navbar></Navbar>
    <div class="cart" v-if="cart.carts.length !== 0">
      <div class="cart-icon" @click.prevent="showCart = !showCart">
        <i class="fas fa-shopping-cart"></i>
        <i class="fas fa-circle" v-if="cart.carts.length !== 0"></i>
      </div>
      <div class="cart-box" v-if="showCart">
        <div class="row justify-content-center bg-light border rounded">
          <div class="col-md-12">
            <!-- title -->
            <div class="d-flex justify-content-between py-2 px-0">
              <h5 class="m-0">
                <strong>購物車清單</strong>
              </h5>
              <div>
                <button type="button" class="close m-0" @click.prevent="closeCart">
                  <span>&times;</span>
                </button>
              </div>
            </div>
            <!-- table -->
            <table class="table-sm my-2">
              <tbody>
                <tr v-if="cart.carts.length == 0">購物車還沒有東西喔!</tr>
                <tr v-for="item in cart.carts" :key="item.id">
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click.prevent="removeCart(item.id, item.product.title)"
                    >
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.qty }}{{ item.product.unit }}</td>
                  <td class="text-right">{{ item.final_total | currency }}</td>
                </tr>
              </tbody>
            </table>
            <!-- button -->
            <router-link
              class="nav-item text-white"
              to="/create_order"
              v-if="cart.carts.length !== 0"
            >
              <button
                type="button"
                class="btn btn-danger btn-block w-100 mb-3"
                @click="closeCart"
              >結帳去!</button>
            </router-link>
            <button
              type="button"
              class="btn btn-danger btn-block w-100 mb-3"
              v-if="cart.carts.length == 0"
              @click.prevent="closeCart"
            >繼續購物</button>
          </div>
        </div>
      </div>
    </div>

    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default {
  data() {
    return {
      showCart: false,
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    ...mapActions('cartModules', ['getCart']),
    removeCart(id, prodName) {
      const vm = this;
      vm.$store.dispatch('cartModules/removeCart', { id, prodName });
    },
    closeCart() {
      const vm = this;
      vm.showCart = false;
    },
  },
  computed: {
    ...mapGetters('cartModules', ['cart']),
    ...mapGetters(['isLoading']),
  },
  created() {
    const vm = this;
    vm.getCart();
  },
};
</script>
