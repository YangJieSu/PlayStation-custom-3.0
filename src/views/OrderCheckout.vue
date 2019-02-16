<template>
  <div class="main">
    <loading :active.sync="isLoading">
      <img src="../assets/images/loading.gif" alt width="200">
    </loading>
    <div class="container py-5">
      <div class="form-row">
        <div class="col-md-4">
          <div class="alert alert-success alert-rounded-shadow-sm text-md-center" role="alert">
            <span>1.輸入收件人資訊</span>
            <i class="far fa-user ml-2"></i>
          </div>
        </div>
        <div class="col-md-4">
          <div
            class="alert alert-primary alert-rounded-shadow-sm text-md-center"
            :class="{ 'alert-success': order.is_paid }"
            role="alert"
          >
            <span>2.確認付款</span>
            <i class="far fa-money-bill-alt ml-2"></i>
          </div>
        </div>
        <div class="col-md-4">
          <div
            class="alert alert-secondary alert-rounded-shadow-sm text-md-center"
            :class="{ 'alert-success': order.is_paid }"
            role="alert"
          >
            <span>3.完成</span>
            <i class="fas fa-check-circle ml-2"></i>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <form class="col-md-10 col-lg-8" @submit.prevent="payOrder">
          <h3 class="text-center mb-3">
            <i class="fas fa-shopping-cart mr-2"></i>購物商品清單
          </h3>
          <div class="table-responsive">
            <table class="table table-hover">
              <thead class="table-warning">
                <tr class="text-nowrap">
                  <th>品名</th>
                  <th width="100" class="text-right">數量</th>
                  <th width="100" class="text-center">價格</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr v-for="item in order.products" :key="item.id">
                  <td class="align-middle">
                    <span
                      class="badge d-none d-md-inline-block"
                      :class="item.product.category | prodCategory"
                    >{{ item.product.category }}</span>
                    <span>{{ item.product.title }}</span>
                    <div class="text-success" v-if="item.coupon">
                      <small>已套用{{ item.coupon.title }}</small>
                    </div>
                  </td>
                  <td class="align-middle text-right">
                    <span>{{ item.qty }}/{{ item.product.unit }}</span>
                  </td>
                  <td
                    class="text-right text-nowrap align-middle"
                    v-if="item.total == item.final_total"
                  >
                    <span>{{ item.final_total | currency}}</span>
                  </td>
                  <td class="text-right text-nowrap align-middle" v-else>
                    <del class="text-muted">
                      <em>{{ item.total | currency }}</em>
                    </del>
                    <div>{{ item.final_total | currency }}</div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="text-right">總計</td>
                  <td class="text-right text-danger font-weight-bold">
                    {{ order.total | currency }}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <h3 class="text-center mb-3">
            <i class="fas fa-user-circle mr-2"></i>購買人資料
          </h3>
          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th class="table-success">Email</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th class="table-success">姓名</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th class="table-success">電話</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th class="table-success">地址</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th class="table-success">付款狀態</th>
                  <td>
                    <span v-if="!order.is_paid">尚未付款</span>
                    <span class="text-success font-weight-bold" v-else>付款完成</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            type="submit"
            class="btn btn-warning btn-block btn-lg font-weight-bold text-black"
            v-if="!order.is_paid"
          >
            <i class="fas fa-spinner fa-spin mr-1" v-if="status.loading"></i>
            <i class="fas fa-clipboard-check mr-1" v-else></i>
            確認付款
          </button>
          <router-link
            to="/products"
            class="btn btn-primary btn-block btn-lg font-weight-bold"
            v-else
          >
            <i class="fas fa-reply mr-1"></i>繼續逛逛？
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      orderId: '',
      order: {
        user: {},
      },
      status: {
        loading: false,
      },
    };
  },
  methods: {
    getOrder() {
      // 取得訂單
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/order/${vm.orderId}`;
      this.$http.get(api).then((response) => {
        vm.order = response.data.order;
      });
    },
    payOrder() {
      // 付款
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/pay/${vm.orderId}`;
      vm.status.loading = true;
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$bus.$emit('message:push', response.data.message, 'success');
          vm.getOrder();
        } else {
          vm.$bus.$emit('message:push', '付款失敗 :( ', 'danger');
        }
        vm.status.loading = false;
      });
    },
  },
  created() {
    const vm = this;
    vm.orderId = vm.$route.params.orderId;
    vm.getOrder();
  },
};
</script>
