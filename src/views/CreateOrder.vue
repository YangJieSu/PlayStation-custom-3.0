<template>
  <div class="main">
    <loading :active.sync="isLoading">
      <img src="../assets/images/loading.gif" alt width="200">
    </loading>

    <!-- step -->
    <div
      class="container py-3"
      v-if="cart.carts && cart.carts.length !== 0"
      style="min-height: calc(100vh - 250px - 56px)"
    >
      <div class="row">
        <div class="col-lg-8">
          <div v-if="!createOrder">
            <h3 class="page_title">購物車內容</h3>
            <ShopCartList :cartData="cart" :status="status" @remove="removeCart"></ShopCartList>
          </div>
          <div v-else>
            <div class="form-row">
              <div class="col-md-4">
                <div
                  class="alert alert-primary alert-rounded-shadow-sm text-md-center"
                  role="alert"
                >
                  <span>1.輸入收件人資訊</span>
                  <i class="far fa-user ml-2"></i>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  class="alert alert-primary alert-rounded-shadow-sm text-md-center"
                  role="alert"
                >
                  <span>2.確認付款</span>
                  <i class="far fa-money-bill-alt ml-2"></i>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  class="alert alert-primary alert-rounded-shadow-sm text-md-center"
                  role="alert"
                >
                  <span>3.完成</span>
                  <i class="fas fa-check-circle ml-2"></i>
                </div>
              </div>
            </div>
            <h2 class="page_title">收件人資訊</h2>
            <form>
              <div class="form-froup mb-3">
                <label for="email">*Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors.has('email') }"
                  placeholder="請輸入 Email"
                  v-model.trim="form.user.email"
                  v-validate="'required|email'"
                  autofocus
                >
                <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
              </div>
              <div class="form-froup mb-3">
                <label for="name">*收件人姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control"
                  :class="{ 'is-invalid': errors.has('name') }"
                  placeholder="請輸入姓名"
                  v-model.trim="form.user.name"
                  v-validate="'required'"
                >
                <span class="text-danger" v-if="errors.has('name')">請輸入姓名</span>
              </div>
              <div class="form-froup mb-3">
                <label for="tel">*收件人電話</label>
                <input
                  type="tel"
                  id="tel"
                  name="regex"
                  class="form-control"
                  :class="{ 'is-invalid': errors.has('regex') }"
                  placeholder="請輸入電話"
                  v-model.trim="form.user.tel"
                  v-validate="{ required: true, regex: /^([0-9]+)$/ }"
                >
                <span class="text-danger" v-if="errors.has('regex')">僅接受純數字</span>
              </div>
              <div class="form-froup mb-3">
                <label for="address">*收件人地址</label>
                <input
                  type="address"
                  id="address"
                  name="address"
                  class="form-control"
                  :class="{ 'is-invalid': errors.has('address') }"
                  placeholder="請輸入地址"
                  v-model.trim="form.user.address"
                  v-validate="'required'"
                >
                <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
              </div>
              <div class="form-froup mb-3">
                <label for="message">其他需求</label>
                <textarea
                  name="message"
                  id="message"
                  class="form-control"
                  v-model.trim="form.message"
                  placeholder="如果貨品有其他需求，請在此填入"
                ></textarea>
              </div>
              <button
                type="button"
                class="btn btn-success btn-block btn-lg font-weight-bold rounded-0"
                @click.prevent="createdOrder"
              >
                <i class="fas fa-envelope mr-1"></i>
                送出訂單
              </button>
            </form>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="p-3 bg-warning text-primary">
            <div class="text-center h3 border-bottom border-primary pb-2 font-weight-bold">
              訂單摘要
            </div>
            <div class="mt-3 mb-0" v-if="cart.total > cart.final_total">
              <div class="d-flex justify-content-between align-items-center font-weight-bold mb-1">
                <span>總計</span>
                <del>{{ cart.total | currency }}</del>
              </div>
              <div class="d-flex justify-content-between align-items-center h4 font-weight-bold">
                <span>優惠價</span>
                <span class="text-danger">{{ cart.final_total | currency }}</span>
              </div>
            </div>
            <div class="mt-3 mb-0" v-else>
              <div class="d-flex justify-content-between align-items-center h4 font-weight-bold">
                <span>總計</span>
                <span class="text-danger">{{ cart.final_total | currency }}</span>
              </div>
            </div>
            <div class="form-group my-3" v-if="!createOrder">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors.has('coupontext') }"
                  v-model.trim="coupon_code"
                  id="coupontext"
                  name="coupontext"
                  placeholder="請輸入優惠碼"
                  aria-label="請輸入優惠碼"
                  v-validate="'required'"
                >
                <div class="input-group-append">
                  <button type="button" class="btn btn-primary" @click.prevent="addCoupon">
                    <i class="fas fa-spinner fa-spin" v-if="status.loading"></i>
                    套用優惠券
                  </button>
                </div>
              </div>
              <span class="text-danger" v-if="errors.has('coupontext')">請輸入優惠碼</span>
            </div>
          </div>
          <div
            class="btn btn-primary btn-lg btn-block rounded-0"
            v-if="!createOrder"
            @click="createOrder = true"
          >建立訂單</div>
          <div
            class="btn btn-primary btn-lg btn-block rounded-0"
            v-else
            @click="createOrder = false"
          >取消訂單</div>
        </div>
      </div>
    </div>

    <div
      class="container d-flex flex-column justify-content-center py-3"
      v-else
      style="min-height: calc(100vh - 250px - 56px)"
    >
      <div class="alert alert-warning text-center mt-3 mb-5 p-5">
        <p class="font-weight-bold">您好，購物車內沒有品項喲 !!</p>
      </div>
      <h2 class="page_title mb-3">繼續逛逛？</h2>
      <div class="d-flex justify-content-center pb-5">
        <router-link to="/products" class="toShopping font-weight-bold">
          前往 PlayStation Store
          <i class="fas fa-caret-right ml-1"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ShopCartList from '../components/ShopCartList.vue';

