<template>
  <div class="card mt-0 bg-white rounded-0 prod-card">
    <div class="product-img" style="padding-bottom: 55%; background-size: cover; background-position: center"
      :style="{backgroundImage : `url(${cardData.imageUrl})`}">
    </div>
    <div class="card-body">
      <div class="prod-info mb-3">
        <h5 class="card-title mb-3 font-weight-bold text-truncate">{{ cardData.title }}</h5>
        <p class="card-text">{{ cardData.description }}</p>
      </div>
      <div class="d-flex justify-content-between align-items-baseline">
        <div class="h5" v-if="!cardData.price">{{ cardData.origin_price | currency }}元</div>
        <del class="font-italic" v-if="cardData.price">原價 {{ cardData.origin_price | currency }}</del>
        <div class="h5 text-danger font-weight-bold" v-if="cardData.price">售價 {{ cardData.price | currency }}</div>
      </div>
    </div>
    <div class="card-footer d-flex">
      <button type="button" class="btn btn-outline-info btn-sm" @click.prevent="goSingleProduct(cardData.id)">
        <i class="fas fa-info d-none d-md-inline-block"></i>
        查看商品
      </button>
      <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click.prevent="addCart(cardData.id, 1)">
        <i class="fas fa-spinner fa-spin d-none d-md-inline-block" v-if="status.loading"></i>
        <i class="fas fa-shopping-cart d-none d-md-inline-block" v-else></i>
        加入購物車
      </button>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      status: {
        loading: false,
      },
    };
  },
  props: {
    cardData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    goSingleProduct(id) {
      const vm = this;
      console.log(id);
      vm.$router.push(`/productDetail/${id}`);
    },
    addCart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      vm.status.loading = true;
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
    },
  },
};
</script>
