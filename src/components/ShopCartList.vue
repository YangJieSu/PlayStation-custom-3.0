<template>
  <ul class="cartList">
    <li v-for="item in cartData.carts" :key="item.id" class="d-flex py-2 align-items-center">
      <div class="cartList-img d-none d-md-inline-block">
        <img :src="item.product.imageUrl" alt class="img-fluid">
      </div>
      <div class="cartList-prod d-flex align-items-center mr-auto">
        <span
          class="badge mx-2"
          :class="item.product.category | prodCategory"
        >{{ item.product.category }}</span>
        <div>
          <router-link
            :to="`/productDetail/${ item.product.id }`"
            class="font-weight-bold"
          >{{ item.product.title }}</router-link>
        </div>
      </div>
      <span class="cartList-num mx-1">{{ item.qty }} {{ item.product.unit }}</span>
      <span
        class="cartList-price mx-1"
        v-if="item.total == item.final_total"
      >{{ item.total | currency }}</span>
      <span v-else class="cartList-price mx-1 text-danger">{{ item.final_total | currency }}</span>
      <button
        type="button"
        class="btn btn-outline-danger btn-sm ml-3"
        @click="remove(item.id, item.product.title)"
      >
        <i class="fas fa-spinner fa-spin" v-if="status.loadingItem == item.id"></i>
        <i class="far fa-trash-alt" v-else></i>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    cartData: {
      type: Object,
      default() {
        return {};
      },
    },
    status: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    remove(id, title) {
      this.$emit('remove', id, title);
    },
  },
};
</script>
