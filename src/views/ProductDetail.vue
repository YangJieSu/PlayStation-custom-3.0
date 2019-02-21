<template>
  <div class="main">
    <div class="container productDetail mb-3">
      <nav aria-label="breadcrumb ">
        <ol class="breadcrumb px-0">
          <li class="breadcrumb-item">
            <router-link to="/index">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/products">商品</router-link>
          </li>
          <li class="breadcrumb-item">{{ product.category }}</li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>

      <div class="row justify-content-center">
        <div class="col-md-8">
          <img :src="product.imageUrl" class="img-fluid" alt="image">
        </div>
        <div class="col-md-4">
          <div class="prodInfo addCart">
            <h4 class="font-weight-bold">{{ product.title }}</h4>
            <div class="d-flex justify-content-between align-items-center py-3">
              <div v-if="!product.price">{{ product.origin_price | currency }}</div>
              <del v-if="product.price" class="text-muted">
                原價{{ product.origin_price | currency }}
              </del>
              <div class="h5 text-danger mb-0" v-if="product.price">特價
                <strong>{{ product.price | currency }}</strong>
              </div>
            </div>
            <select class="form-control mb-3" v-model="buyNum">
              <option value="0" selected disabled>請選擇商品數量</option>
              <option :value="num" v-for="num in 10" :key="num">選購 {{num}} {{product.unit}}</option>
            </select>
            <div class="text-right font-weight-bold mb-1 total-price">
              小計 {{ product.price * buyNum | currency }}
            </div>
            <button
              class="btn btn-warning w-100 text-primary font-weight-bold"
              @click.prevent="addCart(product.id, product.buyNum)"
            >
              <i class="fas fa-spinner fa-spin" v-if="status.loading"></i>
              <i class="fas fa-plus" v-else></i>
              加入購物車
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8">
          <div class="prodInfo px-0">
            <h3>產品描述</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
        <div class="col-md-12">
          <h3 class="page_title">同類型遊戲</h3>
          <ProdSlider :prodCategory="product.category"></ProdSlider>
        </div>
        <div class="col-md-12">
          <div class="goBack text-right">
            <a href="#" class="btn btn-info text-white mt-2" @click.prevent="goBack">Back</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProdSlider from '../components/ProdSlider.vue';

export default {
  components: {
    ProdSlider,
  },
  data() {
    return {
      productId: '',
      buyNum: 1,
      status: {
        loading: false,
      },
    };
  },
  methods: {
    getProduct(id) {
      // 取得單一商品內容
      const vm = this;
      vm.$store.dispatch('productsModules/getProduct', id);
    },
    addCart(id, qty = 1) {
      // 加入購物車
      const vm = this;
      vm.status.loading = true;
      vm.$store.dispatch('cartModules/addCart', { id, qty })
        .then(() => { vm.status.loading = false; })
        .catch(() => { vm.status.loading = false; });
    },
    goBack() {
      this.$router.back();
    },
  },
  computed: {
    ...mapGetters('productsModules', ['product']),
  },
  created() {
    const vm = this;
    vm.productId = vm.$route.params.productId;
    vm.getProduct(vm.productId);
    document.body.scrollTop = 350;
    document.documentElement.scrollTop = 350;
  },
  watch: {
    '$route.params.productId': function route() {
      const vm = this;
      vm.productId = vm.$route.params.productId;
      vm.getProduct(vm.productId);
    },
  },
};
</script>