export default {
  components: {
    ShopCartList
  },
  data() {
    return {
      isLoading: false,
      status: {
        loading: false,
        loadingItem: '',
      },
      cart: {
        carts: []
      },
      createOrder: false,
      coupon_code: '',
      form: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
        },
        message: '',
      }
    };
  },
  methods: {
    getCart() {
      // 取得購物車列表
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${
        process.env.VUE_APP_CUSTOM_PATH
      }/cart`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        vm.isLoading = false;
      });
    },
    removeCart(id, prodName) {
      // 刪除某一筆購物車
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${
        process.env.VUE_APP_CUSTOM_PATH
      }/cart/${id}`;
      vm.status.loadingItem = id;
      this.$http.delete(api).then((response) => {
        vm.$bus.$emit('message:push', `${response.data.message}【${prodName}】`, 'success');
        vm.$bus.$emit("shopCart:update");
        vm.getCart();
      });
    },
    addCoupon() {
      // 套用優惠券
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${
        process.env.VUE_APP_CUSTOM_PATH
      }/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      this.$validator.validate().then((result) => {
        if (result) {
          vm.status.loading = true;
          this.$http.post(api, { data: coupon }).then((response) => {
            if (response.data.success) {
              vm.$bus.$emit('message:push', `${response.data.message}`, 'success');
            } else {
              vm.$bus.$emit('message:push', `${response.data.message}`, 'danger');
            }
            vm.coupon_code = '';
            vm.status.loading = false;
            vm.getCart();
          });
        } else {
          console.log('請輸入優惠碼');
        }
      });
    },
    createdOrder() {
      // 建立訂單
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${
        process.env.VUE_APP_CUSTOM_PATH
      }/order`;
      this.$validator.validate().then((result) => {
        if (result) {
          vm.isLoading = true;
          this.$http.post(api, { data: vm.form }).then((response) => {
            if (response.data.success) {
              vm.$bus.$emit('shopCart:update');
              vm.$router.push(`/order_checkout/${response.data.orderId}`);
            }
          });
        } else {
          vm.$bus.$emit('message:push', '噢！訂單內有欄位空白唷', 'danger');
        }
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
