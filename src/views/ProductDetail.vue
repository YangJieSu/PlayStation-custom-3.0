<template>
  <div class="main">
    <loading :active.sync="isLoading">
      <img src="../assets/images/loading.gif" alt="" width="200">
    </loading>

    <div class="container productDetail mb-3">
      <nav aria-label="breadcrumb ">
        <ol class="breadcrumb px-0">
          <li class="breadcrumb-item"><router-link to="/index">首頁</router-link></li>
          <li class="breadcrumb-item"><router-link to="/products">商品</router-link></li>
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
              <del v-if="product.price" class="text-muted">原價{{ product.origin_price | currency }}</del>
              <div class="h5 text-danger mb-0" v-if="product.price">特價<strong>{{ product.price | currency }}</strong></div>
            </div>
            <select class="form-control mb-3" v-model="product.buyNum">
              <option value="0" selected disabled>請選擇商品數量</option>
              <option :value="num" v-for="num in 10" :key="num">選購 {{num}} {{product.unit}}</option>
            </select>
            <div class="text-right font-weight-bold mb-1 total-price">
              小計 {{ product.price * product.buyNum | currency }}
            </div>
            <button class="btn btn-warning w-100 text-primary font-weight-bold" @click.prevent="addCart(product.id, product.buyNum)">
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
            <p>
              {{ product.description }}
            </p>
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
import ProdSlider from '../components/ProdSlider.vue';

export default {
  components: {
    ProdSlider,
  },
  data() {
    return {
      isLoading: false,
      productId: '',
      product: {},
      status: {
        loading: false,
      },
    };
  },
  methods: {
    getProduct() {
      // 取得單一商品內容
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/product/${vm.productId}`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        vm.product = response.data.product;
        vm.$set(vm.product, 'buyNum', 1);
        vm.isLoading = false;
      });
    },
    addCart(id, qty = 1) {
      // 加入購物車
      const vm = this;
      if (qty == 0) {
        alert('請選擇商品數量');
      } else {
        vm.status.loading = true;
        const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
        const cart = {
          product_id: id,
          qty,
        };
        this.$http.post(api, { data: cart }).then((response) => {
          console.log(response.data);
          if (response.data.success) {
            vm.$bus.$emit('shopCart:update');
            vm.$bus.$emit('message:push', `【${response.data.data.product.title}】${response.data.data.qty} ${response.data.data.product.unit} ${response.data.message}`, 'success');
          }
          vm.status.loading = false;
        });
      }
    },
    goBack() {
      this.$router.back();
    },
  },
  created() {
    this.productId = this.$route.params.productId;
    this.getProduct();
    document.body.scrollTop = 350;
    document.documentElement.scrollTop = 350;
  },
};
</script>
